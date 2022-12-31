var jsPsychSurveyMap = (function (jspsych) {
  'use strict';

  const info = {
    name: 'survey-map',
    description: '',
    parameters: {
      questions: {
        type: jspsych.ParameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          item: {
            type: jspsych.ParameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'Questions that are associated with the slider.'
          },
          scale: {
            type: jspsych.ParameterType.STRING,
            array: true,
            pretty_name: 'Labels',
            default: undefined,
            description: 'Labels to display for individual question.'
          },
          name: {
            type: jspsych.ParameterType.STRING,
            pretty_name: 'Question Name',
            default: '',
            description: 'Controls the name of data values associated with this question'
          },
          required: {
            type: jspsych.ParameterType.BOOL,
            pretty_name: 'Required',
            default: true,
            description: 'Makes answering the question required.'
          }
        }
      },
      instructions: {
        type: jspsych.ParameterType.HTML_STRING,
        pretty_name: 'Instructions',
        decription: 'The instructions associated with the survey'
      },
      survey_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Survey width',
        default: 900,
        description: 'The number of pixels occupied by the survey'
      },
      item_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Item width',
        default: 50,
        description: 'The percentage of a row occupied by an item text'
      },
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
    }
  }
  class SurveyMapPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      //---------------------------------------//
      // Define survey HTML.
      //---------------------------------------//

      // Initialize HTML
      var html = '';

      // Define CSS constants
      const n  = 5;                               // Number of item responses
      const x1 = trial.item_width;                // Width of item prompt (percentage)
      const x2 = (100 - trial.item_width) / n;    // Width of item response (percentage)

      // Insert CSS
      html += `<style>
      .survey-template-wrap {
        height: 100vh;
        width: 100vw;
      }
      .survey-template-instructions {
        width: ${trial.survey_width}px;
        margin: auto;
        font-size: 16px;
        line-height: 1.5em;
      }
      .survey-template-container {
        display: grid;
        grid-template-columns: ${x1}% repeat(${n}, ${x2}%);
        grid-template-rows: auto;
        width: ${trial.survey_width}px;
        margin: auto;
        background-color: #F8F8F8;
        border-radius: 8px;
      }
      .survey-template-row {
        display: contents;
      }
      .survey-template-row:hover div {
        background-color: #dee8eb;
      }
      .survey-template-header {
        padding: 18px 0 0px 0;
        text-align: center;
        font-size: 14px;
        line-height: 1.15em;
      }
      .survey-template-prompt {
        padding: 12px 0 12px 15px;
        text-align: left;
        font-size: 15px;
        line-height: 1.15em;
        justify-items: center;
      }
      .survey-template-response {
        padding: 12px 0 12px 0;
        font-size: 13px;
        text-align: center;
        line-height: 1.15em;
        justify-items: center;
      }
      .survey-template-response input[type='radio'] {
        position: relative;
        width: 16px;
        height: 16px;
      }
      .survey-template-response .pseudo-input {
        position: relative;
        height: 0px;
        width: 0px;
        display: inline-block;
      }
      .survey-template-response .pseudo-input:after {
        position: absolute;
        left: 6.5px;
        top: -6px;
        height: 2px;
        width: calc(${trial.survey_width}px * ${x2 / 100} - 100%);
        background: #d8dcd6;
        content: "";
      }
      .survey-template-response:last-child .pseudo-input:after {
        display: none;
      }
      .survey-template-footer {
        margin: auto;
        width: ${trial.survey_width}px;
        padding: 0 0 0 0;
        text-align: right;
      }
      .survey-template-footer input[type=submit] {
        background-color: #F0F0F0;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-right: 0px;
        font-size: 13px;
        color: black;
      }
      </style>`;

      // Initialize survey.
      html += '<div class="survey-template-wrap"><form name="survey-template" id="survey-template-submit">';

      // Add instructions.
      html += '<div class="survey-template-instructions" id="instructions">';
      html += `<p>${trial.instructions}<p>`;
      html += '</div>';

      // Iteratively add items.
      html += '<div class="survey-template-container">';

      for (var i = 0; i < trial.questions.length; i++) {

        // Define item ID.
        if (trial.questions[i].name == "") {
          trial.questions[i].name == "Q" + ("0" + `${item_order[i]+1}`).slice(-2);
        }

        // Add response headers.
        html += '<div class="survey-template-header"></div>';
        for (var j = 0; j < trial.questions[i].scale.length; j++) {
          html += `<div class="survey-template-header">${trial.questions[i].scale[j]}</div>`;
        }

        // Add row.
        html += '<div class="survey-template-row">';
        html += `<div class='survey-template-prompt'>${trial.questions[i].item}</div>`;
        for (var j = 0; j < trial.questions[i].scale.length; j++) {
          html += '<div class="survey-template-response">';
          html += '<div class="pseudo-input"></div>';
          html += `<input type="radio" name="${trial.questions[i].name}" value="${j}" id=${j} tabindex="-1" required>`;
          html += "</div>";
        }
        html += '</div>';

      }
      html += '</div>';

      // Add submit button.
      html += '<div class="survey-template-footer">';
      html += `<input type="submit" value="${trial.button_label}"></input>`;
      html += '</div>';

      // End survey.
      html += '</form></div>';

      // Display HTML
      display_element.innerHTML = html;

      //---------------------------------------//
      // Response handling.
      //---------------------------------------//

      // Scroll to top of screen.
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

      // Preallocate space.
      var key_events = [];
      var mouse_events = [];
      var radio_events = [];

      // Add event listener.
      function log_event(event) {
        const response_time = performance.now() - startTime;
        if (event.screenX > 0) {
          mouse_events.push( response_time );
        } else {
          key_events.push( response_time );
        }
        if (event.target.type == "radio") {
          radio_events.push( response_time )
        }
      }
      document.addEventListener("click", log_event);

      display_element.querySelector('#survey-template-submit').addEventListener('submit', function(event) {

        // Wait for response
        event.preventDefault();

        // Measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;

        // Serialize data
        var question_data = serializeArray(this);

        // Extract responses
        var responses = objectifyForm(question_data);

        // Store data
        var trialdata = {
          "responses": responses,
          "rt": response_time,
          "radio_events": radio_events,
          "key_events": key_events,
          "mouse_events": mouse_events,
        };

        // Remove event listener
        document.removeEventListener("click", log_event);

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

          // Convert field data to a query string
          if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push({
              name: field.name,
              position: field.id,
              value: field.value,
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
  SurveyMapPlugin.info = info;

  return SurveyMapPlugin;

})(jsPsychModule);
