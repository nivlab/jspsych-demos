/**
* jspsych-mrst-trial
* Sam Zorowitz
*
* plugin for running a game of horizons task
*
**/

jsPsych.plugins["horizons-trial"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'horizons-trial',
    description: '',
    parameters: {
      horizon: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: "Horizon",
        description: "The number of rounds in the game (either 5 or 10)"
      },
      rewards_L: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: "Horizon",
        array: true,
        description: "The number of rounds in the game (either 5 or 10)"
      },
      rewards_R: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: "Horizon",
        array: true,
        description: "The number of rounds in the game (either 5 or 10)"
      },
      forced_choices: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: "Forced choices",
        array: true,
        description: "The preselected first four choices (left vs right)"
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

    // Add horizons task wrapper.
    new_html += '<div class="horizons-wrap">';

    // Add horizons task grid.
    new_html += '<div class="horizons-grid">';

    // Iteratively add point boxes.
    for (let i = 0; i < trial.horizon; i++) {

      // Add point box (left side).
      new_html += `<div class="point-box" id="L${i}" side="left"></div>`;

      // Add point box (right side).
      new_html += `<div class="point-box" id="R${i}" side="right"></div>`;

    }

    // Close horizons task grid.
    new_html += '</div>';

    // Add levers.
    new_html += '<div class="lever" side="left"></div>';
    new_html += '<div class="lever" side="right"></div>';
    new_html += `<div class="game-message" horizon=${trial.horizon}></div>`;

    // Close horizons task wrapper.
    new_html += '</div>';

    // draw HTML
    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Define convenience functions.
    //---------------------------------------//

    // Sum of array.
    function arrSum(arr){
      return arr.reduce(function(a,b){
        return a + b
      }, 0);
    }

    // Fill point box according to turn and forced choices.
    function fillPointBoxes(trial, turn) {

      // Case 1: forced choice turn (left)
      if (turn < 4 && trial.forced_choices[turn] == 0) {
        display_element.querySelector(`#L${turn}`).setAttribute('status','fill');

        // Case 2: forced choice turn (right)
      } else if (turn < 4 && trial.forced_choices[turn] == 1) {
        display_element.querySelector(`#R${turn}`).setAttribute('status','fill');

        // Case 3: free choice turn
      } else {
        display_element.querySelector(`#L${turn}`).setAttribute('status','fill');
        display_element.querySelector(`#R${turn}`).setAttribute('status','fill');
      }

    }

    // Unfill all point boxes
    function unfillPointBoxes() {

      // Locate all filled point boxes.
      var matches = display_element.querySelectorAll(".point-box[status='fill']");

      // Iteratively unfill.
      matches.forEach( function(match) { match.setAttribute('status',null) } );

    }

    // Determine valid responses for turn
    function getValidResponses(trial, turn) {
      return turn < 4 ? [trial.valid_responses[trial.forced_choices[turn]]] : trial.valid_responses;
    }

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // confirm screen resolution
    const mediaQuery = window.matchMedia('(min-height: 400px) and (min-width: 300px)');

    // Initialize global variables.
    var turn = 0;
    var valid_responses = getValidResponses(trial, turn);

    // store response
    var responses = {
      key_presses: [],
      response_times: [],
      outcomes: []
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

    // function to handle responses by the subject
    var after_response = function(info) {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // Record response
      responses['key_presses'].push(info['key']);
      responses['response_times'].push(info['rt']);

      // Unfill boxes
      unfillPointBoxes();

      // Display outcome
      if (info['key'] == trial.valid_responses[0]) {
        responses['outcomes'].push(trial.rewards_L[turn]);
        display_element.querySelector(`#L${turn}`).innerHTML = trial.rewards_L[turn];
      } else if (info['key'] == trial.valid_responses[1]) {
        responses['outcomes'].push(trial.rewards_R[turn]);
        display_element.querySelector(`#R${turn}`).innerHTML = trial.rewards_R[turn];
      }

      // Update global variables
      turn++;
      valid_responses = getValidResponses(trial, turn);

      // Check for termination
      if (turn == trial.horizon) {

        after_game()

      } else {

        // Present next choice
        fillPointBoxes(trial, turn);

        // Re-initialize keyboard listener
        keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: after_response,
          valid_responses: valid_responses,
          rt_method: 'performance',
          persist: false,
          allow_held_key: false
        });
      }

    };

    // function to handle post-game events
    var after_game = function() {

      // Define message
      const msg = `<p>You earned <b>${arrSum(responses.outcomes)}</b> points.</p><p>Press any key to start the next round.</p>`

      // Locate game message
      game_message = display_element.querySelector('.game-message');

      // Display game over message
      game_message.innerHTML = msg;
      game_message.style['visibility'] = 'visible';

      // initialize keyboardListener
      var keyboardListener = "";
      setTimeout(function() {
        keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: end_trial,
          valid_responses: jsPsych.ALL_KEYS,
          rt_method: 'performance',
          persist: false,
          allow_held_key: false
        });
      }, 500);

    }

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
        horizon: trial.horizon,
        rewards_L: trial.rewards_L,
        rewards_R: trial.rewards_R,
        key_presses: responses.key_presses,
        response_times: responses.response_times,
        outcomes: responses.outcomes,
        screen_resolution: (mediaQuery.matches) ? 1 : 0
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    };

    // Present next choice
    fillPointBoxes(trial, turn);

    // initialize keyboardListener
    keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: valid_responses,
      rt_method: 'performance',
      persist: false,
      allow_held_key: false
    });

    // end trial if choice_duration is set
    if (trial.choice_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        missed_response();
      }, trial.choice_duration);
    }

  };

  return plugin;
})();
