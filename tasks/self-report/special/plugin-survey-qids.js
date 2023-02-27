/**
* Quick Inventory of Depressive Symptomatology (Self-Report) (QIDS-SR 16)
*
* Rush, A. J., Trivedi, M. H., Ibrahim, H. M., Carmody, T. J., Arnow, B., 
* Klein, D. N., Markowitz, J. C., Ninan, P. T., Kornstein, S., Manber, R.,
* Thase, M. E., Kocsis, J. H., & Keller, M. B. (2003). The 16-Item Quick
* Inventory of Depressive Symptomatology (QIDS), clinician rating (QIDS-C),
* and self-report (QIDS-SR): a psychometric evaluation in patients with chroni
* major depression. Biological psychiatry, 54(5), 573–583.
* https://doi.org/10.1016/s0006-3223(02)01866-8
*
**/

var jsPsychSurveyQids = (function(jspsych) {
  'use strict';

  const info = {
    name: 'survey-qids',
    description: '',
    parameters: {
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      }
    }
  }
  class SurveyQidsPlugin {
    constructor(jsPsych){
      this.jsPsych = jsPsych;
    }
    trial (display_element, trial) {

      //---------------------------------------//
      // Define items.
      //---------------------------------------//
      // Define items.
      const items = [
        {
          prompt: "Falling asleep:",
          responses: ["I never take longer than 30 minutes to fall asleep.", 
          "I take at least 30 minutes to fall asleep, less than half the time.", 
          "I take at least 30 minutes to fall asleep, more than half the time.",
          "I take more than 60 minutes to fall asleep, more than half the time."],
          values: [0,1,2,3]
        },
        {
          prompt: "Sleep During the Night:",
          responses: ["I do not wake up at night.", 
          "I have a restless, light sleep with a few brief awakenings each night.", 
          "I wake up at least once a night, but I go back to sleep easily.", 
          "I awaken more than once a night and stay awake for 20 minutes or more, more than half the time."],
          values: [0,1,2,3]
        },
        {
          prompt: "Waking Up Too Early:",
          responses: ["Most of the time, I awaken no more than 30 minutes before I need to get up.", 
          "More than half the time, I awaken more than 30 minutes before I need to get up.", 
          "I almost always awaken at least one hour or so before I need to, but I go back to sleep eventually.", 
          "I awaken at least one hour before I need to, and can't go back to sleep."],
          values: [0,1,2,3]
        },
        {
          prompt: "Sleeping Too Much:",
          responses: ["I sleep no longer than 7-8 hours/night, without napping during the day.",
          "I sleep no longer than 10 hours in a 24-hour period including naps.", 
          "I sleep no longer than 12 hours in a 24-hour period including naps.", 
          "I sleep longer than 12 hours in a 24-hour period including naps."],
          values: [0,1,2,3,4]
        },
        {
          prompt: "Feeling Sad:",
          responses: ["I do not feel sad.", "I feel sad less than half the time.", 
          "I feel sad more than half the time.", "I feel sad nearly all of the time."],
          values: [0,1,2,3]
        },
        {
          prompt: "Decreased Appetite:",
          responses: [ "There is no change in my usual appetite",
          "I eat somewhat less often or lesser amounts of food than usual.", 
          "I eat much less than usual and only with personal effort.", 
          "I rarely eat within a 24-hour period, and only with extreme personal effort or when others persuade me to eat."],
          values: [0,1,2,3],
        },
        {
          prompt: "Increased Appetite:",
          responses: ["There is no change in my usual appetite",
          "I feel a need to eat more frequently than usual.", 
          "I regularly eat more often and/or greater amounts of food than usual.", "I feel driven to overeat at mealtime and between meals."],
          values: [0,1,2,3],
        },
        {
          prompt: "Decreased Weight (Within the Last Two Weeks):",
          responses: ["I have not had a change in my weight",
          "I feel as if I have had a slight weight loss.", 
          "I have lost 2 pounds or more.", "I have lost 5 pounds or more."],
          values: [0,1,2,3],
        },
        {
          prompt: "Increased Weight (Within the Last Two Weeks):",
          responses: ["I have not had a change in my weight",
          "I feel as if I have had a slight weight gain.", 
          "I have gained 2 pounds or more.", 
          "I have gained 5 pounds or more."],
          values: [0,1,2,3],
        },
        {
          prompt: "Concentration/Decision Making:",
          responses: ["There is no change in my usual capacity to concentrate or make decisions.",
          "I occasionally feel indecisive or find that my attention wanders.", 
          "Most of the time, I struggle to focus my attention or to make decisions.",
          "I cannot concentrate well enough to read or cannot make even minor decisions."],
          values: [0,1,2,3]
        },
        {
          prompt: "View of Myself:",
          responses: ["I see myself as equally worthwhile and deserving as other people.",
          "I am more self-blaming than usual.", 
          "I largely believe that I cause problems for others.",
          "I think almost constantly about major and minor defects in myself."],
          values: [0,1,2,3]
        },
        {
          prompt: "Toughts of Death or Suicide:",
          responses: ["I do not think of suicide or death.",
          "I feel that life is empty or wonder if it's worth living.",
          "I think of suicide or death several times a week for several minutes.",
          "I think of suicide or death several times a day in some detail, or I have made specific plans for suicide or have actually tried to take my life."],
        },
        {
          prompt: "General Interest:",
          responses: ["There is no change from usual in how interested I am in other people or activities.",
          "I notice that I am less interested in people or activities.", 
          "I find I have interest in only one or two of my formerly pursued activities.",
          "I have virtually no interest in formerly pursued activities."],
          values: [0,1,2,3]
        },
        {
          prompt: "Energy Level:",
          responses: ["There is no change in my usual level of energy.",
          "I get tired more easily than usual.", 
          "I have to make a big effort to start or finish my usual daily activities (for example, shopping, homework, cooking, or going to work).",
          "I really cannot carry out most of my usual daily activities because I just don't have the energy."],
          values: [0,1,2,3]
        },
        {
          prompt: "Feeling Slowed Down:",
          responses: ["I think, speak, and move at my usual rate of speed.",
          "I find that my thinking is slowed down or my voice sounds dull or flat.", 
          "It takes me several seconds to respond to most questions and I'm sure my thinking is slowed.",
          "I am often unable to respond to questions without extreme effort."],
          values: [0,1,2,3]
        },
        {
          prompt: "Feeling Restless:",
          responses: ["I do not feel restless.",
          "I'm often fidgety, wringing my hands, or need to shift how I am sitting.", 
          "I have impulses to move about and am quite restless.",
          "At times, I am unable to stay seated and need to pace around."],
          values: [0,1,2,3]
        },
      ]

      // Define instructions.
      const instructions = 'Choose the one response to each item that best describes you for the past seven days.';

      //---------------------------------------//
      // Define HTML.
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
  SurveyQidsPlugin.info = info;

  return SurveyQidsPlugin;

})(jsPsychModule);
