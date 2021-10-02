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
    name: 'investment-trial',
    description: '',
    parameters: {
      investments: {
        type: jsPsych.plugins.parameterType.FLOAT,
        array: true,
        pretty_name: 'Investments',
        description: 'The two possible investments in order (high, low).'
      },
      outcome: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Outcome',
        description: 'If investment pays off (outcome = 1) or not (outcome = 0).'
      },
      stock_name: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stock name',
        default: 'APPL',
        description: 'The name of the stock.'
      },
      stock_color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stock color',
        default: '#3f51b5',
        description: 'Hex code for the stock color.'
      },
      available_funds: {
        type: jsPsych.plugins.parameterType.FLOAT,
        pretty_name: 'Available funds',
        default: null,
        description: 'The amount of funds available at the start of the turn.'
      },
      multiplier: {
        type: jsPsych.plugins.parameterType.FLOAT,
        pretty_name: 'Multiplier',
        default: 2.0,
        description: 'How much investments are multiplied by if successful.'
      },
      randomize: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'randomize',
        default: true,
        description: 'If true, randomize the left/right position of the investments.'
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
        default: 2000,
        description: 'How long to show outcome feedback before it ends.'
      },
      iti_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Inter-trial interval duration',
        default: 500,
        description: 'How long to hide stimuli on start of trial.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Pre-trial evaluation.
    //---------------------------------------//

    // Define available funds (if applicable).
    if (trial.available_funds == null) {
      trial.available_funds = trial.investments[0];
    }

    // Define mapping of stimuli to sides.
    var order = [0,1];
    if ( trial.randomize ) { order = jsPsych.randomization.shuffle(order); }

    //---------------------------------------//
    // Define HTML.
    //---------------------------------------//

    // Initialize HTML.
    var new_html = '';

    // overflow: hidden;
    // position: fixed;
    // .jspsych-content-wrapper {
    //   overflow: hidden;
    // }

    // Insert CSS.
    new_html += `<style>
    body {
      height: 100vh;
      max-height: 100vh;
    }
    p {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
    </style>`;

    // Draw smartphone
    new_html += '<div class="smartphone">';
    new_html += '<div class="side-button"></div>';

    // Draw loading spinner
    new_html += '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

    // Draw application
    new_html += '<div class="app" id="app" style="display:none;">';

    // Draw stock
    new_html += `<div class="stock" style="background: ${trial.stock_color}">${trial.stock_name}</div>`;

    // Draw investments box
    new_html += '<div class="invest-box" id="invest-box">';
    new_html += '<p id="funds">Your balance</p>';
    new_html += `<p id="funds">$${trial.available_funds}</p>`;
    order.forEach((i) => {
      const background = (i == 0) ? trial.stock_color : 'transparent';
      new_html += `<div class="choice" id="choice-${i}" style="background: ${background}">Invest $${trial.investments[i]}</div>`;
    })
    new_html += '</div>';

    // Draw earnings box
    new_html += '<div class="earnings-box" id="earnings-box">';
    new_html += '<p id="earnings"></p>';
    new_html += '</div>';

    // Close app
    new_html += '</div>';

    // Draw top bar
    new_html += '<div class="top-bar">';
    new_html += '<img id="wifi" src="./img/wifi-icon.png" width="20px">';
    new_html += '<img id="battery" src="./img/battery-icon.png" width="25px">';
    new_html += '</div>';

    // Close smartphone
    new_html += '</div>';

    // draw HTML
    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // confirm screen resolution
    const screen_resolution = [window.innerWidth, window.innerHeight];
    if (screen_resolution[0] < 400 || screen_resolution[1] < 430) {
      var minimum_resolution = 0;
    } else {
      var minimum_resolution = 1;
    }

    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to handle missed responses
    var missed_response = function() {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // Display warning message.
      const msg = '<p style="position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); font-size: 20px; line-height: 1.5em">You did not respond within the allotted time. Please pay more attention on the next trial.<br><br><b>Warning:</b> If you miss too many trials, we may end the experiment early and reject your work.';

      display_element.innerHTML = '<div class="investment-container">' + msg + '</div>';

      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, 5000);

    }

    // function to handle responses by the subject
    var after_response = function(info) {

      // kill any remaining timeouts / keyboard listeners
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

      // record responses
      response.rt = info.rt;
      response.key = trial.valid_responses.indexOf(info.key);
      response.choice = order[response.key];

      // compute earnings
      const x1 = trial.multiplier * trial.investments[response.choice];
      const x2 = trial.available_funds - trial.investments[response.choice];
      trial.earnings = x1 * trial.outcome + x2;

      // display choice feedback
      document.getElementById(`choice-${response.choice}`).setAttribute('status', 'selected');

      // choice highlight timeout
      jsPsych.pluginAPI.setTimeout(function() {
        present_feedback();
      }, trial.feedback_duration);

    }

    // function to handle responses by the subject
    var present_feedback = function(info) {

      // draw earnings
      var feedback_html = '';
      if (trial.outcome == 1) {
        feedback_html += '<img id="up-arrow" src="./img/up-arrow.png" width="42px">';
      } else {
        feedback_html += '<img id="down-arrow" src="./img/down-arrow.png" width="42px">';
      }
      feedback_html += '&nbsp;&nbsp;$' + trial.earnings;
      document.getElementById("earnings").innerHTML = feedback_html;

      // initiate outcome animation
      document.getElementById("invest-box").setAttribute('status', 'feedback');
      document.getElementById("earnings-box").setAttribute('status', 'feedback');

      // feedback timeout
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.outcome_duration);

    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

      // gather the data to store for the trial
      var trial_data = {
        investments: trial.investments,
        stock_name: trial.stock_name,
        stock_color: trial.stock_color,
        outcome: trial.outcome,
        available_funds: trial.available_funds,
        response_key: response.key,
        choice: response.choice,
        rt: response.rt,
        earnings: trial.earnings,
        screen_resolution: screen_resolution,
        minimum_resolution: minimum_resolution
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // hide stimuli during iti
    var keyboardListener = '';
    jsPsych.pluginAPI.setTimeout(function() {

      // unhide stimili
      display_element.querySelector('#app').style['display'] = 'block';

      // start the response listener
      keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.valid_responses,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });

    }, trial.iti_duration);

    // end trial if choice_duration is set
    if (trial.choice_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        missed_response();
      }, trial.choice_duration);
    }

  };

  return plugin;
})();
