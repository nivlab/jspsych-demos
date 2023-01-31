/**
* International Personality Item Pool (IPIP)
*
* https://osf.io/ycvdk/
*
* Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006).
* The mini-IPIP scales: tiny-yet-effective measures of the Big Five factors of
* personality. Psychological assessment, 18(2), 192.
*
* Cooper, A. J., Smillie, L. D., & Corr, P. J. (2010). A confirmatory factor
* analysis of the Mini-IPIP five-factor model personality scale. Personality
* and Individual Differences, 48(5), 688-691.
*
**/

// 20-item version of the IPIP Big Five Inventory
var ipip_mini = {
  type: jsPsychSurveyTemplate,
  items: [

    // Extraversion
    "Am the life of the party.",
    "Talk to a lot of different people at parties.",
    "Don't talk a lot.",
    "Keep in the background.",

    // Agreeableness
    "Sympathize with others' feelings.",
    "Feel others' emotions.",
    "Am not really interested in others.",
    "Am not interested in other people's problems.",

    // Conscientiousness
    "Get chores done right away.",
    "Like order.",
    "Often forget to put things back in their proper place.",
    "Make a mess of things.",

    // Neuroticism
    "Have frequent mood swings.",
    "Get upset easily.",
    "Am relaxed most of the time.",
    "Seldom feel blue.",

    // Intellect or Imagination
    "Have a vivid imagination.",
    "Have difficulty understanding abstract ideas.",
    "Am not interested in abstract ideas.",
    "Do not have a good imagination.",

  ],
  scale: [
    "Very inaccurate",
    "Moderately Inaccurate",
    "Neither Accurate Nor Inaccurate",
    "Moderately Accurate",
    "Very Accurate"
  ],
  reverse: [
    false, false, true, true,
    false, false, true, true,
    false, false, true, true,
    false, false, true, true,
    false, true, true, true,
  ],
  instructions: "The following are some descriptions of people's behaviors. Please use the scale next to each phrase to describe how accurately each statement describes you.",
  survey_width: 950,
  item_width: 45,
  scale_repeat: 10,
}
