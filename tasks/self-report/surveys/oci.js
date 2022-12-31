/**
* Obsessive-Compulsive Inventory (OCI)
*
* Foa, E. B., Huppert, J. D., Leiberg, S., Langner, R., Kichic, R., Hajcak, G.,
* & Salkovskis, P. M. (2002). The Obsessive-Compulsive Inventory: development and
* validation of a short version. Psychological assessment, 14(4), 485.
*
**/

var oci = {
  type: jsPsychSurveyTemplate,
  items: [
    "I have saved up so many things that they get in the way.",
    "I check things more often than necessary.",
    "I get upset if objects are not arranged properly. ",
    "I feel compelled to count while I am doing things.",
    "I find it difficult to touch an object when I know it has been touched by strangers or certain people.",
    "I find it difficult to control my own thoughts.",
    "I collect things I don't need.",
    "I repeatedly check doors, windows, drawers, etc.",
    "I get upset if others change the way I have arranged things.",
    "I feel I have to repeat certain numbers.",
    "I sometimes have to wash or clean myself simply because I feel contaminated.",
    "I am upset by unpleasant thoughts that come into my mind against my will.",
    "I avoid throwing things away because I am afraid I might need them later.",
    "I repeatedly check gas and water taps and light switches after turning them off.",
    "I need things to be arranged in a particular way.",
    "I feel that there are good and bad numbers.",
    "I wash my hands more often and longer than necessary",
    "I frequently get nasty thoughts and have difficulty in getting rid of them."
  ],
  scale: [
    "Not at all",
    "A little",
    "Moderately",
    "A lot",
    "Extremely"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false
  ],
  instructions: 'The following statements refer to experiences that many people have in their everyday lives. Select the description that best describes how much that experience has distressed or bothered you during the past month.',
  survey_width: 950,
  item_width: 50,
  scale_repeat: 6,
}
