// Define instructions
var instructions_01 = {
  type: jsPsychInstructions,
  pages: [
    "<p>In this game you will see a grid of squares that will flash blue one at a time.</p><p>Your goal is to remember the order in which the squares flashed blue.</p><p>At the end of each trial, press the tiles that flashed in the <b>same order</b> as they were presented to you.</p>",
    `<p>Do your best to memorize the order, but do not write them down<br>or use any other external tool to help you remember.</p><p>If you make a mistake, click the "Clear" button to erase your entries.</p><p>When you're ready, click "Next" to get started.</p>`
  ],
  key_forward: 'ArrowRight',
  key_backward: 'ArrowLeft',
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next'
}

// Define forwards recall
var recall_forwards = {
  timeline: [
    {
      type: jsPsychScreenCheck,
      min_width: 258,
      min_height: 364
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<p style="font-size: 48px;">+</p>',
      choices: 'NO_KEYS',
      trial_duration: 1200,
    },
    {
      type: jsPsychSpatialRecall,
      grid_size: 4,
      sequence: jsPsych.timelineVariable('sequence'),
      backwards: false
    }
  ],
  timeline_variables: [
    {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 2)},
    {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 3)},
    {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 4)},
  ]
}

// Define instructions
var instructions_02 = {
  type: jsPsychInstructions,
  pages: [
    "For the following trials, recall the order of squares in the <b>reverse order</b>."
  ],
  key_forward: 'ArrowRight',
  key_backward: 'ArrowLeft',
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next'
}

// Define forwards recall
var recall_backwards = {
  timeline: [
    {
      type: jsPsychScreenCheck,
      min_width: 258,
      min_height: 364
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<p style="font-size: 48px;">+</p>',
      choices: 'NO_KEYS',
      trial_duration: 1200,
    },
    {
      type: jsPsychSpatialRecall,
      grid_size: 4,
      sequence: jsPsych.timelineVariable('sequence'),
      backwards: true
    }
  ],
  timeline_variables: [
    {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 2)},
    {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 3)},
    {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 4)},
  ]
}
