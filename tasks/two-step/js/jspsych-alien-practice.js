/**
* jspsych-two-step
* Sam Zorowitz, Branson Byers, Gili Karni
*
* plugin to run a practice trial of the second stage of the two-step task
**/

jsPsych.plugins["alien-practice"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'alien-practice',
    description: '',
    parameters: {
      outcomes: {
        type: jsPsych.plugins.parameterType.INT,
        array: true,
        pretty_name: 'Outcomes',
        description: 'Reward outcome for each bandit (reward = 1, no reward = 0)'
      },
      aliens: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        array: true,
        pretty_name: 'Aliens',
        description: 'Paths to alien images (length 2 array).'
      },
      planet_color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Planet color',
        description: 'Colors of the alien planet.'
      },
      randomize: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Randomize',
        default: true,
        description: 'Randomize left/right positions of aliens.'
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
        pretty_name: 'Choice duration',
        default: null,
        description: 'How long to listen for responses before trial ends.'
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 1000,
        description: 'How long to show feedback before it ends.'
      },
      iti_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Inter-trial interval duration',
        default: 1000,
        description: 'How long to hide stimuli on start of trial.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Define HTML.
    //---------------------------------------//

    // Define CSS styling.
    var new_html = '';
    new_html += `<style>
    body {
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      position: fixed;
    }
    .jspsych-content-wrapper {
      background: #606060;
      z-index: -1;
    }
    </style>`;

    // Open two-step container.
    new_html += '<div class="two-step-container">';

    // Draw sky & stars.
    new_html += '<div class="landscape-sky" state="2">';
    new_html += '<div class="stars"></div>';
    new_html += '</div>';

    // Draw ground.
    new_html += `<div class="landscape-ground" state="2" style="background: ${trial.planet_color}"></div>`;

    // Define mapping of aliens to sides.
    var state_2_ids = [0,1];
    if ( trial.randomize ) { state_2_ids = jsPsych.randomization.shuffle(state_2_ids); }

    // Draw aliens
    state_2_ids.forEach((j, i) => {
      new_html += `<div class="alien" id="alien-${i}" state="2" side="${i}" style="display: none;">`;
      new_html += `<img id="alien-${i}-img" src="${trial.aliens[state_2_ids[i]]}"></img>`;
      new_html += '</div>';
      new_html += `<div class="diamond" id="diamond-${i}" state="1" side="${i}"></div>`;
      new_html += `<div class="rock" id="rock-${i}" state="1" side="${i}"></div>`;
    });

    // Close wrapper.
    new_html += '</div>';

    // draw
    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // confirm screen resolution
    const screen_resolution = [window.innerWidth, window.innerHeight];
    if (screen_resolution[0] < 540 || screen_resolution[1] < 400) {
      var minimum_resolution = 0;
    } else {
      var minimum_resolution = 1;
    }

    // Preallocate space
    var response = {
      state_2_key: null,
      state_2_choice: null,
      state_2_rt: null,
      outcome: null,
    }

    // function to handle missed responses
    var missed_response = function() {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // Display warning message.
      const msg = '<p style="position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); font-size: 20px; line-height: 1.5em; color: black">You did not respond within the allotted time. Please pay more attention on the next trial.';

      display_element.innerHTML = '<style>.jspsych-content-wrapper {background: #606060;}</style><div class="two-step-container" style="background: #FFFFFF;">' + msg + '</div>';

      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, 5000);

    }

    // function to handle responses by the subject
    var after_second_response = function(info) {

      // Kill all setTimeout handlers.
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // Record responses.
      response.state_2_rt = info.rt;
      response.state_2_key = trial.valid_responses.indexOf(info.key);
      response.state_2_choice = state_2_ids[response.state_2_key];
      response.outcome = trial.outcomes[response.state_2_choice];

      // Present feedback.
      state_2_feedback(response.state_2_key, response.outcome)

      // Pause for animation (2s).
      setTimeout(function() { end_trial(); }, trial.feedback_duration);

    };

    // function to present second state feedback.
    var state_2_feedback = function(side, outcome) {
      // display_element.querySelector('#alien-' + side).setAttribute('status', 'chosen');
      if (outcome == 1) {
        display_element.querySelector('#diamond-' + side).setAttribute('status', 'chosen');
      } else {
        display_element.querySelector('#rock-' + side).setAttribute('status', 'chosen');
      }
    }

    // function to end trial
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        state_2_ids: state_2_ids,
        state_2_key: response.state_2_key,
        state_2_choice: response.state_2_choice,
        state_2_rt: response.state_2_rt,
        outcome: response.outcome,
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
      display_element.querySelector('#alien-0').style['display'] = 'block';
      display_element.querySelector('#alien-1').style['display'] = 'block';

      // start the response listener
      keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_second_response,
        valid_responses: trial.valid_responses,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });

    }, trial.iti_duration);

    // end trial if no response.
    if (trial.choice_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        missed_response();
      }, trial.choice_duration + trial.iti_duration);
    };

  };

  return plugin;
})();
