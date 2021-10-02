/**
 * jspsych-palminteri-practice
 * Sam Zorowitz
 *
 * plugin for running a practice block of the Palminteri task
 *
 **/

jsPsych.plugins["palminteri-practice"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'palminteri-practice',
    description: '',
    parameters: {
      symbol_L: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Symbol (left)',
        default: '',
        description: 'Key code of corresponding symbol for left robot'
      },
      symbol_R: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Symbol (right)',
        default: '',
        description: 'Key code of corresponding symbol for right robot'
      },
      outcome_L: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Feedback (left)',
        description: 'Outcome for left robot.'
      },
      outcome_R: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Feedback (right)',
        description: 'Outcome for right robot.'
      },
      correct: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Correct',
        description: 'The key corresponding to the better robot.'
      },
      counterfactual: {
        type: jsPsych.plugins.parameterType.BOOLEAN,
        pretty_name: 'Counterfactual feedback',
        default: true,
        description: 'Present feedback for both chosen and unchosen stimuli.'
      },
      randomize: {
        type: jsPsych.plugins.parameterType.BOOLEAN,
        pretty_name: 'Randomize',
        default: true,
        description: 'Randomize side of robots.'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: ['arrowleft','arrowright'],
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      robot_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 500,
        description: 'Duration of choice indication phase.'
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 3000,
        description: 'Duration of outcome phase.'
      },
      feedback_win: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Feedback (win)',
        default: "+10",
        description: 'Feedback for win outcome.'
      },
      feedback_zero: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Feedback (neutral)',
        default: "+0",
        description: 'Feedback for neutral outcome.'
      },
      feedback_lose: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Feedback (lose)',
        default: "-10",
        description: 'Feedback for lose outcome.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Define HTML.
    //---------------------------------------//

    // Initialize HTML.
    var new_html = `<style>
    body {
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      position: fixed;
      background: linear-gradient(0deg, rgba(210,210,210,1) 50%, rgba(230,230,230,1) 100%);
    }

    </style>`;

    // Draw task
    new_html += '<div class="wrap">';
    new_html += '<div class="floor"></div>'

    // Draw screens
    new_html += '<div class="screen" side="left"><div class="screen-msg" id="screenL"></div></div>';
    new_html += '<div class="screen" side="right"><div class="screen-msg" id="screenR"></div></div>';

    // Draw platforms
    new_html += '<div class="platform" id="platformL" side="left"></div>';
    new_html += '<div class="ring" id="ringL" side="left"></div>';
    new_html += '<div class="platform" id="platformR" side="right"></div>';
    new_html += '<div class="ring" id="ringR" side="right"></div>';

    // Draw left robot.
    new_html += '<div class="robot" side="left">';
    new_html += '<div class="head">';
    new_html += '<div class="visor"></div>';
    new_html += '<div class="eye" id="eyeLL" side="left"></div>';
    new_html += '<div class="eye" id="eyeLR" side="right"></div>';
    new_html += '</div>';
    new_html += '<div class="torso">';
    new_html += '<div class="left"></div>';
    new_html += '<div class="right"></div>';
    new_html += `<div class="rune" id="runeL">${trial.symbol_L}</div>`;
    new_html += '</div>';
    new_html += '<div class="shado"></div>'
    new_html += '</div>';

    // Draw right robot.
    new_html += '<div class="robot" side="right">';
    new_html += '<div class="head">';
    new_html += '<div class="visor"></div>';
    new_html += '<div class="eye" id="eyeRL" side="left"></div>';
    new_html += '<div class="eye" id="eyeRR" side="right"></div>';
    new_html += '</div>';
    new_html += '<div class="torso">';
    new_html += '<div class="left"></div>';
    new_html += '<div class="right"></div>';
    new_html += `<div class="rune" id="runeR">${trial.symbol_R}</div>`;
    new_html += '</div>';
    new_html += '<div class="shado"></div>'
    new_html += '</div>';

    new_html += '</div>';

    // draw
    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Task functions.
    //---------------------------------------//

    // store response
    var response_history = [];

    // function to handle responses by the subject
    var after_response = function(info) {

      // Kill any timeout handlers / keyboard listeners
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

      // Only record the first response
      response = info;
      response.key = info.key;

      // Update response_history.
      if (trial.correct == response.key) {
        response_history.unshift(1);
      } else {
        response_history.unshift(0);
      }

      // Visually indicate chosen robot.
      if (response.key == 'arrowleft') {
        display_element.querySelector('#ringL').setAttribute('status', 'chosen');
      } else {
        display_element.querySelector('#ringR').setAttribute('status', 'chosen');
      }

      jsPsych.pluginAPI.setTimeout(function() {
        present_feedback();
      }, trial.robot_duration);

    };

    // function to end trial when it is time
    var present_feedback = function() {

      // Kill any timeout handlers / keyboard listeners
      jsPsych.pluginAPI.clearAllTimeouts();
      jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

      // Update left side outcome
      if (response.key == 'arrowleft' || trial.counterfactual) {
        if (trial.outcome_L == 'win') {
          display_element.querySelector('#screenL').innerHTML = trial.feedback_win;
          display_element.querySelector('#screenL').setAttribute('outcome', 'win');
          display_element.querySelector('#runeL').setAttribute('outcome', 'win');
          display_element.querySelector('#eyeLL').setAttribute('outcome', 'win');
          display_element.querySelector('#eyeLR').setAttribute('outcome', 'win');
        } else if (trial.outcome_L == 'lose') {
          display_element.querySelector('#screenL').innerHTML = trial.feedback_lose;
          display_element.querySelector('#screenL').setAttribute('outcome', 'lose');
          display_element.querySelector('#runeL').setAttribute('outcome', 'lose');
          display_element.querySelector('#eyeLL').setAttribute('outcome', 'lose');
          display_element.querySelector('#eyeLR').setAttribute('outcome', 'lose');
        } else {
          display_element.querySelector('#screenL').innerHTML = trial.feedback_zero;
          display_element.querySelector('#screenL').setAttribute('outcome', 'zero');
          display_element.querySelector('#runeL').setAttribute('outcome', 'zero');
          display_element.querySelector('#eyeLL').setAttribute('outcome', 'zero');
          display_element.querySelector('#eyeLR').setAttribute('outcome', 'zero');
        }
      }

      // Update right side outcome
      if (response.key == 'arrowright' || trial.counterfactual) {
        if (trial.outcome_R == 'win') {
          display_element.querySelector('#screenR').innerHTML = trial.feedback_win;
          display_element.querySelector('#screenR').setAttribute('outcome', 'win');
          display_element.querySelector('#runeR').setAttribute('outcome', 'win');
          display_element.querySelector('#eyeRL').setAttribute('outcome', 'win');
          display_element.querySelector('#eyeRR').setAttribute('outcome', 'win');
        } else if (trial.outcome_R == 'lose') {
          display_element.querySelector('#screenR').innerHTML = trial.feedback_lose;
          display_element.querySelector('#screenR').setAttribute('outcome', 'lose');
          display_element.querySelector('#runeR').setAttribute('outcome', 'lose');
          display_element.querySelector('#eyeRL').setAttribute('outcome', 'lose');
          display_element.querySelector('#eyeRR').setAttribute('outcome', 'lose');
        } else {
          display_element.querySelector('#screenR').innerHTML = trial.feedback_zero;
          display_element.querySelector('#screenR').setAttribute('outcome', 'zero');
          display_element.querySelector('#runeR').setAttribute('outcome', 'zero');
          display_element.querySelector('#eyeRL').setAttribute('outcome', 'zero');
          display_element.querySelector('#eyeRR').setAttribute('outcome', 'zero');
        }
      }

      if (response_history.length < 4 || (response_history[0]+response_history[1]) < 2 ) {
        jsPsych.pluginAPI.setTimeout(function() {
          reset_trial();
        }, trial.feedback_duration);
      } else {
        jsPsych.pluginAPI.setTimeout(function() {
          end_trial();
        }, trial.feedback_duration);
      }

    };

    var reset_trial = function() {

      // Reset left side HTML.
      display_element.querySelector('#screenL').innerHTML = '';
      display_element.querySelector('#screenL').setAttribute('outcome', '');
      display_element.querySelector('#runeL').setAttribute('outcome', '');
      display_element.querySelector('#eyeLL').setAttribute('outcome', '');
      display_element.querySelector('#eyeLR').setAttribute('outcome', '');
      display_element.querySelector('#ringL').setAttribute('status', '');

      // Reset right side HTML.
      display_element.querySelector('#screenR').innerHTML = '';
      display_element.querySelector('#screenR').setAttribute('outcome', '');
      display_element.querySelector('#runeR').setAttribute('outcome', '');
      display_element.querySelector('#eyeRL').setAttribute('outcome', '');
      display_element.querySelector('#eyeRR').setAttribute('outcome', '');
      display_element.querySelector('#ringR').setAttribute('status', '');

      // Randomize robot sides.
      if (trial.randomize && jsPsych.randomization.repeat([0,1],1)[0] == 1 ) {

        // Hacky single line swap
        trial.symbol_L = [trial.symbol_R, trial.symbol_R = trial.symbol_L][0];
        trial.outcome_L = [trial.outcome_R, trial.outcome_R = trial.outcome_L][0];

        // Update correct key.
        if (trial.choices.indexOf(trial.correct) == 0) {
          trial.correct = trial.choices[1];
        } else {
          trial.correct = trial.choices[0];
        }

        // Update runes.
        display_element.querySelector('#runeL').innerHTML = trial.symbol_L;
        display_element.querySelector('#runeR').innerHTML = trial.symbol_R;

      }

      // Reinitialize keyboardListener.
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });

    }

    var end_trial = function() {

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    };

    // start the response listener
    var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.choices,
      rt_method: 'performance',
      persist: false,
      allow_held_key: false
    });


  };

  return plugin;
})();
