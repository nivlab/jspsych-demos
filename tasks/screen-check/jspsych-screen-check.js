/**
 * jspsych-screen-check
 * Sam Zorowitz
 *
 * plugin for ensuring a participant's viewport meets minimum size requirements
 *
 **/

jsPsych.plugins["screen-check"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'screen-check',
    description: '',
    parameters: {
      min_width: {
        type: jsPsych.plugins.parameterType.INT,
        default: null,
        description: 'How long to show trial before it ends.'
      },
      min_height: {
        type: jsPsych.plugins.parameterType.INT,
        default: null,
        description: 'How long to show trial before it ends.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // store screen information
    var info = {
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
        '<p>The minimum width is '+info.mw+'px. Your current width is '+info.w+'px.</p>'+
        '<p>The minimum height is '+info.mh+'px. Your current height is '+info.h+'px.</p>' +
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
        min_width: info.mw,
        min_height: info.mh,
        inner_width: info.w,
        inner_height: info.h
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    };

    // function to evalute viewport size
    var evalute_viewport_size = function() {

      // update info
      info.w = window.innerWidth;
      info.h = window.innerHeight;

      // evaluate viewport size
      if (info.w >= info.mw && info.h >= info.mh) {
        end_trial();
      } else {
        report_viewport_size();
      }

    }

    // initial validation
    evalute_viewport_size();

    // initialize event listener
    window.addEventListener('resize', evalute_viewport_size);

  };

  return plugin;
})();
