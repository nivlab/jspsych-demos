/**
 * jspsych-horizons-comprehension
 * Sam Zorowitz
 *
 * plugin for running the comprehension check for the horizons task
 *
 **/

jsPsych.plugins['horizons-comprehension'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'horizons-comprehension',
    description: '',
    parameters: {
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      }
    }
  }
  plugin.trial = function(display_element, trial) {

    // Plug-in setup
    var plugin_id_name = "jspsych-survey-multi-choice";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }

    // ---------------------------------- //
    // Section 1: Define Prompts          //
    // ---------------------------------- //

    // Define comprehension check questions.
    var prompts = [
      "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;One machine will always be better on average than the other. ",
      "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;A machine will pay out the same number of points every play.",
      "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;The points I earn will affect my performance bonus.",
    ];

    // Define correct answers.
    var correct = ["true", "false", "true"];

    // ---------------------------------- //
    // Section 2: Define HTML             //
    // ---------------------------------- //

    // Initialize HTML
    var html = "";

    // Insert CSS
    html += `<style>
    .horizons-wrap {
      height: 100vh;
      width: 100vw;
    }
    .comprehension-box {
      position: absolute;
      top: 10%;
      left: 50%;
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
      width: 70%;
      height: 100%;
      background: #ffffff;
      line-height: 1.25em;
    }
    .comprehension-box .jspsych-survey-multi-choice-question {
      margin-top: 0em;
      margin-bottom: 1.0em;
      text-align: left;
      padding-left: 2em;
      font-size: 1.33vw;
    }
    .comprehension-box .jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {
      text-align: left;
      margin: 0em 0em 0em 0em
    }
    .comprehension-box .jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {
      display: inline-block;
      margin: 0.33em 1em 0em 1em;
    }
    .comprehension-box .jspsych-survey-multi-choice-option input[type='radio'] {
      margin-right: 0.5em;
      width: 1.2em;
      height: 1.2em;
    }
    </style>`;

    // Add factory machine parts (back).
    html += '<div class="horizons-wrap">';

    // form element
    var trial_form_id = _join(plugin_id_name, "form");
    display_element.innerHTML += '<form id="'+trial_form_id+'"></form>';

    // Show preamble text
    html += '<div class="comprehension-box">'
    html += '<div class="jspsych-survey-multi-choice-preamble"><h4 style="font-size: 1.5vw; margin-block-start: 1em; margin-block-end: 1em">Please answer the questions below:</div>';

    // Initialize form element
    html += '<form id="jspsych-survey-multi-choice-form">';

    // Iteratively add comprehension questions.
    for (i = 0; i < prompts.length; i++) {

      // Initialize item
      html += `<div id="jspsych-survey-multi-choice-${i}" class="jspsych-survey-multi-choice-question jspsych-survey-multi-choice-horizontal" data-name="Q${i}">`;

      // Add question text
      html += `<p class="jspsych-survey-multi-choice-text survey-multi-choice">${prompts[i]}</p>`;

      // Option 1: True
      html += `<div id="jspsych-survey-multi-choice-option-${i}-0" class="jspsych-survey-multi-choice-option">`;
      html += `<input type="radio" name="jspsych-survey-multi-choice-response-${i}" id="jspsych-survey-multi-choice-response-${i}-0" value=true required>`;
      html += `<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-${i}-0">True</label>`;
      html += '</div>';

      // Option 2: False
      html += `<div id="jspsych-survey-multi-choice-option-${i}-1" class="jspsych-survey-multi-choice-option">`;
      html += `<input type="radio" name="jspsych-survey-multi-choice-response-${i}" id="jspsych-survey-multi-choice-response-${i}-1" value=false required>`;
      html += `<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-${i}-1">False</label>`;
      html += '</div>';

      // Close item
      html += '</div>';

    }

    // add submit button
    html += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + '"></input>';

    // End HTML
    html += '</form>';
    html += '</div></div>';

    // Display HTML
    display_element.innerHTML = html;

    // ---------------------------------- //
    // Section 2: jsPsych Functions       //
    // ---------------------------------- //

    // Scroll to top of screen.
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    // Detect submit button press
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Measure response time
      var endTime = performance.now();
      var response_time = endTime - startTime;

      // Gather responses
      var responses = [];
      var num_errors = 0;
      for (var i=0; i<prompts.length; i++) {

        // Find matching question.
        var match = display_element.querySelector('#jspsych-survey-multi-choice-'+i);
        var val = match.querySelector("input[type=radio]:checked").value;

        // Store response
        responses.push(val)

        // Check accuracy
        if ( correct[i] != val ) {
          num_errors++;
        }

      }

      // store data
      var trial_data = {
        "responses": responses,
        "num_errors": num_errors,
        "rt": response_time
      };

      // clear html
      display_element.innerHTML += '';

      // next trial
      jsPsych.finishTrial(trial_data);

    });

    var startTime = performance.now();
  };

  return plugin;
})();
