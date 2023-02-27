/**
* The Work and Social Adjustment Scale (WSAS), 5 items
*
* Marks, I. (1986) Behavioural Psychotherapy. Bristol: John Wright
* [now published by I. Marks, Institute of Psychiatry, London].
*
* Mundt, J., Marks, I., Shear, M., & Greist, J. (2002).
* The Work and Social Adjustment Scale: A simple measure of
* impairment in functioning. British Journal of Psychiatry,
* 180(5), 461-464. doi:10.1192/bjp.180.5.461
*
**/

var wsas = {
  type: jsPsychSurveyTemplate,
  items: [
    "Because of my mental health, my ability to work is impaired.",
    "Because of my mental health, my home management (e.g., cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired.",
    "Because of my mental health, my social leisure activities (with other people [e.g., parties, bars, clubs, outings, visits, dating, home entertaining]) are impaired.",
    "Because of my mental health, my private leisure activities (done alone [e.g., reading, gardening, collecting, sewing, walking alone]) are impaired.",
    "Because of my mental health, my ability to form and maintain close relationships with others, including those I live with, is impaired.",
  ],
  scale: [
    "Not at all",
    "",
    "Slightly",
    "",
    "Definitely",
    "",
    "Markedly",
    "",
    "Very severely"
  ],
  reverse: Array(5).fill(false),
  instructions: 'Read each prompt and indicate on the scale how much your mental health impairs your ability to carry out each activity.',
  survey_width: 950,
  item_width: 48,
  scale_repeat: 5,
}
