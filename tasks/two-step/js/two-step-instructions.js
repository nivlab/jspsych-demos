//---------------------------------------//
// Define instructions parameters
//---------------------------------------//

// Define comprehension thresholds.
const max_errors = 0;
const max_loops = 10;
var n_loops = 0;

//---------------------------------------//
// Define instructions (section 1a)
//---------------------------------------//
// The purpose of this section is to introduce the “alien space trading” mechanic.
// The key pieces of information to communicate are:
//   - The two planets and their respective aliens
//   - Trading with aliens for treasure or junk
//   - Probabilistic nature of trading
//   - Keyboard keys for making choices

// Define instructions screens.
const instructions_1a = {
  type: 'two-step-instructions',
  pages: [
    "<p>In this game, you will be visiting different alien planets<br>in search of treasure.</p>",
    `<p>Each planet has two aliens on it. For example:</p><p>The <b><font color='${practice_info.font_colors[2]}'>${practice_info.planet_names[0]}</font></b> aliens live on the <b><font color='${practice_info.font_colors[2]}'>${practice_info.planet_names[0]}</font></b> planet.</p><p>The <b><font color='${practice_info.font_colors[3]}'>${practice_info.planet_names[1]}</font></b> aliens live on the <b><font color='${practice_info.font_colors[3]}'>${practice_info.planet_names[1]}</font></b> planet.</p>`,
    "<p>When you visit a planet, you can choose an alien to trade with.</p><p>When you trade with an alien, it will either give you <b>treasure</b> or <b>junk</b>.</p>",
    "<p>Treasure is valuable.</p><p>This is what treasure looks like.</p>",
    "<p>Junk is worthless.</p><p>This is what junk looks like.</p>",
    "<p>To choose an alien to trade with, you will use the</p><p><b>left/right arrow keys</b> on your keyboard.</p>",
    "<p>An alien may not give you treasure <i>every</i> time you trade with it.</p><p>Sometimes aliens may not have treasure to give.</p>",
    "<p>Some aliens may be <b>more likely to give you treasure than others.</b></p><p>That is, you may gather more treasure by choosing to trade more with some aliens than others.</p>",
    "<p>Your goal is to figure out, and trade with, the aliens that are most likely to give you treasure.</p>",
  ],
  add_aliens: [false, false, false, true, false, false, false, true],
  add_rockets: [false, false, false, false, false, false, false, false],
  add_diamonds: [false, false, false, false, false, true, false, false],
  add_rocks: [false, false, false, false, false, false, true, false],
  aliens: practice_info.aliens,
  on_start: function(trial) {

    // if first loop, include additional messages.
    if (jsPsych.data.get().filter({quiz: 1}).count() == 0) {
      trial.pages.unshift(
        "<p>We are now beginning the <b>Space Treasure</b> game.</p><p>Use the buttons below, or your keyboard's arrow keys, to<br>navigate the instructions.</p>",
        "<p>The instructions are broken into three short parts.</p><p>There will be a <b>quiz</b> at the end of each part, so please read carefully.</p>",
      )
    }

  }
}

// Define section 1 comprehension check.
const quiz_1 = {
  type: 'two-step-comprehension',
  prompts: [
    "To choose an alien to trade with, which keys do you use?",
    "<i>True</i> or <i>False</i>:&nbsp;Your goal is to figure out which aliens are most likely to give treasure.",
    "<i>True</i> or <i>False</i>:&nbsp;Some aliens may be more likely to give me treasue than others.",
  ],
  options: [
    ["a/d keys", "1/0 keys", "left/right arrow keys"],
    ["True", "False"],
    ["True", "False"],
  ],
  correct: [
    "left/right arrow keys",
    "True",
    "True"
  ],
  data: {quiz: 1}
}

const instructions_1a_help_node = {
  timeline: [{
    type: 'two-step-instructions',
    pages: [
      "<p>You did not answer all of the quiz questions correctly.</p><p>Please review the following instructions carefully.</p>"
    ],
    add_aliens: [false],
    add_rockets: [false],
    add_diamonds: [false],
    add_rocks: [false],
    aliens: practice_info.aliens,
  }],
  conditional_function: function() {
    if (jsPsych.data.get().filter({quiz: 1}).count() > 0) {
      return true;
    } else {
      return false;
    }
  }
}

var instructions_loop_1a = {
  timeline: [
    instructions_1a_help_node,
    instructions_1a,
    quiz_1,
  ],
  loop_function: function(data) {

    // Extract number of errors.
    const num_errors = data.values().slice(-1)[0].num_errors;

    // Check if instructions should repeat.
    n_loops++;
    if (num_errors > max_errors && n_loops >= max_loops) {
      return false;
    } else if (num_errors > max_errors) {
      return true;
    } else {
      return false;
    }

  }
}

