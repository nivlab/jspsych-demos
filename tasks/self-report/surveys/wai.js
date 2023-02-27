/**
* 6-item Working Alliance Scale (Session Alliance Inventory; patient version)
*
* Falkenström, F., Hatcher, R. L., Skjulsvik, T., Larsson, M. H., & Holmqvist, R. (2015).
* Development and validation of a 6-item working alliance questionnaire for repeated
* administrations during psychotherapy. Psychological assessment, 27(1), 169–183.
* https://doi.org/10.1037/pas0000038
**/

var wai = {
  type: jsPsychSurveyTemplate,
  items: [
    "My therapist and I were working towards mutually agreed upon goals.",
    "I felt that my therapist appreciated me.",
    "My therapist and I respected each other.",
    "We were in agreement on what is important for me to work on.",
    "I felt that my therapist cared about me even if I had some things that he/she does not approve of.",
    "I believe the way we were working with my problem(s) was correct."
  ],
  scale: [
    "Not at all",
    "A little",
    "Moderately",
    "Quite a bit",
    "Very much",
    "Completely"
  ],
  reverse: Array(6).fill(false),
  instructions: "Below are sentences that describe some of the ways a person might think or feel about his or her therapist. When you read these descriptions, think about your last session only.",
  survey_width: 950,
  item_width: 45,
  scale_repeat: 6,
}