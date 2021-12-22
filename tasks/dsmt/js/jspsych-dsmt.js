/**
* jspsych-dsmt
* Sam Zorowitz
*
* plugin for running one trial of the digit symbol matching task
*
**/

jsPsych.plugins["dsmt"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'dsmt',
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
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Prompt',
        description: 'Any content here will be displayed below the stimulus.'
      },
      valid_responses: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Valid responses',
        default: ['1', '2', '3'],
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
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
    .dsmt-container {
      position: relative;
      width: 740px;
      height: 440px;
      background: #ffffff;
      border: 1px solid grey;
      border-radius: 9px;
    }
    .dsmt-stimulus-grid {
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
    .dsmt-target-grid {
      position: relative;
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      justify-content: center;
    }
    .dsmt-stimulus {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dsmt-stimulus-grid .dsmt-stimulus {
      width: 60px;
    }
    .dsmt-target-grid .dsmt-stimulus {
      width: 80px;
    }
    .dsmt-stimulus:nth-of-type(2n+1) {
      background: #F8F8F8;
      border-top: 1px solid grey;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .dsmt-stimulus:nth-of-type(2n) {
      background: #FFFFFF;
      border: 1px solid grey;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .dsmt-stimulus img {
      max-width: 100%;
      object-fit: contain;
      padding: 5px;
      filter: invert(33%) sepia(85%) saturate(341%) hue-rotate(142deg) brightness(101%) contrast(91%);
      -webkit-filter: invert(33%) sepia(85%) saturate(341%) hue-rotate(142deg) brightness(101%) contrast(91%);
    }
    .dsmt-stimulus-grid .dsmt-stimulus img {
      max-height: 48px;
    }
    .dsmt-stimulus-grid .dsmt-stimulus p {
      font-size: 24px;
    }
    .dsmt-target-grid .dsmt-stimulus img {
      max-height: 72px;
    }
    .dsmt-target-grid .dsmt-stimulus p {
      font-size: 36px;
    }
    </style>`;

    // Draw container.
    new_html += '<div class="dsmt-container">';

    // Draw stimulus grid.
    new_html += '<div class="dsmt-stimulus-grid">';
    trial.stimuli.forEach((j, i) => {
      new_html += '<div class="dsmt-stimulus">' + j + '</div>';
      new_html += '<div class="dsmt-stimulus"><p>' + ((i % 3)+1) + '</p></div>';
    });
    new_html += '</div>';

    // Draw target grid.
    new_html += '<div class="dsmt-target-grid">';
    new_html += '<div class="dsmt-stimulus">' + trial.stimuli[trial.target] + '</div>';
    new_html += '<div class="dsmt-stimulus"><p id="target"></p></div>';
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
    if (screen_resolution[0] < 740 || screen_resolution[1] < 440) {
      var minimum_resolution = 0;
    } else {
      var minimum_resolution = 1;
    }

    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // record response
      response.rt = info.rt;
      response.key = trial.valid_responses.indexOf(info.key);

      // score response
      response.correct = (response.key == (trial.target % 3)) ? 1 : 0;

      // present feedback
      display_element.querySelector('#target').innerHTML = response.key + 1;

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
        target: trial.target,
        key: response.key,
        rt: response.rt,
        correct: response.correct,
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
        valid_responses: trial.valid_responses,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }, trial.iti_duration);

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
