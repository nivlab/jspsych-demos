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
      card_position: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Card position (1 = left, 0 = right)',
        description: ''
      },
      card_color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Card color',
        default: 'grey',
        description: ''
      },
      card_suit: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Card suit',
        description: ''
      },
      card_points: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Card points',
        description: ''
      },
      certain_points: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Certain points',
        description: ''
      },
      valid_responses: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Valid responses',
        default: ['arrowleft','arrowright'],
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      choice_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 10000,
        description: 'How long to show trial before it ends.'
      },
      confirmation_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Confirmation duration',
        default: 500,
        description: 'How long to show choice confirmation before it ends.'
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Feedback duration',
        default: 1000,
        description: 'How long to show feedback before it ends.'
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
    new_html += `<style>
    body {
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      position: fixed;
    }
    .jspsych-content-wrapper {
      overflow: hidden;
    }
    </style>`;

    // Initialize container & grid.
    new_html += '<div class="mrst-container">';
    new_html += '<div class="mrst-grid">';

    // Assemble stimuli properties.
    var stimuli = [
      {type: "risky", points: trial.card_points, color: trial.card_color, suit: trial.card_suit, face: "down"},
      {type: "certain", points: trial.certain_points, color: 'transparent', suit: '', face: "up"}
    ];
    if ( trial.card_position == 0 ) { stimuli = stimuli.reverse(); }

    // Draw flip cards.
    for (let i = 0; i < 2; i++) {

      // Initialize card.
      new_html += '<div class="mrst-grid-item">';
      new_html += `<div class="flip-card" id="${stimuli[i].type}-card" face="${stimuli[i].face}">`;
      new_html += '<div class="flip-card-inner">';

      // Draw card back.
      new_html += `<div class="flip-card-back">`;
      new_html += `<div class="top-left-corner" style="border-top-color: ${stimuli[i].color}; border-left-color: ${stimuli[i].color}"></div>`;
      new_html += `<div class="bottom-right-corner" style="border-bottom-color: ${stimuli[i].color}; border-right-color: ${stimuli[i].color}"></div>`;
      new_html += `<p>+${stimuli[i].points}</p>`;
      new_html += '</div>';

      // Draw card front.
      new_html += `<div class="flip-card-front" style="background: ${stimuli[i].color}">`;
      new_html += `<img src="${stimuli[i].suit}">`;
      new_html += '</div>';

      // Finish card.
      new_html += '</div>';    // Close flip-card-inner
      new_html += '</div>';    // Close flip-card
      new_html += '</div>';    // Close mrst-grid-item

    }

    // Draw choice indicators.
    ['L','R'].forEach((pos) => {
      new_html += '<div class="mrst-grid-item">';
      new_html += `<div class="choice-indicator" id="indicator-${pos}"></div>`;
      new_html += '</div>';
    })

    // Close game containers.
    new_html += '</div>';
    new_html += '</div>';

    // draw HTML
    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // confirm screen resolution
    const mediaQuery = window.matchMedia('(min-height: 300px) and (min-width: 600px)');

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
      const msg = '<p style="position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); font-size: 20px; line-height: 1.5em; color: #F8F8F8">You did not respond within the allotted time. Please pay more attention on the next trial.<br><br><b>Warning:</b> If you miss too many trials, we may end the exepriment early and reject your work.';

      display_element.innerHTML = '<div class="mrst-container">' + msg + '</div>';

      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, 5000);

    }

    // function to handle responses by the subject
    var after_response = function(info) {

      // record responses
      response.rt = info.rt;
      response.key = info.key;

      // evaluate choice
      if ( response.key == trial.valid_responses[0] ) {
        response.choice = ( trial.card_position == 1 ) ? 1 : 0;
        document.getElementById("indicator-L").setAttribute('status', 'choice');
      } else {
        response.choice = ( trial.card_position == 1 ) ? 0 : 1;
        document.getElementById("indicator-R").setAttribute('status', 'choice');
      }

      // choice highlight timeout
      jsPsych.pluginAPI.setTimeout(function() {
        present_feedback();
      }, trial.confirmation_duration);

    }

    // function to handle responses by the subject
    var present_feedback = function(info) {

      // initiate card flip animation.
      document.getElementById("risky-card").setAttribute('status', 'flip');

      // feedback timeout
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.feedback_duration);

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
        "card_position": trial.card_position,
        "card_color": trial.card_color,
        "card_suit": trial.card_suit,
        "card_points": trial.card_points,
        "certain_points": trial.certain_points,
        "key_press": response.key,
        "choice": response.choice,
        "rt": response.rt,
        "outcome": (response.choice == 1) ? trial.card_points : trial.certain_points,
        "screen_resolution": (mediaQuery.matches) ? 1 : 0
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    };

    // Initialize first stage keyboardListener.
    var keyboardListener = "";
    setTimeout(function() {
      keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: valid_responses,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }, 0);

    // End trial if no response.
    if (trial.choice_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        missed_response();
      }, trial.choice_duration);
    }

  };

  return plugin;
})();
