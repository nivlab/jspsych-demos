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
  type: jsPsychInstructions,
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
  type: jsPsychHorizonsTrial,
  horizon: 5,
  rewards_L: [44, 57, 74, 72, 62],
  rewards_R: [31, 33, 24, 39, 29],
  forced_choices: [1, 0, 1, 1],
  data: {phase: "practice"}
}

var PRACTICE_H10 = {
  type: jsPsychHorizonsTrial,
  horizon: 10,
  rewards_L: [64, 50, 57, 35, 52, 38, 44, 61, 39, 38],
  rewards_R: [70, 69, 76, 71, 75, 58, 81, 84, 57, 61],
  forced_choices: [0, 0, 1, 1],
  data: {phase: "practice"}
}

// Instructions (part 02)
var INSTRUCTIONS_02 = {
  type: jsPsychInstructions,
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
  type: jsPsychHorizonsComprehension
}

//------------------------------------//
// Define instructions block.
//------------------------------------//

var INSTRUCTIONS_SKIP = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p>You are starting a demo of the <b>Horizons task.</b></p><p>To see the instructions, press the "1" key. To skip them, press the "2" key.</p>',
  choices: ["1","2"]
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
      return true;
    } else {
      return false;
    }

  },
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0];
    if(jsPsych.pluginAPI.compareKeys(data.response, '2')){
      return false;
    } else {
      return true;
    }
  }
}
