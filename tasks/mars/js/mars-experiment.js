//---------------------------------------//
// Define parameters.
//---------------------------------------//

// Define puzzle set.
var items = [4,5,7];
var shape_set = 1;
var distractor = 'pd';

// Define timing parameters.
const trial_duration = 30000;     // 30 seconds

// Define quality assurance parameters.
const max_threshold = 10;
const rg_threshold = 3000;       // 3 seconds

// Define screen size parameters.
var min_width = 600;
var min_height = 600;

//---------------------------------------//
// Define images for preloading.
//---------------------------------------//

var images_task = [];
items.forEach(i => {
  images_task.push(`./img/is3/mars_${i}_M_ss${shape_set}.webp`)
  images_task.push(`./img/is3/mars_${i}_T1_ss${shape_set}_${distractor}.webp`)
  images_task.push(`./img/is3/mars_${i}_T2_ss${shape_set}_${distractor}.webp`)
  images_task.push(`./img/is3/mars_${i}_T3_ss${shape_set}_${distractor}.webp`)
  images_task.push(`./img/is3/mars_${i}_T4_ss${shape_set}_${distractor}.webp`)
});

//---------------------------------------//
// Define MARS task.
//---------------------------------------//

// Preallocate space.
var MARS = [];

// Define image constants.
const img_path = `./img/is3/`;

// Iteratively construct trials.
items.forEach((j, i) => {

  // Define screen check.
  const screen_check = {
    timeline: [{
      type: jsPsychScreenCheck,
      min_width: min_width,
      min_height: min_height
    }],
    conditional_function: function() {
      if (window.innerWidth >= min_width && window.innerHeight >= min_height) {
        return false;
      } else {
        return true;
      }
    }
  }

  // Define fixation.
  const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
    choices: 'NO_KEYS',
    trial_duration: 1200,
    on_start: function(trial) {
      const k = jsPsych.data.get().filter({trial_type: 'mars', item_set: 3}).count();
      trial.stimulus = `<div style="font-size:24px;">Loading puzzle:<br>${k+1} / 3</div>`;
    }
  }

  // Define trial.
  const trial = {
    type: jsPsychMars,
    item: j,
    shape_set: shape_set,
    distractor: distractor,
    correct: 0,
    countdown: true,
    feedback: false,
    trial_duration: trial_duration,
    randomize_choice_order: true,
    img_path: img_path,
    data: {item_set: 3},
    on_finish: function(data) {

      // Store number of browser interactions
      data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();

    }

  }

  // Define trial node.
  const trial_node = {
    timeline: [screen_check, fixation, trial]
  }

  // Push trial.
  MARS.push(trial_node);

});
