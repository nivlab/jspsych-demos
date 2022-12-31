/**
* Eating Attitudes Test (EAT-26)
*
* Garner, D. M., Olmsted, M. P., Bohr, Y., & Garfinkel, P. E. (1982). The eating
* attitudes test: psychometric features and clinical correlates. Psychological
* medicine, 12(4), 871-878.
*
**/

var eat26 = {
  type: jsPsychSurveyTemplate,
  items: [
    "Am terrified about being overweight.",
    "Avoid eating when I am hungry.",
    "Find myself preoccupied with food.",
    "Have gone on eating binges where I feel that I may not have be able to stop.",
    "Cut my food into small pieces.",
    "Aware of the calorie content of foods that I eat.",
    "Particularly avoid food with a high carbohydrate content (i.e. bread, rice, potatoes, etc).",
    "Feel that others would prefer if I ate more.",
    "Vomit after I have eaten.",
    "Feel extremely guilty after eating.",
    "Am preoccupied with a desire to be thinner.",
    "Think about burning up calories when I exercise.",
    "Other people think that I am too thin.",
    "Am preoccupied with the thought of having fat on my body.",
    "Take longer than others to eat my meals.",
    "Avoid foods with sugar in them.",
    "Eat diet foods.",
    "Feel that food controls my life.",
    "Display self-control around food.",
    "Feel that others pressure me to eat.",
    "Give too much time and thought to food.",
    "Feel uncomfortable after eating sweets.",
    "Engage in dieting behavior.",
    "Like my stomach to be empty.",
    "Have the impulse to vomit after meals.",
    "Enjoy trying new rich foods."
  ],
  scale: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Usually",
    "Always"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, true
  ],
  instructions: 'Please fill out the below form as accurately, honestly and completely as possible. There are no right or wrong answers.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 7,
}
