/**
* Zung Self-rating Depression Scale
*
* Zung, W. W. (1965). A self-rating depression scale. Archives of general
* psychiatry, 12(1), 63-70.
*
**/

var sds = {
  type: jsPsychSurveyTemplate,
  items: [
    "I feel down-hearted and blue.",
    "Morning is when I feel the best.",
    "I have crying spells or feel like it.",
    "I have trouble sleeping at night.",
    "I eat as much as I used to.",
    "I still enjoy sex.",
    "I notice that I am losing weight.",
    "I have trouble with constipation.",
    "My heart beats faster than usual.",
    "I get tired for no reason.",
    "My mind is as clear as it used to be.",
    "I find it easy to do the things I used to.",
    "I am restless and can't keep still.",
    "I feel hopeful about the future.",
    "I am more irritable than usual.",
    "I find it easy to make decisions.",
    "I feel that I am useful and needed.",
    "My life is pretty full.",
    "I feel that others would be better off if I were dead.",
    "I still enjoy the things I used to do."
  ],
  scale: [
    "A little of<br>the time",
    "Some of<br>the time",
    "Good part of<br>the time",
    "Most of<br>the time"
  ],
  reverse: [
    false, true, false, false, true, true, false, false,
    false, false, true, true, false, true, false, true,
    true, true, false, true
  ],
  instructions: 'For each item below, please select the answer which best describes how often you felt or behaved this way during the past several days.',
  survey_width: 750,
  item_width: 40,
  scale_repeat: 5,
}
