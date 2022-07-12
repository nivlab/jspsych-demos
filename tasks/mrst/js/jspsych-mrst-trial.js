/**
* jspsych-mrst-trial
* Sam Zorowitz
*
* plugin for running a trial of modified risk sensitivity task
*
**/

jsPsych.plugins["mrst-trial"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'mrst-trial',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Card points',
        description: 'The points on the face of each card.'
      },
      color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Card color',
        description: 'The color of the back of each card.'
      },
      points: {
        type: jsPsych.plugins.parameterType.FLOAT,
        pretty_name: 'Card points',
        description: 'The points on the face of each card.'
      },
      randomize: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'randomize',
        default: true,
        description: 'If true, randomize the left/right position of the cards.'
      },
      valid_responses: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Valid responses',
        default: ['arrowleft', 'arrowright'],
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
        pretty_name: 'Confirmation duration',
        default: 500,
        description: 'How long to show choice feedback before it ends.'
      },
      outcome_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Feedback duration',
        default: 1500,
        description: 'How long to show outcome feedback before it ends.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Define HTML.
    //---------------------------------------//

    // Initialize HTML.
    var new_html = '';

    // Insert CSS.
    const style = `<style>
    .jspsych-content-wrapper {
      background: #808080;
      background: linear-gradient(to top right, #989898, #606060) fixed;
    }
    .jspsych-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 80px;
    }
    p {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
    </style>`;
    new_html += style;


    // Define mapping of actions to sides.
    var order = [1,0];
    if ( trial.randomize ) { order = jsPsych.randomization.shuffle(order); }

    // Iteratively draw cards
    order.forEach((j, i) => {

      // Define constants.
      const face = (j > 0) ? 'down' : 'up';
      const color = (j > 0) ? trial.color : 'grey';
      const points = (j > 0) ? trial.points : 5;

      // Initialize card container.
      new_html += '<div class="flip-card" id="flip-card-' + j + '" face="' + face + '">';

      // Draw card contents
      new_html += '<div class="flip-card-inner">';

      // Draw face-up side
      new_html += '<div class="flip-card-up">';
      new_html += `<div class="top-left-corner" style="border-top-color: ${color}; border-left-color: ${color}"></div>`;
      new_html += `<div class="bottom-right-corner" style="border-bottom-color: ${color}; border-right-color: ${color}"></div>`;
      new_html += '<p id="points">' + points + '</p>';
      new_html += '</div>';

      // Draw face-down side
      if (j > 0) {
        new_html += `<div class="flip-card-down" style="background: ${trial.color}">`;
        new_html += `<img src="${trial.stimulus}">`;
        new_html += '</div>';
      }

      // Finish card contents
      new_html += '</div>';    // Close flip-card-inner

      // Draw choice indicators
      new_html += '<div class="choice-indicator" id="choice-' + j + '"></div>';

      // Finish card
      new_html += '</div>';    // Close flip-card

    });

    // Draw HTML
    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // confirm full screen
    const fullscreen = (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) ? 1 : 0;

    // confirm screen resolution
    const screen_resolution = [window.innerWidth, window.innerHeight];
    if (screen_resolution[0] < 480 || screen_resolution[1] < 295) {
      var minimum_resolution = 0;
    } else {
      var minimum_resolution = 1;
    }

    // store response
    var response = {
      rt: null,
      key: null,
      choice: null
    };

    // function to handle missed responses
    var missed_response = function() {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // Display warning message.
      const msg = '<p style="position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); font-size: 20px; line-height: 1.5em; color: white">You did not respond within the allotted time. Please pay more attention on the next trial.<br><br><b>Warning:</b> If you miss too many trials, we may end the experiment early and reject your work.';

      display_element.innerHTML = style + msg;

      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, 5000);

    }

    // function to handle responses by the subject
    var after_response = function(info) {

      // record responses
      response.rt = info.rt;
      response.key = trial.valid_responses.indexOf(info.key);
      response.choice = order[response.key];

      // compute earnings
      trial.outcome = response.choice * trial.points + (1-response.choice) * 5;

      // indicate choice
      document.getElementById('choice-' + response.choice).setAttribute('status', 'select');

      // choice highlight timeout
      jsPsych.pluginAPI.setTimeout(function() {
        present_feedback();
      }, trial.feedback_duration);

    }

    // function to handle responses by the subject
    var present_feedback = function(info) {

      // initiate card flip animation.
      document.getElementById('flip-card-1').setAttribute('status', 'feedback');

      // feedback timeout
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.outcome_duration);

    };

    // function to end trial when it is time
    var end_trial = function() {

      // Kill any timeout handlers / keyboard listeners
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        stimulus: trial.stimulus,
        color: trial.color,
        points: trial.points,
        key_press: response.key,
        choice: response.choice,
        rt: response.rt,
        outcome: trial.outcome,
        fullscreen: fullscreen,
        screen_resolution: screen_resolution,
        minimum_resolution: minimum_resolution
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    };

    // start the response listener
    var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.valid_responses,
      rt_method: 'performance',
      persist: false,
      allow_held_key: false
    });

    // end trial if no response.
    if (trial.choice_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        missed_response();
      }, trial.choice_duration);
    }

  };

  return plugin;
})();
