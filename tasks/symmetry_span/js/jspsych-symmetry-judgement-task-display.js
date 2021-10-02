/*
 * Modified by Mingyu Song, based on github.com/mahiluthra/working_memory_tests/jspsych-6.0.4/plugins/jspsych-symmetry-judgement-task.js
 */

jsPsych.plugins["symmetry-judgement-task-display"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'symmetry-judgement-task-display',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: "",
        description: 'The HTML string to be displayed'
      },
      size: {
        type: jsPsych.plugins.parameterType.INT, // INT, IMAGE, KEYCODE, STRING, FUNCTION, FLOAT
        default_value: undefined
      },
      number_darkened: {
        type: jsPsych.plugins.parameterType.INT,
        default_value: undefined
      },
      proportion: {
        type: jsPsych.plugins.parameterType.FLOAT,
        default: 0.5
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      size_cells: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Size cells',
        default: 50,
        description: 'Size of a cell in the grid.'
      },
      black_boxes: {
        type: jsPsych.plugins.parameterType.ARRAY,
        pretty_name: 'Black boxes',
        default: null,
        description: 'Location of black boxes in the grid.'
      },
      stimulus_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stimulus name',
        default: null,
        description: 'Stimulus image filename.'
      },
      stimulus_symmetry: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Stimulus symmetry',
        default: null,
        description: 'Whether the stimulus image is symmetric or not.'
      }
    }
  }

  plugin.trial = function (display_element, trial) {

    // making half of matrix:
    var rows = trial.size;
    var columns = trial.size / 2;
    var matrix = [];
    for (var i = 0; i < rows; i++) {
      m1 = i;
      for (var h = 0; h < columns; h++) {
        m2 = h;
        matrix.push([m1, m2])
      }
    };

    if (trial.black_boxes !== null) {   // This code uses the symmetry judgement stimuli from Engle lab version
      var blackBoxesFinal = trial.black_boxes
    }

    else {  // The following code makes random symmetry judgement stimuli

      // assigning number for black boxes randomly in half of matrix:
      blackBoxNumber = jsPsych.randomization.sampleWithoutReplacement(trial.number_darkened, 1)
      blackBoxes = (jsPsych.randomization.sampleWithoutReplacement(matrix, blackBoxNumber))

      // creating identical of matrix, but with black boxes removed:
      for (i = 0; i < blackBoxNumber; i++) {
        h = blackBoxes[i];
        id = matrix.indexOf(h);
        matrix.splice(id, 1);
      }

      // creating symmetric boxes:
      blackBoxesSymmetric = []
      for (i = 0; i < blackBoxNumber; i++) {
        h = 7 - blackBoxes[i][1]
        blackBoxesSymmetric.push([blackBoxes[i][0], h])
      }

      // p of being symmetric:
      var pSymmetric = jsPsych.randomization.sampleWithReplacement([0, 1], 1, [trial.proportion, 1 - trial.proportion])[0]


      //if not symmetric, change two boxes:
      if (pSymmetric == 1) {
        numberBoxesDifferent = jsPsych.randomization.sampleWithoutReplacement([3, 4], 1)[0];
        var boxes = jsPsych.randomization.sampleWithoutReplacement(blackBoxes, (blackBoxNumber - numberBoxesDifferent));
        var boxesAdd = jsPsych.randomization.sampleWithoutReplacement(matrix, numberBoxesDifferent);
        blackBoxes = []
        blackBoxes = boxes.concat(boxesAdd)
      }

      var blackBoxesFinal = blackBoxes.concat(blackBoxesSymmetric)

    }

    var columns = trial.size;

    var matrix = [];
    for (var i = 0; i < rows; i++) {
      m1 = i;
      for (var h = 0; h < columns; h++) {
        m2 = h;
        matrix.push([m1, m2])
      }
    };

    paper_size = 4 * 2 * trial.size_cells;

    display_element.innerHTML = '<div id="jspsych-visual-search-circle-container" style= "position: relative; width:' + paper_size + 'px; height:' + paper_size + 'px"></div>';
    var paper = display_element.querySelector("#jspsych-visual-search-circle-container");

    for (i = 0; i < matrix.length; i++) {
      paper.innerHTML += '<img src="./img/whitebox.png" style="position: absolute; top:' + matrix[i][0] * (trial.size_cells - 2) + 'px; left:' + matrix[i][1] * (trial.size_cells - 2) + 'px; width:' + trial.size_cells + 'px; height:' + trial.size_cells + 'px;"></img>';
    }

    for (i = 0; i < blackBoxesFinal.length; i++) {
      paper.innerHTML += '<img src="./img/blackbox.png" style="position: absolute; top:' + blackBoxesFinal[i][0] * (trial.size_cells - 2) + 'px; left:' + blackBoxesFinal[i][1] * (trial.size_cells - 2) + 'px; width:' + trial.size_cells + 'px; height:' + trial.size_cells + 'px;"></img>';
    }

    var start_time = Date.now();

    // add event listeners to mouse click
    document.body.addEventListener('mousedown', after_response, true);

    // store data
    var data = {
      stimulus_name: null,
      stimulus_symmetry: null,
      rt: null,
    };

    function after_response() {
      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      data.rt = rt;

      clear_display();
      end_trial();
    };

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
      // remove event listeners to mouse click
      document.body.removeEventListener('mousedown', after_response, true);

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // record stimulus symmetry
      if (trial.black_boxes !== null) {
        data.stimulus_symmetry = trial.stimulus_symmetry;
      } else {
        data.stimulus_symmetry = pSymmetric == 1;
      }

      // gather the data to store for the trial
      var trial_data = {
        stimulus_name: trial.stimulus_name,
        stimulus_symmetry: data.stimulus_symmetry,
        rt: data.rt,
      };

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

  };

  return plugin;
})();
