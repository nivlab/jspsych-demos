/**
* Behavioral Inhibition / Behavioral Activation Scales
*
* The shortened version of the BIS/BAS scale, as per the recommendations of
* Pagliacco et al., 2016.
*
* Carver, C. S., & White, T. L. (1994). Behavioral inhibition, behavioral activation,
* and affective responses to impending reward and punishment: the BIS/BAS scales.
* Journal of Personality and Social Psychology, 67(2), 319.
*
* Pagliaccio, D., Luking, K. R., Anokhin, A. P., Gotlib, I. H., Hayden, E. P.,
* Olino, T. M., ... & Barch, D. M. (2016). Revising the BIS/BAS Scale to study
* development: measurement invariance and normative effects of age and sex from
* childhood through adulthood. Psychological Assessment, 28(4), 429.
*
**/

var bisbas = {
  type: jsPsychSurveyTemplate,
  items: [

    // Behavioral inhibiton scale
    "I worry about making mistakes.",                                                // BIS2
    "Criticism or scolding hurts me quite a bit.",                                   // BIS3
    "I feel pretty worried or upset when I think or know somebody is angry at me.",  // BIS4
    "I feel worried when I think I have done poorly at something important.",        // BIS6

    // Behavioral activation scale (reward subscale)
    "When I get something I want, I feel excited and energized.",                    // RWD1
    "When I'm doing well at something I love to keep at it.",                        // RWD2
    "It would excite me to win a contest.",                                          // RWD4
    "When I see an opportunity for something I like I get excited right away.",      // RWD5

    // Behavioral activation scale (drive subscale)
    "When I want something I usually go all-out to get it.",                         // DRIVE1
    "I go out of my way to get things I want.",                                      // DRIVE2
    "If I see a chance to get something I want I move on it right away.",            // DRIVE3
    "When I go after something I use a no-holds-barred approach."                    // DRIVE4
  ],
  scale: [
    "Very false<br>for me",
    "Somewhat false<br>for me",
    "Somewhat true<br>for me",
    "Very true<br>for me"
  ],
  reverse: [
    false, false, false, false, false, false,
    false, false, false, false, false, false
  ],
  instructions: "Each item below is a statement that a person may either agree with or disagree with.  For each item, indicate how much you agree or disagree with what the item says. Please be as accurate and honest as you can be. Respond to each item as if it were the only item. That is, don't worry about being \"consistent\" in your responses.",
  survey_width: 950,
  item_width: 45,
  scale_repeat: 6,
}
