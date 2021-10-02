//------------------------------------//
// Define parameters.
//------------------------------------//

// Define comprehension thresholds.
var max_errors = 6;

// Define images to preload.
const preload_images = [
  "./img/instructions/instructions01.png",
  "./img/instructions/instructions02.png",
  "./img/instructions/instructions03.png",
  "./img/instructions/instructions04.png",
  "./img/instructions/instructions05.png",
  "./img/instructions/instructions06.png",
  "./img/instructions/instructions07.png",
  "./img/instructions/instructions08.png",
  "./img/instructions/instructions09.png",
  "./img/instructions/instructions10.png",
  "./img/instructions/instructions11.png",
  "./img/instructions/instructions12.png",
  "./img/instructions/instructions13.png",
  "./img/instructions/instructions14.png",
  "./img/instructions/instructions15.png",
];

// Define image scaling CSS.
const style = "width:auto; height:auto; max-width:100%; max-height:450px;";

//------------------------------------//
// Define instructions (part 1).
//------------------------------------//

instructions01 = {
  type: 'mrst-instructions',
  pages: [
    `<img src="./img/instructions/instructions01.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions02.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions03.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions04.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions05.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions06.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions07.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions08.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions09.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions10.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions11.png" style="${style}"></img>`,
  ],
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}

practice = {
  timeline: [{
    type: "mrst-trial",
    card_position: jsPsych.timelineVariable('card_position'),
    card_suit: jsPsych.timelineVariable('card_suit'),
    card_color: jsPsych.timelineVariable('card_color'),
    card_points: jsPsych.timelineVariable('card_points'),
    certain_points: jsPsych.timelineVariable('certain_points'),
    choice_duration: 10000,
    confirmation_duration: 500,
    feedback_duration: 1500,
    data: {phase: 'practice'}
  }],
  timeline_variables: [
    {card_position: 0, card_suit: './img/animals/rabbit-shape.svg', card_color: "#3d85c690", card_points: 10, certain_points: 3},
    {card_position: 1, card_suit: './img/animals/rabbit-shape.svg', card_color: "#3d85c690", card_points: 10, certain_points: 4},
    {card_position: 0, card_suit: './img/animals/rabbit-shape.svg', card_color: "#3d85c690", card_points: 10, certain_points: 5},
    {card_position: 1, card_suit: './img/animals/rabbit-shape.svg', card_color: "#3d85c690", card_points: 10, certain_points: 6},
    {card_position: 0, card_suit: './img/animals/rabbit-shape.svg', card_color: "#3d85c690", card_points: 0, certain_points: 8},
    {card_position: 0, card_suit: './img/animals/horse-black-shape.svg', card_color: "#6aa84f91", card_points: 10, certain_points: 2},
    {card_position: 1, card_suit: './img/animals/horse-black-shape.svg', card_color: "#6aa84f91", card_points: 0, certain_points: 4},
    {card_position: 0, card_suit: './img/animals/horse-black-shape.svg', card_color: "#6aa84f91", card_points: 0, certain_points: 5},
    {card_position: 1, card_suit: './img/animals/horse-black-shape.svg', card_color: "#6aa84f91", card_points: 0, certain_points: 6},
    {card_position: 0, card_suit: './img/animals/horse-black-shape.svg', card_color: "#6aa84f91", card_points: 0, certain_points: 7}
  ],
  randomize_order: true
}

//------------------------------------//
// Define instructions (part 2).
//------------------------------------//

instructions02 = {
  type: 'mrst-instructions',
  pages: [
    `<img src="./img/instructions/instructions12.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions13.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions14.png" style="${style}"></img>`,
    `<img src="./img/instructions/instructions15.png" style="${style}"></img>`,
  ],
  button_label_previous: 'Prev',
  button_label_next: 'Next',
}

var comprehension = {
  type: 'mrst-comprehension'
}

//------------------------------------//
// Define instructions block.
//------------------------------------//

// Define instructions loop.
var INSTRUCTIONS = {
  timeline: [
    instructions01,
    practice,
    instructions02,
    comprehension
  ],
  loop_function: function(data) {

    // Extract number of errors.
    const num_errors = data.values().slice(-1)[0].num_errors;

    // Check if instructions should repeat.
    if (num_errors > 0) {
      return true;
    } else {
      return false;
    }

  }
}
