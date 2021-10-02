//---------------------------------------//
// Define parameters.
//---------------------------------------//

// Define bandit parameters.
const probs   = [0.20, 0.35, 0.50, 0.50, 0.65, 0.80];
const offers  = [2, 3, 4, 5, 6, 7, 8];

// Define response parameters.
const valid_responses = ['arrowleft', 'arrowright'];

// Define trial timings.
const choice_duration = 10000;
const confirmation_duration = 500;
const feedback_duration = 1500;

//---------------------------------------//
// Define stimuli.
//---------------------------------------//

// Define card colors.
var colors = jsPsych.randomization.shuffle([
  "#ae4862", "#826545", "#47745b", "#4b6f83", "#745ab8", "grey",
])

// Define card suits.
var suits = jsPsych.randomization.shuffle([
  './img/animals/bird-crane-shape.svg',
  './img/animals/deer-silhouette.svg',
  './img/animals/gecko-reptile-shape.svg',
  './img/animals/seahorse-silhouette.svg',
  './img/animals/snail-shape.svg',
  './img/animals/kangaroo-shape.svg',
]);

//---------------------------------------//
// Define trials.
//---------------------------------------//

// Define factorial variables.
const factor_experiment = {
  context: [0,1],
  offer: offers
}

const factor_control = {
  context: [0,1],
  offer: [0,0,10,10]
}

// Predefine bandit order.
const order = jsPsych.randomization.shuffle([[0, 2], [3, 5], [1, 4]]).flat()

// Preallocate space.
MRST = [];

// Generate trials by looping over blocks.
var trial_no = 0;
var exposure = Array(probs.length).fill(0);

for (let i = 0; i < 3; i++) {

  // Initialize block container.
  var block = [];

  //------------------------------------//
  // Generate trial sequence.
  //------------------------------------//

  // Generate experimental trial sequence.
  for (let j = 0; j < 3; j++) {

    while (true) {

      // Propose trial sequence.
      var sequence = jsPsych.randomization.factorial(factor_experiment, 1);

      // Check maximum sequence length.
      const seqmax = longestSequence(sequence.map(a => a.context));

      // Accept if longest sequence is length <= 3.
      if ( seqmax < 4 ) { break };

    }

    // Store trial sequence.
    block = block.concat(sequence);

  }

  // Generate conrol trial sequence.
  var sequence = jsPsych.randomization.factorial(factor_control, 1);

  // Generate insert points for control trials.
  const inserts = jsPsych.randomization.sampleWithoutReplacement(
    Array(block.length - 2).fill().map((element, index) => index + 2),
    sequence.length
  ).sort(function(a, b){return a - b});

  // Insert control trials.
  for (let j = 0; j < inserts.length; j++) {
    block.splice( inserts[j] + j, 0, sequence[j] )
  }

  //------------------------------------//
  // Generate trials.
  //------------------------------------//

  // Iterate over trials.
  block.forEach((info) => {

    // Define trial parameters.
    info.context = order[info.context + i*2];
    info.card_position = (Math.random() < 0.5) ? 1 : 0;
    info.card_suit = suits[info.context];
    info.card_color = colors[info.context];
    info.probability = probs[info.context];
    info.card_points = (Math.random() < probs[info.context]) ? 10 : 0;

    // Define trial.
    var trial = {
      type: "mrst-trial",
      card_position: info.card_position,
      card_suit: info.card_suit,
      card_color: info.card_color,
      card_points: info.card_points,
      certain_points: info.offer,
      choice_duration: choice_duration,
      confirmation_duration: confirmation_duration,
      feedback_duration: feedback_duration,
      data: {
        context: info.context,
        probability: info.probability,
        block: i+1,
        trial: trial_no+1,
        exposure: exposure[info.context]+1,
        phase: 'experiment'
      },
      on_finish: function(data) {

        // Store number of browser interactions
        data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();

        // Evaluate missing data
        if ( data.choice == null ) {

          // Set missing data to true.
          data.missing = true;

        } else {

          // Set missing data to false.
          data.missing = false;

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
    MRST.push(trial_node);

    // Increment counters
    trial_no++;
    exposure[info.context]++;

  })

}

//------------------------------------//
// Define transition screens.
//------------------------------------//

// Define ready screen.
var READY_01 = {
  type: 'mrst-instructions',
  pages: [
    "<p>Great job! You've passed the comprehension check.</p>",
    "<p>We will now begin the experiment.</p><p>The experiment will be broken into three parts.</p>",
    "<p>You will be able to take a break between each part of the experiment.</p><p>However, please give your undivided attention during the experiment.</p>",
    "<p>Get ready to begin <b>Block 1/3</b>. It will take ~3 minutes.</p><p>Press next when you're ready to start.</p>",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var READY_02 = {
  type: 'mrst-instructions',
  pages: [
    "<p>Take a break for a few moments and press any button when you are ready to continue.</p>",
    "<p>Get ready to begin <b>Block 2/3</b>. It will take ~3 minutes.</p><p>Press next when you're ready to start.</p>",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var READY_03 = {
  type: 'mrst-instructions',
  pages: [
    "<p>Take a break for a few moments and press any button when you are ready to continue.</p>",
    "<p>Get ready to begin <b>Block 3/3</b>. It will take ~3 minutes.</p><p>Press next when you're ready to start.</p>",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

// Define finish screen.
var FINISHED = {
  type: 'mrst-instructions',
  pages: [
    "Great job! You've finished the task.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

//---------------------------------------//
// Define functions.
//---------------------------------------//

function longestSequence( arr ) {

  // Initialize variables.
  var counts = [0,0];
  var seqmax = 0;

  arr.forEach((i) => {

    // Increment counts.
    counts = counts.map(function(v){return ++v;});

    // Reset counter of context.
    counts[i] = 0;

    // Update sequence length max.
    if ( Math.max(...counts) > seqmax ) { seqmax = Math.max(...counts) };

  });

  return seqmax

}
