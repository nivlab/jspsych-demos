var jsPsychSurveyCovid = (function (jspsych) {
  'use strict';

  const info = {
    name: 'survey-covid',
    description: '',
    parameters: {
      row_prompt_percent: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Row prompt percent',
        default: 40,
        description: 'The percentage of a row the item prompt should occupy'
      },
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
    }
  }
  class SurveyCovidPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      //---------------------------------------//
      // Define questionnaire.
      //---------------------------------------//

      // Define items.
      var items = [
        "I am worried when I think about what is happening in the world.",
        "I am calm and relaxed.",
        "I am worried about my health.",
        "I am worried about the health of my family members or friends.",
        "I am worried about my financial situation.",
        "I am worried about the financial situation of my family members or friends.",
        "I feel stressed about leaving my house.",
        "I stayed at home.",
        "I did not attend social gatherings.",
        "I kept a distance of at least six feet (two meters) to other people.",
        "If I had exhibited symptoms of sickness, I would have immediately informed the people around me.",
        "I washed my hands more frequently than the month before."
      ];

      // Define response scale.
      var scale = [
        "Does not<br>apply at all",
        "Somewhat does<br>not apply",
        "Neither applies<br>nor does not<br>apply",
        "Somewhat<br>applies",
        "Strongly<br>applies"
      ]

      // Define reverse scoring.
      var reverse = [false, true, false, false, false, false, false, false, false, false, false, false, ];

      // Define instructions.
      var instructions_01 = 'The following are some questions about your thoughts and feelings in response to the coronavirus (COVID-19) crisis.<br>Please read each statement and indicate how much the statement applied to you <b>right now.</b>';

      var instructions_02 = '<br>Please read each statement and indicate how much the statement applied to you <b>over the past week.</b>';

      //---------------------------------------//
      // Define survey HTML.
      //---------------------------------------//

      // Initialize HTML
      var html = '';

      // Define CSS constants
      const n  = scale.length;
      const x1 = trial.row_prompt_percent;
      const x2 = (100 - trial.row_prompt_percent) / n;

      // Insert CSS
      html += `<style>
      .survey-covid-wrap {
        height: 100vh;
        width: 100vw;
      }
      .survey-covid-instructions {
        width: 75vw;
        margin: auto;
        font-size: 1.25vw;
        line-height: 1.5em;
      }
      .survey-covid-container {
        display: grid;
        grid-template-columns: ${x1}% repeat(${n}, ${x2}%);
        grid-template-rows: auto;
        width: 75vw;
        margin: auto;
        background-color: #F8F8F8;
        border-radius: 8px;
      }
      .survey-covid-row {
        display: contents;
      }
      .survey-covid-row:hover div {
        background-color: #dee8eb;
      }
      .survey-covid-header {
        padding: 18px 0 0px 0;
        text-align: center;
        font-size: 1vw;
        line-height: 1.15em;
      }
      .survey-covid-prompt {
        padding: 12px 0 12px 15px;
        text-align: left;
        font-size: 1.15vw;
        line-height: 1.15em;
        justify-items: center;
      }
      .survey-covid-response {
        padding: 12px 0 12px 0;
        font-size: 12px;
        text-align: center;
        line-height: 1.15em;
        justify-items: center;
      }
      .survey-covid-response input[type='radio'] {
        position: relative;
      }
      .survey-covid-response input[type='radio']::after {
        position: absolute;
        left: 100%;
        top: 50%;
        height: 2px;
        width: calc(75vw * ${x2 / 100} - 100%);
        background: #d8dcd6;
        content: "";
      }
      .survey-covid-response:last-child input[type='radio']::after {
        display: none;
      }
      .survey-covid-footer {
        margin: auto;
        width: 75vw;
        padding: 0 0 0 0;
        text-align: right;
      }
      .survey-covid-footer input[type=submit] {
        background-color: #F0F0F0;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-right: 0px;
        font-size: 1vw;
        color: black;
      }
      </style>`;

      // Initialize survey.
      html += '<div class="survey-covid-wrap"><form id="survey-covid-submit">';

      // Section 1: Mental health items
      // Add instructions.
      html += '<div class="survey-covid-instructions" id="instructions">';
      html += `<p>${instructions_01}<p>`;
      html += '</div>';

      // Iteratively add items.
      html += '<div class="survey-covid-container">';
      html += '<div class="survey-covid-header"></div>';
      for (var j = 0; j < scale.length; j++) {
        html += `<div class="survey-covid-header">${scale[j]}</div>`;
      }

      for (var i = 0; i < 7; i++) {

        // Define item ID.
        const qid = ("0" + `${i+1}`).slice(-2);

        // Define response values.
        var values = [];
        for (var j = 0; j < scale.length; j++){ values.push(j); }
        if (reverse[i]) { values = values.reverse(); }

        // Add row.
        html += '<div class="survey-covid-row">';
        html += `<div class='survey-covid-prompt'>${items[i]}</div>`;
        for (let v of values) {
          html += `<div class='survey-covid-response'><input type="radio" name="COVID-Q${qid}" value="${v}" required></div>`;
        }
        html += '</div>';

      }
      html += '</div>';


      // Section 2: Behavioral Items
      // Add instructions.
      html += '<div class="survey-covid-instructions" id="instructions">';
      html += `<p>${instructions_02}<p>`;
      html += '</div>';

      // Iteratively add items.
      html += '<div class="survey-covid-container">';
      html += '<div class="survey-covid-header"></div>';
      for (var j = 0; j < scale.length; j++) {
        html += `<div class="survey-covid-header">${scale[j]}</div>`;
      }

      for (var i = 7; i < 12; i++) {

        // Define item ID.
        const qid = ("0" + `${i+1}`).slice(-2);

        // Define response values.
        var values = [];
        for (var j = 0; j < scale.length; j++){ values.push(j); }
        if (reverse[i]) { values = values.reverse(); }

        // Add row.
        html += '<div class="survey-covid-row">';
        html += `<div class='survey-covid-prompt'>${items[i]}</div>`;
        for (let v of values) {
          html += `<div class='survey-covid-response'><input type="radio" name="COVID-Q${qid}" value="${v}" required></div>`;
        }
        html += '</div>';

      }

      html += '</div>';

      // Add submit button.
      html += '<div class="survey-covid-footer">';
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

      display_element.querySelector('#survey-covid-submit').addEventListener('submit', function(event) {

        // Wait for response
        event.preventDefault();

        // Measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;

        var question_data = serializeArray(this);
        question_data = objectifyForm(question_data);

        // Store data
        var trialdata = {
          "responses": question_data,
          "rt": response_time
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
  SurveyCovidPlugin.info = info;

  return SurveyCovidPlugin;

})(jsPsychModule);
