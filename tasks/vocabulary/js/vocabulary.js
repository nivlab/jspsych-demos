//---------------------------------------//
// Define experiment parameters.
//---------------------------------------//

// Define trial timing.
const trial_duration = null;             // No time limit

// Define randomization.
const randomize_item_order = true;       // Randomize item order
const randomize_choice_order = true;     // Randomize choice order

// Define prompt.
const prompt = "Which of the words above is closest to the meaning of the word in capital letters?"

//---------------------------------------//
// Define vocabulary test.
//---------------------------------------//
// Note: correct answers are 0-indexed.

var items = [
  {
    item: 1,
    stimulus: "ADHESIVE",
    choices: ["glue", "puissance", "tradition", "argument", "latent"],
    correct: 0
  },
  {
    item: 2,
    stimulus: "DREARY",
    choices: ["old", "bloom", "gloomy", "correct", "possible"],
    correct: 2
  },
  {
    item: 3,
    stimulus: "MEAGER",
    choices: ["level", "burnt", "new", "bare", "peevish"],
    correct: 3
  },
  {
    item: 4,
    stimulus: "ADHERENCE",
    choices: ["existence", "devotion", "relation", "slippery", "proof"],
    correct: 1
  },
  {
    item: 5,
    stimulus: "DEPRECATE",
    choices: ["quit", "clean", "hate", "save", "help"],
    correct: 2
  },
  {
    item: 6,
    stimulus: "HALCYON",
    choices: ["plain", "eclectic", "inhumane", "stirring", "peaceful"],
    correct: 4
  },
  {
    item: 7,
    stimulus: "PACHYDERM",
    choices: ["giraffe", "ostrich", "platypus", "elephant", "whale"],
    correct: 3
  },
  {
    item: 8,
    stimulus: "TRUTH",
    choices: ["neighbor", "criminal", "midnight", "offering", "fact"],
    correct: 4
  },
  {
    item: 9,
    stimulus: "REJOICE",
    choices: ["conserve", "risk", "revel", "automatic", "slash"],
    correct: 2
  },
  {
    item: 10,
    stimulus: "POTATION",
    choices: ["disappearance", "drink", "farming", "rivalry", "game"],
    correct: 1
  },
  {
    item: 11,
    stimulus: "PIQUANT",
    choices: ["expert", "steam", "nosy", "flavorful", "hurt"],
    correct: 3
  },
  {
    item: 12,
    stimulus: "ACOLYTE",
    choices: ["musician", "savior", "church helper", "manager", "speak"],
    correct: 2
  },
  {
    item: 13,
    stimulus: "COVENANT",
    choices: ["pact", "noise", "agent", "ceremony", "aria"],
    correct: 0
  },
  {
    item: 14,
    stimulus: "DORMANT",
    choices: ["insane", "latent", "swimming", "cave", "mortal"],
    correct: 1
  },
  {
    item: 15,
    stimulus: "CRUEL",
    choices: ["mobile", "pliant", "pensive", "mean", "passive"],
    correct: 3
  },
  {
    item: 16,
    stimulus: "HERMETIC",
    choices: ["completely sealed", "purple", "reclusive", "princely", "peppery"],
    correct: 0
  },
  {
    item: 17,
    stimulus: "CHUCKLE",
    choices: ["laugh", "haul", "valuable", "stub", "prod"],
    correct: 0
  },
  {
    item: 18,
    stimulus: "ABBATTOIR",
    choices: ["hawk", "killing place", "slot", "culprit", "stronghold"],
    correct: 1
  },
  {
    item: 19,
    stimulus: "VITTLES",
    choices: ["conversation", "avoidance", "belief", "prayer", "food"],
    correct: 4
  },
  {
    item: 20,
    stimulus: "SKIRMISH",
    choices: ["compete", "travel", "sail", "absentee", "fight"],
    correct: 4
  },
];

//---------------------------------------//
// Define timeline.
//---------------------------------------//

// Preallocate space.
VOCABULARY = [];

// Predefine fixation cross.
const fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size: 48px"></div>',
  choices: 'NO_KEYS',
  trial_duration: 600
}

// Randomize item order (if applicable).
if (randomize_item_order) { items = jsPsych.randomization.shuffle(items); }

// Iteratively define trials.
items.forEach((item, i) => {

  // Define choice order.
  var order = [...Array(item.choices.length).keys()];

  // Randomize choice order (if applicable).
  if (randomize_choice_order) { order = jsPsych.randomization.shuffle(order); }

  // Define choices.
  const choices = order.map(k => item.choices[k]);

  // Define trial.
  const trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<h3>' + item.stimulus + '</h3>',
    choices: choices,
    prompt: "<p><i><small>" + prompt + "</small></i></p>",
    trial_duration: trial_duration,
    data: {item: item.item, correct: order.indexOf(item.correct)},
    on_finish: function(data) {

      // Store number of browser interactions.
      data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();

      // Store choices.
      data.choices = choices;

      // Score trial.
      data.accuracy = (data.correct == data.response) ? 1 : 0;

    }
  }

  // Define trial node.
  const trial_node = {
    timeline: [fixation, trial]
  }

  // Append trial.
  VOCABULARY.push(trial_node);

});

//---------------------------------------//
// Define instructions.
//---------------------------------------//

var instructions_01 = {
  type: jsPsychInstructions,
  pages: [
    `<h3>Vocabulary Test</h3>In this task, you will be shown a series of words. Your goal is to select one word<br>that comes closest to the meaning of the word in capital letters.</p><p>Now let's  practice. Press the "Next" button to get started.</p>`
  ],
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var practice = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<h3>BEAST</h3>",
  choices: ["afraid", "words", "large", "animal", "separate"],
  trial_duration: trial_duration,
  data: {item: "practice", correct: 3},
  on_start: function(trial) {

    // Check if previously run.
    const isRepeat = jsPsych.data.get().filter({item: "practice"}).count();

    // If not repeat, then add instructions.
    if (isRepeat == 0) {

      trial.prompt = "<p><i><small>" + prompt + "</small></i></p>";

    // If repeat, update instructions.
    } else {

      trial.prompt = "<p><i><small>Not quite! Look carefully - which word is closest in meaning?</small></i></p>";

    }

  }

}

var practice_node = {
  timeline: [practice],
  loop_function: function(data) {

    // Score trial.
    [data] = data.values();
    data.accuracy = (data.correct == data.response) ? 1 : 0;

    // Repeat trial if incorrect.
    if (data.accuracy == 1) {
      return false;
    } else {
      return true;
    }

  }
}

var instructions_02 = {
  type: jsPsychInstructions,
  pages: [
    '<p>Great job! Now you understand what to do.</p><p>Now, we will move onto the real words.</p>',
    '<p>There are 20 words in total and no time limit.</p><p>Take as much time as you need and try to be as accurate as you can be.</p><p>If you really do not know an answer, then you should guess.</p><p>You will <u>not</u> receive feedback after you make your choice.</p><p>Press the "Next" button to get started.</p>'
  ],
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var INSTRUCTIONS = [
  instructions_01,
  practice_node,
  instructions_02
];
