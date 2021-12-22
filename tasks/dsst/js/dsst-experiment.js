//---------------------------------------//
// Define parameters.
//---------------------------------------//

const valid_responses = ['1', '2', '3'];

//---------------------------------------//
// Define images for preloading.
//---------------------------------------//

// Define images for preloading.
const img_files = [
  './img/asterisk.png',
  './img/bracket.png',
  './img/record.png',
  './img/squiggles.png',
  './img/triangle.png',
  './img/corner.png',
  './img/dots.png',
  './img/circle.png',
  './img/epsilon.png',
];

//---------------------------------------//
// Define digit symbol coding task.
//---------------------------------------//

// Predefine stimuli order.
const stimuli = jsPsych.randomization.shuffle(img_files.map(x => '<img src="' + x + '"></img>'));

// Predefine trials.
var dsst = [];

for (let i = 0; i < 30; i++) {

  // Initialize block of trials.
  var block = [];

  // Add matching trials.
  for (let j = 0; j < 9; j++) {

    // Define single match trial.
    const trial = {
      type: 'dsst',
      stimuli: stimuli,
      target: j,
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
  dsst = dsst.concat(block);

}
