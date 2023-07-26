var jsPsychThreeArmTrial = (function (jspsych) {
  'use strict';

  const info = {
    name: 'three-arm-trial',
    description: '',
    parameters: {
      contexts: {
        type: jspsych.ParameterType.HTML_STRING,
        array: true,
        pretty_name: 'Contexts',
        description: 'Context marker in order (left, top, right).'
      },
      outcomes: {
        type: jspsych.ParameterType.INT,
        array: true,
        pretty_name: 'Outcomes',
        description: 'Context outcome if chosen (left, top, right).'
      },
      valid_responses: {
        type: jspsych.ParameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: ['arrowleft', 'arrowup', 'arrowright'],
        description: 'Keys corresponding to each context (left, top, right).'
      },
      choice_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      feedback_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Trial duration',
        default: 1500,
        description: 'How long to show feedback before it ends.'
      }
    }
  }

  /**
  * jspsych-three-arm-trial
  * Sam Zorowitz
  *
  * plugin for running one trial of the fishing 3-arm bandit task
  *
  **/
  class ThreeArmTrialPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // ---------------------------------- //
      // Section 1: Define HTML             //
      // ---------------------------------- //

      // Define HTML.
      var new_html = '';

      // Insert CSS.
      new_html += `<style>
      body {
        height: 100vh;
        max-height: 100vh;
        overflow: hidden;
        position: fixed;
        background-color: #fdfdfd;
      }
      </style>`;

      // Add task container.
      new_html += '<div class="fishing-wrap">';
      const sides = ['left','top','right'];

      // Iteratively draw contexts.
      for (var i = 0; i < 3; i++) {

        // Open beach container.
        new_html += `<div class="beach-container" id="beach-${sides[i]}" side=${sides[i]}>`;

        // Add landscape.
        new_html += '<div class="sky"></div>';
        new_html += '<div class="sand"></div>';
        new_html += `<div class="wet-sand" context="${trial.contexts[i]}"></div>`;
        new_html += `<div class="sea" context="${trial.contexts[i]}">`;
        new_html += `<div class="seafoam" context="${trial.contexts[i]}"></div>`;
        new_html += '</div>';
        new_html += '<div class="sand-front"></div>';
        new_html += `<div class="cloud" context="${trial.contexts[i]}" pattern="1"></div>`;
        new_html += `<div class="cloud" context="${trial.contexts[i]}" pattern="2"></div>`;
        new_html += `<div class="cloud" context="${trial.contexts[i]}" pattern="3"></div>`;

        // Add context setters.
        new_html += `<div class="shadow" side="${sides[i]}"></div>`;
        new_html += `<div class="surfboard" side="${sides[i]}" context="${trial.contexts[i]}"></div>`;
        new_html += `<div class="decal" side="${sides[i]}" context="${trial.contexts[i]}"></div>`;
        new_html += '</div>';

        // End beach.
        new_html += '</div>';

      }

      // Iteratively draw feedback.
      for (var i = 0; i < 3; i++) {

        // Add feedback.
        new_html += `<div class="fish-container" id="fish-${sides[i]}">`;
        new_html += `<div class="fish" pattern="1" outcome="${trial.outcomes[i]}"></div>`;
        new_html += `<div class="fish" pattern="3" outcome="${trial.outcomes[i]}"></div>`;
        new_html += '</div>';

      }

      // Close container.
      new_html += '</div>';

      // Display HTML.
      display_element.innerHTML = new_html;

      // ---------------------------------- //
      // Section 2: jsPsych Functions       //
      // ---------------------------------- //

      // Preallocate space
      var response = {
        rt: null,
        key: null,
        choice: null
      };

      // function to handle responses by the subject
      var after_response = function(info) {

        // Kill all setTimeout handlers.
        jsPsych.pluginAPI.clearAllTimeouts();
        jsPsych.pluginAPI.cancelAllKeyboardResponses();

        // only record the first response
        if (response.key == null) {
          response.rt = info.rt;
          response.key = info.key;
          response.choice = trial.valid_responses.indexOf(info.key);
        }

        // Update screen.
        if (response.choice == 0) {
          trial.outcome = trial.outcomes[0];
          display_element.querySelector('#fish-left').setAttribute('context', 'feedback');
        } else if (response.choice == 1) {
          trial.outcome = trial.outcomes[1];
          display_element.querySelector('#fish-top').setAttribute('context', 'feedback');
        } else {
          trial.outcome = trial.outcomes[2];
          display_element.querySelector('#fish-right').setAttribute('context', 'feedback');
        }

        jsPsych.pluginAPI.setTimeout(function() {
          end_trial();
        }, trial.feedback_duration);

      };

      // function to handle missed responses
      var missed_response = function() {

        // Kill all setTimeout handlers.
        jsPsych.pluginAPI.clearAllTimeouts();
        jsPsych.pluginAPI.cancelAllKeyboardResponses();

        // Display warning message.
        const msg = '<p style="font-size: 20px; line-height: 1.5em">You did not respond within the allotted time. Please pay more attention on the next trial.<br><br><b>Warning:</b> If you miss too many trials, we may end the exepriment early and reject your work.';

        display_element.innerHTML = msg;

        jsPsych.pluginAPI.setTimeout(function() {
          end_trial();
        }, 5000);

      }

      // function to end trial when it is time
      var end_trial = function() {

        // Kill all setTimeout handlers.
        jsPsych.pluginAPI.clearAllTimeouts();
        jsPsych.pluginAPI.cancelAllKeyboardResponses();

        // gather the data to store for the trial
        var trial_data = {
          "contexts": trial.contexts,
          "outcomes": trial.outcomes,
          "key": response.key,
          "choice": response.choice,
          "rt": response.rt,
          "outcome": trial.outcome
        };

        // clear the display
        display_element.innerHTML = '';

        // move on to the next trial
        jsPsych.finishTrial(trial_data);

      };

      // Start the response listener
      if (trial.valid_responses != 'NO_KEYS') {
        var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: after_response,
          valid_responses: trial.valid_responses,
          rt_method: 'performance',
          persist: false,
          allow_held_key: false
        });
      }

      // End trial if no response.
      if (trial.choice_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function() {
          missed_response();
        }, trial.choice_duration);
      }

    };
  }
  ThreeArmTrialPlugin.info = info;

  return ThreeArmTrialPlugin;

})(jsPsychModule);
