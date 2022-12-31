/**
* Snaith-Hamilton Pleasure Scale (SHAPS)
*
* Minor edits were made to several questions (#1 and #8) to adjust unfamiliar
* British connotations of words for an American sample.
*
* Snaith, R. P., Hamilton, M., Morley, S., Humayan, A., Hargreaves, D., &
* Trigwell, P. (1995). A scale for the assessment of hedonic tone the Snaith-
* Hamilton Pleasure Scale. The British Journal of Psychiatry, 167(1), 99-103.
*
**/

var shaps = {
  type: jsPsychSurveyTemplate,
  items: [
    "I would enjoy my favorite television or radio show.",
    "I would enjoy being with my family or close friends.",
    "I would find pleasure in my hobbies and pastimes.",
    "I would be able to enjoy my favorite meal.",
    "I would enjoy a warm bath or refreshing shower.",
    "I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread.",
    "I would enjoy seeing other people's smiling faces.",
    "I would enjoy looking good when I have made an effort with my appearance.",
    "I would enjoy reading a book, magazine, or newspaper.",
    "I would enjoy a cup of tea or coffee or my favorite drink.",
    "I would be able to take pleasure in small things, e.g. bright sunny day, a telephone call from a friend.",
    "I would be able to enjoy a beautiful landscape or view.",
    "I would get pleasure from helping others.",
    "I would feel pleasure when I receive praise from other people."
  ],
  scale: [
    "Strongly<br>disagree",            // scored as 3
    "Disagree",                        // scored as 2
    "Agree",                           // scored as 1
    "Strongly<br>agree"                // scored as 0
  ],
  reverse: [
    true, true, true, true, true, true, true,
    true, true, true, true, true, true, true
  ],
  instructions: 'This questionnaire is designed to measure your ability to experience pleasure in the last few days.',
  survey_width: 950,
  item_width: 50,
  scale_repeat: 7,
}
