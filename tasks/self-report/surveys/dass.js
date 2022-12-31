/**
* Depression, Anxiety, and Stress Scale (DASS)
*
* Lovibond, P. F., & Lovibond, S. H. (1995). The structure of negative emotional
* states: Comparison of the Depression Anxiety Stress Scales (DASS) with the Beck
* Depression and Anxiety Inventories. Behaviour research and therapy, 33(3), 335-343.
*
* Henry, J. D., & Crawford, J. R. (2005). The short‐form version of the Depression
* Anxiety Stress Scales (DASS‐21): Construct validity and normative data in a large
* non‐clinical sample. British journal of clinical psychology, 44(2), 227-239.
*
* Osman, A., Wong, J. L., Bagge, C. L., Freedenthal, S., Gutierrez, P. M., &
* Lozano, G. (2012). The depression anxiety stress Scales—21 (DASS‐21): further
* examination of dimensions, scale reliability, and correlates. Journal of clinical
* psychology, 68(12), 1322-1338.
*
**/

var dass = {
  type: jsPsychSurveyTemplate,
  items: [

    // Depression subscale
    "I couldn't seem to experience any positive feeling at all.",
    "I found it difficult to work up the initiative to do things.",
    "I felt that I had nothing to look forward to.",
    "I felt down-hearted and blue.",
    "I was unable to become enthusiastic about anything.",
    "I felt I wasn't worth much as a person.",
    "I felt that life was meaningless.",

    // Anxiety subscale
    "I was aware of dryness of my mouth.",
    "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion).",
    "I experienced trembling (e.g. in the hands).",
    "I was worried about situations in which I might panic and make a fool of myself.",
    "I felt I was close to panic.",
    "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat).",
    "I felt scared without any good reason.",

    // Stress subscale
    "I found it hard to wind down.",
    "I tended to over-react to situations.",
    "I felt that I was using a lot of nervous energy.",
    "I found myself getting agitated.",
    "I found it difficult to relax.",
    "I was intolerant of anything that kept me from getting on with what I was doing.",
    "I felt that I was rather touchy.",

  ],
  scale: [
    "Never",
    "Sometimes",
    "Often",
    "Almost always"
  ],
  reverse: [
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false, false, false, false, false
  ],
  instructions: 'Please read each statement and indicate how much the statement applied to you over the past week.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 7,
}
