/**
* State-Trait Inventory of Cognitive and Somatic Anxiety
*
* Roberts KE, Hart TA, Eastwood JD (2016) Factor structure and validity of the
* State-Trait Inventory for Cognitive and Somatic Anxiety. Psychol Assess 28:134–146.
*
* Styck KM, Rodriguez MC, Yi EH (2020) Dimensionality of the State-Trait Inventory
* of Cognitive and Somatic Anxiety. Assessment:1073191120953628.
*
**/

var sticsa = {
  type: jsPsychSurveyTemplate,
  items: [
    "My heart beats fast",
    "My muscles are tense",
    "I feel agonized over my problems",
    "I think that others won't approve of me",
    "I feel like I'm missing out on things because I can't make up my mind",
    "I feel dizzy",
    "My muscles feel weak",
    "I feel trembly and shaky",
    "I picture some future misfortune",
    "I can't get some thought out of my mind",
    "I have trouble remembering things",
    "My face feels hot",
    "I think the worst will happen",
    "My arms and legs feel stiff",
    "My throat feels dry",
    "I keep busy to avoid uncomfortable thoughts",
    "I cannot concentrate without irrelevant thoughts intruding",
    "My breathing is fast and shallow",
    "I worry that I cannot control my thoughts as well as I would like to",
    "I have butterflies in my stomach",
    "My palms feel clammy"
  ],
  scale: [
    "Not at All",
    "A Little",
    "Moderately",
    "Very Much So"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false
  ],
  instructions: "Please read each statement carefully and select which response best indicates how often, in general, the statement is true of you.",
  survey_width: 850,
  item_width: 45,
  scale_repeat: 7,
}
