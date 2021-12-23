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
  './img/ring.png',
  './img/epsilon.png',
];

// Predefine stimuli order.
const stimuli = jsPsych.randomization.shuffle(img_files);

//---------------------------------------//
// Define instructions.
//---------------------------------------//

var instructions_01 = {
  type: 'dsst',
  stimuli: ['./img/circle.png', './img/square.png', './img/triangle.png'],
  target: 0,
  valid_responses: valid_responses[0],
  data: {block: 0}
}

//---------------------------------------//
// Define block 1.
//---------------------------------------//

// Predefine trial order.
var DSST_01 = [];
repeatShuffles([0,0,0,1,1,1,2,2,2], 25).forEach(k => {

  // Define single trial.
  const trial = {
    type: 'dsst',
    stimuli: stimuli.slice(0,3),
    target: k,
    valid_responses: valid_responses[k],
    data: {block: 1}
  }

  // Append trial.
  DSST_01.push(trial)

});

//---------------------------------------//
// Define utility functions.
//---------------------------------------//

// Convenience function to generate concatenated array of arrays,
// where base array is iteratively shuffled.
function repeatShuffles(arr, n) {

  // Preallocate space
  var arrays = []

  // Iteratively append shuffled array.
  for (let i = 0; i < n; i++) {
    arrays.push(jsPsych.randomization.shuffle(arr));
  }

  // Return flattened array.
  return [].concat.apply([], arrays)

}
