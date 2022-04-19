//------------------------------------//
// Define parameters.
//------------------------------------//

// Define comprehension threshold.
var max_errors = 0;

//------------------------------------//
// Define images for preloading.
//------------------------------------//

preload_images = [
  "./img/instructions01.png",
  "./img/instructions02.png",
  "./img/instructions03.png",
  "./img/instructions04.png",
  "./img/instructions05.png",
  "./img/instructions06.png",
  "./img/instructions07.png",
  "./img/instructions08.png",
  "./img/instructions09.png",
  "./img/instructions10.png",
  "./img/instructions11.png",
  "./img/instructions12.png",
  "./img/instructions13.png",
  "./img/instructions14.png",
];

//------------------------------------//
// Define instructions.
//------------------------------------//

// Define image scaling CSS.
const style = "width:auto; height:auto; max-width:100%; max-height:75vh;";

// Instructions (part 01)
var INSTRUCTIONS_01 = {
  type: 'instructions',
  pages: [
    `<img src='./img/instructions01.png' style="${style}"></img>`,
    `<img src='./img/instructions02.png' style="${style}"></img>`,
    `<img src='./img/instructions03.png' style="${style}"></img>`,
    `<img src='./img/instructions04.png' style="${style}"></img>`,
    `<img src='./img/instructions05.png' style="${style}"></img>`,
    `<img src='./img/instructions06.png' style="${style}"></img>`,
    `<img src='./img/instructions07.png' style="${style}"></img>`,
    `<img src='./img/instructions08.png' style="${style}"></img>`,
    `<img src='./img/instructions09.png' style="${style}"></img>`,
    `<img src='./img/instructions10.png' style="${style}"></img>`,
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

// Practice games
var PRACTICE_H5 = {
  type: "horizons-trial",
  horizon: 5,
  rewards_L: [44, 57, 74, 72, 62],
  rewards_R: [31, 33, 24, 39, 29],
  forced_choices: [1, 0, 1, 1],
  data: {phase: "practice"}
}

var PRACTICE_H10 = {
  type: "horizons-trial",
  horizon: 10,
  rewards_L: [64, 50, 57, 35, 52, 38, 44, 61, 39, 38],
  rewards_R: [70, 69, 76, 71, 75, 58, 81, 84, 57, 61],
  forced_choices: [0, 0, 1, 1],
  data: {phase: "practice"}
}

// Instructions (part 02)
var INSTRUCTIONS_02 = {
  type: "instructions",
  pages: [
    `<img src='./img/instructions11.png' style="${style}"></img>`,
    `<img src='./img/instructions12.png' style="${style}"></img>`,
    `<img src='./img/instructions13.png' style="${style}"></img>`,
    `<img src='./img/instructions14.png' style="${style}"></img>`,
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

// Comprehension check.
var COMPREHENSION = {
  type: 'horizons-comprehension'
}

// Define instructions loop.
var INSTRUCTIONS = {
  timeline: [
    INSTRUCTIONS_01,
    PRACTICE_H5,
    PRACTICE_H10,
    INSTRUCTIONS_02,
    COMPREHENSION
  ],
  loop_function: function(data) {

    // Extract number of errors.
    const num_errors = data.values().slice(-1)[0].num_errors;

    // Check if instructions should repeat.
    if (num_errors > max_errors) {
      num_loops++;
      if (num_loops >= max_loops) {
        low_quality = true;
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }

  }
}

//------------------------------------//
// Define transition screens.
//------------------------------------//

var READY_01 = {
  type: 'instructions',
  pages: [
    "Great job! You've passed the comprehension check.",
    "Get ready to begin <b>Block 1/2</b>. It will take ~6 minutes.<br>Press next when you're ready to start.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

var READY_02 = {
  type: 'instructions',
  pages: [
    "Take a break for a few moments and press any button when you are ready to continue.",
    "Get ready to begin <b>Block 2/2</b>. It will take ~6 minutes.<br>Press next when you're ready to start.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

// Define finish screen.
var FINISHED = {
  type: 'instructions',
  pages: [
    "Great job! You've finished the task.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}
