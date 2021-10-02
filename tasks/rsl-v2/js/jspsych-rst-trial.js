/**
 * jspsych-rst-trial
 * Sam Zorowitz
 *
 * plugin for running one trial of the risk sensitivity task
 *
 **/

jsPsych.plugins["rst-trial"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'rst-trial',
    description: '',
    parameters: {
      beach_left: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        description: 'The HTML string to be displayed'
      },
      beach_right: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        description: 'The HTML string to be displayed'
      },
      outcome_left: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus',
        description: 'The HTML string to be displayed'
      },
      outcome_right: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus',
        description: 'The HTML string to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: [37,39],
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      choice_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 2000,
        description: 'How long to show feedback before it ends.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

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
      background-color: #fefdfd;
    }
    </style>`;

    // Add task container.
    new_html += '<div class="fishing-wrap">';

    // Begin beach grid.
    new_html += '<div class="beach-grid">';

    // Begin beach (left).
    new_html += `<div class="beach-container" id="beach-left" side="left">`;

    // Add landscape (left).
    new_html += '<div class="sky"></div>';
    new_html += '<div class="sand"></div>';
    new_html += `<div class="wet-sand" context="${trial.beach_left}"></div>`;
    new_html += `<div class="sea" context="${trial.beach_left}">`;
    new_html += `<div class="seafoam" context="${trial.beach_left}"></div>`;
    new_html += '</div>';
    new_html += '<div class="sand-front"></div>';
    new_html += `<div class="cloud" context="${trial.beach_left}" pattern="1"></div>`;
    new_html += `<div class="cloud" context="${trial.beach_left}" pattern="2"></div>`;
    new_html += `<div class="cloud" context="${trial.beach_left}" pattern="3"></div>`;
    new_html += `<div class="shadow" side="left" context="${trial.beach_left}"></div>`;

    // Add context setters (left).
    new_html += `<div class="surfboard" side="left" context="${trial.beach_left}"></div>`;
    new_html += `<div class="decal" side="left" context="${trial.beach_left}"></div>`;
    new_html += `<div class="closed-sign" context="${trial.beach_left}">`;
    new_html += '<div class="closed-symbol"></div>';
    new_html += '</div>';

    // Add feedback (left).
    new_html += '<div class="fish-container" id="fish-left">';
    new_html += `<div class="fish" pattern="1" outcome="${trial.outcome_left}"></div>`;
    new_html += `<div class="fish" pattern="2" outcome="${trial.outcome_left}"></div>`;
    new_html += `<div class="fish" pattern="3" outcome="${trial.outcome_left}"></div>`;
    new_html += '</div>';

    // End beach (left).
    new_html += '</div>';

    // Add beach (right).
    new_html += `<div class="beach-container" id="beach-right" side="right">`;

    // Add landscape (right).
    new_html += '<div class="sky"></div>';
    new_html += '<div class="sand"></div>';
    new_html += `<div class="wet-sand" context="${trial.beach_right}"></div>`;
    new_html += `<div class="sea" context="${trial.beach_right}">`;
    new_html += `<div class="seafoam" context="${trial.beach_right}"></div>`;
    new_html += '</div>';
    new_html += '<div class="sand-front"></div>';
    new_html += `<div class="cloud" context="${trial.beach_right}" pattern="1"></div>`;
    new_html += `<div class="cloud" context="${trial.beach_right}" pattern="2"></div>`;
    new_html += `<div class="cloud" context="${trial.beach_right}" pattern="3"></div>`;
    new_html += `<div class="shadow" side="right" context="${trial.beach_right}"></div>`;

    // Add context setters (right).
    new_html += `<div class="surfboard" side="right" context="${trial.beach_right}"></div>`;
    new_html += `<div class="decal" side="right" context="${trial.beach_right}"></div>`;
    new_html += `<div class="closed-sign" context="${trial.beach_right}">`;
    new_html += '<div class="closed-symbol"></div>';
    new_html += '</div>';

    // Add feedback (right).
    new_html += '<div class="fish-container" id="fish-right">';
    new_html += `<div class="fish" pattern="1" outcome="${trial.outcome_right}"></div>`;
    new_html += `<div class="fish" pattern="2" outcome="${trial.outcome_right}"></div>`;
    new_html += `<div class="fish" pattern="3" outcome="${trial.outcome_right}"></div>`;
    new_html += '</div>';

    // End beach (right).
    new_html += '</div>';

    // End grid.
    new_html += '</div>';

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
      key: null
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // record responses
      response.rt = info.rt;
      response.key = trial.choices.indexOf(info.key);

      // Update screen.
      if (response.key == 0) {
        trial.outcome = trial.outcome_left;
        display_element.querySelector('#beach-right').setAttribute('context', 'closed');
        if (trial.outcome_left >= 0) {
          display_element.querySelector('#fish-left').setAttribute('context', 'feedback');
        }
      } else {
        trial.outcome = trial.outcome_right;
        display_element.querySelector('#beach-left').setAttribute('context', 'closed');
        if (trial.outcome_right >= 0) {
          display_element.querySelector('#fish-right').setAttribute('context', 'feedback');
        }
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
        "beach_left": trial.beach_left,
        "beach_right": trial.beach_right,
        "outcome_left": trial.outcome_left,
        "outcome_right": trial.outcome_right,
        "key": response.key,
        "rt": response.rt,
        "outcome": trial.outcome
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    };

    // Start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
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

  return plugin;
})();
