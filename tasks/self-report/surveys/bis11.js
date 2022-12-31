/**
* Barratt Impulsiveness Scale
*
* The Barratt Impulsiveness Scale is a gold-standard measure of impulse control.
*
* Patton, J. H., Stanford, M. S., & Barratt, E. S. (1995). Factor structure of
* the Barratt impulsiveness scale. Journal of clinical psychology, 51(6), 768-774.
*
* Reise, S. P., Moore, T. M., Sabb, F. W., Brown, A. K., & London, E. D. (2013).
* The Barratt Impulsiveness Scale–11: Reassessment of its structure in a community
* sample. Psychological assessment, 25(2), 631.
*
**/

var bis11 = {
  type: jsPsychSurveyTemplate,
  items: [

    // Attentional impulsivity
    "I don't pay attention.",
    "I concentrate easily.",
    "I squirm at plays or lectures.",
    "I am a steady thinker.",
    "I am restless at the theater or lectures.",
    "I have racing thoughts.",
    "I change hobbies.",
    "I often have extraneous thoughts when thinking.",

    // Motor impulsivity
    "I do things without thinking.",
    "I make up my mind quickly.",
    "I am happy-go-lucky.",
    "I act on impulse.",
    "I act on the spur of the moment.",
    "I buy things on impulse.",
    "I spend or charge more than I earn.",
    "I change jobs.",
    "I change residences.",
    "I can only think about one thing at a time.",
    "I am future oriented.",

    // Non-planning impulsivity
    "I save regularly.",
    "I like to think about complex problems.",
    "I get easily bored when solving thought problems.",
    "I am more interested in the present than the future.",
    "I like puzzles.",
    "I plan tasks carefully.",
    "I plan trips well ahead of time.",
    "I am self controlled.",
    "I am a careful thinker.",
    "I plan for job security.",
    "I say things without thinking.",

  ],
  scale: [
    "Rarely /<br>Never",
    "Occasionally",
    "Often",
    "Almost Always /<br>Always"
  ],
  reverse: [
    false, true, false, true, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, true,
    true, true, false, false, true, true, true, true, true, true, false
  ],
  instructions: 'The questions below ask about some of the ways in which you act and think.<br>Read each statement and choose the most appropriate response for you. Answer quickly and honestly.',
  scale_repeat: 10,
  survey_width: 950,
  item_width: 45
}
