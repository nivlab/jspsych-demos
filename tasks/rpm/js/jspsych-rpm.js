/**
* jspsych-rpm
* Sam Zorowitz
*
* plugin for running the Raven's progressive matrices
*
**/

jsPsych.plugins['rpm'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'rpm',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        description: 'The HTML string to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Choices',
        array: true,
        description: 'The labels for the buttons.',
      },
      correct: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Correct',
        description: 'The index of the correct response (0-indexed).'
      },
      countdown: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Countdown',
        default: true,
        description: 'If true, the countdown timer will be presented (last 5s).'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      randomize_choice_order: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Randomize choice order',
        default: false,
        description: 'If true, the order of the choices will be randomized.'
      },
      col_wrap: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Column wrap',
        default: 4,
        description: 'Max number of choice items per row.'
      }
    }
  }
  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Define HTML.
    //---------------------------------------//

    // Initialize HTML.
    var new_html = '';

    // Calculate grid layout.
    const nrow = Math.ceil( trial.choices.length / trial.col_wrap );

    // Insert CSS.
    new_html += `<style>
    .rpm-container {
      width: 100vw;
      height: 100vh;
    }
    .rpm-stimulus {

      /* Stimlus position */
      position: relative;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);

      /* Stimlus padding */
      margin-top: 30px;

    }
    .rpm-stimulus img {

      /* Stimlus size */
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 250px;

      /* Stimlus border */
      border: 2px solid #000000;

    }
    .rpm-feedback {

      /* Stimlus position */
      position: relative;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);

      /* Stimlus padding */
      margin-top: 30px;
      margin-bottom: 30px;

    }
    .rpm-feedback p {
      font-size: 30px;
      font-weight: bold;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    .rpm-choice-grid {

      /* Grid position */
      position: relative;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);

      /* Grid size */
      width: calc(${trial.col_wrap} * 160px);

      /* Grid parameters */
      display: grid;
      grid-template-columns: repeat(${trial.col_wrap}, calc(100% / ${trial.col_wrap}));
      grid-template-rows: repeat(${nrow}, calc(100% / ${nrow}));
      grid-gap: 20px;
      justify-content: center;

    }
    .rpm-choice-grid .rpm-choice {
      position: relative;
    }
    .rpm-choice-grid .rpm-choice img {

      /* Choice size */
      width:  auto;
      height: auto;
      max-height: 100%;
      max-width: 140px;

    }
    .rpm-choice-grid .rpm-choice img:hover {
      opacity: 0.5;
    }
    </style>`;

    // Initialize container.
    new_html += '<div class="rpm-container">';

    // Draw RPM stimulus.
    new_html += '<div class="rpm-stimulus">';
    new_html += `<img src="${trial.stimulus}"></img>`;
    new_html += '</div>';

    // Draw RPM feedback.
    new_html += '<div class="rpm-feedback" id="rpm-feedback">';
    new_html += '<p>&nbsp;</p>';
    new_html += '</div>';

    // Randomize choice order.
    var item_order = [...Array(trial.choices.length).keys()];
    if (trial.randomize_choice_order) {
       item_order = jsPsych.randomization.shuffle(item_order);
    }

    // Draw RPM choices.
    new_html += '<div class="rpm-choice-grid">';
    item_order.forEach((i) => {
      new_html += `<div class="rpm-choice" id="jspsych-rpm-choice-${i}" choice="${i}">`;
      new_html += `<img src="${trial.choices[i]}">`;
      new_html += '</div>';
    })
    new_html += '</div>';

    // Close container
    new_html += '</div>';

    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // start time
    var start_time = performance.now();

    // add event listeners to buttons
    for (var i = 0; i < trial.choices.length; i++) {
      display_element.querySelector('#jspsych-rpm-choice-' + i).addEventListener('click', function(e){
        var choice = e.currentTarget.getAttribute('choice');
        after_response(choice);
      });
    }

    // store response
    var response = {
      rt: null,
      choice: null,
      accuracy: null
    };

    // function to display remaining time
    function countdown(t) {
      display_element.querySelector('#rpm-feedback').innerHTML = '<p>'+t+'</p>';
    };

    // function to handle responses by the subject
    function after_response(choice) {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // measure response time
      var end_time = performance.now();
      var rt = (end_time - start_time) / 1000;

      // store responses.
      response.rt = rt;
      response.choice = parseInt(choice);
      response.accuracy = (trial.correct == response.choice) ? 1 : 0;

      // end trial
      end_trial();

    };

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        "stimulus": trial.stimulus,
        "correct": trial.correct,
        "choice": response.choice,
        "accuracy": response.accuracy,
        "rt": response.rt,
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // end trial if time limit is set
    if (trial.trial_duration !== null) {

      // initiate counter to end trial
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);

      // initiate countdown timers
      if (trial.countdown) {
        for (let i = 1; i <= 5; i++) {
          jsPsych.pluginAPI.setTimeout(function() {
            countdown(i);
          }, trial.trial_duration - i*1000);
        }
      }

    }

  };

  return plugin;
})();
