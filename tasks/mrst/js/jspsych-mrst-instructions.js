/* jspsych-mrst-instructions.js
* Sam Zorowitz
*
* plugin for running the instructions of the modified risk sensitivity task
*/

jsPsych.plugins['mrst-instructions'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'instructions',
    description: '',
    parameters: {
      pages: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Pages',
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'Instructions text for the page.'
          },
          img: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'Stock color',
            default: null,
            description: 'Hex code for the stock color.'
          },
          show_cards: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Show cards',
            default: false,
            description: 'If true, show the card stimuli.'
          },
          stimulus: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'Card picture',
            default: './img/animals/rabbit-shape.svg',
            description: 'The picture for the face-down card.'
          },
          color: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'Card color',
            default: '#3d85c690',
            description: 'The color for the face-down card.'
          },
          points: {
            type: jsPsych.plugins.parameterType.FLOAT,
            pretty_name: 'Points',
            default: '10',
            description: 'The number of points on the back of the face-down card.'
          },
          face: {
            type: jsPsych.plugins.parameterType.FLOAT,
            pretty_name: 'Face',
            default: 'down',
            description: 'The face direction of the card ("down", "up").'
          },
          choice: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Phase',
            default: null,
            description: 'Phase of trial (hide = -1, choice = 0, feedback = 1).'
          },
        }
      },
      key_forward: {
        type: jsPsych.plugins.parameterType.KEY,
        pretty_name: 'Key forward',
        default: 'ArrowRight',
        description: 'The key the subject can press in order to advance to the next page.'
      },
      key_backward: {
        type: jsPsych.plugins.parameterType.KEY,
        pretty_name: 'Key backward',
        default: 'ArrowLeft',
        description: 'The key that the subject can press to return to the previous page.'
      },
      button_label_previous: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label previous',
        default: 'Prev',
        description: 'The text that appears on the button to go backwards.'
      },
      button_label_next: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label next',
        default: 'Next',
        description: 'The text that appears on the button to go forwards.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    //---------------------------------------//
    // Define parameters.
    //---------------------------------------//

    // Initialize variables.
    var current_page = 0;
    var view_history = [];
    var start_time = performance.now();
    var last_page_update_time = start_time;

    //---------------------------------------//
    // Define functions.
    //---------------------------------------//

    function btnListener(evt){
      evt.target.removeEventListener('click', btnListener);
      if(this.id === "jspsych-instructions-back"){
        back();
      }
      else if(this.id === 'jspsych-instructions-next'){
        next();
      }
    }

    function show_current_page() {

      // Initialize html.
      var html = "";

      // HACK: adjust stimuli scale
      const scale = 0.8;

      // Insert CSS.
      const style = `<style>
      .jspsych-content-wrapper {
        background: #808080;
      }
      .jspsych-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      p {
        margin-block-start: 0px;
        margin-block-end: 0px;
      }
      .task-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 80px;
      }
      .flip-card .choice-indicator {
        top: calc(100% + 10px);
        visibility: visible;
        border-bottom-color: #D3D3D3;
      }
      .instructions {

        position: relative;
        width: 650px;
        height: 120px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 25px 0px 5px 0px;
        background: white;
        border: 2px solid black;
        border-radius: 12px;

      }
      .instructions p {
        font-size: 18px;
        line-height: 1.4em;
        margin-bottom: 12px;
      }
      .instructions p:last-of-type {
        margin-bottom: 0px;
      }
      </style>`;
      html += style;

      // Draw card (if applicable).
      if (trial.pages[current_page].show_cards) {

        // Define wrapper
        html += '<div class="task-content">';

        // Define mapping of actions to sides.
        var order = [0,1];

        // Iteratively draw cards
        order.forEach((j, i) => {

          // Define constants.
          const face = (j > 0) ? trial.pages[current_page].face : 'up';
          const color = (j > 0) ? trial.pages[current_page].color : 'grey';
          const points = (j > 0) ? trial.pages[current_page].points : 5;

          // Initialize card container.
          html += '<div class="flip-card" id="flip-card-' + j + '" face="' + face + '">';

          // Draw card contents
          html += '<div class="flip-card-inner">';

          // Draw face-up side
          html += '<div class="flip-card-up">';
          html += `<div class="top-left-corner" style="border-top-color: ${color}; border-left-color: ${color}"></div>`;
          html += `<div class="bottom-right-corner" style="border-bottom-color: ${color}; border-right-color: ${color}"></div>`;
          html += '<p id="points">' + points + '</p>';
          html += '</div>';

          // Draw face-down side
          if (j > 0) {
            html += `<div class="flip-card-down" style="background: ${color}">`;
            html += `<img src="${trial.pages[current_page].stimulus}">`;
            html += '</div>';
          }

          // Finish card contents
          html += '</div>';    // Close flip-card-inner

          // Draw choice indicators
          if (trial.pages[current_page].choice == j) {
            html += '<div class="choice-indicator"></div>';
          }

          // Finish card
          html += '</div>';    // Close flip-card

        });

        html += '</div>';

      };

      // Draw image
      if (trial.pages[current_page].img != null) {
        html += '<img src="' + trial.pages[current_page].img + '" style="max-width: 600px">';
      }

      // Draw prompt
      html += '<div class="instructions">';
      html += trial.pages[current_page].prompt;
      html += '</div>';

      // Draw navigational elements.
      var nav_html = "<div class='jspsych-instructions-nav'>";
      var allowed = (current_page > 0 )? '' : "disabled='disabled'";
      nav_html += "<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' "+allowed+">&lt; " + trial.button_label_previous + "</button>";
      nav_html += "<button id='jspsych-instructions-next' class='jspsych-btn' style='margin-left: 5px;'>" + trial.button_label_next + " &gt;</button></div>";
      html += nav_html;

      // Display HTML
      display_element.innerHTML = html;

      // Add button listners
      if (current_page != 0) {
        display_element.querySelector('#jspsych-instructions-back').addEventListener('click', btnListener);
      }
      display_element.querySelector('#jspsych-instructions-next').addEventListener('click', btnListener);

      // Enable backwards navigation.
      if (current_page != 0) {
        display_element.querySelector('#jspsych-instructions-back').addEventListener('click', btnListener);
      }

      // Enable forwards navigation.
      display_element.querySelector('#jspsych-instructions-next').addEventListener('click', btnListener);

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
