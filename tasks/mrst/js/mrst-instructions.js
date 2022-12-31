//------------------------------------//
// Define parameters.
//------------------------------------//

// Define comprehension thresholds.
const max_practice_loops = 3;
const max_comp_loops = 10;
const max_errors = 0;

//------------------------------------//
// Define instruction block #1.
//------------------------------------//

var instructions_01 = {
  type: jsPsychMrstInstructions,
  pages: [
    {
      prompt: "<p>We are now beginning the <b>Double or Nothing</b> card game.</p><p>Use the buttons below, or your keyboard's arrow keys,<br>to navigate the instructions.</p>",
    },
    {
      prompt: '<p>On every turn of the game, you will choose between two cards</p><p>like the ones above.</p>',
      show_cards: true,
    },
    {
      prompt: '<p>One card will always be <b>face up</b>.</p><p>If you choose it, you will always get <b>5 points</b>.</p>',
      show_cards: true,
      choice: 0,
    },
    {
      prompt: '<p>One card will always have an <b>animal</b> on it.</p><p>If you choose it, there are <u>two possible outcomes</u>.</p>',
      show_cards: true,
      choice: 1,
    },
    {
      prompt: "<p>There's a chance the card turns over and you win <b>10 points</b>. And...</p>",
      show_cards: true,
      choice: 1,
      points: 10,
      face: 'up'
    },
    {
      prompt: "<p>... There's a chance the card turns over and you win <b>0 points</b>.</p>",
      show_cards: true,
      choice: 1,
      points: 0,
      face: 'up'
    },
    {
      prompt: '<p style="line-height: 1.7em;">Therefore, on every turn, you have a choice to make:<br>Choose the face-up card and get 5 points <i>guaranteed</i>, or<br> choose the animal card for <i>a chance</i> of winning 10 points.</p>',
      show_cards: true,
    },
    {
      prompt: '<p style="line-height: 1.7em;">In this game, there will be many different animal cards.<br>Some cards <b>will be lucky</b>. That is, some cards will<br>have a greater chance of giving you 10 points than 0 points.</p>',
      img: './img/instructions.png'
    },
    {
      prompt: '<p>Other animal cards <b>will be unlucky</b>. That is, some cards will</p><p>have a greater chance of giving you 0 points than 10 points.</p>',
      img: './img/instructions.png'
    },
    {
      prompt: "<p>To win the most points, you should try to learn which animal cards</p><p>are lucky or unlucky, and then choose only the lucky cards.</p>"
    },
    {
      prompt: "<p>To help you learn, we will flip over the animal card at the end of<br>every turn, even if you did not choose it.</p><p><b>Note:</b> You will only receive points for the card you chose.</p>",
    },
    {
      prompt: "<p>Now let's practice some turns with the cards above.</p><p>On the next screen, use the <b>left/right arrow keys</b> on your keyboard<br>to choose between the cards.</p>",
      show_cards: true
    },
    {
      prompt: '<p>Try to learn if the <i>blue rabbit</i> card is lucky.</p><p>Choose the blue rabbit card if you think it has a greater chance of<br>giving you 10 points than 0 points.</p>',
      show_cards: true
    },
  ],
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}

// Initialize practice counters.
var practice_01_counter = 0;
var practice_01_loops = 0;

// Practice trial #1
const practice_01_trial = {
  type: jsPsychMrstTrial,
  stimulus: './img/animals/rabbit-shape.svg',
  color: '#3d85c690',
  points: '10',
  choice_duration: choice_duration,
  feedback_duration: feedback_duration,
  outcome_duration: outcome_duration,
  data: {block: 0, practice: 1},
  on_start: function(trial) {
    trial.points = Math.random() < 0.85 ? 10 : 0;
  },
  on_finish: function(data) {

    // Determine total number of practice trials.
    const k = jsPsych.data.get().filter({trial_type: 'mrst-trial', block: 0, practice: 1}).count();

    // Increment or reset counter.
    if (data.choice == 1 && k > 2) {
      practice_01_counter++;
    } else {
      practice_01_counter = 0;
    }

  }
}

