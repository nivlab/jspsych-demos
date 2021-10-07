/**
* jspsych-mars
* Sam Zorowitz
*
* plugin for one trial of the matrix reasoning item bank (MaRs-IB)
*
* documentation: http://dx.doi.org/10.1098/rsos.190232
*
**/

jsPsych.plugins["mars"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'mars',
    description: '',
    parameters: {
      item: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Item',
        description: 'Item number.'
      },
      shape_set: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Shape set',
        description: 'Item shape set (1, 2, 3).'
      },
      distractor: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Distractor',
        description: 'Item distractor type (md, pd).'
      },
      correct: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Correct',
        default: 0,
        description: 'The index of the correct response.'
      },
      countdown: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Countdown',
        default: true,
        description: 'If true, the countdown timer will be presented (last 5s).'
      },
      feedback: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Feedback',
        default: true,
        description: 'If true, accuracy feedback will be presented.'
      },
      correct_feedback: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Correct feedback',
        default: null,
        description: 'Feedback to display following a correct choice.'
      },
      incorrect_feedback: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Incorrect feedback',
        default: null,
        description: 'Feedback to display following an incorrect choice.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Feedback duration',
        default: 750,
        description: 'How long to show the feedback.'
      },
      randomize_choice_order: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Randomize choice order',
        default: false,
        description: 'If true, the order of the choices will be randomized.'
      },
      img_path: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Image directory',
        default: './img/is3',
        description: 'Path to image files.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Define HTML.
    //---------------------------------------//

    // Initialize HTML.
    var new_html = '';

    // Insert CSS.
    new_html += `<style>
    .jspsych-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    p {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
    .mars-item {
      position: relative;
      max-height: 384px;
      max-width: 384px;
      border: 4px solid #777777;
      border-radius: 2px;
    }
    .mars-item img {
      max-height: 384px;
      max-width: 384px;
    }
    .mars-choice-row {
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
    .mars-choice {
      position: relative;
      max-height: 128px;
      max-width: 128px;
      border: 2px solid #777777;
      border-radius: 4px;
    }
    .mars-choice:hover {
      border: 2px solid #222222;
    }
    .mars-choice img {
      max-height: 125px;
      max-width: 125px;
    }
    .mars-feedback {
      position: relative;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    </style>`;

    // Define item path.
    const isrc = trial.img_path + '/mars_' + trial.item + '_M_ss' + trial.shape_set;

    // Display item.
    new_html += '<div class="mars-item">';
    new_html += '<picture>';
    new_html += '<source srcset="' + isrc + '.webp" type="image/webp">';
    new_html += '<source srcset="' + isrc + '.jpeg" type="image/jpeg">';
    new_html += '<img src="' + isrc + '.jpeg">';
    new_html += '</picture>';
    new_html += '</div>';

    // Display feedback.
    new_html += '<div class="mars-feedback" id="feedback"></div>';

    // Randomize response order.
    var item_order = [...Array(4).keys()];
    if (trial.randomize_choice_order) {
      item_order = jsPsych.randomization.shuffle(item_order);
    }

    // Iterate over choices
    new_html += '<div class="mars-choice-row">';
    item_order.forEach((j, i) => {

      // Define distractor path.
      const dsrc = trial.img_path + '/mars_' + trial.item + '_T' + (j+1) + '_ss' + trial.shape_set + '_' + trial.distractor;

      // Display choices.
      new_html += '<div class="mars-choice" id="jspsych-mars-choice-' + i + '" choice="' + j +'"</div>';
      new_html += '<picture>';
      new_html += '<source srcset="' + dsrc + '.webp" type="image/webp">';
      new_html += '<source srcset="' + dsrc + '.jpeg" type="image/jpeg">';
      new_html += '<img src="' + dsrc + '.jpeg">';
      new_html += '</picture>';
      new_html += '</div>';

    })
    new_html += '</div>';

    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // confirm screen resolution
    const screen_resolution = [window.innerWidth, window.innerHeight];
    if (screen_resolution[0] < 600 || screen_resolution[1] < 600) {
      var minimum_resolution = 0;
    } else {
      var minimum_resolution = 1;
    }

    // start time
    var start_time = performance.now();

    // add event listeners to buttons
    for (var i = 0; i < 4; i++) {
      display_element.querySelector('#jspsych-mars-choice-' + i).addEventListener('click', function(e){
        var choice = e.currentTarget.getAttribute('choice');
        after_response(choice);
      });
    }

    // define feedback
    if ( trial.correct_feedback == null ) {
      trial.correct_feedback = '<p style="color: green; font-size: 60px;">&#10003</p>';
    }
    if ( trial.incorrect_feedback == null ) {
      trial.incorrect_feedback = '<p style="color: red; font-size: 60px;">&#10007</p>';
    }

    // store response
    var response = {
      rt: null,
      choice: null,
      accuracy: null
    };

    // function to display remaining time
    function countdown(t) {
      display_element.querySelector('#feedback').innerHTML = `${t}`;
      display_element.querySelector('#feedback').style['font-size'] = '36px';
    };

    // function to handle responses by the subject
    function after_response(choice) {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // measure response time
      var end_time = performance.now();
      var rt = end_time - start_time;

      // store responses.
      response.rt = rt;
      response.choice = parseInt(choice);
      response.accuracy = (trial.correct == response.choice) ? 1 : 0;

      // present feedback
      if ( trial.feedback && response.accuracy == 1 ) {
        display_element.querySelector('#feedback').innerHTML = trial.correct_feedback;
      } else if ( trial.feedback && response.accuracy == 0 ) {
        display_element.querySelector('#feedback').innerHTML = trial.incorrect_feedback;
      }

      // feedback timeout
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.feedback ? trial.feedback_duration : 0);

    };

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // confirm image loading
      const loaded = Array.from(document.getElementsByTagName('img')).map(x => (x.complete) && (x.naturalWidth != 0));
      const all_loaded = loaded.every(x => x);

      // gather the data to store for the trial
      var trial_data = {
        item: trial.item,
        shape_set: trial.shape_set,
        distractor: trial.distractor,
        choice_order: item_order,
        correct: trial.correct,
        choice: response.choice,
        accuracy: response.accuracy,
        rt: response.rt,
        screen_resolution: screen_resolution,
        minimum_resolution: minimum_resolution,
        all_loaded: all_loaded
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
