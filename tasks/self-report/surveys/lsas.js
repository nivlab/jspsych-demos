/**
* Liebowitz Social Anxiety Scale
*
* Heimberg, R. G., Horner, K. J., Juster, H. R., Safren, S. A., Brown, E. J.,
* Schneier, F. R., & Liebowitz, M. R. (1999). Psychometric properties of the
* Liebowitz social anxiety scale. Psychological medicine, 29(1), 199-212.
*
* Baker, S. L., Heinrichs, N., Kim, H. J., & Hofmann, S. G. (2002). The Liebowitz
* social anxiety scale as a self-report instrument: a preliminary psychometric
* analysis. Behaviour research and therapy, 40(6), 701-715.
*
**/

var lsas = {
  type: jsPsychSurveyTemplate,
  items: [
    "Telephoning in public<br><small>(e.g. speaking on the telephone in a public place)</small>",
    "Participating in small groups<br><small>(e.g. having a discussion with a few others)</small>",
    "Eating in public places<br><small>(e.g. trembling or feeling awkward handling food)</small>",
    "Drinking with others in public places<br><small>(e.g. any beverage including alcohol)</small>",
    "Talking to people in authority<br><small>(e.g. a boss or teacher)</small>",
    "Acting, performing, or giving a talk in front of an audience",
    "Going to a party<br><small>(e.g. where you know some but not all people at the party)</small>",
    "Working while being observed<br><small>(e.g. any type of work including school work or housework)</small>",
    "Writing while being observed<br><small>(e.g. signing a check in a bank)</small>",
    "Calling someone you don't know very well",
    "Talking with people you don't know very well",
    "Meeting strangers<br><small>(e.g. new people of average importance to you)</small>",
    "Urinating in a public bathroom<br><small>(e.g. others are sometimes present)</small>",
    "Entering a room when others are already seated<br><small>(e.g. a small group, and nobody has to move seats for you)</small>",
    "Being the center of attention<br><small>(e.g. telling a story to a group of people)</small>",
    "Speaking up at a meeting<br><small>(e.g. speaking from your seat in a small meeting or standing up in a large meeting)</small>",
    "Taking a written test",
    "Expressing appropriate disagreement or disapproval to people you don't know very well",
    "Looking at people you don't know very well in the eyes<br><small>(e.g. refers to appropriate eye contact)</small>",
    "Giving a report to a group<br><small>(e.g. an oral report to a small group)</small>",
    "Trying to pick up someone<br><small>(e.g. if you are single, trying to initiate a relationship with a stranger)</small>",
    "Returning goods to a store where returns are normally accepted",
    "Giving an average party",
    "Resisting a high pressure salesperson"
  ],
  scale: [
    "None",
    "Mild",
    "Moderate",
    "Severe"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false
  ],
  instructions: "How much do you fear the following social situations? Base your answers on your experience in the past week.",
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,
  randomize_question_order: false
}
