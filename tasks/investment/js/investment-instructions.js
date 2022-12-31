//------------------------------------//
// Define parameters.
//------------------------------------//

// Define comprehension thresholds.
const max_errors = 0;
const max_loops = 6;
var n_loops = 0;

//------------------------------------//
// Define instructions (part 1).
//------------------------------------//

var instructions_1 = {
  type: jsPsychInvestmentInstructions,
  pages: [
    {
      prompt: "<p>In this game, you'll be playing as an investor in the stock market.</p><p>This is the app you will use to make your investments.</p>",
      show_app: true
    },
    {
      prompt: "<p>At the start of every turn, you will see a stock.</p><p>There will be many different stocks in this game, each with a unique name and color.</p>",
      show_app: true,
      show_arrow: true,
      arrow_x: 30,
      arrow_y: 23,
    },
    {
      prompt: "<p>On every turn, you will start with $5 to invest. You then get to decide whether to<br>invest all of your money ($5) or a small amount of money ($1) in the stock.</p>",
      show_app: true,
      show_arrow: true,
      arrow_x: -5,
      arrow_y: 55,
    },
    {
      prompt: "<p>You will make your choice using the <b>left/right arrow keys</b> on your keyboard.</p>",
      show_app: true
    },
    {
      prompt: "<p>Any money you invest in a stock has <b>a chance of being doubled</b>.</p><p>For example, let's say you choose to invest all $5 in the stock above.</p>",
      show_app: true,
      show_arrow: true,
      arrow_x: 33,
      arrow_y: 75,
      arrow_z: -90
    },
    {
      prompt: "<p>There is a chance your $5 investment will be doubled, and you'll end the turn with $10.</p>",
      show_app: true,
      phase: 1,
      outcome: 1,
      earning: 10
    },
    {
      prompt: "<p>However, money invested in a stock also has <b>a chance of being lost</b>.<p><p>For example, there is a chance your $5 investment will be lost and you'll end the turn with $0.</p>",
      show_app: true,
      phase: 1,
      outcome: 0,
      earning: 0
    },
    {
      prompt: "<p>To give another example, let's say you instead choose to invest only $1 out of $5 in the stock above.</p>",
      show_app: true,
      show_arrow: true,
      arrow_x: 83,
      arrow_y: 75,
      arrow_z: -90
    },
    {
      prompt: "<p>There is a chance your $1 investment will be doubled, so you'll end the turn with $2<br>plus the $4 you did not invest.</p><p>(2 x $1 investment + $4 uninvested = $6 total)</p>",
      show_app: true,
      phase: 1,
      outcome: 1,
      earning: 6
    },
    {
      prompt: "<p>There is also a chance your $1 investment will be lost, so you'll end the turn with $4.</p><p>(0 x $1 investment + $4 uninvested = $4 total)</p>",
      show_app: true,
      phase: 1,
      outcome: 0,
      earning: 4
    },
    {
      prompt: "<p>Not all stocks have the same chance of doubling your investment.</p><p><b>Some stocks have a greater chance of doubling your investment than others.</b></p>",
    },
    {
      prompt: "<p>Your goal is to try to earn as much money as possible by learning which are the best stocks to invest in.</p><p>That is, you should invest <u>more money</u> in stocks you think have a <u>high chance</u> of doubling your investments,<br>and invest <u>less money</u> in stocks you think have a <u>low chance</u> of doubling your investments.</p>",
    }
  ],
  on_start: function(trial) {

    // if first loop, include additional messages.
    if (jsPsych.data.get().filter({quiz: 1}).count() == 0) { trial.pages.unshift(
      {
        prompt: "<p>We are now beginning the <b>investment game</b>.</p><p>Use the buttons below, or your keyboard's arrow keys, to navigate the instructions.</p>",
        show_app: false
      },
      {
        prompt: "<p>There will be <b>two short quizzes</b> during the instructions, so please read carefully.</p>",
        show_app: false
      }
    )}
  }
}

var quiz_1 = {
  type: jsPsychInvestmentComprehension,
  prompts: [
    "To make an investment, which keys do you use?",
    "If you invest <u>$5 out of $5</u>, what is the most amount of money you can end a turn with?",
    "If you invest <u>$1 out of $5</u>, what is the most amount of money you can end a turn with? <small>[Hint: remember to include the money <i>not</i> invested.]</small>",
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;Some stocks have a greater chance of doubling your investment than others.",
  ],
  options: [
    ["a/d keys", "1/0 keys", "left/right arrow keys"],
    ["$10", "$6", "$4", "$0"],
    ["$10", "$6", "$4", "$0"],
    ["True", "False"],
  ],
  correct: [
    "left/right arrow keys",
    "$10",
    "$6",
    "True",
  ],
  data: {quiz: 1}
}

const instructions_1_help_node = {
  timeline: [{
    type: jsPsychInstructions,
    pages: [
      "<p>You did not answer all of the quiz questions correctly.</p><p>Please review the following instructions carefully.</p>"
    ],
    show_clickable_nav: true,
    button_label_previous: 'Prev',
    button_label_next: 'Next',
  }],
  conditional_function: function() {
    if (jsPsych.data.get().filter({quiz: 1}).count() > 0) {
      return true;
    } else {
      return false;
    }
  }
}

