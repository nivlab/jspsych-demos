/**
* Positive and Negative Affect Schedule (PANAS)
*
* Watson, D., Clark, L. A., & Tellegan, A. (1988). Development and validation of
* brief measures of positive and negative affect: The PANAS scales. Journal of
* Personality and Social Psychology, 54*(6), 1063–1070.
*
**/

var panas = {
  type: jsPsychSurveyTemplate,
  items: [
    "Interested",
    "Distressed",
    "Excited",
    "Upset",
    "Strong",
    "Guilty",
    "Scared",
    "Hostile",
    "Enthusiastic",
    "Proud",
    "Irritable",
    "Alert",
    "Ashamed",
    "Inspired",
    "Nervous",
    "Determined",
    "Attentive",
    "Jittery",
    "Active",
    "Afraid"
  ],
  scale: [
    "Very slightly or<br>not at all",
    "A little",
    "Moderately",
    "Quite a bit",
    "Extremely"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false
  ],
  instructions: 'This scale consists of a number of words that describe different feelings and emotions.<br>Indicate to what extent you feel this way right now, that is, at the present moment.',
  survey_width: 800,
  item_width: 20,
  scale_repeat: 5,
}
