//------------------------------------//
// Define parameters.
//------------------------------------//

// Define context (color) assignment.
const contexts = jsPsych.randomization.shuffle(['red','green','blue','purple'])
contexts.push('closed');

// Define rewards.
const outcomes = [
  [0,0],    // certain-0
  [1,1],    // certain-1
  [2,2],    // certain-2
  [0,2],    // risky-2
  [-1,-1]   // null
];

// Define choices.
const choices = ['arrowleft','arrowright'];

// Define timings.
const choice_duration = 10000;
const feedback_duration = 2000;

//------------------------------------//
// Define risk sensitivity task.
//------------------------------------//

// Define task conditions.
const conditions = [
  [0, 1],    // certain-0 vs certain-1 fish
  [1, 2],    // certain-1 vs certain-2 fish
  [0, 3],    // certain-0 vs risky-2 fish
  [1, 3],    // certain-1 vs risky-2 fish (1)
  [1, 3],    // certain-1 vs risky-2 fish (2)
  [2, 3],    // certain-2 vs risky-2 fish
  [0, 4],    // forced certain-0
  [1, 4],    // forced certain-1
  [2, 4],    // forced certain-2
  [3, 4],    // forced risky-2
];

// Define correct key press.
const correct = [
  [39,37],
  [39,37],
  [39,37],
  [-1,-1],
  [-1,-1],
  [37,39],
  [37,39],
  [37,39],
  [37,39],
  [37,39],
];

// Define trial sets.
const set = [];
for (i = 0; i < 10; i++) {

  for (j = 0; j < 2; j++) {

    // Define trial.
    const trial = {
      type: jsPsychRstTrial,
      beach_left: contexts[conditions[i][j]],
      beach_right: contexts[conditions[i][1-j]],
      outcome_left: jsPsych.randomization.repeat(outcomes[conditions[i][j]],1)[0],
      outcome_right: jsPsych.randomization.repeat(outcomes[conditions[i][1-j]],1)[0],
      choices: choices,
      choice_duration: choice_duration,
      feedback_duration: feedback_duration,
      data: {
        stimulus_L: conditions[i][j],
        stimulus_R: conditions[i][1-j],
        correct: correct[i][j]
      },
      on_finish: function(data) {

        // Evaluate missing data
        if ( data.key == null ) {

          // Set missing data to true.
          data.missing = true;

        } else {

          // Set missing data to false.
          data.missing = false;

          // Define accuracy.
          data.accuracy = data.key == data.correct;

        }

      }

    }

    // Define looping node.
    const trial_node = {
      timeline: [trial],
      loop_function: function(data) {
        return data.values()[0].missing;
      }
    }

    // Append trial.
    set.push(trial_node);

  }

}

// Define task trials.
var rst_trials = [];
for (i = 0; i < 5; i++) {
  rst_trials = rst_trials.concat(jsPsych.randomization.shuffle(set));
}
