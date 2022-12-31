/**
* Childhood Trauma Questionnaire
*
* The 28-item childhood trauma questionnaire short form (CTQ-SF) measures the
* severity of five different types of childhood trauma.
*
* Bernstein, D. P., Stein, J. A., Newcomb, M. D., Walker, E., Pogge, D., Ahluvalia, T.,
* ... & Zule, W. (2003). Development and validation of a brief screening version
* of the Childhood Trauma Questionnaire. Child abuse & neglect, 27(2), 169-190.
*
* Spinhoven, P., Penninx, B. W., Hickendorff, M., van Hemert, A. M., Bernstein, D. P.,
* & Elzinga, B. M. (2014). Childhood Trauma Questionnaire: factor structure, measurement
* invariance, and validity across emotional disorders. Psychological assessment, 26(3), 717.
*
**/

var ctq = {
  type: jsPsychSurveyTemplate,
  items: [

    // Physical abuse
    "Got hit so hard that I had to see a doctor or go to the hospital.",
    "Family hit me so hard that it left me with bruises or marks.",
    "Beaten so badly it was noticed by a teacher/neighbor/doctor.",
    "I was punished with a belt/board/cord/other hard object.",
    "I believe that I was physically abused.",

    // Physical neglect
    "I knew there was someone to take care of me and protect me.",
    "There was someone to take me to the doctor if I needed it.",
    "I didn't have enough to eat.",
    "My parents were too drunk or high to take care of the family.",
    "I had to wear dirty clothes.",

    // Emotional abuse
    "People in my family said hurtful or insulting things to me.",
    'People in my family called me "stupid", "lazy", or "ugly."',
    "I felt that someone in my family hated me.",
    "I thought that my parents wished I had never been born.",
    "I believe that I was emotionally abused.",

    // Emotional neglect
    "People in my family felt close to each other.",
    "I felt loved.",
    "Someone in my family helped me feel important or special.",
    "People in my family looked out for each other.",
    "My family was a source of strength and support.",

    // Sexual abuse
    "I believe that I was sexually abused.",
    "Someone molested me.",
    "Someone tried to touch me in a sexual way/made me touch them.",
    "Someone threatened me unless I did something sexual.",
    "Someone tried to make me do/watch sexual things."

  ],
  scale: [
    "Never<br>True",
    "Rarely<br>True",
    "Sometimes<br>True",
    "Often<br>True",
    "Very Often<br>True"
  ],
  reverse: [
    false, false, false, false, false, true, true, false, false, false,
    false, false, false, false, false, true, true, true, true, true,
    false, false, false, false, false
  ],
  instructions: 'Below are some statements that might describe what it was like when you were growing up.<br>Using the scale below, select the response that best describes your childhood (first 18 years)',
  scale_repeat: 9,
  survey_width: 950,
  item_width: 50

}
