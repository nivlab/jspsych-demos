/**
* Need for Cognition questionnaire (NFC-6)
*
* Lins de Holanda Coelho, G., HP Hanel, P., & J. Wolf, L. (2018). The very
* efficient assessment of need for cognition: Developing a six-item version.
* Assessment, 1073191118793208.
*
**/

var nfc6 = {
  type: 'survey-template',
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
    "Extremely<br>uncharacteristic<br>of me"
  ],
  reverse: [
    false, false, true, true, false, false
  ],
  instructions: 'For each of the statements below, please indicate whether or not the statement is characteristic of you or of what you believe.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 6,
}
