//---------------------------------------//
// Define symbol assignment.
//---------------------------------------//

// Define unique symbols.
var symbol_array = ['c','d','e','f','j','k','m','o','s','t','y','C','N','O','L','T']

// Shuffle symbols.
symbol_array = jsPsych.randomization.repeat(symbol_array, 1);

// Define comprehension threshold.
var max_errors = 0;
var max_loops = 3;
var num_loops = 0;

// Define missed repsonses count.
var missed_threshold = 10;
var missed_responses = 0;

//---------------------------------------//
// Define learning phase instructions.
//---------------------------------------//

var instructions_01 = {
  type: jsPsychRvlInstructions,
  pages: [
    "We are now starting the experiment.<br><br>Use the buttons below (or the left/right arrow keys) to navigate the instructions.",
    "In this task, you are a space explorer picking your robot crew.<br>The robots will look like the ones below.",
    "Each robot will have a <b>unique symbol</b> on its chestplate.<br>This symbol will help you identify each robot.",
    "On every turn, you will choose a robot for your crew.<br>When you select a robot, it may give you:<br><b><font color=#01579b>+10 points, </font><font color=#303030>+0 points</font></b>, or <b><font color=#A41919>-10 points</font></b>.",
    "To help you learn, we will also show you the points you<br><i>could have earned</i> if you had chosen the other robot.<br><b>NOTE:</b> You will earn points only for the robot you choose.",
    "Some robots are better than others. Some will give you more points than others and some will lose you less points that others.",
    "Now let's practice with the robots below. Using the left/right<br>arrow keys, select the robots for testing and try to learn<br>which will give you more points.",
    "<b>HINT:</b> Pay attention to the symbols and the results of each test."
  ],
  symbol_L: "V",
  symbol_R: "U",
}

var practice_block_01 = {
  type: jsPsychRvlPractice,
  symbol_L: "V",
  symbol_R: "U",
  outcome_L: "zero",
  outcome_R: "win",
  choices: ['arrowleft','arrowright'],
  correct: 'arrowright',
  feedback_duration: 2000
}

var instructions_02 = {
  type: jsPsychRvlInstructions,
  pages: [
    "Great job! Now let's try for one more set of robots."
  ],
  symbol_L: "W",
  symbol_R: "R",
}

var practice_block_02 = {
  type: jsPsychRvlPractice,
  symbol_L: "W",
  symbol_R: "R",
  outcome_L: "lose",
  outcome_R: "zero",
  choices: ['arrowleft','arrowright'],
  correct: 'arrowright',
  feedback_duration: 2000
}

var instructions_03 = {
  type: jsPsychRvlInstructions,
  pages: [
    "During the task, there will be many robots to test.<br>Remember to pay close attention to their symbols.",
    "Your job is to try to select the best robot on each trial.<br>Even though you will learn the test results for both robots,<br>you will only earn points for the robot you test.",
    "<b>HINT:</b> The robots may not always give you points, but some robots will give you points and others will lose you points more often than others.",
    "You should try to earn as many points as you can, even if it's not possible to win points or avoid losing points on every round.",
    "At the end of the task, the total number of points you've earned will be converted into a performance bonus.",
    "Next, we will ask you some questions about the task.<br>You must answer all the questions correctly to continue.",
  ]
}

var comprehension = {
  type: jsPsychRvlComprehension
}

var instructions = {
  timeline: [
    instructions_01,
    practice_block_01,
    instructions_02,
    practice_block_02,
    instructions_03,
    comprehension
  ],
  loop_function: function(data) {

    // Extract number of errors.
    const num_errors = data.values().slice(-1)[0].num_errors;

    // Check if instructions should repeat.
    if (num_errors > max_errors) {
      num_loops++;
      return true;
    } else {
      return false;
    }

  }
}

var ready = {
  type: jsPsychRvlInstructions,
  pages: [
    "Great job! You've passed the comprehension check.",
    "Get ready to begin the experiment.<br>Press next when you're ready to start.",
  ],
}

//---------------------------------------//
// Define probe phase instructions.
//---------------------------------------//

var instructions_05 = {
  type: jsPsychRvlInstructions,
  pages: [
    "That's the end of the learning phase. Great job!",
    "In this next part, you will select which robots you would like to join your team.",
    "As you make your choices, you will not receive any feedback after your choice.",
    "You should still choose the robot you think is better on each trial.<br>Your choices will still contribute to your performance bonus.",
    "Get ready to make your selections.<br><br>Choose wisely!"
  ],
}

