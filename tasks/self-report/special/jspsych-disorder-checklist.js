jsPsych.plugins['disorder-checklist'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'disorder-checklist',
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

    //---------------------------------------//
    // Define parameters.
    //---------------------------------------//

    const disorders = [
      "Major depressive disorder",
      "Seasonal affective disorder",
      "Bipolar disorder (1 or 2)",
      "Generalized anxiety disorder",
      "Posttraumatic stress disorder",
      "Obsessive-compulsive disorder",
      "Specific phobia",
      "Autism spectrum disorder",
      "Anorexia nervosa",
      "Bulimia nervosa",
      "Binge eating disorder",
      "Eating disorder (not otherwise specified)"
    ];

    //---------------------------------------//
    // Define HTML.
    //---------------------------------------//

    // Initialize HTML
    var html = '';

    // Inject CSS
    html += `<style>
      #searchBar {
        width: 400px;
        background-image: url('/css/searchicon.png'); /* Add a search icon to input */
        background-position: 10px 12px; /* Position the search icon */
        background-repeat: no-repeat; /* Do not repeat the icon image */
        font-size: 16px; /* Increase font-size */
        padding: 12px 20px 12px 40px; /* Add some padding */
        border: 1px solid #ddd; /* Add a grey border */
        margin-bottom: 12px; /* Add some space below the input */
      }

      #disorderList {
        height: 400px;
        width: 400px;
        /* Remove default list styling */
        list-style-type: none;
        padding: 0;
        margin: 0;
        overflow:hidden;
        overflow-y:scroll;
      }

      #disorderList li a {
        border: 1px solid #ddd; /* Add a border to all links */
        margin-top: -1px; /* Prevent double borders */
        background-color: #f6f6f6; /* Grey background color */
        padding: 12px; /* Add some padding */
        text-decoration: none; /* Remove default text underline */
        font-size: 18px; /* Increase the font-size */
        color: black; /* Add a black text color */
        display: block; /* Make it into a block element to fill the whole list */
      }

      #disorderList li a:hover:not(.header) {
        background-color: #eee; /* Add a hover effect to all links, except for headers */
      }

      #disorderList li a:active {
        filter: brightness(1.2);
      }

      #disorderList li a[status="selected"] {
        background-color: #909090;
      }

      #disorderList li a[status="selected"]:hover:not(.header) {
        background-color: #808080;
      }

    </style>`;

    html += '<input type="text" id="searchBar" placeholder="Search for diagnoses..">';

    // Add disorders to list.
    html += '<ul id="disorderList">';
    disorders.forEach((d, i) => {
      html += '<li><a id="disorder-' + i + '" status="unselected" value="' + d + '">' + d + '</a></li>';
    });
    html += '</ul>';

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
        target = e.target;
        if (target.getAttribute('status') == "unselected") {
          target.setAttribute('status', 'selected');
        } else {
          target.setAttribute('status', 'unselected');
        }
        console.log(target)
      });
    });


    // Add event listener to search bar.
    display_element.querySelector('input').addEventListener('input', function(event) {

      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('searchBar');
      filter = input.value.toUpperCase();
      ul = document.getElementById("disorderList");
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

    // display_element.querySelector('#jspsych-survey-demo').addEventListener('submit', function(event) {
    //
    //   // Wait for response
    //   event.preventDefault();
    //
    //   // Measure response time
    //   var endTime = performance.now();
    //   var response_time = endTime - startTime;
    //
    //   var question_data = serializeArray(this);
    //   question_data = objectifyForm(question_data);
    //
    //   // Store data
    //   var trialdata = {
    //     "rt": response_time,
    //   };
    //
    //   // Update screen
    //   display_element.innerHTML = '';
    //
    //   // Move onto next trial
    //   jsPsych.finishTrial(trialdata);
    //
    // });

    // Define start time
    var startTime = performance.now();

  }

  return plugin;

})();
