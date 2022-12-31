//---------------------------------------//
// Define parameters.
//---------------------------------------//

// Define bandit parameters.
const probs = [0.50, 0.50, 0.50, 0.50];

// Define response parameters.
const valid_responses = ['arrowleft', 'arrowright'];

// Define trial timings.
const choice_duration = 6000;
const feedback_duration = 450;
const outcome_duration = 1300;

// Define screen size parameters.
var min_width = 480;
var min_height = 295;

//---------------------------------------//
// Define stimuli.
//---------------------------------------//

// Define stimuli.
var stimuli = jsPsych.randomization.shuffle([
    './img/animals/bird-crane-shape.svg',
    './img/animals/deer-silhouette.svg',
    './img/animals/gecko-reptile-shape.svg',
    './img/animals/seahorse-silhouette.svg',
])
stimuli = stimuli.concat([
  './img/instructions.png',
  './img/animals/rabbit-shape.svg',
  './img/animals/horse-black-shape.svg',
]);

// Define colors.
var colors = jsPsych.randomization.shuffle(['#387da2','#993333','#b19e3c','#6e6e6e'])

//---------------------------------------//
// Define trials.
//---------------------------------------//

// Preallocate space.
var MRST = [];

// Iteratively construct trials.
var exposure = Array(16).fill(0);
var trial_no = 0;

// Iterate over (pseudo) blocks.
for (let i = 0; i < 1; i++) {

  // Define bandits
  var bandits = [...Array(4).keys()].map(j => i * 4 + j);

  // Iterate over trials.
  for (let j = 0; j < 15; j++) {

    // Randomize bandit orders.
    bandits = jsPsych.randomization.shuffle(bandits);

    // Iterate over bandits
    bandits.forEach((k) => {

      // RNG elements
      const points = Math.random() < probs[k % 4] ? 10 : 0;

      // Define screen check.
      const screen_check = {
        timeline: [{
          type: jsPsychScreenCheck,
          min_width: min_width,
          min_height: min_height
        }],
        conditional_function: function() {
          if (window.innerWidth >= min_width && window.innerHeight >= min_height) {
            return false;
          } else {
            return true;
          }
        }
      }

      // Define trial
      var trial = {
        type: jsPsychMrstTrial,
        stimulus: stimuli[k],
        color: colors[k],
        points: points,
        randomize: true,
        valid_responses: valid_responses,
        choice_duration: choice_duration,
        feedback_duration: feedback_duration,
        outcome_duration: outcome_duration,
        data: {
          phase: 'experiment',
          block: Math.floor(i / 2) + 1,
          trial: trial_no + 1,
          exposure: exposure[k]+1,
          bandit: k + 1,
          probability: probs[k % 4],
        },
        on_finish: function(data) {

          // Store number of browser interactions
          data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();

          // Evaluate missing data
          if ( data.choice == null ) {

            // Set missing data to true.
            data.missing = true;

          } else {

            // Set missing data to false.
            data.missing = false;

          }

        }

      }

      // Define looping node.
      const trial_node = {
        timeline: [screen_check, trial],
        loop_function: function(data) {
          return data.values()[0].missing;
        }
      }

      // Append trial.
      MRST.push(trial_node);

      // Increment counters
      trial_no++;
      exposure[k]++;

    })

  }

}

//------------------------------------//
// Define transition screens.
//------------------------------------//

// Define ready screen.
var READY = {
  type: jsPsychMrstInstructions,
  pages: [
    {
      prompt: "<p>Get ready to begin the task demo.</p><p>Press next when you're ready to start.</p>",
    }
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}
