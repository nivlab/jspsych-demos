/**
* Generalized Anxiety Disorder Scale (GAD-7)
*
* Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B. (2006). A brief measure
* for assessing generalized anxiety disorder: the GAD-7. Archives of internal
* medicine, 166(10), 1092-1097.
*
**/

var gad7 = {
  type: jsPsychSurveyTemplate,
  items: [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen"
  ],
  scale: [
    "Not at all",
    "Several days",
    "Over half the days",
    "Nearly every day"
  ],
  reverse: [
    false, false, false, false, false, false, false
  ],
  instructions: 'Over the last 2 weeks, how often have you been bothered by the following problems?',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 7,
}
