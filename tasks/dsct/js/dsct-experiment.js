//---------------------------------------//
// Define parameters.
//---------------------------------------//

const valid_responses = ['arrowleft', 'arrowright'];

//---------------------------------------//
// Define images for preloading.
//---------------------------------------//

// Define images for preloading.
const img_files = [
  './img/algiz.png',
  './img/ansuz.png',
  './img/berkanan.png',
  './img/calc.png',
  './img/cen.png',
  './img/dagaz.png',
  './img/isaz.png',
  './img/jeran.png',
  './img/uruz.png'
];

//---------------------------------------//
// Define digit symbol coding task.
//---------------------------------------//

// Predefine stimuli order.
const stimuli = jsPsych.randomization.shuffle(img_files.map(x => '<img src="' + x + '"></img>'));

// Predefine trials.
var DSCT = [];

for (let i = 0; i < 25; i++) {

  // Initialize block of trials.
  var block = [];

  // Add matching trials.
  for (let j = 0; j < 9; j++) {

    // Define single match trial.
    const trial = {
      type: 'dsct',
      stimuli: stimuli,
      target: [j, j],
      valid_responses: valid_responses
    }

    // Define conditional node.
    // const trial_node = {
    //   timeline: [trial],
    // }

    // Append.
    block.push(trial);

  }

  // Add mismatching trials.
  for (let j = 0; j < 9; j++) {

    // Define distractor.
    while (true) {
      var k = Math.floor(Math.random() * 10);
      if (j != k) {break};
    }

    // Define single mismatch trial.
    const trial = {
      type: 'dsct',
      stimuli: stimuli,
      target: [j, k],
      valid_responses: valid_responses
    }

    // Define conditional node.
    // const trial_node = {
    //   timeline: [trial],
    // }

    // Append.
    block.push(trial);

  }

  // Randomize trial order.
  block = jsPsych.randomization.shuffle(block);

  // Append trials.
  DSCT = DSCT.concat(block);

}
