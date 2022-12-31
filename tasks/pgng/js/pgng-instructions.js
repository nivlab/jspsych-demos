//------------------------------------//
// Define parameters.
//------------------------------------//

// Define comprehension thresholds.
const max_comp_loops = 10;
const max_errors = 0;

//------------------------------------//
// Define instructions text.
//------------------------------------//

var instructions_01 = {
  type: jsPsychPgngInstructions,
  pages: [
    "Welcome to the <b>Robot Factory</b> game!",
    "In this game, you will be inspecting robots as they move down the assembly line into the <b>scanner</b>.",
    "Sometimes a robot in the factory will need repair.<br>How often a robot will need repair <b>depends on its type.</b>",
    "There are many different types of robots. Each type of robot<br>can be identified by the <b>unique symbol</b> on its chestplate.",
    "When a robot enters the scanner, you must decide whether to:<br><b>Repair</b> the robot (press SPACE) <br><b>Ignore</b> the robot (do nothing)",
    "You will earn the most points by fixing robots that need repair and ignoring robots that do not.",
    `Importantly, how many points you can win or lose depends<br>on whether the robot is <b><font color=${outcome_color_win}>SAFE</font></b> or <b><font color=${outcome_color_lose}>DANGEROUS</font></b>.`,
    `If the scanner is <b><font color=${outcome_color_win}>${instr_color_win}</font></b>, the robot is <b><font color=${outcome_color_win}>SAFE</font></b>.<br>You will earn +10 points for correctly repairing or ignoring<br>a safe robot. You will earn only +1 point for incorrect actions.`,
    "Now let's practice with a safe robot. Try to learn if<br>you should repair (press SPACE) or ignore it (do nothing).<br><b>Remember:</b> you will earn +10 points for the correct action.",
    "<b>HINT:</b> Only press once the robot is in the scanner<br>and the scanner light comes on."
  ],
  robot_runes: [
    '', '', '', 'O', '', '', '', '', ''
  ],
  scanner_colors: [
    '#FFFFFF00', '#FFFFFF00', '#FFFFFF00', '#FFFFF080', '#FFFFFF00', '#FFFFFF00',
    '#FFFFFF00', scanner_color_win, scanner_color_win, scanner_color_win
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var instructions_02 = {
  type: jsPsychPgngInstructions,
  pages: [
    "Now let's practice for another type of safe robot.<br>Try to learn if you should repair this robot (press SPACE)<br>or ignore it (do nothing).",
    "<b>Remember:</b> not every robot will need repair, and<br>you will earn +10 points for the correct action."
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next"
}

var instructions_03 = {
  type: jsPsychPgngInstructions,
  pages: [
    `If the scanner is <b><font color=${outcome_color_lose}>${instr_color_lose}</font></b>, the robot is <b><font color=${outcome_color_lose}>DANGEROUS</font></b>.<br>You will lose only -1 point for correctly repairing or ignoring<br>a dangeorus robot. You will lose -10 points for incorrect actions.`,
    "Now let's practice for a dangerous robot. Try to learn if<br>you should repair it (press SPACE) or ignore it (do nothing).<br><b>Remember:</b> you will lose only -1 points for the correct action.",
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

var instructions_04 = {
  type: jsPsychPgngInstructions,
  pages: [
    "Now let's practice for another type of dangerous robot.<br>Try to learn if you should repair this robot (press SPACE)<br>or ignore it (do nothing).",
    "<b>Remember:</b> some dangerous robots need repair, and<br>you will lose only -1 points for the correct action."
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

var instructions_05 = {
  type: jsPsychPgngInstructions,
  pages: [
    "Great job! We're almost ready to begin the game.",
    "<b>Remember:</b> Not all robots of the same type will need repair, but<br>some types of robots will need repair more often than others.",
    "Pay close attention to the robot's symbol as it will help you<br>decide whether to repair the robot (press SPACE)<br>or ignore the robot (do nothing).",
    "Try to earn, and avoid losing, as many points as you can.",
    "At the end of the task, the total number of points you've<br>earned will be converted into a <b>performance bonus.</b>",
    "Next, we will ask you some questions about the task."
  ]
}

//------------------------------------//
// Define practice block #1.
//------------------------------------//

// Initialize practice counters.
var practice_01_counter = 0;

// Practice trial (GW robot)
const practice_01_trial = {
  type: jsPsychPgngTrial,
  robot_rune: '1',
  scanner_color: scanner_color_win,
  outcome_color: outcome_color_win,
  outcome_correct: '+10',
  outcome_incorrect: '+1',
  correct: key_go,
  valid_responses: [key_go],
  trial_duration: trial_duration,
  feedback_duration: feedback_duration,
  data: {block: 0, practice: 1},
  on_finish: function(data) {
    if (data.accuracy == 1) {
      practice_01_counter++;
    } else {
      practice_01_counter = 0;
    }
  }
}

// Practice trial timline (GW robot)
const practice_01_node = {
  timeline: [practice_01_trial],
  conditional_function: function() {
    if ( practice_01_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice help (GW robot)
const practice_01_help = {
  type: jsPsychPgngInstructions,
  pages: [
    "Seems like you're having trouble.",
    "Try repairing this robot (press SPACE).<br>For a safe robot, you will earn +10 points<br>if you make the correct action."
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

const practice_01_help_node = {
  timeline: [practice_01_help],
  conditional_function: function() {
    if ( practice_01_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice block (GW robot)
const practice_block_01 = {
  timeline: [
    practice_01_node, practice_01_node, practice_01_node,
    practice_01_node, practice_01_node, practice_01_node,
    practice_01_node, practice_01_node, practice_01_help_node
  ],
  loop_function: function(data) {
    if ( practice_01_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

//------------------------------------//
// Define practice block #2.
//------------------------------------//

// Initialize practice counters.
var practice_02_counter = 0;

// Practice trial (GW robot)
const practice_02_trial = {
  type: jsPsychPgngTrial,
  robot_rune: '2',
  scanner_color: scanner_color_win,
  outcome_color: outcome_color_win,
  outcome_correct: '+10',
  outcome_incorrect: '+1',
  correct: -1,
  valid_responses: [key_go],
  trial_duration: trial_duration,
  feedback_duration: feedback_duration,
  data: {block: 0, practice: 2},
  on_finish: function(data) {
    if (data.accuracy == 1) {
      practice_02_counter++;
    } else {
      practice_02_counter = 0;
    }
  }
}

// Practice trial timline (NGW robot)
const practice_02_node = {
  timeline: [practice_02_trial],
  conditional_function: function() {
    if ( practice_02_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice help (GW robot)
const practice_02_help = {
  type: jsPsychPgngInstructions,
  pages: [
    "Seems like you're having trouble.<br>Remember, not every robot will need repair.",
    "Try ignoring this robot (do nothing).<br>For a safe robot, you will earn +10 points<br>if you make the correct action."
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

const practice_02_help_node = {
  timeline: [practice_02_help],
  conditional_function: function() {
    if ( practice_02_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice block (NGW robot)
const practice_block_02 = {
  timeline: [
    practice_02_node, practice_02_node, practice_02_node,
    practice_02_node, practice_02_node, practice_02_node,
    practice_02_node, practice_02_node, practice_02_help_node
  ],
  loop_function: function(data) {
    if ( practice_02_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

//------------------------------------//
// Define practice block #3.
//------------------------------------//

// Initialize practice counters.
var practice_03_counter = 0;

// Practice trial (GW robot)
const practice_03_trial = {
  type: jsPsychPgngTrial,
  robot_rune: '3',
  scanner_color: scanner_color_lose,
  outcome_color: outcome_color_lose,
  outcome_correct: '-1',
  outcome_incorrect: '-10',
  correct: -1,
  valid_responses: [key_go],
  trial_duration: trial_duration,
  feedback_duration: feedback_duration,
  data: {block: 0, practice: 3},
  on_finish: function(data) {
    if (data.accuracy == 1) {
      practice_03_counter++;
    } else {
      practice_03_counter = 0;
    }
  }
}

// Practice trial timline (GW robot)
const practice_03_node = {
  timeline: [practice_03_trial],
  conditional_function: function() {
    if ( practice_03_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice help (NGAL robot)
const practice_03_help = {
  type: jsPsychPgngInstructions,
  pages: [
    "Seems like you're having trouble.",
    "Try ignoring this robot (do nothing).<br>For a dangerous robot, you will lose only -1 point<br>if you make the correct action."
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

const practice_03_help_node = {
  timeline: [practice_03_help],
  conditional_function: function() {
    if ( practice_03_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice block (NGAL robot)
const practice_block_03 = {
  timeline: [
    practice_03_node, practice_03_node, practice_03_node,
    practice_03_node, practice_03_node, practice_03_node,
    practice_03_node, practice_03_node, practice_03_help_node
  ],
  loop_function: function(data) {
    if ( practice_03_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

//------------------------------------//
// Define practice block #3.
//------------------------------------//

// Initialize practice counters.
var practice_04_counter = 0;

// Practice trial (GW robot)
const practice_04_trial = {
  type: jsPsychPgngTrial,
  robot_rune: '4',
  scanner_color: scanner_color_lose,
  outcome_color: outcome_color_lose,
  outcome_correct: '-1',
  outcome_incorrect: '-10',
  correct: key_go,
  valid_responses: [key_go],
  trial_duration: trial_duration,
  feedback_duration: feedback_duration,
  data: {block: 0, practice: 4},
  on_finish: function(data) {
    if (data.accuracy == 1) {
      practice_04_counter++;
    } else {
      practice_04_counter = 0;
    }
  }
}

// Practice trial timline (GW robot)
const practice_04_node = {
  timeline: [practice_04_trial],
  conditional_function: function() {
    if ( practice_04_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice help (NGAL robot)
const practice_04_help = {
  type: jsPsychPgngInstructions,
  pages: [
    "Seems like you're having trouble.",
    "Try repairing this robot (press SPACE).<br>For a dangerous robot, you will lose only -1 point<br>if you make the correct action."
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
}

const practice_04_help_node = {
  timeline: [practice_04_help],
  conditional_function: function() {
    if ( practice_04_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

// Practice block (GAL robot)
const practice_block_04 = {
  timeline: [
    practice_04_node, practice_04_node, practice_04_node,
    practice_04_node, practice_04_node, practice_04_node,
    practice_04_node, practice_04_node, practice_04_help_node
  ],
  loop_function: function(data) {
    if ( practice_04_counter >= 3 ) {
      return false;
    } else {
      return true;
    }
  }
}

//------------------------------------//
// Define comprehension check.
//------------------------------------//

// Initialize comprehension check counters.
var n_comp_loops = 0;

var quiz = {
  type: jsPsychPgngComprehension,
  prompts: [
    "To <b>repair</b> a robot, what do you do?",
    `When the scanner light is <b><font color=${outcome_color_win}>${instr_color_win}</font></b>, how many points will you earn for a correct action?`,
    `When the scanner light is <b><font color=${outcome_color_lose}>${instr_color_lose}</font></b>, how many points will you earn for a correct action?`,
    "<i>True</i> or <i>False</i>: Some robots will need repair more often than others.",
    "<i>True</i> or <i>False</i>: The points I earn will affect my performance bonus."
  ],
  options: [
    ["Press SPACE", "Do nothing", "Press ENTER"],
    ["+10", "+1", "-1", "-10"],
    ["+10", "+1", "-1", "-10"],
    ["True", "False"],
    ["True", "False"],
  ],
  correct: [
    "Press SPACE",
    "+10",
    "-1",
    "True",
    "True"
  ],
  on_finish: function(data) {
    if (data.num_errors > max_errors) {
      n_comp_loops++;
    }
  }
}

var instructions_review = {
  type: jsPsychPgngInstructions,
  pages: [
    "<p>You did not answer all of the quiz questions correctly.</p><p>Please review the following instructions carefully.</p>",
    "When a robot enters the scanner, you must decide whether to:<br><b>Repair</b> the robot (press SPACE) <br><b>Ignore</b> the robot (do nothing)",
    "<b>Remember:</b> Not all robots of the same type will need repair, but<br>some types of robots will need repair more often than others.",
    "You will earn the most points by fixing robots that need repair and ignoring robots that do not.",
    `Importantly, how many points you can win or lose depends<br>on whether the robot is <b><font color=${outcome_color_win}>SAFE</font></b> or <b><font color=${outcome_color_lose}>DANGEROUS</font></b>.`,
    `If the scanner is <b><font color=${outcome_color_win}>${instr_color_win}</font></b>, the robot is <b><font color=${outcome_color_win}>SAFE</font></b>.<br>You will earn +10 points for correctly repairing or ignoring<br>a safe robot. You will earn only +1 point for incorrect actions.`,
    `If the scanner is <b><font color=${outcome_color_lose}>${instr_color_lose}</font></b>, the robot is <b><font color=${outcome_color_lose}>DANGEROUS</font></b>.<br>You will lose only -1 point for correctly repairing or ignoring<br>a dangeorus robot. You will lose -10 points for incorrect actions.`,
  ],
  show_clickable_nav: true,
  button_label_previous: "Prev",
  button_label_next: "Next",
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

const quiz_block = {
  timeline: [
    quiz,
    instructions_review_node
  ],
  loop_function: function(data) {
    const [quiz_data] = jsPsych.data.get().filter({trial_type: 'pgng-comprehension'}).values().slice(-1);
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
  stimulus: '<p>You are starting a demo of the <b>Pavlovian go/no-go task.</b></p><p>To see the instructions, press the "1" key. To skip them, press the "2" key.</p>',
  choices: ["1","2"]
}

var INSTRUCTIONS = {
  timeline: [
    instructions_01,
    practice_block_01,
    instructions_02,
    practice_block_02,
    instructions_03,
    practice_block_03,
    instructions_04,
    practice_block_04,
    instructions_05,
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
}