//---------------------------------------//
// Define instructions (section 1b)
//---------------------------------------//

// Define instructions screens.
const instructions_1b_node = {
  timeline: [{
    type: 'two-step-instructions',
    pages: [
      "<p>Great job! Now let's practice with two aliens.</p><p>On the next screen, use the <b>left/right arrow keys</b> on your keyboard to choose an alien to trade with. You will have 10 chances to figure out which alien is more likely to give you treasure.</p>",
      // "<p><b>Hint:</b> The aliens will sometimes switch the side of the screen<br>they are on. The side an alien appears on does not change<br>how likely it is to give you treasure.</p>"
    ],
    add_aliens: [false, false],
    add_rockets: [false, false],
    add_diamonds: [false, false],
    add_rocks: [false, false],
    aliens: practice_info.aliens,
    data: {phase: 'instructions_1b'}
  }],
  conditional_function: function() {
    const n_trial = jsPsych.data.get().filter({phase: 'instructions_1b'}).count();
    if (n_trial > 0) {
      return false;
    } else {
      return true;
    }
  }
}

// Initialize practice variables.
const practice_1_outcomes = [[0,1], [1,0], [0,1], [0,1], [0,1], [0,1], [1,1], [0,0], [0,1], [0,1]];
var practice_1_counter = 0;

// Define section 1 practice
const practice_1_node = {
  timeline: [{
    type: 'alien-practice',
    outcomes: [],
    aliens: practice_info.aliens.slice(0,2),
    planet_color: practice_info.planet_colors[0],
    choice_duration: choice_duration,
    feedback_duration: feedback_duration,
    randomize: false,
    on_start: function(trial) {
      const n_trial = jsPsych.data.get().filter({trial_type: 'alien-practice'}).count() % 10;
      trial.outcomes = practice_1_outcomes[n_trial];
    },
    on_finish: function(data) {
      if (data.state_2_choice == 1) {
        practice_1_counter++;
      } else {
        practice_1_counter = 0;
      }
    }
  }],
  conditional_function: function() {

    // Query number of practice trials so far.
    const n_trial = jsPsych.data.get().filter({trial_type: 'alien-practice'}).count() % 10;

    // If last three trials correct & trial number >=5, end.
    if ( practice_1_counter >= 3 && n_trial >= 5 ) {
      return false;
    } else {
      return true;
    }

  }
}

