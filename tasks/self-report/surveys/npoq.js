/**
* Negative Problem Orientation Questionnaire
*
* Robichaud, M., & Dugas, M. J. (2005). Negative problem orientation (Part I): psychometric
* properties of a new measure. Behaviour research and therapy, 43(3), 391-401.
*
* Robichaud, M., & Dugas, M. J. (2005). Negative problem orientation (Part II): Construct
* validity and specificity to worry. Behaviour Research and Therapy, 43(3), 403-412.
*
* Fergus, T. A., Valentiner, D. P., Wu, K. D., & McGrath, P. B. (2015). Examining
* the symptom-level specificity of negative problem orientation in a clinical sample.
* Cognitive Behaviour Therapy, 44(2), 153-161.
*
**/

var npoq = {
  type: jsPsychSurveyTemplate,
  items: [
    "I see problems as a threat to my well-being.",
    "I often doubt my capacity to solve problems.",
    "Often before even trying to find a solution, I tell myself that it is difficult to solve problems.",
    "My problems often seem insurmountable.",
    "When I attempt to solve a problem, I often question my abilities.",
    "I often have the impression that my problems cannot be solved.",
    "Even if I manage to find some solutions to my problems, I doubt that they will be easily resolved.",
    "I have a tendency to see problems as a danger.",
    "My first reaction when faced with a problem is to question my abilities.",
    "I often see my problems as bigger than they really are.",
    "Even if I have looked at a problem from all possible angles, I still wonder if the solution I decided on will be effective.",
    "I consider problems to be obstacles that interfere with my functioning."
  ],
  scale: [
    "Not at all<br>true of me",
    "Slightly<br>true of me",
    "Moderately<br>true of me",
    "Very<br>true of me",
    "Extremely<br>true of me"
  ],
  reverse: [
    false, false, false, false, false, false,
    false, false, false, false, false, false
  ],
  instructions: "Please use the scale below to indicate to what extent each of the following items corresponds to the way you react or think when confronted with a problem.",
  survey_width: 950,
  item_width: 45,
  scale_repeat: 6,
}
