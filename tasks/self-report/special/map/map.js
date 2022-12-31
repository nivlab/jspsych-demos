/**
* Motivation and Pleasure Scale
*
* Llerena, K., Park, S. G., McCarthy, J. M., Couture, S. M., Bennett, M. E., &
* Blanchard, J. J. (2013). The Motivation and Pleasure Scale–Self-Report (MAP-SR):
* Reliability and validity of a self-report measure of negative symptoms.
* Comprehensive psychiatry, 54(5), 568-574.
*
**/

// Social pleasure
var map_01 = {
  type: jsPsychSurveyMap,
  questions: [
    {
      item: 'In the past week, what is the <i>most</i> pleasure you experienced from being with other people?',
      scale: ['No<br>pleasure', '', 'Moderate<br>pleasure', '', 'Extreme<br>pleasure'],
      name: 'Q01'
    },
    {
      item: 'In the past week, <i>how often</i> have you experienced pleasure from being with other people?',
      scale: ['Not at all', '', 'A couple of times', '', 'Very often'],
      name: 'Q02'
    },
    {
      item: 'Looking ahead to being with other people <i>in the next few weeks</i>, how much pleasure do you expect you will experience from being with others?',
      scale: ['No<br>pleasure', '', 'Moderate<br>pleasure', '', 'Extreme<br>pleasure'],
      name: 'Q03'
    },
  ],
  instructions: 'This scale consists of a number of questions about motivation and pleasure.<br>For each question, choose the response which most applies to you.',
  survey_width: 950,
  item_width: 48,
}

// Recreational or work pleasure
var map_02 = {
  type: jsPsychSurveyMap,
  questions: [
    {
      item: 'In the past week, what is the <i>most</i> pleasure you experienced from hobbies, recreation, or from work?',
      scale: ['No<br>pleasure', '', 'Moderate<br>pleasure', '', 'Extreme<br>pleasure'],
      name: 'Q04'
    },
    {
      item: 'In the past week, <i>how often</i> have you experienced pleasure from hobbies, recreation, or from work?',
      scale: ['Not at all', '', 'A couple of times', '', 'Very often'],
      name: 'Q05'
    },
    {
      item: 'Looking ahead to the <i>next few weeks</i>, how much pleasure do you expect you will experience from your hobbies, recreation, or work?',
      scale: ['No<br>pleasure', '', 'Moderate<br>pleasure', '', 'Extreme<br>pleasure'],
      name: 'Q06'
    },
  ],
  instructions: 'This scale consists of a number of questions about motivation and pleasure.<br>For each question, choose the response which most applies to you.',
  survey_width: 950,
  item_width: 48,
}

// Feelings and motivations about close, caring relationships
var map_03 = {
  type: jsPsychSurveyMap,
  questions: [
    {
      item: 'When it comes to close relationships with your <i>family members</i>, how important have these relationships been to you over the past week?',
      scale: ['Not at all<br>important', '', 'Moderately<br>important', '', 'Extremely important'],
      name: 'Q07'
    },
    {
      item: 'When it comes to having a close relationship with a <i>romantic partner</i>, how important has this type of relationship been to you over the past week?',
      scale: ['Not at all<br>important', '', 'Moderately<br>important', '', 'Extremely important'],
      name: 'Q08'
    },
    {
      item: 'When it comes to close relationships with your <i>friends</i>, how important have these relationships been to you over the past week?',
      scale: ['Not at all<br>important', '', 'Moderately<br>important', '', 'Extremely important'],
      name: 'Q09'
    },
  ],
  instructions: 'This scale consists of a number of questions about motivation and pleasure.<br>For each question, choose the response which most applies to you.',
  survey_width: 950,
  item_width: 48,
}

// Motivation and effort to engage in activities
var map_04 = {
  type: jsPsychSurveyMap,
  questions: [
    {
      item: 'In the past week, how <i>motivated</i> have you been to be around other people and do things with them?',
      scale: ['Not at all<br>motivated', '', 'Moderately<br>motivated', '', 'Very<br>motivated'],
      name: 'Q10'
    },
    {
      item: 'In the past week, how much <i>effort</i> have you made to actually do things with other people?',
      scale: ['No<br>effort', '', 'Moderate<br>effort', '', 'Very much<br>effort'],
      name: 'Q11'
    },
    {
      item: 'In the past week, how <i>motivated</i> have you been to go to work or school or look for a job or class to take?',
      scale: ['Not at all<br>motivated', '', 'Moderately<br>motivated', '', 'Very<br>motivated'],
      name: 'Q12'
    },
    {
      item: 'In the past week, how much <i>effort</i> have you made to do things at work or school? (If you are not working or going to school, how much effort have you made to look for a job or school.)',
      scale: ['No<br>effort', '', 'Moderate<br>effort', '', 'Very much<br>effort'],
      name: 'Q13'
    },
    {
      item: 'In the past week, how <i>motivated</i> have you been to do hobbies or other recreational activities?',
      scale: ['Not at all<br>motivated', '', 'Moderately<br>motivated', '', 'Very<br>motivated'],
      name: 'Q14'
    },
    {
      item: 'In the past week, how much <i>effort</i> have you made to actually do any hobbies or recreational activities?',
      scale: ['No<br>effort', '', 'Moderate<br>effort', '', 'Very much<br>effort'],
      name: 'Q15'
    }
  ],
  instructions: 'This scale consists of a number of questions about motivation and pleasure.<br>For each question, choose the response which most applies to you.',
  survey_width: 950,
  item_width: 48,
}

// Assemble map.
var MACE = [map_01, map_02, map_03, map_04];
