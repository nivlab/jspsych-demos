/**
* Apathy Motivation Index (AMI), 18 items
*
* Ang, Y.S., Lockwood, P., Apps, M.A.J., Muhammed. K., Husain, M. (2017).
* Distinct Subtypes of Apathy Revealed by the Apathy Motivation Index.
* PLOS ONE, 12(1). e0169938. https://doi.org/10.1371/journal.pone.0169938
*
**/

var ami = {
  type: jsPsychSurveyTemplate,
  items: [
    "I feel sad or upset when I hear bad news.",
    "I start conversations with random people.",
    "I enjoy doing things with people I have just met.",
    "I suggest activities for me and my friends to do.",
    "I make decisions firmly and without hesitation.",
    "After making a decision, I will wonder if I have made the wrong choice.",
    "Based on the last two weeks, I would say I care deeply about how my loved ones think of me.",
    "I go out with friends on a weekly basis.",
    "When I decide to do something, I am able to make an effort easily.",
    "I don't like to laze around.",
    "I get things done when they need to be done, without requiring reminders from others.",
    "When I decide to do something, I am motivated to see it through to the end.",
    "I feel awful if I say something insensitive.",
    "I start conversations without being prompted.",
    "When I have something I need to do, I do it straightaway so it is out of the way.",
    "I feel bad when I hear an acquaintance has an accident or illness.",
    "I enjoy choosing what to do from a range of activities.",
    "If I realise I have been unpleasant to someone, I will feel terribly guilty afterwards."
  ],
  scale: [
    "Completely<br>UNTRUE",                // scored as 4 (is reverse scored)
    "Mostly<br>untrue",                    // scored as 3
    "Neither<br>true nor<br>untrue",       // scored as 2
    "Quite<br>true",                       // scored as 1
    "Completely<br>TRUE",                  // scored as 0
  ],
  reverse: Array(18).fill(true), // see AMI scoring instructions; "each item is negatively scored"
  instructions: `Below are a number of statements. Each statement asks you to think about your life over the last 2 weeks.
  <br>For each statement, select how appropriately it describes your life right now.
  <br>Select "Completely true" if the statement describes you perfectly, "Completely untrue" if the statement does not describe you at all over the last 2 weeks, and use the answers in between accordingly.`,
  survey_width: 950,
  item_width: 50,
  scale_repeat: 9,
}