/**
* jspsych-dsct
* Sam Zorowitz
*
* plugin for running one trial of the digit symbol coding task
*
**/

jsPsych.plugins["dsct"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'dsct',
    description: '',
    parameters: {
      stimuli: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        array: true,
        pretty_name: 'Stimuli',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      target: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        array: true,
        pretty_name: 'Prompt',
        description: 'Any content here will be displayed below the stimulus.'
      },
      valid_responses: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Valid responses',
        default: ['arrowleft', 'arrowright'],
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },

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
    p {
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
    .jspsych-content-wrapper {
      background: #eef3f8;
    }
    .dsct-container {
      position: relative;
      width: 740px;
      height: 440px;
      background: #ffffff;
      border: 1px solid grey;
      border-radius: 9px;
    }
    .dsct-stimulus-grid {
      position: relative;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      grid-column-gap: 20px;
      padding: 10px;
      margin-bottom: 50px;
      background: #f2f2f2;
      border-radius: 8px;
      border-bottom: 1px solid grey;
    }
    .dsct-target-grid {
      position: relative;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      justify-content: center;
    }
    .dsct-stimulus {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dsct-stimulus-grid .dsct-stimulus {
      width: 60px;
    }
    .dsct-target-grid .dsct-stimulus {
      width: 80px;
    }
    .dsct-stimulus:nth-of-type(2n+1) {
      background: #F8F8F8;
      border-top: 1px solid grey;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .dsct-stimulus:nth-of-type(2n) {
      background: #FFFFFF;
      border: 1px solid grey;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .dsct-stimulus img {
      max-width: 100%;
      object-fit: contain;
      padding: 5px;
      filter: invert(33%) sepia(85%) saturate(341%) hue-rotate(142deg) brightness(101%) contrast(91%);
      -webkit-filter: invert(33%) sepia(85%) saturate(341%) hue-rotate(142deg) brightness(101%) contrast(91%);
    }
    .dsct-stimulus-grid .dsct-stimulus img {
      max-height: 48px;
    }
    .dsct-stimulus-grid .dsct-stimulus p {
      font-size: 24px;
    }
    .dsct-target-grid .dsct-stimulus img {
      max-height: 64px;
    }
    .dsct-target-grid .dsct-stimulus p {
      font-size: 36px;
    }
    .dsct-container .dsct-button {
      position: absolute;
      bottom: 1%;
      width: 96px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid grey;
      border-radius: 4px;
      font-size: 15px;
    }
    .dsct-container .dsct-button:nth-of-type(2n+1) {
      left: 20%;
    }
    .dsct-container .dsct-button:nth-of-type(2n) {
      right: 20%;
    }
    </style>`;

    // Draw container.
    new_html += '<div class="dsct-container">';

    // Draw stimulus grid.
    new_html += '<div class="dsct-stimulus-grid">';
    trial.stimuli.forEach((j, i) => {
      new_html += '<div class="dsct-stimulus">' + j + '</div>';
      new_html += '<div class="dsct-stimulus"><p>' + (i+1) + '</p></div>';
    });
    new_html += '</div>';

    // Draw target grid.
    new_html += '<div class="dsct-target-grid">';
    new_html += '<div class="dsct-stimulus">' + trial.stimuli[0] + '</div>';
    new_html += '<div class="dsct-stimulus"><p>' + 1 + '</p></div>';
    new_html += '</div>';

    // Draw buttons.
    new_html += '<div class="dsct-button"><p>< Same</p></div>';
    new_html += '<div class="dsct-button"><p>Different ></p></div>';

    // Close container.
    new_html += '</div>';

    // Draw stimuli to screen.
    display_element.innerHTML = new_html;

    // ---------------------------------- //
    // Section 2: Response handling       //
    // ---------------------------------- //

    // store response
    var response = {
      rt: null,
      key: null
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
        rt: response.rt,
        stimulus: trial.stimulus,
        response: response.key
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (trial.valid_responses != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.valid_responses,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
