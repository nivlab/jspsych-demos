/**
* Adult ADHD Self-Report Scale (ASRS-v1.1) Symptom Checklist
*
* Kessler, R. C., Adler, L., Ames, M., Demler, O., Faraone, S., Hiripi, E. V. A.,
* ... & Walters, E. E. (2005). The World Health Organization Adult ADHD Self-Report
* Scale (ASRS): a short screening scale for use in the general population.
* Psychological medicine, 35(2), 245-256.
*
* Arias, V. B., Ponce, F. P., & Núñez, D. E. (2018). Bifactor models of attention-
* deficit/hyperactivity disorder (ADHD): An evaluation of three necessary but underused
* psychometric indexes. Assessment, 25(7), 885-897.
*
**/

var asrs = {
  type: jsPsychSurveyTemplate,
  items: [
    "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
    "How often do you have problems remembering appointments or obligations?",
    "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    "How often do you make careless mistakes when you have to work on a boring or difficult project?",
    "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
    "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
    "How often do you misplace or have difficulty finding things at home or at work?",
    "How often are you distracted by activity or noise around you?",
    "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
    "How often do you feel restless or fidgety?",
    "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    "How often do you find yourself talking too much when you are in social situations?",
    "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
    "How often do you have difficulty waiting your turn in situations when turn taking is required?",
    "How often do you interrupt others when they are busy?"
  ],
  scale: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Very often"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
  ],
  instructions: 'Please answer the questions below. Choose the response that best describes how you have felt<br>and conducted yourself over the past 6 months.',
  scale_repeat: 9,
  survey_width: 950,
  item_width: 50
}
