/**
* Need for Cognition questionnaire
*
* Lins de Holanda Coelho, G., HP Hanel, P., & J. Wolf, L. (2018). The very
* efficient assessment of need for cognition: Developing a six-item version.
* Assessment, 1073191118793208.
*
* Chiesi, F., Morsanyi, K., Donati, M. A., & Primi, C. (2018). Applying item 
* response theory to develop a shortened version of the need for cognition scale. 
* Advances in cognitive psychology, 14(3), 75.
*
**/

var nfc6 = {
  type: jsPsychSurveyTemplate,
  items: [
    "I would prefer complex to simple problems.",
    "I like to have the responsibility of handling a situation that requires a lot of thinking.",
    "Thinking is not my idea of fun.",
    "I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.",
    "I really enjoy a task that involves coming up with new solutions to problems.",
    "I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought."
  ],
  scale: [
    "Extremely<br>uncharacteristic<br>of me",
    "Somewhat<br>uncharacteristic<br>of me",
    "Uncertain",
    "Somewhat<br>characteristic<br>of me",
    "Extremely<br>characteristic<br>of me"
  ],
  reverse: [
    false, false, true, true, false, false
  ],
  instructions: 'For each of the statements below, please indicate whether or not the statement is characteristic of you or of what you believe.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 6,
}

var nfc10 = {
  type: jsPsychSurveyTemplate,
  items: [
    "I would prefer complex to simple problems.",
    "I like to have the responsibility of handling a situation that requires a lot of thinking.",
    "Thinking is not my idea of fun.",
    "I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.",
    "I try to anticipate and avoid situations where there is a likely chance I will have to think in depth about something.",
    "I find satisfaction in deliberating hard and for long hours.",
    "The idea of relying on thought to make my way to the top appeals to me.",
    "I really enjoy a task that involves coming up with new solutions to problems.",
    "I prefer my life to be filled with puzzles I must solve.",
    "I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought."
  ],
  scale: [
    "Extremely<br>uncharacteristic<br>of me",
    "Somewhat<br>uncharacteristic<br>of me",
    "Uncertain",
    "Somewhat<br>characteristic<br>of me",
    "Extremely<br>characteristic<br>of me"
  ],
  reverse: [
    false, false, true, true, true, false, false, false, false, false
  ],
  instructions: 'For each of the statements below, please indicate whether or not the statement is characteristic of you or of what you believe.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 6,
}
