var jsPsychMentalHealthResources = (function (jspsych) {
  'use strict';

  const info = {
    name: 'mental-health-resources',
    description: '',
    parameters: {
      country: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Country',
        default: 'us',
        description: 'The country for which resources are first shown (us, canada, australia, new-zealand, other).'
      },
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
    }
  }

  /**
  * jspsych-mental-health-resources
  *
  * plugin for displaying mental health resources
  *
  * authors: Sam Zorowitz, Yongjing Ren
  *
  **/
  class MentalHealthResourcesPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // ---------------------------------- //
      // Section 1: Define HTML             //
      // ---------------------------------- //

      // Define HTML
      var html = '';

      // Insert CSS.
      html += `<style>
      .jspsych-content {
        max-width: 950px;
        margin: 20px auto auto auto;
        font-size: 17px;
      }
      a:link {
        color: #29a3a3;
      }
      .button-row {
        display: flex;
        flex-direction: row;
        column-gap: 10px;
        margin-bottom: 100px;
      }
      .button-row button {
        min-width: 96px;
        min-height: 24px;
        padding: 8px 12px 8px 12px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
      }
      .button-row button:hover {
        filter: brightness(95%);
        -webkit-filter: brightness(95%);
      }
      .resources {
        display: none;
        text-align: left;
        font-size: 17px;
        line-height: 1.5em;
      }
      .resources li:not(:last-child) {
         margin-bottom: 5px;
      }
      input[type=submit] {
        background-color: #F0F0F0;
        color: black;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        margin: 6px 0 6px 0;
      }
      input[type=submit]:hover {
        filter: brightness(95%);
        -webkit-filter: brightness(95%);
      }
      </style>`

      // Add paragraph 1.
      html += '<h3>Thank you for your honesty.</h3>'
      html += '<hr>';
      html += '<p>As a reminder, your responses to the questionnaires will remain strictly anonymous. Your identity is not known to the experimenters.</p>'

      // Add paragraph 2.
      html += '<p>If you are interested in learning more about mental health or in speaking to a professional, we have provided some resources below and on <a href="https://nivlab.princeton.edu/mental-health-resources" target="_blank">our website</a>. You may wish to screenshot this page for your reference.</p>'
      html += '<hr>';

      // Add button row.
      html += '<div class="button-row" id="button-row">';
      html += '<div>Resources by country:</div>';
      html += '<button id="button-us">United States</button>';
      html += '<button id="button-canada">Canada</button>';
      html += '<button id="button-australia">Australia</button>';
      html += '<button id="button-new-zealand">New Zealand</button>';
      html += '<button id="button-other">Other countries</button>';
      html += '</div>';

      // US resources
      html += '<div class="resources" id="us-resources">';
      html += '<ul>';
      html += '<li>To learn more about mental health conditions, treatment, research, and warning signs, you can visit the <a href="https://www.nami.org/Learn-More" target="_blank">NAMI site</a>.</li>';
      html += '<li>If the questions you answered trouble you in any way, we urge you to arrange a timely appointment with your physician, clinical psychologist or psychiatrist.</li>';
      html += '<li>For help finding a mental health professional, you can visit <a href="https://www.nami.org/Find-Support/Living-with-a-Mental-Health-Condition/Finding-a-Mental-Health-Professional" target="_blank">NAMI resources page</a>, and/or email <a href="mailto:info@nami.org" target="_blank">info@nami.org</a> for more specific or personal concerns.</li>';
      html += '<li>A number of organizations offer support during difficult times. Below we have listed some examples of these free and confidential support networks:<ul>';
      html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="https://suicidepreventionlifeline.org/chat" target="_blank">Lifeline Crisis chat</a></li>';
      html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="http://suicidepreventionlifeline.org" target="_blank">National Suicide Prevention Hotline</a> (or call: 1-800-273-8255)</li>';
      html += '</ul></ul>';
      html += '</div>';

      // Canada resources
      html += '<div class="resources" id="canada-resources">';
      html += '<ul>';
      html += '<li>To learn more about mental health conditions, treatment, research, and warning signs, you can visit the <a href="https://cmha.ca/find-info/mental-health/" target="_blank">CMHA site</a>.</li>';
      html += '<li>If the questions you answered trouble you in any way, we urge you to arrange a timely appointment with your physician, clinical psychologist or psychiatrist.</li>';
      html += '<li>For help finding a mental health services, you can visit <a href="https://www.camh.ca/en/health-info/guides-and-publications/looking-for-mental-health-services" target="_blank">CAMH page on looking for mental health services</a>, and/or the <a href="https://cmha.ca/find-help/how-to-get-help/" target="_blank">CMHA page on how to get help</a>.</li>';
      html += '<li>A number of organizations offer support during difficult times. For example, for free support network in Canada, you can visit <a href="https://talksuicide.ca/" target="_blank">talksuicide.ca</a> or call 1-833-456-4566 (1-866-277-3553 in Quebec)</li>';
      html += '</ul>';
      html += '</div>';

      // Australia resources
      html += '<div class="resources" id="australia-resources">';
      html += '<ul>';
      html += '<li>To learn more about mental health conditions, treatment, research, and warning signs, you can visit the <a href="https://www.healthdirect.gov.au/mental-illness" target="_blank">healthdirect site</a>.</li>';
      html += '<li>If the questions you answered trouble you in any way, we urge you to arrange a timely appointment with your physician, clinical psychologist or psychiatrist.</li>';
      html += '<li>For help finding a mental health services, you can visit <a href="https://www.headtohealth.gov.au/supporting-yourself/head-to-health-services" target="_blank">Head to Health Services</a>, and/or chat with <a href="https://www.headtohealth.gov.au/find-with-sam" target="_blank">their online chatbot</a>.</li>';
      html += '<li>A number of organizations offer support during difficult times. Below we have listed some examples of these free and confidential support networks:<ul>';
      html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="https://www.lifeline.org.au/" target="_blank">Lifeline crisis support</a> (or call 13 11 14)</li>';
      html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="https://www.suicidecallbackservice.org.au/" target="_blank">Suicide Call Back Service</a> (or call 1300 659 467)</li>';
      html += '</ul></ul></ul>';
      html += '</div>';

      // New Zealand resources
      html += '<div class="resources" id="new-zealand-resources">';
      html += '<ul>';
      html += '<li>To learn more about mental health conditions, treatment, research, and warning signs, you can visit the <a href="https://mentalhealth.org.nz/what-is-wellbeing" target="_blank">Mental Health Foundation site</a>.</li>';
      html += '<li>If the questions you answered trouble you in any way, we urge you to arrange a timely appointment with your physician, clinical psychologist or psychiatrist.</li>';
      html += '<li>For help finding a mental health professional, you can visit <a href="https://mentalhealth.org.nz/help/accessing-mental-health-services#how-to-find-a-therapist-or-mental-health-professional" target="_blank">Mental Health Foundation page on accessing services</a>.</li>';
      html += '<li>A number of organizations offer support during difficult times. Below we have listed some examples of these free and confidential support networks:<ul>';
      html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="https://www.lifeline.org.nz/" target="_blank">Lifeline</a> (or call 0800 543 354)</li>';
      html += '<li style="font-size: 1.25vw; margin: 0.3em 0 0 0">The <a href="https://www.samaritans.org.nz/" target="_blank">Samaritans</a> (or call: 0800 726 666)</li>';
      html += '</ul></ul>';
      html += '</div>';

      // Other location resources
      html += '<div class="resources" id="other-resources">';
      html += '<ul>';
      html += '<li>We have provided resources in the countries where most of our participants come from, but for any other country please search <i>"(name of your country) mental health support/services"</i> in Google to find resources close to you</a>.</li>';
      html += '</ul>';
      html += '</div>';

      // Add submit button
      html += '<form id="jspsych-mental-health-resources">';
      html += `<center><input type="submit" id="jspsych-mental-health-resources" value="${trial.button_label}"></input><center>`;
      html += '</form>';

      // Display HTML.
      display_element.innerHTML = html;

      //---------------------------------------//
      // Response handling.
      //---------------------------------------//

      // Scroll to top of screen.
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

      // Define convenience functions
      function hideAllResources() {
        document.getElementById('us-resources').style.display = 'none';
        document.getElementById('button-us').style.background = '#F0F0F0';
        document.getElementById('canada-resources').style.display = 'none';
        document.getElementById('button-canada').style.background = '#F0F0F0';
        document.getElementById('australia-resources').style.display = 'none';
        document.getElementById('button-australia').style.background = '#F0F0F0';
        document.getElementById('new-zealand-resources').style.display = 'none';
        document.getElementById('button-new-zealand').style.background = '#F0F0F0';
        document.getElementById('other-resources').style.display = 'none';
        document.getElementById('button-other').style.background = '#F0F0F0';
      }

      function showResources(country) {
        document.getElementById(country + '-resources').style.display = 'block';
        document.getElementById('button-' + country).style.background = '#a4d4d4';
        document.getElementById('button-row').style['margin-bottom'] = '0';
      }

      // Define list of countries.
      const countries = ['us', 'canada', 'australia', 'new-zealand', 'other'];

      // Initialize resources
      if (countries.includes(trial.country.toLowerCase())) {
        showResources(trial.country.toLowerCase());
      };

      // Define button event listeners
      countries.forEach(country => {
        document.getElementById('button-' + country).addEventListener('click', function() {
          hideAllResources(); showResources(country);
        });
      });

      display_element.querySelector('#jspsych-mental-health-resources').addEventListener('submit', function(event) {

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
  }
  MentalHealthResourcesPlugin.info = info;

  return MentalHealthResourcesPlugin;

})(jsPsychModule);
