/**
* Maltreatment and Abuse Chronology of Exposure (MACE) scale
*
* Teicher, M. H., & Parigger, A. (2015). The 'Maltreatment and Abuse Chronology
* of Exposure' (MACE) scale for the retrospective assessment of abuse and neglect
* during development. PLoS one, 10(2), e0117423.
*
**/

// Define constants.
const scale = ['Yes','No'];
const conditional_item = 'Please check all ages when this happened';
const conditional_scale = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18" ];

const mace_01 = {
  type: 'survey-mace',
  items: [
    "Swore at you, called you names, said insulting things like you're 'fat', 'ugly', 'stupid', etc. more than a few times a year.",
    "Said hurtful things that made you feel bad, embarrassed or humiliated more than a few times a year.",
    "Acted in a way that made you afraid that you might be physically hurt.",
    "Threatened to leave or abandon you.",
    "Locked you in a closet, attic, basement or garage.",
    "Intentionally pushed, grabbed, shoved, slapped, pinched, punched or kicked you."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Sometimes parents, stepparents, or other adults living in the house do hurtful things.<br>Please indicate if this happened to you during your childhood (first 18 years of your life).",
}

const mace_02 = {
  type: 'survey-mace',
  items: [
    "Hit you so hard that it left marks for more than a few minutes.",
    "Hit you so hard, or intentionally harmed you in some way, that you received or should have received medical attention.",
    "Spanked you on your buttocks, arms or legs.",
    "Spanked you on your bare (unclothed) buttocks.",
    "Spanked you with an object such as a strap, belt, brush, paddle, rod, etc.",
    "Made inappropriate sexual comments or suggestions to you.",
    "Touched or fondled your body in a sexual way.",
    "Had you touch their body in a sexual way."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Sometimes parents, stepparents, or other adults living in the house do hurtful things.<br>Please indicate if this happened to you during your childhood (first 18 years of your life).",
}

const mace_03 = {
  type: 'survey-mace',
  items: [
    "Hit your sibling (stepsibling) so hard that it left marks for more than a few minutes.",
    "Hit your sibling (stepsibling) so hard, or intentionally harmed him/her in some way, that he/she received or should have received medical attention.",
    "Made inappropriate sexual comments or suggestions to your sibling (stepsibling).",
    "Touched or fondled your sibling (stepsibling) in a sexual way."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Sometimes parents, stepparents or other adults living in the house do hurtful things to your siblings (brother, sister,<br>stepsiblings). Please indicate if this happened to you during your childhood (first 18 years of your life).",
}

const mace_04 = {
  type: 'survey-mace',
  items: [
    "Had you touch their body in a sexual way.",
    "Actually had sexual intercourse (oral, anal or vaginal) with you."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Sometimes adults or older individuals NOT living in the house do hurtful things to you.<br>Please indicate if this happened to you during your childhood (first 18 years of your life).",
}

const mace_05 = {
  type: 'survey-mace',
  items: [
    "Saw adults living in the household push, grab, slap or throw something at your mother (stepmother, grandmother).",
    "Saw adults living in the household hit your mother (stepmother, grandmother) so hard that it left marks for more than a few minutes.",
    "Saw adults living in the household hit your mother (stepmother, grandmother) so hard, or intentionally harm her in some way, that she received or should have received medical attention.",
    "Saw adults living in the household push, grab, slap or throw something at your father (stepfather, grandfather).",
    "Saw adults living in the household hit your father (stepfather, grandfather) so hard that it left marks for more than a few minutes."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Sometimes intense arguments or physical fights occur between parents, stepparents or other adults (boyfriends, girlfriends, grandparents) living in the household.<br>Please indicate if this happened to you during your childhood (first 18 years of your life).",
}

const mace_06 = {
  type: 'survey-mace',
  items: [
    "Swore at you, called you names, said insulting things like your 'fat', 'ugly', 'stupid', etc. more than a few times a year.",
    "Said hurtful things that made you feel bad, embarrassed or humiliated more than a few times a year.",
    "Said things behind your back, posted derogatory messages about you, or spread rumors about you.",
    "Intentionally excluded you from activities or groups.",
    "Acted in a way that made you afraid that you might be physically hurt."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Sometimes children your own age or older do hurtful things like bully or harass you.<br>Please indicate if this happened to you during your childhood (first 18 years of your life)",
}

const mace_07 = {
  type: 'survey-mace',
  items: [
    "Threatened you in order to take your money or possessions.",
    "Forced or threatened you to do things that you did not want to do.",
    "Intentionally pushed, grabbed, shoved, slapped, pinched, punched, or kicked you.",
    "Hit you so hard that it left marks for more than a few minutes.",
    "Hit you so hard, or intentionally harmed you in some way, that you received or should have received medical attention.",
    "Forced you to engage in sexual activity against your will.",
    "Forced you to do things sexually that you did not want to do."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Sometimes children your own age or older do hurtful things like bully or harass you.<br>Please indicate if this happened to you during your childhood (first 18 years of your life)",
}

const mace_08 = {
  type: 'survey-mace',
  items: [
    "You felt that your mother or other important maternal figure was present in the household but emotionally unavailable to you for a variety of reasons like drugs, alcohol, workaholic, having an affair, heedlessly pursuing their own goals.",
    "You felt that your father or other important paternal figure was present in the household but emotionally unavailable to you for a variety of reasons like drugs, alcohol, workaholic, having an affair, heedlessly pursuing their own goals.",
    "A parent or other important parental figure was very difficult to please.",
    "A parent or other important parental figure did not have the time or interest to talk to you.",
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Please indicate if the following happened during your childhood (first 18 years of your life).",
}

const mace_09 = {
  type: 'survey-mace',
  items: [
    "One or more individuals in your family made you feel loved.",
    "One or more individuals in your family helped you feel important or special.",
    "One or more individuals in your family were there to take care of you and protect you.",
    "One or more individuals in your family were there to take you to the doctor or Emergency Room if the need ever arose, or would have if needed."
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Please indicate if the following statements were true about you and your family during your childhood<br>(first 18 years of your life).",
}

const mace_10 = {
  type: 'survey-mace',
  items: [
    "You didn't have enough to eat.",
    "You had to wear dirty clothes.",
    "You felt that you had to shoulder adult responsibilities.",
    "You felt that your family was under severe financial pressure.",
    "One or more individuals kept important secrets or facts from you.",
    "People in your family looked out for each other.",
    "Your family was a source of strength and support.",
  ],
  scale: scale,
  conditional_item: conditional_item,
  conditional_scale: conditional_scale,
  instructions: "Please indicate if the following statements were true about you and your family during your childhood<br>(first 18 years of your life).",
}

// Define MACE
var MACE = [mace_01, mace_02, mace_03, mace_04, mace_05, mace_06, mace_07, mace_08, mace_09, mace_10];
