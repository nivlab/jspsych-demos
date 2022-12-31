//------------------------------------//
// Define parameters.
//------------------------------------//

// Define context (color) assignment.
const contexts = jsPsych.randomization.shuffle(['red','green','blue']);

// Define choices.
const choices = ['arrowleft','arrowup','arrowright'];    // left, top, right

// Define timings.
const choice_duration = null;
const feedback_duration = 1200;

//------------------------------------//
// Define images to preload.
//------------------------------------//

preload_images = [
  "./img/cloud01.svg",
  "./img/cloud02.svg",
  "./img/cloud03.svg",
  "./img/animal-fish01.svg",
  "./img/animal-tire.svg",
  "./img/animal-lion.svg",
  "./img/animal-snake.svg",
  "./img/surfboard-blue.svg",
  "./img/surfboard-green.svg",
  "./img/surfboard-red.svg",
  "./img/instructions01.png",
  "./img/instructions02.png",
  "./img/instructions03.png",
  "./img/instructions04.png",
  "./img/instructions05.png",
  "./img/instructions06.png",
  "./img/instructions07.png",
  "./img/instructions09.png",
];

// Define image preloading.
var preload = {
  type: jsPsychPreload,
  images: preload_images,
  message: 'Loading images. This may take a moment depending on your internet connection.',
  error_message: '<p>The experiment failed to load. Please try restarting your browser.</p><p>If this error persists after 2-3 tries, please contact the experimenter.</p>',
  continue_after_error: false,
  show_progress_bar: true,
  max_load_time: 30000
}

//------------------------------------//
// Define instructions block.
//------------------------------------//

// Define image scaling CSS.
const style = "width:auto; height:auto; max-width:100%; max-height:80vh;";

// Define instructions sequence.
var instructions = {
  type: jsPsychInstructions,
  pages: [
    `<img src='./img/instructions01.png' style="${style}"<./img>`,
    `<img src='./img/instructions02.png' style="${style}"<./img>`,
    `<img src='./img/instructions03.png' style="${style}"<./img>`,
    `<img src='./img/instructions04.png' style="${style}"<./img>`,
    `<img src='./img/instructions05.png' style="${style}"<./img>`,
    `<img src='./img/instructions06.png' style="${style}"<./img>`,
    `<img src='./img/instructions07.png' style="${style}"<./img>`,
    `<img src='./img/instructions09.png' style="${style}"<./img>`,
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

//------------------------------------//
// Define 3-arm bandit task.
//------------------------------------//

// Define rotate function.
function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

// Preallocate space
var blocks = [15];    // number of trials
var probs  = [];
var outcomes = [];
var correct = [];

for (var i = 0; i < blocks.length; i++) {

  // Define reward probabilities for block
  if (i==0) {
    probs.push(jsPsych.randomization.shuffle([0.8, 0.2, 0.2]));
  } else if (Math.random() > 0.5) {
    probs.push(arrayRotate(probs[i-1].slice(), true));
  } else {
    probs.push(arrayRotate(probs[i-1].slice(), false));
  }

  // Iteratively generate outcomes.
  for (var j = 0; j < blocks[i]; j++) {

    // Store correct choice.
    correct.push( probs[i].reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0) );

    // Simulate outcomes.
    var trio = [];
    for (var k = 0; k < probs[i].length; k++) {
      trio.push(Math.random() < probs[i][k] ? 1 : 0);
    }
    outcomes.push(trio);

  }

}

// Iteratively define trials.
var trials = [];

for (i = 0; i < outcomes.length; i++) {

  // Define trial.
  const trial = {
    type: jsPsychThreeArmTrial,
    contexts: contexts,
    outcomes: outcomes[i],
    choices: choices,
    choice_duration: choice_duration,
    feedback_duration: feedback_duration,
    data: { trial: i+1, correct: correct[i] },
    on_finish: function(data) {

      // Define accuracy.
      data.accuracy = (data.choice == data.correct ? 1 : 0);

    }

  }

  // Push trial.
  trials.push(trial);

}
