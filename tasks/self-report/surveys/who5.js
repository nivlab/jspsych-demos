/**
* WHO-5 Well-Being Index (WHO5), 5 items
*
* Accessed via
* Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015).
* The WHO-5 Well-Being Index: a systematic review of the literature.
* Psychotherapy and psychosomatics, 84(3), 167–176. https://doi.org/10.1159/000376585
*
**/

var who5 = {
  type: jsPsychSurveyTemplate,
  items: [
    "I have felt cheerful and in good spirits.",
    "I have felt calm and relaxed.",
    "I have felt active and vigorous.",
    "I woke up feeling fresh and rested.",
    "My daily life has been filled with things that interest me.",
  ],
  scale: [
    "5 - All<br>the time",                // scored as 5
    "4 - Most of<br>the time",                     // scored as 4
    "3 - More than<br>half of<br>the time",               // scored as 3
    "2 - Less than<br>half of<br>the time",                 // scored as 2
    "1 - Some of<br>the time",                // scored as 1
    "0 - At no<br>time"                // scored as 0
  ],
  reverse: Array(5).fill(true), // see WHO5 scoring instructions
  instructions: `Please indicate for each of the 5 statements which is closest to how you have been feeling over the past 2 weeks.`,
  survey_width: 950,
  item_width: 50,
  scale_repeat: 9,
}