var instructions_loop_1 = {
  timeline: [
    instructions_1_help_node,
    instructions_1,
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

//------------------------------------//
// Define practice block.
//------------------------------------//

var practice_text_1 = {
  type: jsPsychInvestmentInstructions,
  pages: [
    {
      prompt: "<p>Great job! Now we'll practice the game.</p>",
    },
    {
      prompt: "<p>Consider the APPL stock above. Any money invested in APPL has<br>an 75% chance of doubling and a 25% chance of being lost.</p>",
      show_app: true,
      stock_name: 'APPL',
      stock_color: '#3f51b5'
    },
    {
      prompt: "<p>To get a sense of what this feels like, try investing in this stock 5 times.</p><p>On the next screen, use the <b>left/right arrow keys</b> on your keyboard to make your investment.</p>",
      show_app: true,
      stock_name: 'APPL',
      stock_color: '#3f51b5'
    },
    {
      prompt: "<p><b>Hint:</b> The investment options will sometimes switch the side of the screen they are on.<br>The side an option appears on does not change the chances of an investment being doubled.</p>",
      show_app: true,
      stock_name: 'APPL',
      stock_color: '#3f51b5'
    }
  ]
}

var practice_1 = {
  timeline: [{
    type: jsPsychInvestmentTrial,
    investments: [5, 1],
    outcome: jsPsych.timelineVariable('outcome'),
    stock_name: 'APPL',
    stock_color: '#3f51b5',
    randomize: true,
    valid_responses: valid_responses,
    feedback_duration: feedback_duration,
    outcome_duration: outcome_duration,
    iti_duration: 600,
    data: {phase: 'practice'}
  }],
  timeline_variables: [
    { outcome: 1 },
    { outcome: 1 },
    { outcome: 0 },
    { outcome: 1 },
    { outcome: 1 },
  ]
}

var practice_text_2 = {
  type: jsPsychInvestmentInstructions,
  pages: [
    {
      prompt: "<p>Great job! As you saw, the APPL stock doubled your investment <i>most</i> of the time (but not every time).</p>",
    },
    {
      prompt: "<p>Now consider the BBNG stock above. Any money invested in BBNG has<br>a 25% chance of doubling and an 75% chance of being lost.</p>",
      show_app: true,
      stock_name: "BBNG",
      stock_color: "#b53f51"
    },
    {
      prompt: "<p>To get a sense of what this feels like, try investing in this stock 5 times.</p><p>On the next screen, use the <b>left/right arrow keys</b> on your keyboard to make your investment.</p>",
      show_app: true,
      stock_name: "BBNG",
      stock_color: "#b53f51"
    }
  ],
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}

var practice_2 = {
  timeline: [{
    type: jsPsychInvestmentTrial,
    investments: [5, 1],
    outcome: jsPsych.timelineVariable('outcome'),
    stock_name: 'BBNG',
    stock_color: '#b53f51',
    randomize: true,
    valid_responses: valid_responses,
    feedback_duration: feedback_duration,
    outcome_duration: outcome_duration,
    iti_duration: 600,
    data: {phase: 'practice'}
  }],
  timeline_variables: [
    { outcome: 0 },
    { outcome: 1 },
    { outcome: 0 },
    { outcome: 0 },
    { outcome: 0 },
  ]
}

var practice_block = {
  timeline: [
    practice_text_1,
    practice_1,
    practice_text_2,
    practice_2
  ]
}

//------------------------------------//
// Define instructions (part 2).
//------------------------------------//

instructions_2 = {
  type: jsPsychInvestmentInstructions,
  pages: [
    {
      prompt: "<p>The total amount of money you've earned by the end of the game<br>will be converted into a <u>performance bonus.</u></p><p>Therefore, you should try to earn as much as possible.</p>",
    },
    {
      prompt: "<p>To help you earn as much money as possible, here are <b>2 hints.</b></p><p>Please read each hint carefully.</p>"
    },
    {
      prompt: "<p><b>Hint #1:</b> The chance that a particular stock doubles your investment<br><u>depends only on that stock</u>. It is not affected by any other stock.</p>"
    },
    {
      prompt: "<p><b>Hint #2:</b> The chance that a particular stock doubles your investment is <u>fixed</u>.<br>If a stock has a 75% chance of doubling your investment, that chance stays<br>the same on every turn you see that stock.</p>"
    }
  ],
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next',
  on_start: function(trial) {

    // if first loop, include additional messages.
    if (jsPsych.data.get().filter({quiz: 2}).count() == 0) { trial.pages.unshift(
      {
        prompt: "<p>Good job! We are almost finished with the instructions.</p><p>Before we start the real game, here are some final details.</p>"
      }
    )}
  }
}

var quiz_2 = {
  type: jsPsychInvestmentComprehension,
  prompts: [
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;The chance that a particular stock doubles your investment depends <u>only</u> on that stock.",
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;The chance that a particular stock doubles your investment <u>stays the same</u> on every turn you see it.",
    "<i>True</i> or <i>False</i>:&nbsp;&nbsp;The money you earn during the game will affect your performance bonus.",
  ],
  options: [
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
  ],
  correct: [
    "True",
    "True",
    "True",
  ],
  data: {quiz: 2}
}

const instructions_2_help_node = {
  timeline: [{
    type: jsPsychInstructions,
    pages: [
      "<p>You did not answer all of the quiz questions correctly.</p><p>Please review the following instructions carefully.</p>"
    ],
    show_clickable_nav: true,
    button_label_previous: 'Prev',
    button_label_next: 'Next',
  }],
  conditional_function: function() {
    if (jsPsych.data.get().filter({quiz: 2}).count() > 0) {
      return true;
    } else {
      return false;
    }
  }
}

var instructions_loop_2 = {
  timeline: [
    instructions_2_help_node,
    instructions_2,
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

//------------------------------------//
// Define instructions block.
//------------------------------------//

// Define instructions loop.
var INSTRUCTIONS = [
  instructions_loop_1,
  practice_block,
  instructions_loop_2,
];
