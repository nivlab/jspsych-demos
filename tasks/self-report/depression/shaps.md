# Snaith-Hamilton Pleasure Scale (SHAPS)

The Snaith-Hamilton Pleasure Scale (Snaith et al., 1995). Minor edits were made to several questions (\#1 and \#8) to adjust unfamiliar British connotations of words for an American sample.

```javascript

var shaps = {
  type: 'survey-template',
  items = [
    "I would enjoy my favorite television or radio show.",                                                       // Q1; lightly edited
    "I would enjoy being with my family or close friends.",                                                      // Q2
    "I would find pleasure in my hobbies and pastimes.",                                                         // Q3
    "I would be able to enjoy my favorite meal.",                                                               // Q4
    "I would enjoy a warm bath or refreshing shower.",                                                           // Q5
    "I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread.",  // Q6
    "I would enjoy seeing other people's smiling faces.",                                                        // Q7
    "I would enjoy looking good when I have made an effort with my appearance.",                                 // Q8; lightly edited
    "I would enjoy reading a book, magazine, or newspaper.",                                                     // Q9
    "I would enjoy a cup of tea or coffee or my favorite drink.",                                                // Q10
    "I would be able to take pleasure in small things, e.g. bright sunny day, a telephone call from a friend.",  // Q11
    "I would be able to enjoy a beautiful landscape or view.",                                                   // Q12
    "I would get pleasure from helping others.",                                                                 // Q13
    "I would feel pleasure when I receive praise from other people."                                             // Q14
  ],
  scale = [
    "Strongly disagree",               // scored as 3
    "Disagree",                        // scored as 2
    "Agree",                           // scored as 1
    "Strongly agree"                   // scored as 0
  ],
  reverse = [
    true, true, true, true, true, true, true,
    true, true, true, true, true, true, true
  ],
  instructions = 'This questionnaire is designed to measure your ability to experience pleasure in the last few days.'
}

```

## References
- Snaith, R. P., Hamilton, M., Morley, S., Humayan, A., Hargreaves, D., & Trigwell, P. (1995). A scale for the assessment of hedonic tone the Snaith–Hamilton Pleasure Scale. The British Journal of Psychiatry, 167(1), 99-103.
