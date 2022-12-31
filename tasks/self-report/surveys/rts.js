/**
* Ruminative Thought Style (RTS) Questionnaire
*
* The ruminative thought style (RTS) questionnaire is a measure of the general
* tendency to ruminate.
*
* Brinker, J. K., & Dozois, D. J. (2009). Ruminative thought style and depressed
* mood. Journal of clinical psychology, 65(1), 1-19.
*
**/

var rts = {
  type: jsPsychSurveyTemplate,
  items: [
    "I find that my mind often goes over things again and again.",
    "When I have a problem, it will gnaw on my mind for a long time.",
    "I find that some thoughts come to mind over and over throughout the day.",
    "I can't stop thinking about some things.",
    "When I am anticipating an interaction, I will imagine every possible scenario and conversation.",
    "I tend to replay past events as I would have liked them to happen.",
    "I find myself daydreaming about things I wish I had done.",
    "When I feel I have had a bad interaction with someone, I tend to imagine various scenarios where I would have acted differently.",
    "When trying to solve a complicated problem, I find that I just keep coming back to the beginning without ever finding a solution.",
    "If there is an important event coming up, I think about it so much that I work myself up.",
    "I have never been able to distract myself from unwanted thoughts.",
    "Even if I think about a problem for hours, I still have a hard time coming to a clear understanding.",
    "It is very difficult for me to come to a clear conclusion about some problems, no matter how much I think about it.",
    "Sometimes I realize I have been sitting and thinking about something for hours.",
    "When I am trying to work out a problem, it is like I have a long debate in my mind where I keep going over different points.",
    "I like to sit and reminisce about pleasant events from the past.",
    "When I am looking forward to an exciting event, thoughts of it interfere with what I am working on.",
    "Sometimes even during a conversation, I find unrelated thoughts popping into my head",
    "When I have an important conversation coming up, I tend to go over it in my mind again and again.",
    "If I have an important event coming up, I can't stop thinking about it.",
  ],
  scale: [
    "Not at all",
    "",
    "",
    "",
    "",
    "Very well"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false
  ],
  instructions: "For each of the items below, please rate how well the item describes you.",
  scale_repeat: 10,
  survey_width: 950,
  item_width: 55
}
