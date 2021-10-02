/**
* jspsych-task-comprehension
*
* plugin for checking comprehension of gambling task instructions
*
**/

jsPsych.plugins['task-comprehension'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'survey-multi-choice',
    description: '',
    parameters: {
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      }
    }
  }
  plugin.trial = function(display_element, trial) {

    // Plug-in setup
    var plugin_id_name = "jspsych-survey-multi-choice";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }

    // ---------------------------------- //
    // Section 1: Define HTML             //
    // ---------------------------------- //

    // Initialize HTML
    var html = "";

    // inject CSS for trial
    html += '<style id="jspsych-survey-multi-choice-css">';
    html += ".jspsych-survey-multi-choice-question { margin-top: 0em; margin-bottom: 1.0em; text-align: left; padding-left: 8em}"+
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text { text-align: left; margin: 0em 0em 0.5em 0em }"+
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option { display: inline-block;  margin: 0em 1em 0em 1em; vertical-align: max-width: 5em}"+
      "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-right: 1em;}"+
      ".invalid { display:inline-block; border: 1px solid; border-radius: 4px; margin: 0.25em 1em 0em 1em; padding: 0.5px 4px 0.5px 4px; color: #D8000C; background-color: #FFBABA; font-size: 14px; animation: flash 0.1s}"+
      ".valid { display: none }"+
      "@keyframes flash { from { opacity: 50%; } to { opacity: 100%; } }"
    html += '</style>';

    // ---------------------------------- //
    // Initialize check                   //
    // ---------------------------------- //

    // form element
    var trial_form_id = _join(plugin_id_name, "form");
    display_element.innerHTML += '<form id="'+trial_form_id+'"></form>';

    // Show preamble text
    html += '<div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble"><h4>Please answer the questions below:</h4><img src="./img/example.png" style="max-width: 47%"></img></div>';

    // Initialize form element
    html += '<form id="jspsych-survey-multi-choice-form">';

    // ---------------------------------- //
    // Comprehension Question #1          //
    // ---------------------------------- //

    // Initialize item
    html += '<div id="jspsych-survey-multi-choice-0" class="jspsych-survey-multi-choice-question jspsych-survey-multi-choice-horizontal" data-name="outcome">';

    // Add question text
    html += '<p class="jspsych-survey-multi-choice-text survey-multi-choice">For <font color=#008CBA>Gamble A</font>, what is the best possible outcome?</p>';

    // Option 1: $6.0
    html += '<div id="jspsych-survey-multi-choice-option-0-0" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-0" id="jspsych-survey-multi-choice-response-0-0" value="$6.0" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-0-0">$6.0</label>';
    html += '</div>';

    // Option 2: $4.0
    html += '<div id="jspsych-survey-multi-choice-option-0-1" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-0" id="jspsych-survey-multi-choice-response-0-1" value="$4.0" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-0-1">$4.0</label>';
    html += '</div>';

    // Option 3: $9.0
    html += '<div id="jspsych-survey-multi-choice-option-0-2" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-0" id="jspsych-survey-multi-choice-response-0-2" value="$9.0" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-0-2">$9.0</label>';
    html += '</div>';

    // Option 4: $2.0
    html += '<div id="jspsych-survey-multi-choice-option-0-3" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-0" id="jspsych-survey-multi-choice-response-0-3" value="$2.0" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-0-3">$2.0</label>';
    html += '</div>';

    // Close item
    html += '<br><p class="error" id="Q1-error"></p>'
    html += '</div>';

    // ---------------------------------- //
    // Comprehension Question #2          //
    // ---------------------------------- //

    // Initialize item
    html += '<div id="jspsych-survey-multi-choice-1" class="jspsych-survey-multi-choice-question jspsych-survey-multi-choice-horizontal" data-name="probability">';

    // Add question text
    html += '<p class="jspsych-survey-multi-choice-text survey-multi-choice">For <font color=#FF851B>Gamble B</font>, what are the chances of getting $9.0 compared to getting $2.0?</p>';

    // Option 1: More likely
    html += '<div id="jspsych-survey-multi-choice-option-1-0" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-1" id="jspsych-survey-multi-choice-response-1-0" value="More likely" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-1-0">More likely</label>';
    html += '</div>';

    // Option 2: Less likely
    html += '<div id="jspsych-survey-multi-choice-option-1-1" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-1" id="jspsych-survey-multi-choice-response-1-1" value="Less likely" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-1-1">Less likely</label>';
    html += '</div>';

    // Option 3: Equally likely
    html += '<div id="jspsych-survey-multi-choice-option-1-2" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-1" id="jspsych-survey-multi-choice-response-1-2" value="Equally likely" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-1-2">Equally likely</label>';
    html += '</div>';

    // Option 4: Not enough info
    html += '<div id="jspsych-survey-multi-choice-option-1-3" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-1" id="jspsych-survey-multi-choice-response-1-3" value="Not enough info" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-1-3">Not enough info</label>';
    html += '</div>';

    // Close item
    html += '<br><p id="Q2-error"></p>'
    html += '</div>';

    // ---------------------------------- //
    // Comprehension Question #3          //
    // ---------------------------------- //

    // Initialize item
    html += '<div id="jspsych-survey-multi-choice-2" class="jspsych-survey-multi-choice-question jspsych-survey-multi-choice-horizontal" data-name="bonus">';

    // Add question text
    html += '<p class="jspsych-survey-multi-choice-text survey-multi-choice">Will the gambles I choose affect my performance bonus?</p>';

    // Option 1: Yes
    html += '<div id="jspsych-survey-multi-choice-option-2-0" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-2" id="jspsych-survey-multi-choice-response-2-0" value="Yes" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-2-0">Yes</label>';
    html += '</div>';

    // Option 2: No
    html += '<div id="jspsych-survey-multi-choice-option-2-1" class="jspsych-survey-multi-choice-option">';
    html += '<input type="radio" name="jspsych-survey-multi-choice-response-2" id="jspsych-survey-multi-choice-response-2-1" value="No" required>';
    html += '<label class="jspsych-survey-multi-choice-text" for="jspsych-survey-multi-choice-response-2-1">No</label>';
    html += '</div>';

    // Close item
    html += '<br><p id="Q3-error"></p>'
    html += '</div>';

    // ---------------------------------- //
    // Finalize HTML                      //
    // ---------------------------------- //

    // add submit button
    html += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + 'style="margin-bottom: 5px;" disabled></input>';

    // End HTML
    html += '</form>';

    // Display HTML
    display_element.innerHTML = html;

    // ---------------------------------- //
    // Section 2: jsPsych Functions       //
    // ---------------------------------- //

    // Define error messages
    const Q1 = document.getElementById("Q1-error");
    const Q2 = document.getElementById("Q2-error");
    const Q3 = document.getElementById("Q3-error");
    var count = 0;

    // Detect changes on first comprehension item
    display_element.querySelector('#jspsych-survey-multi-choice-0').addEventListener('change', function(){

      // On change, find which item is checked.
      var val = display_element.querySelector('#jspsych-survey-multi-choice-0 input:checked').value;

      // Validation
      if (val === "$6.0") {

        // Update text
        Q1.innerHTML = "";
        Q1.className = "valid"

      } else {

        // Update text
        Q1.innerHTML = "That's incorrect. Hint: look at the top box for Gamble A. Which is the highest amount?";
        Q1.className = "invalid"

        // Restart animation
        Q1.style.animation = 'none';
        Q1.offsetHeight; /* trigger reflow */
        Q1.style.animation = null;

        // Increment error count
        count += 1;

      }

    });

    // Detect changes on second comprehension item
    display_element.querySelector('#jspsych-survey-multi-choice-1').addEventListener('change', function(){

      // On change, find which item is checked.
      var val = display_element.querySelector('#jspsych-survey-multi-choice-1 input:checked').value;

      // Validation
      if (val === "Less likely") {

        // Update text
        Q2.innerHTML = "";
        Q2.className = "valid"

      } else {

        // Update text
        Q2.innerHTML = "That's incorrect. Hint: look at the middle box for Gamble B. Are there more orange than white circles?";
        Q2.className = "invalid"

        // Restart animation
        Q2.style.animation = 'none';
        Q2.offsetHeight; /* trigger reflow */
        Q2.style.animation = null;

        // Increment error count
        count += 1;

      }

    });

    // Detect changes on third comprehension item
    display_element.querySelector('#jspsych-survey-multi-choice-2').addEventListener('change', function(){

      // On change, find which item is checked.
      var val = display_element.querySelector('#jspsych-survey-multi-choice-2 input:checked').value;

      // Validation
      if (val === "Yes") {

        // Update text
        Q3.innerHTML = "";
        Q3.className = "valid"

      } else {

        // Update text
        Q3.innerHTML = "That's incorrect. Your bonus will reflect the gambles you choose.";
        Q3.className = "invalid"

        // Restart animation
        Q3.style.animation = 'none';
        Q3.offsetHeight; /* trigger reflow */
        Q3.style.animation = null;

        // Increment error count
        count += 1;

      }

    })

    // Detect if all correct answers
    display_element.addEventListener('change', function(){
      if (Q1.className === 'valid' && Q2.className === 'valid' && Q3.className === 'valid') {
        document.getElementById("jspsych-survey-multi-choice-next").disabled = false;
      } else {
        document.getElementById("jspsych-survey-multi-choice-next").disabled = true;
      }
    })

    // Detect submit button press
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Measure response time
      var endTime = performance.now();
      var response_time = endTime - startTime;

      // Gather responses
      var question_data = {};
      for (var i=0; i<3; i++) {

        // Find matching question.
        var match = display_element.querySelector('#jspsych-survey-multi-choice-'+i);
        var name = match.attributes['data-name'].value;
        var val = match.querySelector("input[type=radio]:checked").value;

        // Store response
        var obje = {};
        obje[name] = val;
        Object.assign(question_data, obje);

      }

      // Save data
      var trial_data = {
        "rt": response_time,
        "responses": JSON.stringify(question_data),
        "errors": count
      };
      display_element.innerHTML += '';

      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = performance.now();
  };

  return plugin;
})();