const practice_1_help_node = {
  timeline: [{
    type: 'two-step-instructions',
    pages: [
      "<p>Seems like you're having trouble.</p><p>Remember, you are trying to find the alien that  gives you treasure<br><b>most of the time</b>.</p>",
      "<p>Let's try again.</p><p>On the next screen, use the <b>left/right arrow keys</b> on your keyboard to choose an alien to trade with. You will have 10 more chances to figure out which alien is more likely to give you treasure.</p>"
    ],
    show_clickable_nav: true,
    button_label_previous: "Prev",
    button_label_next: "Next",
  }],
  conditional_function: function() {
    if ( practice_1_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice block (section 1b)
const instructions_loop_1b = {
  timeline: [
    instructions_1b_node, practice_1_node, practice_1_node, practice_1_node,
    practice_1_node, practice_1_node, practice_1_node, practice_1_node,
    practice_1_node, practice_1_node, practice_1_node, practice_1_help_node
  ],
  loop_function: function(data) {
    if ( practice_1_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

//---------------------------------------//
// Define instructions (section 2a)
//---------------------------------------//
// The purpose of this section is to introduce the “rocket ships” mechanic.
// The key pieces of information to communicate are:
//   - The two rocket ships
//   - Each rocket has one planet it is most likely to go to
//   - Probabilistic nature of transitions
//   - Keyboard keys for making choices

const instructions_2a = {
  type: 'two-step-instructions',
  pages: [
    "<p>Next, you will learn how to travel to the alien planets.</p>",
    `<p>To visit a planet, you will pick a rocket ship to travel on.</p><p>Below are two example rocket ships to pick from:<br>the <b><font color='${practice_info.font_colors[0]}'>${practice_info.rocket_names[0]}</font></b> and <b><font color='${practice_info.font_colors[1]}'>${practice_info.rocket_names[1]}</font></b> rocket ships.</p>`,
    `<p>Each rocket ship has a planet it will fly to most of the time.</p><p>The <b><font color='${practice_info.font_colors[0]}'>${practice_info.rocket_names[0]}</font></b> rocket ship will fly to one planet most of the time.</p><p>The <b><font color='${practice_info.font_colors[1]}'>${practice_info.rocket_names[1]}</font></b> rocket ship will fly to the other planet most of the time.</p>`,
    "<p>If you want to travel to a certain planet, you should pick<br>the rocket ship that is most likely to take you there.</p>",
    "<p>To choose a rocket ship to travel on, you will use the</p><p><b>left/right arrow keys</b> on your keyboard.</p>",
  ],
  add_aliens: [false, false, false, false, false, false],
  add_rockets: [false, false, true, true, true, true],
  add_diamonds: [false, false, false, false, false, false],
  add_rocks: [false, false, false, false, false, false],
  rocket_colors: practice_info.rocket_colors,
  aliens: practice_info.aliens,
  on_start: function(trial) {

    // if first loop, include additional messages.
    if (jsPsych.data.get().filter({quiz: 2}).count() == 0) {
      trial.pages.unshift(
        "<p>Great job! You figured out which alien was more likely to give you treasure (even though it may not have given you treasure every time).</p>"
      )
    }

  }
}

// Define section 1 comprehension check.
const quiz_2 = {
  type: 'two-step-comprehension',
  prompts: [
    "To choose a rocket ship to travel on, which keys do you use?",
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;Rocket ships will always travel to the same planets.",
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;Each rocket ship has a planet it will travel to most of the time.",
  ],
  options: [
    ["a/d keys", "1/0 keys", "left/right arrow keys"],
    ["True", "False"],
    ["True", "False"],
  ],
  correct: [
    "left/right arrow keys",
    "False",
    "True"
  ],
  data: {quiz: 2}
}

const instructions_2a_help_node = {
  timeline: [{
    type: 'two-step-instructions',
    pages: [
      "<p>You did not answer all of the quiz questions correctly.</p><p>Please review the following instructions carefully.</p>"
    ],
    add_aliens: [false],
    add_rockets: [false],
    add_diamonds: [false],
    add_rocks: [false],
    aliens: practice_info.aliens,
  }],
  conditional_function: function() {
    if (jsPsych.data.get().filter({quiz: 2}).count() > 0) {
      return true;
    } else {
      return false;
    }
  }
}

var instructions_loop_2a = {
  timeline: [
    instructions_2a_help_node,
    instructions_2a,
    quiz_2,
  ],
  loop_function: function(data) {

    // Extract number of errors.
    const num_errors = data.values().slice(-1)[0].num_errors;

    // Check if instructions should repeat.
    n_loops++;
    if (num_errors > max_errors && n_loops >= max_loops) {
      return false;
    } else if (num_errors > max_errors) {
      return true;
    } else {
      return false;
    }

  }
}

//---------------------------------------//
// Define instructions (section 2b)
//---------------------------------------//

const instructions_2b = {
  type: 'two-step-instructions',
  pages: [
    "<p>Now, let's practice 10 turns of the whole game.</p><p>On the next screen, use the <b>left/right arrow keys</b> on your keyboard to choose a rocket ship. Then, when you arrive at a planet, use the left/right arrow keys again to pick an alien.</p>",
    "<p><b>Remember:</b> a rocket ship will fly mostly to one planet,</p><p>but sometimes it'll take you to the other planet!</p>",
    "<p><b>Hint:</b> The rockets will sometimes switch the side of the screen<br>they are on. The side a rocket appears on does not change<br>how likely it is to go to a planet.</p>"
  ],
  add_aliens: [false, false, false],
  add_rockets: [true, true, true],
  add_diamonds: [false, false, false],
  add_rocks: [false, false, false],
  rocket_colors: practice_info.rocket_colors,
  aliens: practice_info.aliens
}

// Define section 2 practice
const practice_2 = {
  timeline: [{
    type: 'two-step-trial',
    transition: 1,
    outcomes: [],
    rocket_colors: practice_info.rocket_colors,
    planet_colors: practice_info.planet_colors,
    aliens: practice_info.aliens,
    choice_duration: choice_duration,
    feedback_duration: feedback_duration,
    randomize_s1: randomize_s1,
    randomize_s2: randomize_s2,
    data: {trial: 0},
    on_start: function(trial) {

      // define transition
      trial.transition = (Math.random() < 0.8) ? 1 : 0;

      // define outcomes
      trial.outcomes = [
        (Math.random() < 0.85) ? 1 : 0,
        (Math.random() < 0.15) ? 1 : 0,
        (Math.random() < 0.15) ? 1 : 0,
        (Math.random() < 0.85) ? 1 : 0,
      ]

    },
    on_finish: function(data) {

      if ( data.state_1_choice == null || data.state_2_choice == null ) {
        data.missing = true;
      } else {
        data.missing = false;
      }

    }
  }],
  repetitions: 10,
  loop_function: function(data) {
    return data.values()[0].missing;
  }
}

// Practice block (section 2b)
const instructions_loop_2b = {
  timeline: [
    instructions_2b,
    practice_2
  ]
}

//---------------------------------------//
// Define instructions (section 3)
//---------------------------------------//
// The purpose of this section is to make clear important aspects of the task mechanics.
// The key pieces of information to communicate are:
//   - Independence of drifts: how likely an alien is to give treasure is independent
//     of all other aliens
//   - Autocorrelation of drifts: a rewarding alien likely to stay rewarding
//   - State transitions: reminder that each rocket ship has a planet it is most likely
//     to end up at, and that a participant should remember this information to get to
//     the desired planet

const instructions_3a = {
  type: 'two-step-instructions',
  pages: [
    "<p>At the end of the game, the total amount of treasure you've collected</p><p>will be converted into a <b>performance bonus</b>.</p>",
    "<p>Your goal is to try and collect as much treasure as you can!</p>",
    "To help you collect as much treasure as possible, here are <b>3 hints.</b></p><p>Please read each hint carefully.</p>",
    "<p><b>Hint #1:</b> How likely an alien is to give you treasure will change over time, but this change will be slow. So you should remember which aliens are giving you treasure as an alien giving you treasure now is likely to continue giving you treasure for a while.</p>",
    "<p><b>Hint #2:</b> Whether you get treasure depends only on the alien you choose to trade with, <u>not</u> on what rocket ship brought you to that alien, the order in which you choose aliens, or the aliens you choose to not trade with.</p>",
    "<p><b>Hint #3:</b> If there is an alien you want to trade with, remember to pick<br>the rocket ship that is most likely to take you to that alien’s planet."

  ],
  add_aliens: [false, false, false, false, false, false, false],
  add_rockets: [false, false, false, false, false, false, false],
  add_diamonds: [false, false, false, false, false, false, false],
  add_rocks: [false, false, false, false, false, false, false],
  aliens: practice_info.aliens,
  on_start: function(trial) {

    // if first loop, include additional messages.
    if (jsPsych.data.get().filter({quiz: 3}).count() == 0) {
      trial.pages.unshift(
        "<p>Good job! We are almost finished with the instructions.</p><p>Before we start the real game, here are some final details.</p>",
      )
    }

  }
}

// Define section 1 comprehension check.
const quiz_3 = {
  type: 'two-step-comprehension',
  prompts: [
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;How likely an alien is to give you treasure changes slowly over time.",
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;How likely an alien is to give you treasure depends on the rocket ship you choose.",
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;The treasure you earn will affect your performance bonus.",
  ],
  options: [
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
  ],
  correct: [
    "True",
    "False",
    "True"
  ],
  data: {quiz: 3}
}

const instructions_3a_help_node = {
  timeline: [{
    type: 'two-step-instructions',
    pages: [
      "<p>You did not answer all of the quiz questions correctly.</p><p>Please review the following instructions carefully.</p>"
    ],
    add_aliens: [false],
    add_rockets: [false],
    add_diamonds: [false],
    add_rocks: [false],
    aliens: practice_info.aliens,
  }],
  conditional_function: function() {
    if (jsPsych.data.get().filter({quiz: 3}).count() > 0) {
      return true;
    } else {
      return false;
    }
  }
}

const instructions_loop_3a = {
  timeline: [
    instructions_3a_help_node,
    instructions_3a,
    quiz_3
  ],
  loop_function: function(data) {

    // Extract number of errors.
    const num_errors = data.values().slice(-1)[0].num_errors;

    // Check if instructions should repeat.
    n_loops++;
    if (num_errors > max_errors && n_loops >= max_loops) {
      return false;
    } else if (num_errors > max_errors) {
      return true;
    } else {
      return false;
    }

  }
}

//---------------------------------------//
// Define instructions timeline
//---------------------------------------//

var INSTRUCTIONS_SKIP = {
  type: 'html-keyboard-response',
  stimulus: '<p>You are starting a demo of the <b>two-step task.</b></p><p>To see the instructions, press the "1" key. To skip them, press the "2" key.</p>',
  choices: ["1","2"]
}

var INSTRUCTIONS = {
  timeline: [
    instructions_loop_1a,
    instructions_loop_1b,
    instructions_loop_2a,
    instructions_loop_2b,
    instructions_loop_3a
  ],
  conditional_function: function(){
        var data = jsPsych.data.get().last(1).values()[0];
        if(jsPsych.pluginAPI.compareKeys(data.response, '2')){
            return false;
        } else {
            return true;
        }
    }
}

//---------------------------------------//
// Define useful functions
//---------------------------------------//

// end experiment early if participant exceeds maximum instructions loops
var end_experiment = {
  type: 'call-function',
  func: function() {
    if (n_loops >= max_loops) {
      low_quality = true;
      jsPsych.endExperiment();
    }
  }
}
