/* jspsych-mrst-instructions.js
* Sam Zorowits
*
*/

jsPsych.plugins['mrst-instructions'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'mrst-instructions',
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
            description: 'Questions that are associated with the slider.'
          },
          phase: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Phase',
            default: 0,
            description: 'Phase of trial (choice = 0, feedback = 1).'
          },
          investments: {
            type: jsPsych.plugins.parameterType.FLOAT,
            array: true,
            pretty_name: 'Investments',
            default: [5, 1],
            description: 'The two possible investments in order (high, low).'
          },
          stock_name: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'Stock name',
            default: 'APPL',
            description: 'The name of the stock.'
          },
          stock_color: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'Stock color',
            default: '#3f51b5',
            description: 'Hex code for the stock color.'
          },
          outcome: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Outcome',
            default: 1,
            description: 'If investment pays off (outcome = 1) or not (outcome = 0).'
          },
          earning: {
            type: jsPsych.plugins.parameterType.FLOAT,
            pretty_name: 'Outcome',
            default: 10,
            description: 'If investment pays off (outcome = 1) or not (outcome = 0).'
          },
          show_app: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Show app',
            default: false,
            description: 'If true, show the phone application.'
          },
          app_scale: {
            type: jsPsych.plugins.parameterType.FLOAT,
            pretty_name: 'App scale',
            default: 0.72,
            description: 'Scale (in fraction) of original size of app.'
          },
          show_arrow: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Show app',
            default: false,
            description: 'If true, show the phone application.'
          },
          arrow_x: {
            type: jsPsych.plugins.parameterType.FLOAT,
            pretty_name: 'Arrow x',
            default: 0,
            description: 'Scale (in fraction) of original size of app.'
          },
          arrow_y: {
            type: jsPsych.plugins.parameterType.FLOAT,
            pretty_name: 'Arrow y',
            default: 0,
            description: 'Scale (in fraction) of original size of app.'
          },
          arrow_z: {
            type: jsPsych.plugins.parameterType.FLOAT,
            pretty_name: 'Arrow z',
            default: 0,
            description: 'Scale (in fraction) of original size of app.'
          }
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
      allow_backward: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Allow backward',
        default: true,
        description: 'If true, the subject can return to the previous page of the instructions.'
      },
      allow_keys: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Allow keys',
        default: true,
        description: 'If true, the subject can use keyboard keys to navigate the pages.'
      },
      show_clickable_nav: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Show clickable nav',
        default: true,
        description: 'If true, then a "Previous" and "Next" button will be displayed beneath the instructions.'
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

    // Initialize variables.
    var current_page = 0;
    var view_history = [];
    var start_time = performance.now();
    var last_page_update_time = start_time;

    // Initialize event listeners.
    function btnListener(evt){
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

      // Define base HTML
      var html = "";

      // HACK: define wrapper size
      // https://stackoverflow.com/questions/16385578/white-space-around-css3-scale
      const height = (450 + 50 + 65) * trial.pages[current_page].app_scale;
      const width = (320 + 9 + 9) * trial.pages[current_page].app_scale;

      // Inject css
      html += `<style>
      p {
        margin-block-start: 0.25em;
        margin-block-end: 0.25em;
      }
      .jspsych-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .smartphone-wrapper {
        width: ${width}px;
        height: ${height}px;
        margin-bottom: 10px;
      }
      .smartphone {
        margin: 0;
        transform: scale(${trial.pages[current_page].app_scale});
        -webkit-transform: scale(${trial.pages[current_page].app_scale});
        transform-origin: top left;
      }
      .smartphone .app .stock {
        background: ${trial.pages[current_page].stock_color};
      }
      .smartphone .app .earnings-box {
        transform: translateX(0%);
        -webkit-transform: translateX(0%);
      }
      .smartphone #arrow {
        position: absolute;
        left: ${trial.pages[current_page].arrow_x}%;
        top: ${trial.pages[current_page].arrow_y}%;
        transform: translate(-100%, -50%) rotate(${trial.pages[current_page].arrow_z}deg);
        -webkit-transform: translateY(-100%, -50%) rotate(${trial.pages[current_page].arrow_z}deg);
      }
      </style>`;

      // Draw investment app (if applicable).
      if (trial.pages[current_page].show_app) {

        // Draw smartphone
        html += '<div class="smartphone-wrapper">';
        html += '<div class="smartphone">';
        html += '<div class="side-button"></div>';

        html += '<div class="app" id="app">';
        html += `<div class="stock">${trial.pages[current_page].stock_name}</div>`;

        // draw investment box
        if (trial.pages[current_page].phase == 0) {
          html += '<div class="invest-box" id="invest-box">';
          html += '<p id="funds">Your balance</p>';
          html += `<p id="funds">$5</p>`;
          html += `<div class="choice" style="background: ${trial.pages[current_page].stock_color}">Invest $${trial.pages[current_page].investments[0]}</div>`;
          html += `<div class="choice" id="choice-1" style="background: transparent">Invest $${trial.pages[current_page].investments[1]}</div>`;
          html += '</div>';

        // draw earnings box
        } else {
          var feedback_html = '';
          if (trial.pages[current_page].outcome == 1) {
            feedback_html += '<img id="up-arrow" src="./img/up-arrow.png" width="42px">';
          } else {
            feedback_html += '<img id="down-arrow" src="./img/down-arrow.png" width="42px">';
          }
          feedback_html += '&nbsp;&nbsp;$' + trial.pages[current_page].earning;
          html += '<div class="earnings-box" id="earnings-box">';
          html += '<p id="earnings">' + feedback_html + '</p>';
          html += '</div>';
        }

        html += '</div>';

        // draw arrow
        if (trial.pages[current_page].show_arrow) {
          html += '<img id="arrow" src="./img/right-arrow.png" width="60px">';
        }

        // draw top bar
        html += '<div class="top-bar">';
        html += '<img id="wifi" src="./img/wifi-icon.png" width="20px">';
        html += '<img id="battery" src="./img/battery-icon.png" width="25px">';
        html += '</div>';

        html += '</div>';
        html += '</div>';
      }

      html += trial.pages[current_page].prompt;

      if (trial.show_clickable_nav) {

        var nav_html = "<div class='jspsych-instructions-nav' style='padding: 10px 0px;'>";
        if (trial.allow_backward) {
          var allowed = (current_page > 0 )? '' : "disabled='disabled'";
          nav_html += "<button id='jspsych-instructions-back' class='jspsych-btn' style='margin-right: 5px;' "+allowed+">&lt; "+trial.button_label_previous+"</button>";
        }
        nav_html += "<button id='jspsych-instructions-next' class='jspsych-btn'"+
        "style='margin-left: 5px;'>"+trial.button_label_next+
        " &gt;</button></div>";

        html += nav_html;
        display_element.innerHTML = html;
        if (current_page != 0 && trial.allow_backward) {
          display_element.querySelector('#jspsych-instructions-back').addEventListener('click', btnListener);
        }

        display_element.querySelector('#jspsych-instructions-next').addEventListener('click', btnListener);
      } else {
        display_element.innerHTML = html;
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

      if (trial.allow_keys) {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboard_listener);
      }

      display_element.innerHTML = '';

      var trial_data = {
        view_history: view_history,
        rt: performance.now() - start_time
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
        if (current_page !== 0 && trial.allow_backward) {
          back();
        }
      }

      if (jsPsych.pluginAPI.compareKeys(info.key, trial.key_forward)) {
        next();
      }

    };

    show_current_page();

    if (trial.allow_keys) {
      var keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: [trial.key_forward, trial.key_backward],
        rt_method: 'performance',
        persist: false
      });
    }
  };

  return plugin;
})();
