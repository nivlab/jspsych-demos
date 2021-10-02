/*
 * Modified by Mingyu Song, based on github.com/mahiluthra/working_memory_tests/jspsych-6.0.4/plugins/jspsych-symmetry-judgement-task.js
 */

jsPsych.plugins["symmetry-judgement-task-response"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'symmetry-judgement-task-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      size: {
        type: jsPsych.plugins.parameterType.INT, // INT, IMAGE, KEYCODE, STRING, FUNCTION, FLOAT
        default_value: undefined
      },
      number_darkened: {
        type: jsPsych.plugins.parameterType.INT,
        default_value: undefined
      },
      proportion: {
        type: jsPsych.plugins.parameterType.FLOAT,
        default: 0.5
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Choices',
        default: ['YES', 'NO'],
        array: true,
        description: 'The labels for the buttons.'
      },
      button_html: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Button html',
        default: '<button class="jspsych-btn-numpad" style = "width:120px; font-size: 16px" >%choice%</button>',
        array: true,
        description: 'The html of the button. Can create own style.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
    }
  }


  plugin.trial = function (display_element, trial) {

    var html = '<div id="jspsych-html-button-response-stimulus" >' + trial.stimulus + '</div>';
    display_element.innerHTML = html

    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.choices.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in html-button-response plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.choices.length; i++) {
        buttons.push(trial.button_html);
      }
    }

    var html = '<div id="jspsych-html-button-response-btngroup">';
    for (var i = 0; i < trial.choices.length; i++) {
      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
      html += '<div class="jspsych-html-button-response-button"  style="display: inline-block; margin:20px 30px" id="jspsych-html-button-response-button-' + i + '" data-choice="' + i + '">' + str + '</div>';
    }
    html += '</div>';

    display_element.innerHTML += html

    var start_time = Date.now();

    // add event listeners to buttons
    for (var i = 0; i < trial.choices.length; i++) {
      display_element.querySelector('#jspsych-html-button-response-button-' + i).addEventListener('click', function (e) {
        var choice = e.currentTarget.getAttribute('data-choice'); // don't use dataset for jsdom compatibility
        after_response(choice);
      });
    }

    // store response
    var data = {
      rt: null,
      choice_symmetry: null
    };

    function after_response(choice) {
      // measure rt and choice
      var end_time = Date.now();
      data.rt = end_time - start_time;
      data.choice_symmetry = trial.choices[choice] == 'YES';

      clear_display();
      end_trial();
    };

    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        clear_display();
        end_trial();
      }, trial.trial_duration);
    }


    function clear_display() {
      display_element.innerHTML = '';
    }


    function end_trial() {

      // disable all the buttons
      var btns = document.querySelectorAll('.jspsych-html-button-response-button button');
      for (var i = 0; i < btns.length; i++) {
        //btns[i].removeEventListener('click');
        btns[i].setAttribute('disabled', 'disabled');
      }

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        rt: data.rt,
        choice_symmetry: data.choice_symmetry
      };

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

  };

  return plugin;
})();
