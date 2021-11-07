# Self-Report

Author(s): Sam Zorowitz, Dan Bennett, Dan Mirea

This folder contains template jsPsych code for self-report questionnaires, demographics forms, and debriefing forms.

## Self-report measures

| Links | Survey | Description | IRB Approval |
|-------|:-------|:------------|:-------------|
|       | 7-up 7-down | Measure of hypomania and depression symptoms | Niv, Daw |
|       | Affective slider | Measure of state mood & arousal | Niv, Daw |
|       | Alcohol use disorders identification test | Measure of alcohol use | Niv, Daw |
|       | Anxious control questionnaire | Measure of perceived self-efficacy (over anxiety, threat) | Daw |
|       | Apathy evaluation scale | Measure of apathy and amotivation | Daw |
|       | Behavioral inhibition / activation scales | Measure of reward/punishment motivation | Niv, Daw |
|       | COVID beliefs & behaviors | Measure of factors related to COVID-19 | Niv |
|       | Depression, anxiety, & stress scales | Measure of depression, anxiety, & stress symptoms | Niv |
|       | Druge use disorders identification test | Measure of drug use | Niv |
|       | Eating attitudes test | Measure of eating disorder symptoms | Daw |
|       | Generalized anxiety disorder scale | Measure of anxiety symptoms | Niv, Daw |
|       | General self-efficacy scale | Measure of perceived self-efficacy | Daw |
|       | Inventory of depression & anxiety symptoms | Measure of depression & anxiety symptoms | Niv |
|       | Intolerance of uncertainty scale | Measure of uncertainty intolerance | Niv |
|       | Liebowitz Social Anxiety Scale | Measure of social anxiety | Daw |
|       | Need for cognition scale | Measure of desire for cognitive effort  | Daw |
|       | Need for closure scale | Measure of uncertainty intolerance | Niv |
|       | Negative problem orientation scale | Measure of perceived self-efficacy | Daw |
|       | Obsessive-compulsive inventory | Measure of compulsivity symptoms | Daw |
|       | Positive and negative affect schedule | Measure of positive/negative affect | Niv, Daw |
|       | Penn State worry questionnaire | Measure of worry symptoms | Niv, Daw |
|       | Self-depression scale | Measure of depression symptoms | Daw |
|       | Snaith-Hamilton anhedonia scale | Measure of anhedonia & depression symptoms | Niv |
|       | Self-Evaluation of Negative Symptoms | Measure of negative symptoms | Niv |
|       | State-trait anxiety inventory | Measure of negative affect | Niv, Daw |
|       | State-Trait Inventory of Cognitive and Somatic Anxiety | Measure of anxiety symptoms | Niv |

## Plugins

This folder contains several custom jsPsych plugins. Each is described below.

#### jspsych-survey-template

The survey-template plugin is an extension of the [survey-likert plugin](https://www.jspsych.org/plugins/jspsych-survey-likert/). It displays a set of questions with Likert scale responses. The subject responds by selecting a radio button.

The original code has been extended to include several helpful front- and back-end features:

- Improved design aesthetics and interactive features making responding easier for participants.
- Automated reverse scoring of items (where indicated).
- Tracking of every page event (i.e. key press, button press, radio check) for auto-fill screening.
- Heuristic response detection (e.g. straight-lining, zig-zagging).

Unless otherwise specified, the self-report measures in this folder have been formated for use with the survey-template plugin. A minority of measures (e.g. affective slider) do not fit the standard template and have separate dedicated plugins.

#### jspsych-survey-demo

The survey-demo plugin is an extension of the [survey-data-form](https://www.jspsych.org/plugins/jspsych-survey-html-form/) plugin. It includes the standard demographic items required by the NIMH (e.g. age, gender, ethnicity, race) and additional items about English language fluency.

#### jspsych-survey-debrief

The survey-debrief plugin is an extension of the [survey-data-form](https://www.jspsych.org/plugins/jspsych-survey-html-form/) plugin. It includes items asking about a participant's appraisal of an experiment (e.g. difficulty, enjoyability) and free response items asking about strategy use and general feedback. Uses items from the [NASA Task Load Index](https://en.wikipedia.org/wiki/NASA-TLX).

#### jspsych-mental-health-alert

The mental-health-alert plugin displays a page that provides redirects to free-to-access mental health resources for participants. Required inclusion under the Daw lab IRB for any study involving self-report symptom measures.

## Notes
Though most of the code has been tested, we cannot guarantee that it free of error. We encourage users to double-check questionnaire contents and outputs for typos, scoring errors, and other bugs prior to online use.

The self-report measures in this folder have been contributed by members of different labs. As such, some measures may be approved under some but not all IRBs. Consult your IRB approval before using online.

## Contributing

We encourage contributions from anyone willing to donate their time. To add a new measure or plug-in, please open a pull request.
