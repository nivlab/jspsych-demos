var jsPsychInvestmentComprehension = (function (jspsych) {
  'use strict';

  const info = {
    name: 'investment-comprehension',
    description: '',
    parameters: {
      prompts: {
        type: jspsych.ParameterType.HTML_STRING,
        array: true,
        pretty_name: 'Prompts',
        description: 'Comprehension check questions'
      },
      options: {
        type: jspsych.ParameterType.HTML_STRING,
        array: true,
        pretty_name: 'Options',
        description: 'Comprehension check question options'
      },
      correct: {
        type: jspsych.ParameterType.STRING,
        array: true,
        pretty_name: 'Correct',
        description: 'Answers to comprehension check questions'
      },
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      }
    }
  }

  /**
  * jspsych-investment-comprehension
  * Sam Zorowitz
  *
  * plugin for running the comprehension check for the investment game
  *
  **/
  class InvestmentComprehensionPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // Plug-in setup
      var plugin_id_name = "jspsych-survey-multi-choice";
      var plugin_id_selector = '#' + plugin_id_name;
      var _join = function( /*args*/ ) {
        var arr = Array.prototype.slice.call(arguments, _join.length);
        return arr.join('-');
      }

      // ---------------------------------- //
      // Section 1: Define HTML             //
      // ---------------------------------- //

      // Initialize HTML
      var html = "";

      // Insert CSS
      html += `<style>
      body {
        height: 100vh;
        max-height: 100vh;
      }
      .comprehension-box {
        position: relative;
        width: 650px;
        line-height: 1.5em;
      }
      .comprehension-box .jspsych-survey-multi-choice-preamble h4 {
        font-size: 20px;
        text-align: center;
        padding-left: 1.9em;
        margin-block-start: 1em;
        margin-block-end: 1.5em;
        color: #000000;
      }
      .comprehension-box .jspsych-survey-multi-choice-question {
        margin-top: 0em;
        margin-bottom: 1.0em;
        text-align: left;
        font-size: 18px;
        color: #000000;
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
      .comprehension-box hr {
        border: 1px solid #F8F8F8;
      }
      </style>`;

      // form element
      var trial_form_id = _join(plugin_id_name, "form");
      display_element.innerHTML += '<form id="'+trial_form_id+'"></form>';

      // Show preamble text
      html += '<div class="comprehension-box">'
      html += '<div class="jspsych-survey-multi-choice-preamble"><h4>To continue, please answer the questions below:</div>';

      // Initialize form element
      html += '<form id="jspsych-survey-multi-choice-form">';

      // Iteratively add comprehension questions.
      for (let i = 0; i < trial.prompts.length; i++) {

        // Initialize item
        html += `<div id="jspsych-survey-multi-choice-${i}" class="jspsych-survey-multi-choice-question jspsych-survey-multi-choice-horizontal" data-name="Q${i}">`;

        // Add question text
        html += `<p class="jspsych-survey-multi-choice-text survey-multi-choice">${trial.prompts[i]}</p>`;

        // Iteratively add options.
        for (let j = 0; j < trial.options[i].length; j++) {

          html += `<div id="jspsych-survey-multi-choice-option-${i}-${j}" class="jspsych-survey-multi-choice-option">`;
          html += `<input type="radio" name="jspsych-survey-multi-choice-response-${i}" id="jspsych-survey-multi-choice-response-${i}-${j}" value="${trial.options[i][j]}" required>`;
          html += `<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-${i}-${j}">${trial.options[i][j]}</label>`;
          html += '</div>';

        }

        // Close item
        if (i < trial.prompts.length-1) {html += '<hr>';}
        html += '</div>';

      }

      // add submit button
      html += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + '"></input>';

      // End HTML
      html += '</form>';
      html += '</div>';

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
        for (var i=0; i<trial.prompts.length; i++) {

          // Find matching question.
          var match = display_element.querySelector('#jspsych-survey-multi-choice-'+i);
          var val = match.querySelector("input[type=radio]:checked").value;

          // Store response
          responses.push(val)

          // Check accuracy
          if ( trial.correct[i] != val ) {
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
  };
  InvestmentComprehensionPlugin.info = info;

  return InvestmentComprehensionPlugin;

})(jsPsychModule);
