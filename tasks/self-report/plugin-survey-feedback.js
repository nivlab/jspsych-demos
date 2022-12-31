var jsPsychSurveyFeedback = (function (jspsych) {
  'use strict';

  const info = {
    name: 'survey-feedback',
    description: '',
    parameters: {
      mental_demand: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Mental demand',
        default: true,
        discription: 'If true, include the NASA-TLX mental demand item.'
      },
      physical_demand: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Physical demand',
        default: false,
        discription: 'If true, include the NASA-TLX physical demand item.'
      },
      temporal_demand: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Temporal demand',
        default: false,
        discription: 'If true, include the NASA-TLX temporal demand item.'
      },
      task_fun: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Task fun',
        default: false,
        discription: 'If true, include the custom task fun item.'
      },
      task_instructions: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Task instructions',
        default: true,
        discription: 'If true, include the custom task instructions item.'
      },
      performance: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Performance',
        default: true,
        discription: 'If true, include the NASA-TLX performance item.'
      },
      effort: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Effort',
        default: true,
        discription: 'If true, include the NASA-TLX effort item.'
      },
      frustration: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Frustration',
        default: true,
        discription: 'If true, include the NASA-TLX frustration item.'
      },
      strategy: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Strategy',
        default: true,
        discription: 'If true, include free response strategy item.'
      },
      feedback: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Feedback',
        default: true,
        discription: 'If true, include free response feedback item.'
      },
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
    }
  }

  /**
  * jspsych-survey-debrief
  * author(s): sam zorowitz, dan bennett
  *
  * a jspsych plugin for soliciting experiment feedback
  */
  class SurveyFeedbackPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      //---------------------------------------//
      // Define HTML.
      //---------------------------------------//

      // Initialize HTML
      var html = '';

      // Inject CSS
      html += `<style>
      .survey-debrief-instructions {
        width: 900px;
        margin: auto;
        text-align: center;
        font-size: 18px;
        line-height: 1.15em;
        padding-top: 12px;
      }
      .survey-debrief-container {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-row-gap: 3px;
        width: 900px;
        margin: auto;
        border-radius: 12px;
      }
      .survey-debrief-item {
        display: flex;
        flex-direction: row;
        line-height: 1.5em;
        padding-top: 4px;
        padding-bottom: 4px;
        background-color: #F8F8F8;
        align-items: center;
      }
      .survey-debrief-item[type='prompt'] p {
        text-align: left;
        font-size: 16px;
        padding-left: 16px;
      }
      .survey-debrief-item[type='response'] {
        justify-content: space-evenly;
      }
      .radiogroup {
        width: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
      }
      .radiogroup label {
        font-size: 15px;
        display: block;
        margin-bottom: 4px;
      }
      .radiogroup input[type="radio"] {
        position: relative;
        height: 16px;
        width: 16px;
        margin: auto;
      }
      .radiogroup input[type="radio"]:before {
        display: block;
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform : translateY(-50%);
        width: 45px;
        height: 2px;
        background: #d8dcd6;
        content: '';
      }
      .radiogroup:last-child input[type="radio"]:before {
        display: none;
      }
      .survey-debrief-item[type='response'] input[type=text] {
        width: 90%;
        height: 32px;
        padding: 4px 4px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .survey-debrief-footer {
        margin: auto;
        width: 900px;
        padding: 0 0 0 0;
        text-align: right;
      }
      .survey-debrief-footer input[type=submit] {
        background-color: #F0F0F0;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-right: 0px;
        font-size: 1.15vw;
        color: black;
      }
      </style>`;

      // initialize HTML
      html += '<form id="jspsych-survey-debrief">';

      // add preamble
      html += '<div class=survey-debrief-instructions>';
      html += '<p>Please answer the questions below. <font color="#c87606">Your answers will not affect your payment or bonus.</font></p>'
      html += '</div>';

      // initialize survey container
      html += '<div class="survey-debrief-container">';

      // mental demand item
      if (trial.mental_demand) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How mentally demanding was the task?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="mental-demand">' + k + '</label>';
          html += '<input type="radio" name="mental-demand" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // physical demand item
      if (trial.physical_demand) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How physically demanding was the task?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="physical-demand">' + k + '</label>';
          html += '<input type="radio" name="physical-demand" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // temporal demand
      if (trial.temporal_demand) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How hurried or rushed was the pace of the task?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="temporal-demand">' + k + '</label>';
          html += '<input type="radio" name="temporal-demand" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // task fun item
      if (trial.task_fun) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How fun was the task?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="task-fun">' + k + '</label>';
          html += '<input type="radio" name="task-fun" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // task instructions
      if (trial.task_instructions) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How clear were the task instructions?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="task-instructions">' + k + '</label>';
          html += '<input type="radio" name="task-instructions" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // subject performance
      if (trial.performance) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How successful were you in accomplishing what you<br>were asked to do during the task?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="performance">' + k + '</label>';
          html += '<input type="radio" name="performance" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // subject effort
      if (trial.effort) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How hard did you have to work to accomplish your<br>level of performance?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="effort">' + k + '</label>';
          html += '<input type="radio" name="effort" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // subject frustration
      if (trial.frustration) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>How discouraged, irritated, stressed, or annoyed<br>were you during the task?</p>';
        html += '</div>';

        // iteratively add response options
        html += '<div class="survey-debrief-item" type="response">';
        ['Not at all', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', 'Very much'].forEach((k, v) => {
          html += '<div class="radiogroup">';
          html += '<label for="frustration">' + k + '</label>';
          html += '<input type="radio" name="frustration" value="' + v + '" required>';
          html += '</div>';
        });
        html += '</div>';

      }

      // task strategy
      if (trial.strategy) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>Did you use any strategies during the task?<br><small>(e.g. write things down)</small></p>';
        html += '</div>';

        // add free response option
        html += '<div class="survey-debrief-item" type="response">';
        html += '<input type="text" name="strategy">';
        html += '</div>';

      }

      // additional feedback
      if (trial.feedback) {

        // add prompt
        html += '<div class="survey-debrief-item" type="prompt">';
        html += '<p>Do you have any other comments or feedback?</p>';
        html += '</div>';

        // add free response option
        html += '<div class="survey-debrief-item" type="response">';
        html += '<input type="text" name="feedback">';
        html += '</div>';

      }

      // Close survey-debrief-container.
      html += '</div>';

      // Add submit button.
      html += '<div class="survey-debrief-footer">';
      html += `<input type="submit" id="jspsych-survey-debrief-next" class="jspsych-btn jspsych-survey-debrief" value="${trial.button_label}"></input>`;
      html += '</div>';

      // End survey.
      html += '</form>';

      // Display HTML
      display_element.innerHTML = html;

      //---------------------------------------//
      // Define functions.
      //---------------------------------------//

      // Scroll to top of screen.
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

      display_element.querySelector('#jspsych-survey-debrief').addEventListener('submit', function(event) {

        // Wait for response
        event.preventDefault();

        // verify that at least one box has been checked for the race question
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');

        // Measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;

        var question_data = serializeArray(this);
        question_data = objectifyForm(question_data);

        // Store data
        var trialdata = {
          "rt": response_time,
          "responses": question_data
        };

        // Update screen
        display_element.innerHTML = '';

        // Move onto next trial
        jsPsych.finishTrial(trialdata);

      });

      var startTime = performance.now();

      /*!
      * Serialize all form data into an array
      * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
      * @param  {Node}   form The form to serialize
      * @return {String}      The serialized form data
      */
      var serializeArray = function (form) {
        // Setup our serialized data
        var serialized = [];

        // Loop through each field in the form
        for (var i = 0; i < form.elements.length; i++) {
          var field = form.elements[i];

          // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
          if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

          // If a multi-select, get all selections
          if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
              if (!field.options[n].selected) continue;
              serialized.push({
                name: field.name,
                value: field.options[n].value
              });
            }
          }

          // Convert field data to a query string
          else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push({
              name: field.name,
              value: field.value
            });
          }
        }

        return serialized;
      };

      // from https://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery
      function objectifyForm(formArray) {//serialize data function
        var returnArray = {};
        for (var i = 0; i < formArray.length; i++){
          returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
      }

    }
  }
  SurveyFeedbackPlugin.info = info;

  return SurveyFeedbackPlugin;

})(jsPsychModule);
