/**
* The Work and Social Adjustment Scale (WSAS), 5 items
*
* Marks, I. (1986) Behavioural Psychotherapy. Bristol: John Wright 
* [now published by I. Marks, Institute of Psychiatry, London].
*
* Accessed from: Mundt, J., Marks, I., Shear, M., & Greist, J. (2002).
* The Work and Social Adjustment Scale: A simple measure of
* impairment in functioning. British Journal of Psychiatry,
* 180(5), 461-464. doi:10.1192/bjp.180.5.461
* 
* Modifications from Mundt et al 2002:
*   1. Clarifying text below number scale (e.g. 0<br>Not at All)
*   3. Removed "'0' means 'not at all impaired' and '8' means very severely impaired to the point I can't work." from items 2-5
*   4. Instruction modified. Mundt et al 2002 instruction: Rate each of the following questions on a 0 to 8 scale: 0 indicates no impairment at all and 8 indicates very severe impairment.
**/

var wsas = {
  type: jsPsychSurveyTemplate,
  items: [
    "Because of my mental health, my ability to work is impaired. '0' means 'not at all impaired' and '8' means very severely impaired to the point I can't work.",
    "Because of my mental health, my home management (cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired.",
    "Because of my mental health, my social leisure activities (with other people e.g. parties, bars, clubs, outings, visits, dating, home entertaining) are impaired.",
    "Because of my mental health, my private leisure activities (done alone, such as reading, gardening, collecting, sewing, walking alone) are impaired.",
    "Because of my mental health, my ability to form and maintain close relationships with others, including those I live with, is impaired.",
  ],
  scale: [
    "Not at All<br>'0'",
    "'1'",
    "'2'",
    "'3'",
    "'4'",
    "'5'",
    "'6'",
    "'7'",
    "Very Severely<br>'8'"
  ],
  reverse: Array(5).fill(false),
  instructions: `Rate each of the following questions on a 0 to 8 scale: 0 indicates no impairment at all and 8 indicates very severe impairment.`,
  survey_width: 950,
  item_width: 50,
  scale_repeat: 5,
}