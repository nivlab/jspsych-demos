//---------------------------------------//
// Define parameters.
//---------------------------------------//

//---------------------------------------//
// Define images for preloading.
//---------------------------------------//

// Define images for preloading.
const img_files = [
  './img/algiz.png',
  './img/ansuz.png',
  './img/berkanan.png',
  './img/calc.png',
  './img/cen.png',
  './img/dagaz.png',
  './img/isaz.png',
  './img/jeran.png',
  './img/uruz.png'
];

//---------------------------------------//
// Define digit symbol coding task.
//---------------------------------------//

// Define stimuli
const stimuli = jsPsych.randomization.shuffle(img_files.map(x => '<img src="' + x + '"></img>'));

var trial = {
  type: 'dsct',
  stimuli: stimuli
}