var instructions_06 = {
  type: jsPsychRvlInstructions,
  pages: [
    "That's the end of the selection phase. Great job!",
    "Take a break for a few moments and<br>click next when you are ready to continue.",
    "Great! You are now going to <b>test</b> a new set of robots.<br>The task is the same as before.",
    "Remember to pay close attention to the symbol on each robot<br>and try to earn as many points as you can.",
  ],
}

//---------------------------------------//
// Define learning phase 1.
//---------------------------------------//
// Learning blocks are comprised of
// 24 presentations of 4 unique stimulus
// pairs (96 total trials). With left/right
// side counterbalancing, this is 12
// presentations per unique pair / side.

// Initialize phase array.
var learning_phase_1 = [];

// Iteratively define trials
for (i = 0; i < 12; i++) {

  // Initialize (temporary) trial array.
  const trials = [];

  // Iterate over unique pairs.
  for (j = 0; j < 4; j++) {

    // Define metadata.
    if (j % 2 == 0) { var val = 'win'; }
    else { var val = 'lose'; }

    // Append trial (LR).
    var LR = {
      type: jsPsychRvlLearning,
      symbol_L: symbol_array[2*j+0],
      symbol_R: symbol_array[2*j+1],
      outcome_L: jsPsych.randomization.sampleWithoutReplacement([val,val,val,'zero'],1)[0],
      outcome_R: jsPsych.randomization.sampleWithoutReplacement(['zero','zero','zero',val],1)[0],
      choices: ['arrowleft','arrowright'],
      correct: ((val == 'win') ? 'arrowleft' : 'arrowright'),
      data: {block: 1},
      on_finish: function(data) {

        // Evaluate missing data
        if ( data.rt == null ) {

          // Set missing data to true.
          data.missing = true;

          // Increment counter. Check if experiment should end.
          missed_responses++;
          if (missed_responses >= missed_threshold) {
            jsPsych.endExperiment();
          }

        } else {

          // Set missing data to false.
          data.missing = false;

        }

      }

    }

    // Define looping node.
    const LR_node = {
      timeline: [LR],
      loop_function: function(data) {
        return data.values()[0].missing;
      }
    }
    trials.push(LR_node);

    // Append trial (RL).
    var RL = {
      type: jsPsychRvlLearning,
      symbol_L: symbol_array[2*j+1],
      symbol_R: symbol_array[2*j+0],
      outcome_L: jsPsych.randomization.sampleWithoutReplacement(['zero','zero','zero',val],1)[0],
      outcome_R: jsPsych.randomization.sampleWithoutReplacement([val,val,val,'zero'],1)[0],
      choices: ['arrowleft','arrowright'],
      correct: ((val == 'win') ? 'arrowright' : 'arrowleft'),
      data: {block: 1},
      on_finish: function(data) {

        // Evaluate missing data
        if ( data.rt == null ) {

          // Set missing data to true.
          data.missing = true;

          // Increment counter. Check if experiment should end.
          missed_responses++;
          if (missed_responses >= missed_threshold) {
            jsPsych.endExperiment();
          }

        } else {

          // Set missing data to false.
          data.missing = false;

        }

      }

    }

    // Define looping node.
    const RL_node = {
      timeline: [RL],
      loop_function: function(data) {
        return data.values()[0].missing;
      }
    }
    trials.push(RL_node);

  }

  // Shuffle trials. Append.
  learning_phase_1 = learning_phase_1.concat( jsPsych.randomization.repeat(trials, 1) );

}

//------------------------------------//
// Define probe phase 1.
//------------------------------------//
// Probe phases are comprised of
// every possible pair combination
// (28 in total) presented 4 times
// (112 total trials).

// Initialize phase array.
probe_phase_1 = [];

// Iteratively define trials
for (i = 0; i < 8; i++) {

  for (j = 0; j < 8; j++) {

    if (i != j) {

      // Append trial.
      var probe = {
        type: jsPsychRvlProbe,
        symbol_L: symbol_array[i],
        symbol_R: symbol_array[j],
        choices: ['arrowleft','arrowright'],
        data: {block: 1},
        on_finish: function(data) {

          // Evaluate missing data
          if ( data.rt == null ) {

            // Set missing data to true.
            data.missing = true;

            // Increment counter. Check if experiment should end.
            missed_responses++;
            if (missed_responses >= missed_threshold) {
              jsPsych.endExperiment();
            }

          } else {

            // Set missing data to false.
            data.missing = false;

          }

        }

      }

      // Define looping node.
      const probe_node = {
        timeline: [probe],
        loop_function: function(data) {
          return data.values()[0].missing;
        }
      }

      // Add trials twice.
      probe_phase_1.push(probe_node);
      probe_phase_1.push(probe_node);

    }

  }

};

// Shuffle trials.
probe_phase_1 = jsPsych.randomization.repeat(probe_phase_1, 1);

