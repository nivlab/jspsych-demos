/**
* jspsych-dsst
* Sam Zorowitz
*
* plugin for running one trial of the digit symbol matching task
*
**/

jsPsych.plugins["dsst"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'dsst',
    description: '',
    parameters: {
      stimuli: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        array: true,
        pretty_name: 'Stimuli',
        description: 'The paths of the image files to be displayed.'
      },
      target: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Target',
        description: 'The index of the target image to be matched.'
      },
      valid_responses: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Valid responses',
        description: 'The key the subject is allowed to press to respond to the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 150,
        description: 'How long to show feedback before it ends.'
      },
      iti_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'ITI duration',
        default: 150,
        description: 'How long to hide stimuli before trial starts.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // ---------------------------------- //
    // Section 1: Define HTML             //
    // ---------------------------------- //

    // Define HTML
    var new_html = '';

    // Insert CSS
    new_html += `<style>
    .dsst-target-grid {
      animation: appear ${trial.iti_duration / 1000}s;
    }
    </style>`;

    // Draw container.
    new_html += '<div class="dsst-container">';

    // Draw stimulus grid.
    new_html += '<div class="dsst-stimulus-grid">';
    trial.stimuli.forEach((j, i) => {
      new_html += '<div class="dsst-stimulus"><img src="' + j + '"></img></div>';
      new_html += '<div class="dsst-stimulus"><p>' + (i+1) + '</p></div>';
    });
    new_html += '</div>';

    // Draw target grid.
    new_html += '<div class="dsst-target-grid">';
    new_html += '<div class="dsst-stimulus"><img src="' + trial.stimuli[trial.target] + '"></img></div>';
    new_html += '<div class="dsst-stimulus"><p id="target"></p></div>';
    new_html += '</div>';

    // Close container.
    new_html += '</div>';

    // Draw stimuli to screen.
    display_element.innerHTML = new_html;

    // ---------------------------------- //
    // Section 2: Response handling       //
    // ---------------------------------- //

    // confirm screen resolution
    const screen_resolution = [window.innerWidth, window.innerHeight];
    if (screen_resolution[0] < 360 || screen_resolution[1] < 360) {
      var minimum_resolution = 0;
    } else {
      var minimum_resolution = 1;
    }

    // store response
    var response = {
      rt: null,
      key: null,
    };

    // function to handle correct responses by the subject
    var after_response = function(info) {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // record response
      response.rt = info.rt;
      response.key = info.key;

      // present feedback
      display_element.querySelector('#target').innerHTML = response.key;

      // Pause for animation (2s).
      setTimeout(function() { end_trial(); }, trial.feedback_duration);

    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        stimuli: trial.stimuli,
        target: trial.target,
        key: response.key,
        rt: response.rt,
        screen_resolution: screen_resolution,
        minimum_resolution: minimum_resolution
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // start the response listener
    var keyboardListener = '';
    setTimeout(function() {
      keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: [trial.valid_responses],
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }, trial.iti_duration);

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration + trial.iti_duration);
    }

  };

  return plugin;
})();
