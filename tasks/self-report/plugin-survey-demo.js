var jsPsychSurveyDemo = (function (jspsych) {
  'use strict';

  const info = {
    name: 'survey-demo',
    description: '',
    parameters: {
      button_label: {
        type: jspsych.ParameterTypeSTRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
    }
  }

  /**
  * jspsych-survey-demo
  * a jspsych plugin for the Niv lab demographics form
  */
  class SurveyDemoPlugin {
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
      .survey-demo-wrap {
        height: 100vh;
        width: 100vw;
      }
      .survey-demo-instructions {
        margin: auto;
        width: 800px;
        padding: 0 0 0 0;
        text-align: center;
        font-size: 15px;
        line-height: 1.15em;
      }
      .survey-demo-container {
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: auto;
        width: 800px;
        margin: auto;
        background-color: #F8F8F8;
        border-radius: 12px;
      }
      .survey-demo-row {
        display: contents;
        justify-items: center;
        text-align: left;
        font-size: 16px;
        line-height: 1.5em;
      }
      .survey-demo-prompt {
        padding: 12px 0 12px 15px;
        border-top: 2px solid #ffffff;
      }
      .survey-demo-prompt label {
        padding: 0 8px 0 0;
        display: inline-block;
      }
      .survey-demo-response {
        padding: 12px 0 12px 0;
        border-top: 2px solid #ffffff;
      }
      .survey-demo-response label {
        padding: 0 1em 0 0;
        display: inline-block;
      }
      .survey-demo-response input[type='radio'], input[type='checkbox'] {
        height: 13px;
        width: 13px;
        margin: 0 6px 0 0;
      }
      .survey-demo-response input[type='number'], input[type='text'] {
        height: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .survey-demo-response input[type='number'] {
        width: 40px;
      }
      .survey-demo-response input[type='text'] {
        width: 15%;
      }
      .survey-demo-footer {
        margin: auto;
        width: 800px;
        padding: 0 0 0 0;
        text-align: right;
      }
      .survey-demo-footer input[type=submit] {
        background-color: #F0F0F0;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-right: 0px;
        font-size: 14px;
        color: black;
      }
      </style>`;

      // Initialize survey.
      html += '<div class="survey-demo-wrap"><form id="jspsych-survey-demo">';

      // Add demoing header.
      html += '<div class=survey-demo-instructions>';
      html += '<h2>Demographics Survey</h2>';
      html += '<p>Please answer the questions below. <font color="#c87606">Your answers will not affect your payment or bonus.</font></p>'
      html += '</div>';

      // Begin demoing container.
      html += '<div class="survey-demo-container">';

      // Item 1: Age
      html += '<div class="survey-demo-row">';
      html += '<div class="survey-demo-prompt"><label for="age">What is your age?</label></div>';
      html += '<div class="survey-demo-response">';
      html += '<input type="number" name="age" min="18" max="100" size="20">';
      html += '</div></div>';

      // Item 2: Gender
      html += '<div class="survey-demo-row">';
      html += '<div class="survey-demo-prompt"><label for="gender">How would you describe your gender?</label></div>';
      html += '<div class="survey-demo-response">';
      html += '<label><input type="radio" name="gender" value="Man" required>Man</label><br>';
      html += '<label><input type="radio" name="gender" value="Woman" required>Woman</label><br>';
      html += '<label><input type="radio" name="gender" value="Non-binary" required>Non-binary</label><br>';
      html += '<label style="padding: 0 0.5em 0 0;"><input type="radio" name="gender" value="I use a different term" required>I use a different term</label>';
      html += '<input type="text" name="gender-free-response" maxlength="24" size="10"></label><br>';
      html += '<label><input type="radio" name="gender" value="Rather not say" required>Rather not say</label>';
      html += '</div></div>';

      // Item 3: Sex
      html += '<div class="survey-demo-row">';
      html += '<div class="survey-demo-prompt"><label for="sex">What sex were you assigned at birth, meaning on your birth certificate?</label></div>';
      html += '<div class="survey-demo-response">';
      html += '<label><input type="radio" name="sex" value="Male" required>Male</label><br>';
      html += '<label><input type="radio" name="sex" value="Female" required>Female</label><br>';
      html += '<label style="padding: 0 0.5em 0 0;"><input type="radio" name="sex" value="Another term" required>Another term</label>';
      html += '<input type="text" name="sex-free-response" maxlength="24" size="10"></label><br>';
      html += '<label><input type="radio" name="sex" value="Rather not say" required>Rather not say</label>';
      html += '</div></div>';

      // Item 4: Ethnicity
      html += '<div class="survey-demo-row">';
      html += '<div class="survey-demo-prompt"><label for="ethnicity">What is your ethnicity?</label></div>';
      html += '<div class="survey-demo-response">';
      html += '<label><input type="radio" name="ethnicity" value="Hispanic or Latino" required>Hispanic or Latino</label><br>';
      html += '<label><input type="radio" name="ethnicity" value="Not Hispanic or Latino" required>Not Hispanic or Latino</label><br>';
      html += '<label><input type="radio" name="ethnicity" value="Unknown" required>Unknown</label><br>';
      html += '<label><input type="radio" name="ethnicity" value="Rather not say" required>Rather not say</label>';
      html += '</div></div>';

      // Item 5: Race
      html += '<div class="survey-demo-row">';
      html += '<div class="survey-demo-prompt"><label for="race">What is your race?<br><small>(Choose all that apply)</small></label></div>';
      html += '<div class="survey-demo-response">';
      html += '<label><input type="checkbox" name="race" value="American Indian/Alaska Native">American Indian/Alaska Native</label><br>';
      html += '<label><input type="checkbox" name="race" value="Asian">Asian</label><br>';
      html += '<label><input type="checkbox" name="race" value="Native Hawaiian or other Pacific Islander">Native Hawaiian or other Pacific Islander</label><br>';
      html += '<label><input type="checkbox" name="race" value="Black or African American">Black or African American</label><br>';
      html += '<label><input type="checkbox" name="race" value="White">White</label><br>';
      html += '<label><input type="checkbox" name="race" value="Rather not say">Rather not say</label>';
      html += '</div></div>';

      // Item 6: Education
      html += '<div class="survey-demo-row">';
      html += '<div class="survey-demo-prompt"><label for="education">What is the highest level of schooling you have completed?</label></div>';
      html += '<div class="survey-demo-response">';
      html += '<label><input type="radio" name="education" value="Less than high school" required>Less than high school diploma</label><br>';
      html += '<label><input type="radio" name="education" value="High school" required>High school diploma or equivalent</label><br>';
      html += '<label><input type="radio" name="education" value="Some college" required>Some college but no degree</label><br>';
      html += `<label><input type="radio" name="education" value="Associate degree" required>Associate's degree</label><br>`;
      html += `<label><input type="radio" name="education" value="Bachelor degree" required>Bachelor's degree</label><br>`;
      html += `<label><input type="radio" name="education" value="Master degree or higher" required>Master's or higher degree</label><br>`;
      html += '<label><input type="radio" name="education" value="Rather not say" required>Rather not say</label>';
      html += '</div></div>';

      // Close container.
      html += '</div>';

      // Add submit button.
      html += '<div class="survey-demo-footer">';
      html += `<input type="submit" value="${trial.button_label}"></input>`;
      html += '</div>';

      // End survey.
      html += '</form></div>';

      // Display HTML
      display_element.innerHTML = html;

      //---------------------------------------//
      // Define functions.
      //---------------------------------------//

      // Scroll to top of screen.
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

      display_element.querySelector('#jspsych-survey-demo').addEventListener('submit', function(event) {

        // Wait for response
        event.preventDefault();

        // verify that at least one box has been checked for the race question
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);

        if(!checkedOne){

          alert("You did not enter a response for the question \"What is your race?\". Please choose at least one option.");

        } else {

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

        }

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

        // add checkbox responses
        var checkbox_types = document.querySelectorAll('input[type=checkbox]');
        var checkbox_names = [];
        for (var i = 0; i < checkbox_types.length; i++) {
          if (! checkbox_names.includes(checkbox_types[i].name) ){
            checkbox_names.push(checkbox_types[i].name)
          }
        }

        for (var i = 0; i < checkbox_names.length; i++ ){
          var checkboxes = document.querySelectorAll(`input[name=${checkbox_names[i]}]:checked`)
          var responses = [];

          for (var j = 0; j < checkboxes.length; j++) {
            responses.push(checkboxes[j].value)
          }
          serialized.push({
            name: checkbox_names[i],
            value: responses
          })

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
  SurveyDemoPlugin.info = info;

  return SurveyDemoPlugin;

})(jsPsychModule);
