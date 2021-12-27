/**
* jspsych-pit-instructions
* Sam Zorowitz, Branson Byers, Gili Karni
*
* plugin for running the instructions for the two step task
**/

jsPsych.plugins["two-step-instructions"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'two-step-instructions',
    description: '',
    parameters: {
      pages: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Pages',
        array: true,
        description: 'Each element of the array is the content for a single page.'
      },
      aliens: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        array: true,
        pretty_name: 'Aliens',
        default: [],
        description: 'Paths to alien images'
      },
      add_aliens: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name:'Do or do not draw aliens?',
        array: true,
        default: [],
        description: 'Decides if aliens appear on this instructions slide.'
      },
      add_diamonds: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name:'Do or do not draw diamonds?',
        array: true,
        default: [],
        description: 'Decides if diamonds appear on this instructions slide.'
      },
      add_rocks: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name:'Do or do not draw rocks?',
        array: true,
        default: [],
        description: 'Decides if rocks appear on this instructions slide.'
      },
      add_rockets: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name:'Show the rockets. ',
        array: true,
        default: [],
        description: 'Decides if the rockets appear on this instructions slide.'
      },
      rocket_colors: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        array: true,
        default: ['#a75248','#486ea7'],
        pretty_name: 'Rocket colors',
        description: 'Colors of the state 1 left/right rockets (red, blue, green, purple)'
      },
      key_forward: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Key forward',
        default: 'ArrowRight',
        description: 'The key the subject can press in order to advance to the next page.'
      },
      key_backward: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Key backward',
        default: 'ArrowLeft',
        description: 'The key that the subject can press to return to the previous page.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Section 1: Define HTML.
    //---------------------------------------//

    // Define CSS styling.
    var new_html = '';
    new_html += `<style>
    body {
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      position: fixed;
    }
    .jspsych-content-wrapper {
      background: #606060;
      z-index: -1;
    }
    .jspsych-instructions-nav {
      position: absolute;
      bottom: 0%;
      left: 50%;
      -webkit-transform: translate(-50%, 0%);
      transform: translate(-50%, 0%);
      padding: 10px 0px;
    }
    .jspsych-instructions-nav .jspsych-btn {
      padding: 4px 12px;
      font-size: 15px;
    }
    .jspsych-instructions-nav .jspsych-btn:focus {
      outline: none;
    }
    .instructions-box {
      position: absolute;
      bottom: calc(0.60 * var(--height));
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, 0%);
      width: 600px;
      height: 150px;
      background: white;
      border: 2px solid grey;
      border-radius: 12px;
    }
    .instructions {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 95%;
    }
    .instructions p {
      font-size: 17px;
      line-height: 1.5em;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }
    .alien[state='instructions'] {
      bottom: 10%;
      width: calc(0.23 * var(--width));
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .alien[state='instructions'][side='0'] {
      left: calc(50% - 0.38 * var(--width));
    }
    .alien[state='instructions'][side='1'] {
      left: calc(50% - 0.13 * var(--width));
    }
    .alien[state='instructions'][side='2'] {
      left: calc(50% + 0.13 * var(--width));
    }
    .alien[state='instructions'][side='3'] {
      left: calc(50% + 0.38 * var(--width));
    }
    .diamond[state='instructions'], .rock[state='instructions'] {
      display: inherit;
      width: calc(0.20 * var(--width));
      height: calc(0.20 * var(--width));
      left: 50%;
      bottom: 30%;
      -webkit-transform: translate(-50%, 50%);
      transform: translate(-50%, 50%);
    }
    </style>`;

    // Start two-step wrapper.
    new_html += '<div class="two-step-container">';

    // Draw sky & stars
    new_html += '<div class="landscape-sky" state="1"><div class="stars"></div>';

    // Finish sky.
    new_html += '</div>';

    // Draw ground.
    new_html += '<div class="landscape-ground" state="1"></div>';

    // Draw rockets.
    new_html += '<div id="rockets">';
    for (let i=0; i<2; i++) {
      new_html += `<div class="tower" side="${i}"><div class="arm"></div></div>`;
      new_html += `<div class="platform" side="${i}"></div>`;
      new_html += `<div class="rocket" state="1" side="${i}">`;
      new_html += '<div class="rocket-body">';
      new_html += `<div class="rocket-window" style="background: ${trial.rocket_colors[i]}"></div>`;
      new_html += '<div class="rocket-studs"></div>';
      new_html += `<div class="rocket-fin" side="0" style="background: ${trial.rocket_colors[i]}"></div>`;
      new_html += `<div class="rocket-fin" side="1" style="background: ${trial.rocket_colors[i]}"></div>`;
      new_html += `<div class="rocket-fire" id="fire-${i}"></div>`;
      new_html += '</div></div>';
    }
    new_html += '</div>';

    // Draw four aliens.
    new_html += '<div id="aliens">';
    for (let i=0; i<4; i++) {
      new_html += `<div class="alien" state="instructions" side="${i}">`;
      new_html += `<img src="${trial.aliens[i]}"></img>`;
      new_html += '</div>';
    }
    new_html += '</div>';

    // Draw diamonds.
    new_html += '<div class="diamond" id="diamond" state="instructions"></div>';

    // Draw rocks.
    new_html += '<div class="rock" id="rock" state="instructions"></div>';

    // Draw instructions
    new_html += '<div class="instructions-box"><div class="instructions"></div></div>';

    // Draw buttons
    new_html += '<div class="jspsych-instructions-nav">';
    new_html += '<button id="jspsych-instructions-back" class="jspsych-btn" style="position: absolute; left: 45%; bottom: 8%; -webkit-transform: translateX(-100%); transform: translateX(-100%)">&lt; Prev</button>';
    new_html += '<button id="jspsych-instructions-next" class="jspsych-btn" style="position: absolute; left: 55%; bottom: 8%; -webkit-transform: translateX(0%); transform: translateX(0%)">Next &gt;</button>';
    new_html += '</div>';

    // Close
    new_html += '</div>';

    display_element.innerHTML = new_html;

    //---------------------------------------//
    // Section 2: Response handling.
    //---------------------------------------//

    // Initialize variables.
    var current_page = 0;
    var view_history = [];
    var start_time = performance.now();
    var last_page_update_time = start_time;

    // Initialize event listeners.
    function btnListener(evt) {
      evt.target.removeEventListener('click', btnListener);
      if(this.id === "jspsych-instructions-back"){
        back();
      }
      else if(this.id === 'jspsych-instructions-next'){
        next();
      }
    }

    // Display current page.
    function show_current_page() {

      // Define base HTML.
      display_element.innerHTML = new_html;

      // Update instructions text.
      display_element.querySelector('.instructions').innerHTML = `<p>${trial.pages[current_page]}</p>`;

      // Update prev button
      if (current_page != 0) {
        display_element.querySelector('#jspsych-instructions-back').disabled = false;
        display_element.querySelector('#jspsych-instructions-back').addEventListener('click', btnListener);
      } else {
        display_element.querySelector('#jspsych-instructions-back').disabled = true;
      }

      // Update next button
      display_element.querySelector('#jspsych-instructions-next').addEventListener('click', btnListener);

      if (trial.add_aliens[current_page]) {
        display_element.querySelector('#aliens').style.display = "block";
      } else {
        display_element.querySelector('#aliens').style.display = "none";
      }

      if (trial.add_diamonds[current_page]) {
        display_element.querySelector('#diamond').style.display = "block";
      } else {
        display_element.querySelector('#diamond').style.display = "none";
      }

      if (trial.add_rocks[current_page]) {
        display_element.querySelector('#rock').style.display = "block";
      } else {
        display_element.querySelector('#rock').style.display = "none";
      }

      if (trial.add_rockets[current_page]) {
        display_element.querySelector('#rockets').style.display = "block";
      } else {
        display_element.querySelector('#rockets').style.display = "none";
      }

    }

    function next() {

      add_current_page_to_view_history()

      current_page++;

      // if done, finish up...
      if (current_page >= trial.pages.length) {
        endTrial();
      } else {
        show_current_page();
      }

    }

    function back() {

      add_current_page_to_view_history()

      current_page--;

      show_current_page();
    }

    function add_current_page_to_view_history() {

      var current_time = performance.now();

      var page_view_time = current_time - last_page_update_time;

      view_history.push({
        page_index: current_page,
        viewing_time: page_view_time
      });

      last_page_update_time = current_time;

    }

    function endTrial() {

      jsPsych.pluginAPI.cancelKeyboardResponse(keyboard_listener);

      display_element.innerHTML = '';

      var trial_data = {
        "view_history": JSON.stringify(view_history),
        "rt": performance.now() - start_time
      };

      jsPsych.finishTrial(trial_data);
    }

    var after_response = function(info) {

      // have to reinitialize this instead of letting it persist to prevent accidental skips of pages by holding down keys too long
      keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: [trial.key_forward, trial.key_backward],
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
      // check if key is forwards or backwards and update page
      if (jsPsych.pluginAPI.compareKeys(info.key, trial.key_backward)) {
        if (current_page !== 0) {
          back();
        }
      }

      if (jsPsych.pluginAPI.compareKeys(info.key, trial.key_forward)) {
        next();
      }

    };

    show_current_page();

    var keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: [trial.key_forward, trial.key_backward],
      rt_method: 'performance',
      persist: false
    });
  };

  return plugin;
})();