//---------------------------------------//
// Define learning phase 2.
//---------------------------------------//
// Learning blocks are comprised of
// 24 presentations of 4 unique stimulus
// pairs (96 total trials). With left/right
// side counterbalancing, this is 12
// presentations per unique pair / side.

// Initialize phase array.
var learning_phase_2 = [];

// Iteratively define trials
for (i = 0; i < 12; i++) {

  // Initialize (temporary) trial array.
  const trials = [];

  // Iterate over unique pairs.
  for (j = 4; j < 8; j++) {

    // Define metadata.
    if (j % 2 == 0) { var val = 'win'; }
    else { var val = 'lose'; }

    // Append trial (LR).
    var LR = {
      type: jsPsychRvlLearning,
      symbol_L: symbol_array[2*j+0],
      symbol_R: symbol_array[2*j+1],
      outcome_L: jsPsych.randomization.sampleWithoutReplacement([val,val,val,'zero'],1)[0],
      outcome_R: jsPsych.randomization.sampleWithoutReplacement(['zero','zero','zero',val],1)[0],
      choices: ['arrowleft','arrowright'],
      correct: ((val == 'win') ? 'arrowleft' : 'arrowright'),
      data: {block: 2},
      on_finish: function(data) {

        // Evaluate missing data
        if ( data.rt == null ) {

          // Set missing data to true.
          data.missing = true;

          // Increment counter. Check if experiment should end.
          missed_responses++;
          if (missed_responses >= missed_threshold) {
            jsPsych.endExperiment();
          }

        } else {

          // Set missing data to false.
          data.missing = false;

        }

      }

    }

    // Define looping node.
    const LR_node = {
      timeline: [LR],
      loop_function: function(data) {
        return data.values()[0].missing;
      }
    }
    trials.push(LR_node);

    // Append trial (RL).
    var RL = {
      type: jsPsychRvlLearning,
      symbol_L: symbol_array[2*j+1],
      symbol_R: symbol_array[2*j+0],
      outcome_L: jsPsych.randomization.sampleWithoutReplacement(['zero','zero','zero',val],1)[0],
      outcome_R: jsPsych.randomization.sampleWithoutReplacement([val,val,val,'zero'],1)[0],
      choices: ['arrowleft','arrowright'],
      correct: ((val == 'win') ? 'arrowright' : 'arrowleft'),
      data: {block: 2},
      on_finish: function(data) {

        // Evaluate missing data
        if ( data.rt == null ) {

          // Set missing data to true.
          data.missing = true;

          // Increment counter. Check if experiment should end.
          missed_responses++;
          if (missed_responses >= missed_threshold) {
            jsPsych.endExperiment();
          }

        } else {

          // Set missing data to false.
          data.missing = false;

        }

      }

    }

    // Define looping node.
    const RL_node = {
      timeline: [RL],
      loop_function: function(data) {
        return data.values()[0].missing;
      }
    }
    trials.push(RL_node);

  }

  // Shuffle trials. Append.
  learning_phase_2 = learning_phase_2.concat( jsPsych.randomization.repeat(trials, 1) );

}

//------------------------------------//
// Define probe phase 2.
//------------------------------------//
// Probe phases are comprised of
// every possible pair combination
// (28 in total) presented 4 times
// (112 total trials).

// Initialize phase array.
probe_phase_2 = [];

// Iteratively define trials
for (i = 8; i < 16; i++) {

  for (j = 8; j < 16; j++) {

    if (i != j) {

      // Append trial.
      var probe = {
        type: jsPsychRvlProbe,
        symbol_L: symbol_array[i],
        symbol_R: symbol_array[j],
        choices: ['arrowleft','arrowright'],
        data: {block: 2},
        on_finish: function(data) {

          // Evaluate missing data
          if ( data.rt == null ) {

            // Set missing data to true.
            data.missing = true;

            // Increment counter. Check if experiment should end.
            missed_responses++;
            if (missed_responses >= missed_threshold) {
              jsPsych.endExperiment();
            }

          } else {

            // Set missing data to false.
            data.missing = false;

          }

        }

      }

      // Define looping node.
      const probe_node = {
        timeline: [probe],
        loop_function: function(data) {
          return data.values()[0].missing;
        }
      }

      // Add trials twice.
      probe_phase_2.push(probe_node);
      probe_phase_2.push(probe_node);

    }

  }

};

// Shuffle trials.
probe_phase_2 = jsPsych.randomization.repeat(probe_phase_2, 1);


// Complete screen
var complete = {
  type: jsPsychInstructions,
  pages: [
    "Great job! You have completed the experiment."
  ],
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}
