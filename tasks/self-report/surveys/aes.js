/**
* Apathy Evaluation Scale (AES)
*
* Marin, R. S., Biedrzycki, R. C., & Firinciogullari, S. (1991). Reliability and
* validity of the Apathy Evaluation Scale. Psychiatry research, 38(2), 143-162.
*
**/

var aes = {
  type: jsPsychSurveyTemplate,
  items: [
    "I am interested in things.",
    "I get things done during the day.",
    "Getting things started on my own is important to me.",
    "I am interested in having new experiences.",
    "I am interested in learning new things.",
    "I put little effort into anything.",
    "I approach life with intensity.",
    "Seeing a job through to the end is important to me.",
    "I spend time doing things that interest me.",
    "Someone has to tell me what to do each day.",
    "I am less concerned about my problems than I should be.",
    "I have friends.",
    "Getting together with friends is important to me.",
    "When something good happens, I get excited.",
    "I have an accurate understanding of my problems.",
    "Getting things done during the day is important to me.",
    "I have initiative.",
    "I have motivation."
  ],
  scale: [
    "Not at all",
    "Slightly",
    "Somewhat",
    "A lot"
  ],
  reverse: [
    false, false, false, false, false, true, false, false, false,
    true, true, false, false, false, false, false, false, false
  ],
  instructions: 'For each statement, choose the answer that best describes the your thoughts, feelings, and activity in the past 4 weeks.',
  scale_repeat: 10,
  survey_width: 950,
  item_width: 45
}
