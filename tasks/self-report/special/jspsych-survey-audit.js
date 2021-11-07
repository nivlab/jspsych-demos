/**
 * jspsych-survey-audit
 *
 */

jsPsych.plugins['survey-audit'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'survey-audit',
    description: '',
    parameters: {
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
    }
  }
  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Define parameters.
    //---------------------------------------//

    // Define items.
    const items = [
      {
        prompt: "How often do you have a drink containing alcohol?",
        responses: ["Never", "Monthly or less", "2-4 times a month", "2-3 times a week", "4 or more times a week"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "How many drinks containing alcohol do you have on a typical day when you are drinking?",
        responses: ["1 or 2", "3 or 4", "5 or 6", "7 to 9", "10 or more"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "How often do you have six or more drinks on one occasion?",
        responses: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "During the past year, how often have you found that you were not able to stop drinking once you had started?",
        responses: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "During the past year, how often have you failed to do what was normally expected of you because of drinking?",
        responses: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "During the past year, how often have you needed a drink in the morning to get yourself going after a heavy drinking session?",
        responses: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "During the past year, how often have you had a feeling of guilt or remorse after drinking?",
        responses: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "During the past year, have you been unable to remember what happened the night before because you had been drinking?",
        responses: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0,1,2,3,4]
      },
      {
        prompt: "Have you or someone else been injured as a result of your drinking?",
        responses: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        values: [0,2,4]
      },
      {
        prompt: "Has a relative or friend or a doctor or another health worker been concerned about your drinking or suggested you cut down?",
        responses: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        values: [0,2,4]
      }
    ]

    // Define instructions.
    const instructions = "Because alcohol use can affect your health and can interfere with certain medications and treatments, it is important that we ask some questions about your use of alcohol. Please choose the option that best describes your answer to each question.";

    //---------------------------------------//
    // Define survey HTML.
    //---------------------------------------//

    // Initialize HTML
    var html = '';

    // Inject CSS
    html += `<style>
    .audit-header {
      width: 1000px;
      background-color: #fff;
      font-size: 16px;
      text-align: center;
    }
    input[type="radio"] {
      width: 14px;
      height: 14px;
      margin: 0 6px 0 0;
    }
    label {
      padding: 0 16px 0 20px;
      display: inline-block;
    }
    .audit-container {
      margin: auto;
      width: 1000px;
      background-color: #F8F8F8;
      border-radius: 5px;
    }
    .audit-prompt {
      float: left;
      width: 50%;
      margin-top: 6px;
      margin-bottom: 6px;
      font-size: 16px;
      text-align: left;
    }
    .audit-resp {
      float: left;
      width: 50%;
      margin-top: 6px;
      margin-bottom: 6px;
      font-size: 16px;
      text-align: left;
    }
    .row:after {
      content: "";
      display: table;
      clear: both;
    }
    .audit-footer {
      margin: auto;
      width: 1000px;
      padding: 0 0 0 0;
      background-color: #fff;
      text-align: right;
    }
    .audit-footer input[type=submit] {
      background-color: #F0F0F0;
      color: black;
      padding: 8px 20px;
      border: none;
      border-radius: 4px;
      float: right;
      margin-top: 2px;
      margin-right: 0px;
      margin-left: 0px;
      margin-bottom: 20px;
    }
    </style>`;

    // Draw instructions.
    html += "<div class=audit-header><p>" + instructions + "</p></div>";

    // Initialize form.
    html += '<form id="jspsych-survey-audit">'
    html += '<div class="audit-container">';

    // Iteratively add items.
    for (let i = 0; i < items.length; i++) {

      // Define item ID.
      const qid = ("0" + `${i+1}`).slice(-2);

      // Add rows breaks.
      if (i > 0) { html += '<hr color="#fff">'; }

      // Initialize row.
      html += '<div class="row">';

      // Add prompt.
      html += `<div class="audit-prompt"><label for="Q${qid}">` + items[i].prompt + '</label></div>';

      // Add responses.
      html += '<div class="audit-resp">';
      for (let j = 0; j < items[i].responses.length; j++) {
        html += `<label><input type="radio" name="Q${qid}" value="${items[i].values[j]}" required>${items[i].responses[j]}</label><br>`;
      }
      html += '</div>';

      // End row.
      html += '</div>';

    }

    // End survey container.
    html += '</div>';

    // Add submit button
    html += `<div class="audit-footer"><input type="submit" id="jspsych-survey-audit-next" class="jspsych-btn jspsych-survey-audit" value="${trial.button_label}"></input></div>`;

    // End form
    html += '</form>'

    // Display HTML
    display_element.innerHTML = html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // confirm screen resolution
    const mediaQuery = window.matchMedia('(min-width: 1000px)');

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
      const response_time = performance.now() - startTime
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

    display_element.querySelector('#jspsych-survey-audit').addEventListener('submit', function(event) {

        // Wait for response
        event.preventDefault();

        // Measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;

        var question_data = serializeArray(this);
        question_data = objectifyForm(question_data);

        // Store data
        var trialdata = {
          "rt": response_time,
          "radio_events": radio_events,
          "key_events": key_events,
          "mouse_events": mouse_events,
          "responses": question_data,
          "screen_resolution": (mediaQuery.matches) ? 1 : 0
        };

        // Remove event listener
        document.removeEventListener("click", log_event);

        // Update screen
        display_element.innerHTML = '';

        // Move onto next trial
        jsPsych.finishTrial(trialdata);

    });

    var startTime = performance.now();

  };

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

  return plugin;

})();
