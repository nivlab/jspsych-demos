/**
* Patient health questionnaire (PHQ-9)
*
* Kroenke, K., Spitzer, R. L., & Williams, J. B. (2001). The PHQ‐9: validity of
* a brief depression severity measure. Journal of general internal medicine,
* 16(9), 606-613.
*
**/

var phq9 = {
  type: jsPsychSurveyTemplate,
  items: [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling/staying asleep or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead or of hurting yourself in some way",
  ],
  scale: [
    "Not at all",
    "Several days",
    "Over half the days",
    "Nearly every day"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false,
  ],
  instructions: 'Over the last 2 weeks, how often have you been bothered by the following problems?',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 9,
}
