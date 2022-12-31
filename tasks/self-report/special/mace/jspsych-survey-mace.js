var jsPsychSurveyMace = (function (jspsych) {
  'use strict';

  const info = {
    name: 'survey-mace',
    description: '',
    parameters: {
      items: {
        type: jspsych.ParameterType.HTML_STRING,
        array: true,
        pretty_name: 'Items',
        decription: 'The polar questions associated with the survey'
      },
      scale: {
        type: jspsych.ParameterType.HTML_STRING,
        array: true,
        pretty_name: 'Scale',
        decription: 'The response options associated with the polar questions'
      },
      conditional_item: {
        type: jspsych.ParameterType.HTML_STRING,
        pretty_name: 'Conditional items',
        decription: 'The conditional questions associated with the survey'
      },
      conditional_scale: {
        type: jspsych.ParameterType.HTML_STRING,
        array: true,
        pretty_name: 'Conditional scale',
        decription: 'The response options associated with the conditional questions'
      },
      instructions: {
        type: jspsych.ParameterType.HTML_STRING,
        pretty_name: 'Instructions',
        decription: 'The instructions associated with the survey'
      },
      randomize_question_order: {
        type: jspsych.ParameterType.BOOL,
        pretty_name: 'Randomize Question Order',
        default: false,
        description: 'If true, the order of the questions will be randomized'
      },
      survey_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Survey width',
        default: 950,
        description: 'The number of pixels occupied by the survey'
      },
      item_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Item width',
        default: 50,
        description: 'The percentage of a row occupied by an item text'
      },
      conditional_item_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Item width',
        default: 20,
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

  /* jspsych-survey-condtional.js
  * a jspsych plugin extension for creating conditional questioannaires
  *
  * authors: Lauri Tuominen
  *
  */
  class SurveyMacePlugin {
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
      const n  = trial.scale.length;              // Number of item responses
      const n2 = trial.conditional_scale.length;
      const x1 = trial.item_width;                // Width of item prompt (percentage)
      const x2 = (100 - trial.item_width) / n;    // Width of item response (percentage)
      const c1 = trial.conditional_item_width;
      const c2 = (100 - trial.conditional_item_width) / n2;    // Width of item response (percentage)

      // Insert CSS
      html += `<style>

      .survey-template-wrap {
        height: 100vh;
        width: 100%;
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
      .survey-template-container-conditional {
        display: grid;
        grid-template-columns: ${c1}% repeat(${n2}, ${c2}%);
        grid-template-rows: auto;
        width: ${trial.survey_width}px;
        margin: auto;
        background-color: #F0F8FF;
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
        width: 20px;
        height: 20px;
      }
      .survey-template-response input[type='checkbox'] {
        position: relative;
        width: 20px;
        height: 20px;
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
      .hidden {
        height: 0;
        visibility:hidden;
      }
      /* honeypot css */
      .survey-template-block {
        position: absolute;
        top: 0%;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      </style>`;

      // Initialize survey.
      html += '<div class="survey-template-wrap">';

      // Initialize form.
      html += '<form name="survey-template" id="survey-template-submit">';

      // Add instructions.
      html += '<div class="survey-template-instructions" id="instructions">';
      html += `<p>${trial.instructions}<p>`;
      html += '</div>';

      // Randomize question order.
      const item_order = [];
      for (var i=0; i < trial.items.length; i++){
        item_order.push(i);
      }
      if(trial.randomize_question_order){
        item_order = jsPsych.randomization.shuffle(item_order);
      }

      // Iteratively add items.
      for (var i = 0; i < trial.items.length; i++) {
        // Define item ID.
        const qid = ("0" + `${item_order[i]+1}`);

        // Define response values.
        const polar_values = trial.scale;

        const conditional_values = [];
        for (var j = 1; j <= trial.conditional_scale.length; j++){ conditional_values.push(j); }

        // Add a container and a response header for the polar question
        html += `<div class="survey-template-container" id="Container_${qid}">`;
        html += '<div class="survey-template-header"></div>';
        for (var j = 0; j < trial.scale.length; j++) {
          html += `<div class="survey-template-header">${trial.scale[j]}</div>`;
        }
        // Add row for the polar question.
        html += '<div class="survey-template-row">';
        html += `<div class='survey-template-prompt'>${trial.items[item_order[i]]}</div>`;
        for (let v of polar_values) {
          html += '<div class="survey-template-response">';
          html += '<div class="pseudo-input"></div>';
          html += `<input type="radio" name="${qid}" value="${v}" id="Q${qid}.${v}" tabindex="-1" required>`;
          html += "</div>";
        }
        html += '</div>';
        // container end
        html += '</div>';

        // Add a container and response header for the conditional question
        html += `<div class="survey-template-container-conditional hidden" id="Container_${qid}_hidden">`;
        html += '<div class="survey-template-header" ></div>';
        for (var j = 0; j < trial.conditional_scale.length; j++) {
          html += `<div class="survey-template-header">${trial.conditional_scale[j]}</div>`;
        }

        // Add row for the conditional question
        html += '<div class="survey-template-row">';
        html += `<div class='survey-template-prompt'>${trial.conditional_item}</div>`;
        for (let v of conditional_values) {
          html += '<div class="survey-template-response">';
          html += `<input type="checkbox" name="${qid}_ages_${v}" value="${v}" tabindex="-1">`;
          html += "</div>";
        }
        html += '</div>';
        // finish conditional container
        html += '</div>';
      }

      // Add submit button.
      html += '<div class="survey-template-footer">';
      html += `<input type="submit" id="submit-button" value="${trial.button_label}"></input>`;
      html += '</div>';

      // End form.
      html += '</form>';

      // Add honeypot.
      html += '<div class="survey-template-block" tabindex="-1">';
      html += '<form id="survey-template-form">';
      html += `<input type="radio" name="Q00" value="0" tabindex="-1">`;
      html += `<input type="radio" name="Q00" value="1" tabindex="-1">`;
      html += `<input type="radio" name="Q00" value="2" tabindex="-1">`;
      html += '</form>';
      html += '</div>';

      // End survey.
      html += '</div>';

      // Display HTML
      display_element.innerHTML = html;
      window.scrollTo(0,0);

      //------------------------------------------//
      // Functions to create conditional response
      //------------------------------------------//

      function require_checkboxes(hidden_checkboxes, addvalidate){
        const checked = []
        for (let h of hidden_checkboxes){ if (h.checked) checked.push(h) }
        if (checked.length > 0) {
          for (let h of hidden_checkboxes) { h.removeAttribute('required'); if(addvalidate) {h.setCustomValidity('')}}
        } else {
          for (let h of hidden_checkboxes) { h.required = true; if (addvalidate) {h.setCustomValidity('You must choose at least one response for this question')}}
        }
      };

      // Visibility etc of the conditional items
      const unhide = function(event){
        // If yes to polar question, unhide the hidden conditional question and vice versa
        const val = event.target.value;
        const hidden_target = document.getElementById(event.currentTarget.id.concat('_hidden'))
        if (val === trial.scale[0]) {
          hidden_target.style.visibility = 'visible'
          hidden_target.style.height = 'auto'
        } else if (val === trial.scale[1]) {
          hidden_target.style.visibility = 'hidden'
          hidden_target.style.height = '0px'
          const hidden_checkboxes = hidden_target.querySelectorAll("[type='checkbox']")
          for (let h of hidden_checkboxes) { h.removeAttribute('required'); h.setCustomValidity('')}
        }
      }

      // attach unhide function to all survey containers
      const containers = display_element.querySelectorAll(".survey-template-container")
      for (let c of containers) {c.addEventListener('click',unhide)}

      const toggle_required = function(event){
        // If hidden checkbox is clicked make all other checkboxes unrequired
        if (event.target.type != 'checkbox') {return}
        const hidden_checkboxes = document.getElementById(event.currentTarget.id).querySelectorAll("[type='checkbox']");
        require_checkboxes(hidden_checkboxes, addvalidate=true)
      }

      // attach toggle_required function to all conditional survey containers
      const hidden_containers = display_element.querySelectorAll(".survey-template-container-conditional")
      for (let h of hidden_containers) {h.addEventListener('click',toggle_required)}

      display_element.querySelector('#submit-button').addEventListener('click', function(){
        // Adds listener to submit button, checks all hidden containers are made visible and complaines if they don't have at least one checkbox checked
        const all_hidden_containers = document.querySelectorAll(".survey-template-container-conditional")
        const containers_made_visible = []
        for (let h of all_hidden_containers){
          if (h.style.visibility === 'visible') {containers_made_visible.push(h.id)}
        }
        for (let h of containers_made_visible) {
          const checkboxes =document.getElementById(h).querySelectorAll("[type='checkbox']")
          if (document.getElementById(h).querySelector('input:checked') == null) {
            for (let c of checkboxes) {
              c.setCustomValidity('You must choose at least one response for this question');
            }
          } else {
            for (let c of checkboxes) {
              c.setCustomValidity('');
            }
          }
        }
      })

      //---------------------------------------//
      // Response handling.
      //---------------------------------------//

      // Preallocate space.
      var key_events = [];
      var mouse_events = [];
      var radio_events = [];
      var checkbox_events = [];

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
        } else if (event.target.type == "checkbox") {
          checkbox_events.push( response_time )
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

        // Check honeypot.
        var honeypot = serializeArray(display_element.querySelector('#survey-template-form'));
        honeypot = (honeypot.length > 0) ? 1 : 0;

        // Store data
        var trialdata = {
          "responses": responses,
          "rt": response_time,
          "item_order": item_order,
          "radio_events": radio_events,
          "checkbox_events": checkbox_events,
          "key_events": key_events,
          "mouse_events": mouse_events,
          "honeypot": honeypot
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
  SurveyMacePlugin.info = info;

  return SurveyMacePlugin;

})(jsPsychModule);