// Practice trial timline #1
const practice_01_node = {
  timeline: [practice_01_trial],
  conditional_function: function() {
    if ( practice_01_counter >= 3 || practice_01_loops >= max_practice_loops ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice help #1
const practice_01_help = {
  type: jsPsychMrstInstructions,
  pages: [
    {
      prompt: "<p>Seems like you're having trouble.</p>",
    },
    {
      prompt: "<p>Try to learn which card (the rabbit card or the face-up card) that gives you more points on average.</p><p>Choose the card that gives you more on average.</p>"
    }
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
  on_finish: function() {
    practice_01_counter = 0;
  }
}

// Practice help node #1
const practice_01_help_node = {
  timeline: [practice_01_help],
  conditional_function: function() {
    if ( practice_01_counter >= 3 || practice_01_loops >= max_practice_loops ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice counter #1
const practice_01_incrementer = {
  type: jsPsychCallFunction,
  func: function(){ practice_01_loops++; }
}

// Practice block #1
const practice_block_01 = {
  timeline: [
    practice_01_node, practice_01_node, practice_01_node, practice_01_node,
    practice_01_node, practice_01_node, practice_01_node, practice_01_node,
    practice_01_node, practice_01_incrementer, practice_01_help_node
  ],
  loop_function: function(data) {
    if ( practice_01_counter >= 3 || practice_01_loops >= max_practice_loops ) {
      return false;
    } else {
      return true;
    }
  }
}

//------------------------------------//
// Define practice #2.
//------------------------------------//

var instructions_02 = {
  type: jsPsychMrstInstructions,
  pages: [
    {
      prompt: "<p>Great job! As you learned, the rabbit card was lucky and gave you</p><p>10 points <i>most</i> of the time you chose it (but not every time).</p>",
    },
    {
      prompt: "<p>Now let's practice again with a new animal card.</p><p>On the next screen, use the <b>left/right arrow keys</b> on your keyboard<br>to choose between the cards.</p>",
      show_cards: true,
      stimulus: './img/animals/horse-black-shape.svg',
      color: '#6aa84f91'
    },
    {
      prompt: '<p>Try to learn if the <i>green horse</i> card is lucky.</p><p>Choose the green horse card if you think it has a greater chance of<br>giving you 10 points than 0 points.</p>',
      show_cards: true,
      stimulus: './img/animals/horse-black-shape.svg',
      color: '#6aa84f91'
    },
    {
      prompt: "<p><b>Hint:</b> some animal cards will be unlucky. For unlucky cards,</p><p>you will make more points <u>on average</u> by choosing the face-up card.</p>",
      show_cards: true,
      stimulus: './img/animals/horse-black-shape.svg',
      color: '#6aa84f91'
    },
  ],
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}

// Initialize practice counters.
var practice_02_counter = 0;
var practice_02_loops = 0;

// Practice trial #2
const practice_02_trial = {
  type: jsPsychMrstTrial,
  stimulus: './img/animals/horse-black-shape.svg',
  color: '#6aa84f91',
  points: '10',
  choice_duration: choice_duration,
  feedback_duration: feedback_duration,
  outcome_duration: outcome_duration,
  data: {block: 0, practice: 2},
  on_start: function(trial) {
    trial.points = Math.random() < 0.15 ? 10 : 0;
  },
  on_finish: function(data) {

    // Determine total number of practice trials.
    const k = jsPsych.data.get().filter({trial_type: 'mrst-trial', block: 0, practice: 2}).count();

    // Increment or reset counter.
    if (data.choice == 0 && k > 2) {
      practice_02_counter++;
    } else {
      practice_02_counter = 0;
    }

  }
}

// Practice trial timline #2
const practice_02_node = {
  timeline: [practice_02_trial],
  conditional_function: function() {
    if ( practice_02_counter >= 3 || practice_02_loops >= max_practice_loops ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice help #2
const practice_02_help = {
  type: jsPsychMrstInstructions,
  pages: [
    {
      prompt: "<p>Seems like you're having trouble.</p>",
    },
    {
      prompt: "<p>Try to learn which card (the horse card or the face-up card) that gives you more points on average.</p><p>Choose the card that gives you more on average.</p>"
    }
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
  on_finish: function() {
    practice_02_counter = 0;
  }
}

// Practice help node #2
const practice_02_help_node = {
  timeline: [practice_02_help],
  conditional_function: function() {
    if ( practice_02_counter >= 3 || practice_02_loops >= max_practice_loops ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice counter #2
const practice_02_incrementer = {
  type: jsPsychCallFunction,
  func: function(){ practice_02_loops++; }
}

// Practice block #2
const practice_block_02 = {
  timeline: [
    practice_02_node, practice_02_node, practice_02_node, practice_02_node,
    practice_02_node, practice_02_node, practice_02_node, practice_02_node,
    practice_02_node, practice_02_incrementer, practice_02_help_node
  ],
  loop_function: function(data) {
    if ( practice_02_counter >= 3 || practice_02_loops >= max_practice_loops ) {
      return false;
    } else {
      return true;
    }
  }
}

//------------------------------------//
// Define instruction block #3.
//------------------------------------//

instructions_03 = {
  type: jsPsychMrstInstructions,
  pages: [
    {
      prompt: "<p>Good job! Now you know how to play the game.</p><p>Before we start the real game, here are some final details.</p>",
    },
    {
      prompt: "<p>The total number of points you've earned by the end of the game<br>will be factored into your <b>performance bonus.</b></p><p>Therefore, you should try to earn as many points as possible.</p>",
    },
    {
      prompt: "<p>To help you earn as many points as possible, here are <b>2 hints.</b></p><p>Please read each hint carefully.</p>"
    },
    {
      prompt: "<p><b>Hint #1:</b> The luckiness of an animal card does not change over time.</p><p>How lucky or unlucky a given card is stays the same.</p>"
    },
    {
      prompt: "<p><b>Hint #2:</b> The luckiness of a card is the same regardless of where it appears.</p><p>Its luck does not depend if it is on the left or right side of the screen.</p>"
    },
    {
      prompt: "<p>Next, we will ask you some questions about the game.</p><p>You need to answer all questions correctly to proceed."
    }

  ],
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}

//------------------------------------//
// Define comprehension check.
//------------------------------------//

// Initialize comprehension check counters.
var n_comp_loops = 0;

var quiz = {
  type: jsPsychMrstComprehension,
  prompts: [
    "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;Some animal cards are luckier than others.",
    "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;I will earn points for the card I <u>did not</u> choose.",
    "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;A card's luckiness does not change over time.",
    "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;A card's luckiness depends on if it's on the left or the right of the screen.",
    "<b><i>True</i> or <i>False</i>:</b>&nbsp;&nbsp;The points I earn will affect my performance bonus.",
  ],
  options: [
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
  ],
  correct: [
    "True",
    "False",
    "True",
    "False",
    "True",
  ],
  on_finish: function(data) {
    if (data.num_errors > max_errors) {
      n_comp_loops++;
    }
  }
}

var instructions_review = {
  type: jsPsychMrstInstructions,
  pages: [
    {
      prompt: "<p>You did not answer all of the quiz questions correctly.</p><p>Please review the following instructions carefully.</p>",
    },
    {
      prompt: '<p style="line-height: 1.7em;">In this game, there will be many different animal cards.<br>Some cards <b>will be lucky</b>. That is, some cards will<br>have a greater chance of giving you 10 points than 0 points.</p>',
      img: './img/instructions.png'
    },
    {
      prompt: '<p>Other animal cards <b>will be unlucky</b>. That is, some cards will</p><p>have a greater chance of giving you 0 points than 10 points.</p>',
      img: './img/instructions.png'
    },
    {
      prompt: "<p>To win the most points, you should try to learn which animal cards</p><p>are lucky or unlucky, and then choose only the lucky cards.</p>"
    },
    {
      prompt: "<p>To help you learn, we will flip over the animal card at the end of<br>every turn, even if you did not choose it.</p><p><b>Note:</b> You will only receive points for the card you chose.</p>",
    },
    {
      prompt: "<p>The total number of points you've earned by the end of the game<br>will be converted into a <b>performance bonus.</b></p><p>Therefore, you should try to earn as many points as possible.</p>",
    },
    {
      prompt: "<p>To help you earn as many points as possible, here are <b>2 hints.</b></p><p>Please read each hint carefully.</p>"
    },
    {
      prompt: "<p><b>Hint #1:</b> The luckiness of an animal card <u>does not</u> change over time.</p><p>How lucky or unlucky a given card is stays the same.</p>"
    },
    {
      prompt: "<p><b>Hint #2:</b> The luckiness of a card is the same regardless of where it appears.</p><p>Its luck <u>does not</u> depend if it is on the left or right side of the screen.</p>"
    },
  ],
}

var instructions_review_node = {
  timeline: [instructions_review],
  conditional_function: function() {
    const [quiz_data] = jsPsych.data.getLastTrialData().values();
    if (quiz_data.num_errors <= max_errors || n_comp_loops >= max_comp_loops) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice block #1
const quiz_block = {
  timeline: [
    quiz,
    instructions_review_node
  ],
  loop_function: function(data) {
    const [quiz_data] = jsPsych.data.get().filter({trial_type: 'mrst-comprehension'}).values().slice(-1);
    if (quiz_data.num_errors <= max_errors || n_comp_loops >= max_comp_loops) {
      return false;
    } else {
      return true;
    }
  }
}

//------------------------------------//
// Define instructions block.
//------------------------------------//

var INSTRUCTIONS_SKIP = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p>You are starting a demo of the <b>risk sensitivity task.</b></p><p>To see the instructions, press the "1" key. To skip them, press the "2" key.</p>',
  choices: ["1","2"]
}

// Define instructions loop.
var INSTRUCTIONS = {
  timeline: [
    instructions_01,
    practice_block_01,
    instructions_02,
    practice_block_02,
    instructions_03,
    quiz_block
  ],
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0];
    if(jsPsych.pluginAPI.compareKeys(data.response, '2')){
      return false;
    } else {
      return true;
    }
  }
};
