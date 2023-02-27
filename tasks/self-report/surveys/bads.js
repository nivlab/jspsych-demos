/**
* Behavioral Activation for Depression Scale (BADS), Short Form (9 items)
*
* Kanter, J. W., Mulick, P. S., Busch, A. M., Berlin, K.
* S., & Martell, C. R. . (2012) . Behavioral Activation for
* Depression Scale (BADS) (Long and Short Form) .
* Measurement Instrument Database for the Social
* Science. Retrieved from www.midss.ie
*
**/

var bads = {
  type: jsPsychSurveyTemplate,
  items: [
    "There were certain things I needed to do that I didn't do.",
    "I am content with the amount and types of things I did.",
    "I engaged in many different activities.",
    "I made good decisions about what type of activities and/or situations I put myself in.",
    "I was an active person and accomplished the goals I set out to do.",
    "Most of what I did was to escape from or avoid something unpleasant. ",
    "I spent a long time thinking over and over about my problems.",
    "I engaged in activities that would distract me from feeling bad.",
    "I did things that were enjoyable."
  ],
  scale: [
    "Not at all",                       // scored as 0
    "",                                 // scored as 1
    "A little",                         // scored as 2
    "",                                 // scored as 3
    "A lot",                            // scored as 4
    "",                                 // scored as 5
    "Completely"                        // scored as 6
  ],
  reverse: [true, false, false, false, false, true, true, true, false],
  instructions: 'Please read each statement carefully and then circle the number which best describes how much the statement was true for you during the past week, including today.',
  survey_width: 950,
  item_width: 50,
  scale_repeat: 9,
}
