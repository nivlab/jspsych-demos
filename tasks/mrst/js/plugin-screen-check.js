var jsPsychScreenCheck = (function (jspsych) {
  'use strict';

  const info = {
    name: 'screen-check',
    parameters: {
      min_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Minmum width',
        default: null,
        description: 'The minimum width (in pixels) of browser window for the experiment to continue.'
      },
      min_height: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Minmum height',
        default: null,
        description: 'The minimum height (in pixels) of browser window for the experiment to continue.'
      },
    }
  };

  /**
  * jspsych-screen-check
  * Sam Zorowitz
  *
  * plugin for ensuring a participant's viewport meets minimum size requirements
  *
  **/
  class ScreenCheckPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // store screen information
      var screen_info = {
        mw: trial.min_width !== null ? trial.min_width : 0,
        mh: trial.min_height !== null ? trial.min_height : 0,
        w: window.innerWidth,
        h: window.innerHeight
      }

      // function to report current viewport size
      var report_viewport_size = function() {

        // define message for participants
        var msg = '<p>Your browser window is too small to complete this experiment. '+
        'Please maximize the size of your browser window. If your browser window is already maximized, '+
        'you will not be able to complete this experiment.</p>'+
        '<p>The minimum width is '+screen_info.mw+'px. Your current width is '+screen_info.w+'px.</p>'+
        '<p>The minimum height is '+screen_info.mh+'px. Your current height is '+screen_info.h+'px.</p>' +
        '<p>If you are unable to meet these requirements, please return the experiment.</p>';

        // draw
        display_element.innerHTML = msg;

      }

      // function to end trial when it is time
      var end_trial = function() {

        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();
        window.removeEventListener('resize', evalute_viewport_size);

        // gather the data to store for the trial
        var trial_data = {
          min_width: screen_info.mw,
          min_height: screen_info.mh,
          inner_width: screen_info.w,
          inner_height: screen_info.h
        };

        // clear the display
        display_element.innerHTML = '';

        // move on to the next trial
        jsPsych.finishTrial(trial_data);

      };

      // function to evalute viewport size
      var evalute_viewport_size = function() {

        // update info
        screen_info.w = window.innerWidth;
        screen_info.h = window.innerHeight;

        // evaluate viewport size
        if (screen_info.w >= screen_info.mw && screen_info.h >= screen_info.mh) {
          end_trial();
        } else {
          report_viewport_size();
        }

      }

      // initial validation
      evalute_viewport_size();

      // initialize event listener
      window.addEventListener('resize', evalute_viewport_size);

    }
  }
  ScreenCheckPlugin.info = info;

  return ScreenCheckPlugin;

})(jsPsychModule);
