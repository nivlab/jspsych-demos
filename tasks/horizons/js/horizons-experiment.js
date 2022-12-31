//------------------------------------//
// Define utilities.
//------------------------------------//

// function to generate a number based on a normal distribution around a given mean and stddev (sigma)
function gaussianRandom(mean, sigma) {
  let u = Math.random()*0.682;
  return ((u % 1e-8 > 5e-9 ? 1 : -1) * (Math.sqrt(-Math.log(Math.max(1e-9, u)))-0.618))*1.618 * sigma + mean;
}

function sampleReward(mean, sigma) {
  return Math.max(Math.floor(gaussianRandom(mean, sigma)), 0);
}

//------------------------------------//
// Define games.
//------------------------------------//

var game_01 = {
  type: jsPsychHorizonsTrial,
  horizon: 5,
  rewards_L: Array(5).fill(1).map(x => sampleReward(60, 8)),
  rewards_R: Array(5).fill(1).map(x => sampleReward(40, 8)),
  forced_choices: [1, 0, 1, 1]
}

var game_02 = {
  type: jsPsychHorizonsTrial,
  horizon: 10,
  rewards_L: Array(10).fill(1).map(x => sampleReward(40, 8)),
  rewards_R: Array(10).fill(1).map(x => sampleReward(60, 8)),
  forced_choices: [1, 0, 0, 1]
}

var game_03 = {
  type: jsPsychHorizonsTrial,
  horizon: 5,
  rewards_L: Array(5).fill(1).map(x => sampleReward(40, 8)),
  rewards_R: Array(5).fill(1).map(x => sampleReward(50, 8)),
  forced_choices: [0, 0, 1, 0]
}

var HORIZONS = jsPsych.randomization.shuffle([game_01, game_02, game_03]);

//------------------------------------//
// Define transition screens.
//------------------------------------//

var READY_01 = {
  type: jsPsychInstructions,
  pages: [
    "Great job! You've passed the comprehension check.",
    "Get ready to begin <b>Block 1/2</b>.<br>Press next when you're ready to start.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

var READY_02 = {
  type: jsPsychInstructions,
  pages: [
    "Take a break for a few moments and press any button when you are ready to continue.",
    "Get ready to begin <b>Block 2/2</b>.<br>Press next when you're ready to start.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

// Define finish screen.
var FINISHED = {
  type: jsPsychInstructions,
  pages: [
    "Great job! You've finished the task.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}
