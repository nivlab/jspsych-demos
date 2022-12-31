//---------------------------------------//
// Define parameters.
//---------------------------------------//

// Define response parameters.
const valid_responses = ['1', '2', '3'];

// Define block length.
const block_length = 30000;

//---------------------------------------//
// Define images for preloading.
//---------------------------------------//

// Initialize images for preloading.
var img_files = jsPsych.randomization.shuffle([
  './img/circle.png',
  './img/square.png',
  './img/triangle.png'
]);

// Randomize image arrays.
const arrays = jsPsych.randomization.shuffle([
  jsPsych.randomization.shuffle(['./img/asterisk.png', './img/bracket.png', './img/record.png']),
  jsPsych.randomization.shuffle(['./img/squiggles.png', './img/corner.png', './img/dots.png']),
  jsPsych.randomization.shuffle(['./img/epsilon.png', './img/ring.png', './img/diamond.png']),
]);

// Concatenate image arrays.
img_files = [].concat.apply(img_files, arrays);

//---------------------------------------//
// Define instructions.
//---------------------------------------//

var instructions_01 = {
  type: jsPsychDsstInstructions,
  pages: [
    "<p>In this task, you will see a series of symbols.<br>Each symbol is paired with a number (top row).</p>",
    "<p>When you see a symbol pop up, your task is to enter its<br>number using the 1,2,3 keys on your keyboard.</p>",
    `<p>Now let's practice a couple of trials.<br>Press the "Next" button when you're ready to start.</p>`
  ],
  stimuli: img_files.slice(0,3),
  target: 0,
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var practice = {
  timeline: [{
    type: jsPsychDsst,
    stimuli: img_files.slice(0,3),
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
  type: jsPsychInstructions,
  pages: [
    `<p>Great job! Now we will get stared with the actual task.</p><p>You will have 90 seconds to complete as many trials as possible.</p><p>Try to work as quickly as you can. You will get a break every 30 seconds.</p><p>Press the "Next" button when you're ready to start.</p>`
  ],
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
  on_finish: function(data) {

    // Define block 1 start time.
    // Note: if this is deleted, the entire task will break.
    block_1_start = data.time_elapsed;

  }
}

var INSTRUCTIONS = [
  instructions_01,
  practice,
  instructions_02
];

//---------------------------------------//
// Define DSST blocks.
//---------------------------------------//

// Predefine start times.
var block_1_start = null;
var block_2_start = null;
var block_3_start = null;

// Define Block 1.
var DSST_01 = [];
repeatShuffles([0,0,0,1,1,1,2,2,2], 25).forEach(k => {

  // Define single trial.
  const trial = {
    type: jsPsychDsst,
    stimuli: img_files.slice(3,6),
    target: k,
    valid_responses: valid_responses[k],
    data: {block: 1}
  }

  // Define trial node.
  const trial_node = {
    timeline: [trial],
    conditional_function: function() {

      // Get data from most recent trial.
      [data] = jsPsych.data.get().last(1).values();

      // Check if time limit has been exceeded.
      if (data.time_elapsed - block_1_start >= block_length) {
        return false;
      } else {
        return true;
      }

    }
  }

  // Append trial.
  DSST_01.push(trial_node)

});

// Define Block 1.
var DSST_02 = [];
repeatShuffles([0,0,0,1,1,1,2,2,2], 25).forEach(k => {

  // Define single trial.
  const trial = {
    type: jsPsychDsst,
    stimuli: img_files.slice(6,9),
    target: k,
    valid_responses: valid_responses[k],
    data: {block: 2}
  }

  // Define trial node.
  const trial_node = {
    timeline: [trial],
    conditional_function: function() {

      // Get data from most recent trial.
      [data] = jsPsych.data.get().last(1).values();

      // Check if time limit has been exceeded.
      if (data.time_elapsed - block_2_start >= block_length) {
        return false;
      } else {
        return true;
      }

    }
  }

  // Append trial.
  DSST_02.push(trial_node)

});

// Define Block 1.
var DSST_03 = [];
repeatShuffles([0,0,0,1,1,1,2,2,2], 25).forEach(k => {

  // Define single trial.
  const trial = {
    type: jsPsychDsst,
    stimuli: img_files.slice(9,12),
    target: k,
    valid_responses: valid_responses[k],
    data: {block: 3}
  }

  // Define trial node.
  const trial_node = {
    timeline: [trial],
    conditional_function: function() {

      // Get data from most recent trial.
      [data] = jsPsych.data.get().last(1).values();

      // Check if time limit has been exceeded.
      if (data.time_elapsed - block_3_start >= block_length) {
        return false;
      } else {
        return true;
      }

    }
  }

  // Append trial.
  DSST_03.push(trial_node)

});

//---------------------------------------//
// Define transition screens.
//---------------------------------------//

var PAUSE_01 = {
  type: jsPsychInstructions,
  pages: [
    '<p>Take a break for a few moments and press "Next" when you are ready to continue.</p>',
    "<p>Get ready to begin <b>Block 2/3</b></p><p>Press next when you're ready to start.</p>",
  ],
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
  on_finish: function(data) {

    // Define block 2 start time.
    // Note: if this is deleted, the entire task will break.
    block_2_start = data.time_elapsed;

  }
}

var PAUSE_02 = {
  type: jsPsychInstructions,
  pages: [
    '<p>Take a break for a few moments and press "Next" when you are ready to continue.</p>',
    "<p>Get ready to begin <b>Block 3/3</b></p><p>Press next when you're ready to start.</p>",
  ],
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
  on_finish: function(data) {

    // Define block 3 start time.
    // Note: if this is deleted, the entire task will break.
    block_3_start = data.time_elapsed;

  }
}

var FINISHED = {
  type: jsPsychInstructions,
  pages: [
    `<p>Great job! You've finished the task.</p><p>Press "Next" to end the experiment.</p>`
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

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
