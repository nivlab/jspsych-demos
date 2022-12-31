/**
* 7-up 7-down Questionnaire
*
* The 7-up 7-down questionnaire is a shortened variant of the
* General Behavior Inventory designed to maximise the separability
* of depression and hypomania scales.
*
* Youngstrom, E. A., Murray, G., Johnson, S. L., & Findling, R. L. (2013).
* The 7 Up 7 Down Inventory: A 14-item measure of manic and depressive tendencies
* carved from the General Behavior Inventory. Psychological Assessment, 25(4),
* 1377–1383. https://doi.org/10.1037/a0033975.
*
**/

var seven_up_seven_down = {
  type: jsPsychSurveyTemplate,
  items: [

    // Hypomania subscale
    "Have you had periods of extreme happiness and intense energy lasting several days or more when you also felt much more anxious or tense (jittery, nervous, uptight) than usual (other than related to the menstrual cycle)?",
    "Have there been times lasting several days or more when you felt you must have lots of excitement, and you actually did a lot of new or different things?",
    "Have you had periods of extreme happiness and intense energy (clearly more than your usual self) when, for several days or more, it took you over an hour to get to sleep at night?",
    "Have there been times of a couple days or more when you felt that you were a very important person or that your abilities or talents were better than most other people's?",
    "Have you had periods of extreme happiness and high energy lasting several days or more when what you saw, heard, smelled, tasted, or touched seemed vivid or intense?",
    "Have there been periods of several days or more when your thinking was so clear and quick that it was much better than most other people's?",
    "Have you had times when your thoughts and ideas came so fast that you couldn't get them all out, or they came so quickly that others complained that they couldn't keep up with your ideas?",

    // Depression subscale
    "Have there been times of several days or more when you were so sad that it was quite painful or you felt that you couldn't stand it?",
    "Have there been long periods in your life when you felt sad, depressed, or irritable most of the time?",
    "Have there been times when you have hated yourself or felt that you were stupid, ugly, unlovable, or useless?",
    "Have there been times of several days or more when you really got down on yourself and felt worthless?",
    "Have you had periods when it seemed that the future was hopeless and things could not improve?",
    "Have there been periods lasting several days or more when you were so down in the dumps that you thought you might never snap out of it?",
    "Have there been times when you have felt that you would be better off dead?"
    
  ],
  scale: [
    "Never or<br>hardly ever",
    "Sometimes",
    "Often",
    "Very often or<br>almost constantly"
  ],
  reverse: [
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false
  ],
  instructions: 'Below are some questions about behaviors that occur in the general population.<br>Using the scale below, select the number that best describes how often you experience these behaviors.',
  scale_repeat: 7,
  survey_width: 950,
  item_width: 50
}
