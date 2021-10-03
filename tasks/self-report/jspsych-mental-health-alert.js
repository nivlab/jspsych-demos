/**
 * jspsych-mental-health-alert
 *
 * plugin for displaying mental health resources
 *
 **/

jsPsych.plugins["mental-health-alert"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'mental-health-alert',
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

    // ---------------------------------- //
    // Section 1: Define HTML             //
    // ---------------------------------- //

    // Define HTML
    var html = '';

    // Insert CSS.
    html += `<style>
    a:link {
      color: #29a3a3;
    }
    .mental-health-wrap {
      height: 100vh;
      width: 100vw;
    }
    .mental-health-container {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 80vh;
      width: 70vw;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      text-align: left;
      font-size: 1.33vw;
      line-height: 1.5vw;
    }
    .mental-health-container li {
      margin: 0.7em 0;
    }
    .mental-health-container input[type=submit] {
      background-color: #F0F0F0;
      color: black;
      padding: 8px 20px;
      border: none;
      border-radius: 4px;
      font-size: 1.15vw;
      margin: 1.5vh 0 0 0;
    }
    </style>`

    // Initialize mental-health-container.
    html += '<div class="mental-health-wrap"><div class="mental-health-container">';

    // Add paragraph 1.
    html += '<h3>Thank you for your honesty.</h3>'
    html += '<hr>';
    html += '<p>As a reminder, your responses to the questionnaires will remain strictly anonymous. Your identity is not known to the experimenters.</p>'

    // Add paragraph 2.
    html += '<p>If you are interested in learning more about mental health or in speaking to a professional, we have provided some resources below:</p>'

    // Add resources.
    html += '<ul>';
    html += '<li>To learn more about mental health conditions, treatment, research, and warning signs, you can visit the <a href="https://www.nami.org/Learn-More" target="_blank">NAMI site</a>.</li>';
    html += '<li>If the questions you answered trouble you in any way, we urge you to arrange a timely appointment with your physician, clinical psychologist or psychiatrist.</li>';
    html += '<li>For help finding a mental health professional, you can visit <a href="https://www.nami.org/Find-Support/Living-with-a-Mental-Health-Condition/Finding-a-Mental-Health-Professional" target="_blank">NAMI resources page</a>, and/or email <a href="mailto:info@nami.org" target="_blank">info@nami.org</a> for more specific or personal concerns.</li>';
    html += '<li>A number of organizations offer support during difficult times. Below we have listed some examples of these free and confidential support networks:<ul>';
    html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="https://suicidepreventionlifeline.org/chat" target="_blank">Lifeline Crisis chat</a></li>';
    html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="http://suicidepreventionlifeline.org" target="_blank">National Suicide Prevention Hotline</a> (or call: 1-800-273-8255)</li>';
    html += '</ul></ul>';

    // Begin form.
    html += '<form id="jspsych-mental-health-alert">';

    // Add submit button
    html += `<center><input type="submit" id="jspsych-mental-health-alert" value="${trial.button_label}"></input><center>`;

    // End form
    html += '</form></div></div>';

    // Display HTML.
    display_element.innerHTML = html;

    //---------------------------------------//
    // Response handling.
    //---------------------------------------//

    // Scroll to top of screen.
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    display_element.querySelector('#jspsych-mental-health-alert').addEventListener('submit', function(event) {

        // Wait for response
        event.preventDefault();

        // Measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;


        // Store data
        var trialdata = {
          "rt": response_time,
        };

        // Update screen
        display_element.innerHTML = '';

        // Move onto next trial
        jsPsych.finishTrial(trialdata);

    });

    var startTime = performance.now();

  };

  return plugin;

})();
