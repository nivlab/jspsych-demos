/**
* Intolerance of Uncertainty Questionnaire (IUS-12)
*
* Carleton, R. N., Norton, M. P. J., & Asmundson, G. J. (2007). Fearing the unknown:
* A short version of the Intolerance of Uncertainty Scale. Journal of anxiety disorders,
* 21(1), 105-117.
*
* Bottesi et al. (2020). A short-form version of the Intolerance of Uncertainty Scale:
* Initial development of the IUS-5. 10.31234/osf.io/b62wf
*
**/

var ius12 = {
  type: jsPsychSurveyTemplate,
  items: [
    "Unforeseen events upset me greatly.",
    "It frustrates me not having all the information I need.",
    "Uncertainty keeps me from living a full life.",
    "One should always look ahead so as to avoid surprises.",
    "A small unforeseen event can spoil everything, even with the best of planning.",
    "When it's time to act, uncertainty paralyses me.",
    "When I am uncertain I can't function very well.",
    "I always want to know what the future has in store for me.",
    "I can't stand being taken by surprise.",
    "The smallest doubt can stop me from acting.",
    "I should be able to organize everything in advance.",
    "I must get away from all uncertain situations."
  ],
  scale:[
    "Not at all<br>characteristic<br>of me",
    "A little<br>characteristic<br>of me",
    "Somewhat<br>characteristic<br>of me",
    "Very<br>characteristic<br>of me",
    "Entirely<br>characteristic<br>of me"
  ],
  reverse: [
    false, false, false, false, false, false,
    false, false, false, false, false, false
  ],
  instructions: 'Read each statement carefully and select which best describes you.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 6,
}
