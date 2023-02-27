/**
* Multitheoretical List of Therapeutic Interventions – 30 Items (MULTI-30).
*
* Solomonov, N., McCarthy, K. S., Gorman, B. S., & Barber, J. P. (2019).
* The multitheoretical list of therapeutic interventions–30 items (MULTI-30).
* Psychotherapy Research, 29(5), 565-580.
*
**/

var multi30 = {
  type: jsPsychSurveyTemplate,
  items: [
    "The therapist set an agenda or established specific goals for the therapy session.",
    "The therapist made connections between my current situation and my past.",
    "The therapist worked to give me hope or encouragement.",
    "The therapist repeated back to me (paraphrased) the meaning of what I was saying.",
    "The therapist encouraged me to identify or label feelings that I had in or outside of the session.",
    "The therapist encouraged me to talk about feelings I had previously avoided or never expressed.",
    "The therapist pointed out times when my behavior seemed inconsistent with what I was saying, like when I:<ul><li>laughed, smiled, looked away, or was uncomfortable</li><li>avoided talking about specific topics or people</li><li>suddenly shifted my moods or topics</li><li>was silent a long time</li></ul>",
    "The therapist taught me specific new skills or behaviors, like how to:<ul><li>how to be assertive with others</li><li>how to act in social situations</li><li>how to control my emotions</li><li>relax my muscles</li></ul>",
    "The therapist encouraged me to think about, view, or touch things that I was afraid of.",
    "The therapist reviewed or assigned homework exercises, like:<ul><li>writing down certain thoughts or feelings outside the session</li><li>practicing certain behaviors</li></ul>",
    "The therapist was warm, sympathetic, and accepting.",
    "The therapist talked about the function or purpose that my problems might have, like how it:<ul><li>lets me avoid responsibility</li><li>keeps others away from me</li></ul>",
    "The therapist encouraged me to explore explanations for events or behaviors other than those that first came to my mind.",
    "The therapist made connections between the way I acted or felt towards him/her and the way that I acted or felt in my other relationships.",
    "The therapist and I discussed my dreams, fantasies, or wishes.",
    "The therapist and I worked together as a team.",
    "The therapist listened carefully to what I was saying.",
    "The therapist focused on how disagreements between certain parts of my personality have caused my problems.",
    "The therapist encouraged me to change specific behaviors.",
    "The therapist encouraged me to look for evidence in support of or against one of my beliefs or assumptions.",
    "The therapist encouraged me to explore the personal meaning of an event or a feeling.",
    "The therapist seemed interested in trying to understand what I was experiencing.",
    "The therapist encouraged me to focus on my moment-to-moment experience.",
    "The therapist encouraged me to question my beliefs or to discover flaws in my reasoning.",
    "The therapist focused on a specific concern in my relationships, like:<ul><li>disagreements or conflicts</li><li>loss of a loved one</li><li>major changes</li><li>loneliness</li></ul>",
    "The therapist encouraged me to explore ways in which I could make changes in my relationships, like ways to:<ul><li>avoid problems I had experienced in previous relationships</li><li>establish new relationships or to contact old friends</li><li>resolve a conflict in a relationship</li><li>fulfill a need</li></ul>",
    "The therapist encouraged me to examine my relationships with others, like:<ul><li>positive and negative aspects of my relationships</li><li>what I want and what others want from me</li><li>the way I act in relationships</li></ul>",
    "The therapist both accepted me for who I was and encouraged me to change.",
    "The therapist encouraged me to think about or be aware of things in my life without judging them.",
    "The therapist tried to help me better understand how my problems were due to difficulties in my social relationships.",
  ],
  scale: [
    "Not at all<br>typical",
    "Slightly<br>typical",
    "Somewhat<br>typical",
    "Typical",
    "Very<br>typical"
  ],
  reverse: Array(30).fill(1).map(x => false),
  instructions: "The following are things your therapist may have done in your sessions.<br>Please rate how typical each was of your therapy sessions.",
  survey_width: 950,
  item_width: 50,
  scale_repeat: 5,
}
