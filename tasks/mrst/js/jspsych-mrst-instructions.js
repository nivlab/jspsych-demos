/* jspsych-mrst-instructions.js
* Sam Zorowitz
*
* plugin for running the instructions of the modified risk sensitivity task
*/

function noenter() {
	  return !(window.event && window.event.keyCode == 13);
	}

var jsPsychMRSTInstructions = (function (jspsych) {
  'use strict';

  const info = {
      name: 'instructions',
    description: '',
    parameters: {
      pages: {
        type: jspsych.ParameterType.HTML_STRING,
        pretty_name: 'Pages',
        default: undefined,
        array: true,
        description: 'Each element of the array is the content for a single page.'
      },
      key_forward: {
        type: jspsych.ParameterType.KEYCODE,
        pretty_name: 'Key forward',
        default: 'arrowright',
        description: 'The key the subject can press in order to advance to the next page.'
      },
      key_backward: {
        type: jspsych.ParameterType.KEYCODE,
        pretty_name: 'Key backward',
        default: 'arrowleft',
        description: 'The key that the subject can press to return to the previous page.'
      },
      button_label_previous: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label previous',
        default: 'Prev',
        description: 'The text that appears on the button to go backwards.'
      },
      button_label_next: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label next',
        default: 'Next',
        description: 'The text that appears on the button to go forwards.'
      }
    }
  }


  class MRSTInstructionsPlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial, on_load) {


    //---------------------------------------//
    // Define parameters.
    //---------------------------------------//

    var current_page = 0;
    var view_history = [];
    var start_time = performance.now();
    var last_page_update_time = start_time;

    //---------------------------------------//
    // Define functions.
    //---------------------------------------//

    function show_current_page() {

      // Initialize html.
      var html = "";

      // Add CSS.
      html += '<style>body {height: 100vh; max-height: 100vh; position: fixed;} </style></div>';

      // Start wrapper.
      html += '<div class="instructions-container">';

      // Add instructions text.
      html += '<div class="instructions-item">';
      html += trial.pages[current_page];
      html += '</div>';

      // Add instructions navigation.
      var allowed = (current_page > 0 )? '' : "disabled='disabled'";
      var nav_html = "<div class='jspsych-instructions-nav' style='padding: 10px 0px;'>";
      nav_html += "<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' "+allowed+">&lt; "+trial.button_label_previous+"</button>";
      nav_html += "<button id='jspsych-instructions-next' class='jspsych-btn'"+
      "style='margin-left: 5px;'>"+trial.button_label_next+
      " &gt;</button></div>";
      html += nav_html;

      html += '</div>';

      // draw HTML
      display_element.innerHTML = html;

      // Enable backwards navigation.
      if (current_page != 0) {
        display_element.querySelector('#jspsych-instructions-back').addEventListener('click', btnListener);
      }

      // Enable forwards navigation.
      display_element.querySelector('#jspsych-instructions-next').addEventListener('click', btnListener);

    }

    function btnListener(evt){
      evt.target.removeEventListener('click', btnListener);
      if(this.id === "jspsych-instructions-back"){
        back();
      }
      else if(this.id === 'jspsych-instructions-next'){
        next();
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
}

MRSTInstructionsPlugin.info = info;

return MRSTInstructionsPlugin;

})(jsPsychModule);
