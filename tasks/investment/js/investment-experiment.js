//---------------------------------------//
// Define parameters.
//---------------------------------------//

// Define bandit parameters.
const probs = [0.20, 0.40, 0.60, 0.80];
const investments = [5, 1];

// Define response parameters.
const valid_responses = ['arrowleft', 'arrowright'];

// Define trial timings.
const choice_duration = 5000;
const feedback_duration = 350;
const outcome_duration = 1500;
const iti_duration = 400;

// Define screen size parameters.
var min_width = 400;
var min_height = 430;

//---------------------------------------//
// Define stimuli.
//---------------------------------------//

// Define stocks.
var stocks = jsPsych.randomization.shuffle([
  jsPsych.randomization.shuffle(['DAG','RNX','BOTO','WUFF']),
  jsPsych.randomization.shuffle(['AJH','SPT','YICK','CBTV']),
  jsPsych.randomization.shuffle(['ELL','TZQ','KTTY','HOPP']),
  jsPsych.randomization.shuffle(['LUD','ZEE','CONK','MQAL'])
])
stocks = [].concat.apply([], stocks);

// Define colors.
var order = jsPsych.randomization.sampleWithoutReplacement([
  [0,2,1,3], [0,2,3,1], [2,0,1,3], [2,0,3,1],
  [1,3,0,2], [1,3,2,0], [3,1,0,2], [3,1,2,0]
], 1)[0];

var colors = [];
order.forEach((i) => {
  if (i==0) {
    colors = colors.concat(jsPsych.randomization.shuffle(['#387da2','#993333','#b19e3c','#828282']));
  } else if (i==1) {
    colors = colors.concat(jsPsych.randomization.shuffle(['#245169','#732626','#8b7c2f','#5c5c5c']));
  } else if (i==2) {
    colors = colors.concat(jsPsych.randomization.shuffle(['#538348','#ce6b1d','#6a4173','#654321']));
  } else {
    colors = colors.concat(jsPsych.randomization.shuffle(['#3e6236','#a15417','#4c2f52','#4e3419']));
  }
})

// Define smartphone stimuli.
var smartphone_stimuli = [
  './img/battery-icon.png',
  './img/wifi-icon.png',
  './img/up-arrow.png',
  './img/down-arrow.png',
  './img/right-arrow.png',
];

//---------------------------------------//
// Define trials.
//---------------------------------------//

// Preallocate space.
var INVESTMENT = [];

// Iteratively construct trials.
var exposure = Array(16).fill(0);
var trial_no = 0;

// Iterate over (pseudo) blocks.
for (let i = 0; i < 4; i++) {

  // Define bandits
  var bandits = [...Array(4).keys()].map(j => i * 4 + j);

  // Iterate over trials.
  for (let j = 0; j < 15; j++) {

    // Randomize bandit orders.
    bandits = jsPsych.randomization.shuffle(bandits);

    // Iterate over bandits
    bandits.forEach((k) => {

      // RNG elements
      const outcome = Math.random() < probs[k % 4] ? 1 : 0;

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
        type: jsPsychInvestmentTrial,
        investments: investments,
        outcome: outcome,
        stock_name: stocks[k],
        stock_color: colors[k],
        randomize: true,
        valid_responses: valid_responses,
        choice_duration: choice_duration,
        feedback_duration: feedback_duration,
        outcome_duration: outcome_duration,
        iti_duration: iti_duration,
        data: {
          bandit: k + 1,
          probability: probs[k % 4],
          block: Math.floor(i / 2) + 1,
          trial: trial_no + 1,
          exposure: exposure[k]+1,
          phase: 'experiment'
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
      INVESTMENT.push(trial_node);

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
var READY_01 = {
  type: jsPsychInstructions,
  pages: [
    "<p>Great job! We will now begin the real game.</p><p>The game will be broken into two parts.</p>",
    "<p>You will be able to take a break between each part of the game.</p><p>However, please give your undivided attention during the game.</p>",
    "<p>Remember, to make the most money you should:</p>(1) invest <u>more money</u> in stocks you think have a <u>high chance</u> of doubling your investments</p><p>(2) invest <u>less money</u> in stocks you think have a <u>low chance</u> of doubling your investments</p>",
    "<p>Get ready to begin <b>Block 1/2</b>.</p><p>Press next when you're ready to start.</p>",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var READY_02 = {
  type: jsPsychInstructions,
  pages: [
    "<p>Take a break for a few moments and press any button when you are ready to continue.</p>",
    "<p>Get ready to begin <b>Block 2/2</b>.</p><p>Press next when you're ready to start.</p>",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var FINISHED = {
  type: jsPsychInstructions,
  pages: [
    "<p>Great job! You've finished the task.</p><p>Before you finish, we have a couple of short questions for you.</p>"
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}
