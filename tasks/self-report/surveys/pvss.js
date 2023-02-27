/**
* Positive Valence Systems Scale 21 items (PVSS - 21)
*
* Khazanov, G. K., Ruscio, A. M., & Forbes, C. N. (2020). The Positive Valence
* Systems Scale: Development and Validation. Assessment, 27(5), 1045–1069.
* https://doi.org/10.1177/1073191119869836
*
**/

var pvss = {
  type: jsPsychSurveyTemplate,
  items: [
    "I <u>savored</u> my first bite of food after feeling hungry",
    "I <u>put energy</u> into activities I enjoy",
    "I <u>was delighted</u> to catch a breath of fresh air outdoors",
    "I <u>wanted</u> to spend time with people I know",
    "A fun activity during the weekend sustained my good mood <u>throughout the new week</u>",
    "It <u>felt good</u> to have physical contact with someone I felt close to",
    "I <u>expected</u> to enjoy a brief moment outdoors",
    "I <u>looked forward</u> to hearing feedback on my work",
    "I <u>expected</u> to enjoy my meals",
    "Receiving praise about my work made me feel pleased <u>for the rest of the day</u>",
    "I <u>looked forward</u> to spending time with others",
    "I <u>wanted</u> to accomplish goals I set for myself",
    "I <u>expected</u> to enjoy being hugged by someone I love",
    "I <u>wanted</u> to participate in a fun activity with friends",
    "I <u>worked hard</u> to earn positive feedback on my projects",
    "I <u>looked forward</u> to an upcoming meal",
    "I <u>felt pleased</u> when I reached a goal I set for myself",
    "Getting a hug from someone close to me made me happy <u>even after</u> we parted",
    "I <u>expected</u> to master the tasks I undertook",
    "I <u>actively pursued</u> activities I thought would be fun",
    "I <u>went out of my way</u> to admire the beauty around me",

  ],
  scale: [
    "Extremely untrue<br>of me",                // scored as 1
    "Very untrue<br>of me",                     // scored as 2
    "Moderately untrue<br>of me",               // scored as 3
    "Slightly untrue<br>of me",                 // scored as 4
    "Neutral",                                  // scored as 5
    "Slightly true<br>of me",                   // scored as 6
    "Moderately true<br>of me",                 // scored as 7
    "Very true<br>of me",                       // scored as 8
    "Extremely true<br>of me"                   // scored as 9
  ],
  reverse: Array(21).fill(false),
  instructions: `Please indicate to what extent these statements describe <b><u>your responses over the last two weeks, including today</u></b>.  
   <br><br><b>Did you NOT have this experience? No problem. Please indicate how you <u>would have responded</u> if you had 
  experienced the situation over the last two weeks</b>.  
    <br><br>Please consider only the aspect of the situation that is described, paying particular attention to the <u>underlined text</u>. 
  For example, if the statement says, "<u>I wanted</u> to meet new people," rate how much you wanted or would have 
  wanted to meet new people over the last two weeks, assuming that the opportunity presented itself. Do not 
  consider what the situation would have required of you or whether it would have been possible for you to meet 
  people.`,
  survey_width: 950,
  item_width: 30,
  scale_repeat: 7,
}