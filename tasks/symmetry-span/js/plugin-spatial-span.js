var jsPsychSpatialSpan = (function (jspsych) {
  'use strict';

  const info = {
    name: 'spatial-span',
    description: '',
    parameters: {
      grid_size: {
        type: jspsych.ParameterType.INT,
        default_value: 4,
        description: 'size of grid for stimuli.'
      },
      trial_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      size_cells: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Trial duration',
        default: 70,
        description: 'How long to show the trial.'
      },
      selected_box: {
        type: jspsych.ParameterType.INT,
        default: undefined,
        description: "which box should be selected for this trial"
      },
      display_red_box: {
        type: jspsych.ParameterType.BOOL,
        default: true,
        description: "should a rd box be marked"
      }
    }
  }

  /*
  * Modified by Mingyu Song, based on github.com/mahiluthra/working_memory_tests
  */
  class SpatialSpanPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // making matrix:
      var grid = trial.grid_size;

      var matrix = [];
      for (var i = 0; i < grid; i++) {
        m1 = i;
        for (var h = 0; h < grid; h++) {
          m2 = h;
          matrix.push([m1, m2])
        }
      };

      var red_box = trial.selected_box
      var paper_size = grid * trial.size_cells;

      display_element.innerHTML = '<div id="jspsych-html-button-response-btngroup" style= "position: relative; width:' + paper_size + 'px; height:' + paper_size + 'px"></div>';
      var paper = display_element.querySelector("#jspsych-html-button-response-btngroup");

      for (var i = 0; i < matrix.length; i++) {
        paper.innerHTML += '<div class="jspsych-grid" style="position: absolute; top:' + matrix[i][0] * (trial.size_cells - 3) + 'px; left:' + matrix[i][1] * (trial.size_cells - 3) + 'px";><div class="whiteBox" /div></div>';
      }

      if (trial.display_red_box) {
        paper.innerHTML += '<div class="jspsych-grid" style="position: absolute; top:' + red_box[0] * (trial.size_cells - 3) + 'px; left:' + red_box[1] * (trial.size_cells - 3) + 'px";><div class="redBox" /div></div>';
      }

      var start_time = Date.now();

      if (trial.trial_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function () {
          clear_display();
          end_trial();
        }, trial.trial_duration);
      }


      function clear_display() {
        display_element.innerHTML = '';
      }


      function end_trial() {

        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();

        // gather the data to store for the trial
        var trial_data = {
          selected_square: red_box
        };

        // move on to the next trial
        jsPsych.finishTrial(trial_data);
      }
    };
  }
  SpatialSpanPlugin.info = info;

  return SpatialSpanPlugin;

})(jsPsychModule);
