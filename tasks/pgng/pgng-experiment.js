//------------------------------------//
// Define experiment parameters.
//------------------------------------//

// Define trial structure.
runsheets = jsPsych.randomization.shuffle(runsheets)

// Define rune sets.
const rune_sets = ['elianto','bacs1','bacs2'];
const rune_prob = [1.00, 0.00, 0.00];

// Define aesthetics.
if ( Math.random() < 1 ) {
  var instr_color_win    = 'blue';
  var scanner_color_win  = '#3366ff99';
  var outcome_color_win  = '#1a3ea7';
  var instr_color_lose   = 'red';
  var scanner_color_lose = '#f73b6a7A';
  var outcome_color_lose = '#930a25';
} else {
  var instr_color_win    = 'red';
  var scanner_color_win  = '#f73b6a7A';
  var outcome_color_win  = '#930a25';
  var instr_color_lose   = 'blue';
  var scanner_color_lose = '#3366ff99';
  var outcome_color_lose = '#1a3ea7';
}

// Define go key.
const key_go = " ";

// Define timings.
const trial_duration = 1300;         // Duration of trial (response phase)
const feedback_duration = 1200;      // Duration of feedback (minimum)

// Define screen size parameters.
var min_width = 500;
var min_height = 450;

//------------------------------------//
// Define rune order.
//------------------------------------//

// Randomly select rune set.
const rune_set = jsPsych.randomization.sampleWithReplacement(rune_sets, 1, rune_prob)[0];

// Gather rune orders.
if ( rune_set == 'elianto' ) {
  var runes_a = ['U', 'L', 'A', 'G', 'P', 'S', 'W', 'E', 'K', 'D', 'J', 'V'];
  var runes_b = ['M', 'R', 'Y', 'H', 'Z', 'C', 'B', 'T', 'X', 'F', 'N', 'Q'];
} else if ( rune_set == 'bacs1' ) {
  var runes_a = ['B', 'Z', 'J', 'R', 'V', 'E', 'T', 'F', 'A', 'C', 'L', 'Q'];
  var runes_b = ['Y', 'H', 'P', 'M', 'U', 'S', 'K', 'D', 'O', 'I', 'G', 'N'];
} else if ( rune_set == 'bacs2' ) {
  var runes_a = ['J', 'W', 'X', 'Z', 'G', 'O', 'C', 'E', 'H', 'Q', 'T', 'Y'];
  var runes_b = ['M', 'B', 'K', 'V', 'R', 'P', 'L', 'S', 'U', 'A', 'F', 'N'];
}

// Randomize presentation order.
if ( Math.random() < 0.5 ) { runes_a = runes_a.reverse(); }
if ( Math.random() < 0.5 ) { runes_b = runes_b.reverse(); }
var runes = ( Math.random() < 0.5 ) ? [runes_a, runes_b] : [runes_b, runes_a];

//------------------------------------//
// Define experiment.
//------------------------------------//
// One block of the PGNG task is comprised of 8-12 exposures to 12 robots, or
// 120 total trials. 80% of trials provide correct feedback. There are 2 total
// blocks, or 240 total trials.

// Preallocate space.
var PGNG = [];

// Iteratively define trials.
var n = 0;
for (let i=0; i<runsheets.length; i++) {

  for (let j=0; j<runsheets[i]['robots'].length; j++) {

    jsPsych.randomization.shuffle([0,1,2,3]).forEach(function (k) {

      // Extract trial information.
      const robot    = runsheets[i]['robots'][j][k];
      const stimulus = runsheets[i]['stimuli'][j][k];

      // Define trial metadata.
      const valence = (robot < 2) ? 'win' : 'lose';
      const action = (robot % 2 == 0) ? 'go' : 'no-go';

      // Define trial outcomes.
      const sham = (Math.random() < 0.8) ? 0 : 1;
      if (valence == 'win' && sham == 0) {
        var outcome_correct   = '+10';
        var outcome_incorrect = '+1';
      } else if (valence == 'win') {
        var outcome_correct   = '+1';
        var outcome_incorrect = '+10';
      } else if (valence == 'lose' && sham == 0) {
        var outcome_correct   = '-1';
        var outcome_incorrect = '-10';
      } else {
        var outcome_correct   = '-10';
        var outcome_incorrect = '-1';
      }

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

      // Define trial.
      const trial = {
        type: jsPsychPgngTrial,
        robot_rune: runes[i][stimulus],
        scanner_color: valence == 'win' ? scanner_color_win : scanner_color_lose,
        outcome_color: valence == 'win' ? outcome_color_win : outcome_color_lose,
        outcome_correct: outcome_correct,
        outcome_incorrect: outcome_incorrect,
        correct: robot % 2 == 0 ? key_go : -1,
        rune_set: rune_set,
        valid_responses: [key_go],
        trial_duration: trial_duration,
        feedback_duration: feedback_duration,
        data: {
          block: i + 1,
          trial: n + 1,
          stimulus: stimulus,
          robot: robot + 1,
          valence: valence,
          action: action,
          sham: sham
        },
        on_finish: function(data) {

          // Store number of browser interactions
          data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();

        }
      };

      // Define trial node.
      const trial_node = {
        timeline: [screen_check, trial]
      }

      // Append.
      PGNG.push(trial_node)
      n++;

    })

  }

}

//------------------------------------//
// Define transition screens.
//------------------------------------//

// Define ready screen.
var READY = {
  type: jsPsychPgngInstructions,
  pages: [
    "Great job! You've passed the comprehension check.",
    "Get ready to begin the task demo.<br>Press next when you're ready to start.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}
