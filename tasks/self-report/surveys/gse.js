/**
* General Self-Efficacy Scale
*
* Schwarzer, R., & Jerusalem, M. (1995). Generalized Self-Efficacy scale.
* In J. Weinman, S. Wright, & M. Johnston, Measures in health psychology:
* A user’s portfolio. Causal and control beliefs (pp. 35-37). Windsor, UK.
*
**/

var gse = {
  type: jsPsychSurveyTemplate,
  items: [
    "I can manage to solve difficult problems if I try hard enough.",
    "If someone opposes me, I can find the means and ways to get what I want.",
    "It is easy for me to stick to my aims and accomplish my goals.",
    "I am confident that I could deal efficiently with unexpected events.",
    "Thanks to my talents and skills, I know how to handle unexpected situations.",
    "I can solve most problems if I try hard enough.",
    "I stay calm when facing difficulties because I can handle them.",
    "When I have a problem, I can find several ways to solve it.",
    "If I am in trouble, I can think of a solution.",
    "I can handle whatever comes my way."
  ],
  scale: [
    "Never",
    "Almost Never",
    "Sometimes",
    "Fairly Often",
    "Very Often"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false
  ],
  instructions: "Please read the sentence and decide how true it is of you in general.",
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,
}
