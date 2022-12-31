var jsPsychDisorderChecklist = (function (jspsych) {
  'use strict';

  const info = {
    name: 'disorder-checklist',
    description: '',
    parameters: {
      button_label: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
    }
  }

  /* jspsych-disorder-checklist.js
  * a jspsych plugin for assessing psychiatric disorder diagnoses.
  *
  * authors: Sam Zorowitz, Jamie Chiu
  *
  */
  class DisorderChecklistPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      //---------------------------------------//
      // Define parameters.
      //---------------------------------------//

      const disorders = [
        "Agoraphobia",
        "Alcohol dependence",
        "Anorexia nervosa",
        "Attention deficit hyperactivity disorder (ADHD)",
        "Autism spectrum disorder",
        "Binge eating disorder",
        "Bipolar I disorder",
        "Bipolar II disorder",
        "Body dysmorphic disorder",
        "Borderline personality disorder",
        "Bulimia nervosa",
        "Dysthymia",
        "Eating disorder (not otherwise specified)",
        "Generalized anxiety disorder",
        "Major depressive disorder",
        "Obsessive-compulsive disorder (OCD)",
        "Panic disorder",
        "Post-traumatic stress disorder (PTSD)",
        "Premenstrual dysphoric disorder",
        "Schizoaffective disorder",
        "Schizophrenia",
        "Schizotypal personality disorder",
        "Social anxiety disorder",
        "Specific phobia",
        "Substance dependence / addiction",
        "Tourette syndrome",
        "Trichotillomania",
      ];

      //---------------------------------------//
      // Define HTML.
      //---------------------------------------//

      // Initialize HTML
      var html = '';

      // Inject CSS
      html += `<style>

      /* Import Google material icons */
      @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

      .jspsych-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .checklist-container {
        position: relative;
        width: 462px;
        white-space: nowrap;
      }

      .searchbar-container {
        position: relative;
      }

      #searchbar {
        width: 400px;
        font-size: 16px; /* Increase font-size */
        padding: 12px 20px 12px 40px; /* Add some padding */
        border: 1px solid #ddd; /* Add a grey border */
        margin-bottom: 4px; /* Add some space below the input */
      }

      .searchbar-container span {
        position: absolute;
        left: 12px;
        top: 10px;
        font-family: "Material Icons";
      }

      #disorder-list {
        height: 375px;
        list-style-type: none;
        padding: 0;
        margin: 0;
        overflow:hidden;
        overflow-y:scroll;
      }

      #disorder-list li a {
        border: 1px solid #ddd; /* Add a border to all links */
        margin-top: -1px; /* Prevent double borders */
        background-color: #f6f6f6; /* Grey background color */
        padding: 12px; /* Add some padding */
        text-decoration: none; /* Remove default text underline */
        font-size: 17px; /* Increase the font-size */
        color: black; /* Add a black text color */
        display: block; /* Make it into a block element to fill the whole list */
      }

      #disorder-list li a:hover:not(.header) {
        background-color: #eee; /* Add a hover effect to all links */
      }

      #disorder-list li a:active {
        filter: brightness(1.1); /* Add brightness effect on click */
      }

      #disorder-list li a[status="selected"] {
        background-color: #7db5ca; /* Change color of selected items */
      }

      #disorder-list li a[status="selected"]:hover:not(.header) {
        background-color: #6babc2; /* Add a hover effect to selected links */
      }

      .checklist-footer {
        margin: auto;
        width: 462px;
        padding: 0 0 0 0;
        text-align: right;
      }

      .checklist-footer input[type=submit] {
        background-color: #F0F0F0;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        margin-top: 5px;
        margin-bottom: 20px;
        margin-right: 0px;
        font-size: 16px;
        color: black;
      }

      </style>`;

      // Add prompt.
      html += '<p>Have you ever been diagnosed with any of the mental health conditions below?<br><small>Please select all that apply (including past and/or current diagnoses), or leave blank if you prefer not to say.</small></p>'

      // Open container.
      html += '<div class="checklist-container">';

      // Add searchbar.
      html += '<div class="searchbar-container">';
      html += '<input type="text" id="searchbar" placeholder="Search for diagnoses..">';
      html += '<span class="material-icons-outlined">search</span>';
      html += '</div>';

      // Add disorders to list.
      html += '<ul id="disorder-list">';
      disorders.forEach((d, i) => {
        html += '<li><a id="disorder-' + i + '" status="unselected" value="' + d + '">' + d + '</a></li>';
      });
      html += '</ul>';

      // Add submit button.
      html += '<div class="checklist-footer">';
      html += `<input type="submit" id="submit" value="${trial.button_label}"></input>`;
      html += '</div>';

      // Close container.
      html += '</div>';

      // Display HTML
      display_element.innerHTML = html;

      //---------------------------------------//
      // Define functions.
      //---------------------------------------//

      // Scroll to top of screen.
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

      // Add event listener to each list entry.
      disorders.forEach((d, i) => {
        display_element.querySelector('#disorder-'+i).addEventListener('click', function(e) {
          var target = e.target;
          if (target.getAttribute('status') == "unselected") {
            target.setAttribute('status', 'selected');
          } else {
            target.setAttribute('status', 'unselected');
          }
        });
      });

      // Add event listener to search bar.
      display_element.querySelector('input').addEventListener('input', function(event) {

        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('searchbar');
        filter = input.value.toUpperCase();
        ul = document.getElementById("disorder-list");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }

      });

      display_element.querySelector('#submit').addEventListener('click', function(event) {

        // Wait for response
        event.preventDefault();

        // Measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;

        // Gather selections.
        var diagnoses = [];
        var selected = display_element.querySelectorAll("[status=selected]");
        selected.forEach(target => {
          diagnoses.push(target.getAttribute('value'));
        });

        // Store data
        var trialdata = {
          diagnoses: diagnoses,
          rt: response_time,
        };

        // Update screen
        display_element.innerHTML = '';

        // Move onto next trial
        jsPsych.finishTrial(trialdata);

      });

      // Define start time
      var startTime = performance.now();

    }
  }
  DisorderChecklistPlugin.info = info;

  return DisorderChecklistPlugin;

})(jsPsychModule);
