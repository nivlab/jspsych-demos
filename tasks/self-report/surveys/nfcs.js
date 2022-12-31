/**
* Need for Closure Scale
*
* Roets, A., & Van Hiel, A. (2007). Separating ability from need: Clarifying the
* dimensional structure of the need for closure scale. Personality and Social
* Psychology Bulletin, 33(2), 266-280.
*
* Roets, A., & Van Hiel, A. (2011). Item selection and validation of a brief,
* 15-item version of the Need for Closure Scale. Personality and Individual
* Differences, 50(1), 90-94.
*
**/

var nfcs = {
  type: jsPsychSurveyTemplate,
  items: [
    "I don't like situations that are uncertain.",
    "I dislike questions which could be answered in many different ways.",
    "I find that a well ordered life with regular hours suits my temperament.",
    "I feel uncomfortable when I don't understand the reason why an event occurred in my life.",
    "I feel irritated when one person<br>disagrees with what everyone else in a group believes.",
    "I don't like to go into a situation without knowing what I can expect from it.",
    "When I have made a decision, I feel relieved.",
    "When I am confronted with a problem, I'm dying to reach a solution very quickly.",
    "I would quickly become impatient and irritated if I would not find a solution to a problem immediately.",
    "I don't like to be with people who are capable of unexpected actions.",
    "I dislike it when a person's statement could mean many different things.",
    "I find that establishing a consistent routine enables me to enjoy life more.",
    "I enjoy having a clear and structured mode of life.",
    "I do not usually consult many different opinions before forming my own view.",
    "I dislike unpredictable situations."
  ],
  scale: [
    "Strongly<br>disagree",
    "Moderately<br>disagree",
    "Slightly<br>disagree",
    "Slightly<br>agree",
    "Moderately<br>agree",
    "Strongly<br>agree"
  ],
  reverse: [
    false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false
  ],
  instructions: "Read each of the following statements and decide how much you agree with each according to your beliefs and experiences.",
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,
}
