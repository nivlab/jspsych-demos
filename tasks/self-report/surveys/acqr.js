/**
* Anxiety Control Questionnaire (ACQ-R) questionnaire
*
* The ACQ-R is a measure of perceived control, not limited to but specifically
* useful in investigating beliefs underlying anxiety.
*
* Brown, T. A., White, K. S., Forsyth, J. P., & Barlow, D. H. (2004).
* The structure of perceived emotional control: Psychometric properties of a
* revised Anxiety Control Questionnaire. Behavior Therapy, 35(1), 75-99.
*
* Gallagher, M. W., Bentley, K. H., & Barlow, D. H. (2014). Perceived control
* and vulnerability to anxiety disorders: A meta-analytic review. Cognitive
* therapy and research, 38(6), 571-584.
**/

var acqr = {
  type: jsPsychSurveyTemplate,
  items: [

    // Emotional control subscale
    "I can usually put worrisome thoughts out of my mind easily.",
    "I am able to control my level of anxiety.",
    "I can usually relax when I want.",
    "I am unconcerned if I become anxious in a difficult situation, because I am confident in my ability to cope with my symptoms.",
    "When I am anxious, I find it hard to focus on anything other than my anxiety.",

    // Threat control subscale
    "When I am frightened by something, there is generally nothing I can do.",
    "Whether I can successfully escape a frightening situation is always a matter of chance with me.",
    "There is little I can do to change frightening events.",
    "The extent to which a difficult situation resolves itself has nothing to do with my actions.",
    "If something is going to hurt me, it will happen no matter what I do.",
    "Most events that make me anxious are outside my control.",

    // Stress control subscale
    "How well I cope with difficult situations depends on whether I have outside help.",
    "When I am put under stress, I am likely to lose control.",
    "When I am under stress, I am not always sure how I will react.",
    "I usually find it hard to deal with difficult problems."

  ],
  scale: [
    "Strongly<br>Disagree",
    "Moderately<br>Disagree",
    "Slightly<br>Disagree",
    "Slightly<br>Agree",
    "Moderately<br>Agree",
    "Strongly<br>Agree"
  ],
  reverse: [
    false, false, false, false, true, true, true, true,
    true, true, true, true, true, true, true
  ],
  instructions: 'Please read each statement below carefully and indicate how much you think each statement is typical of you.',
  scale_repeat: 8,
  survey_width: 950,
  item_width: 50
}
