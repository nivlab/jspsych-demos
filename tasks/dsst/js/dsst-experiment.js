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
  type: 'dsst-instructions',
  pages: [
    "<p>In this game, you will see a series of symbols.<br>Each symbol is paired with a number (top row).</p>",
    "<p>When you see a symbol pop up, your task is to enter its<br>number using the 1,2,3 keys on your keyboard.</p>",
    `<p>Now let's practice a couple of trials.<br>Press the "Next" button when you're ready to start.</p>`
  ],
  stimuli: ['./img/circle.png', './img/square.png', './img/triangle.png'],
  target: 0,
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var practice = {
  timeline: [{
    type: 'dsst',
    stimuli: ['./img/circle.png', './img/square.png', './img/triangle.png'],
    target: jsPsych.timelineVariable('target'),
    valid_responses: jsPsych.timelineVariable('valid_responses')
  }],
  timeline_variables: [
    {target: 0, valid_responses: valid_responses[0]},
    {target: 0, valid_responses: valid_responses[0]},
    {target: 0, valid_responses: valid_responses[0]},
    {target: 0, valid_responses: valid_responses[0]},
    {target: 1, valid_responses: valid_responses[1]},
    {target: 1, valid_responses: valid_responses[1]},
    {target: 1, valid_responses: valid_responses[1]},
    {target: 1, valid_responses: valid_responses[1]},
    {target: 2, valid_responses: valid_responses[2]},
    {target: 2, valid_responses: valid_responses[2]},
    {target: 2, valid_responses: valid_responses[2]},
    {target: 2, valid_responses: valid_responses[2]}
  ],
  randomize_order: true
}

var instructions_02 = {
  type: 'instructions',
  pages: [
    `<p>Great job! Now we will get stared with the actual game.</p><p>You will have 90 seconds to complete as many trials as possible.</p><p>You will get a break every 30 seconds.</p><p>Try to work as quickly as you can.</p><p>Press the "Next" button when you're ready to start.</p>`
  ],
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var INSTRUCTIONS = [
  instructions_01,
  practice,
  instructions_02
];

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
