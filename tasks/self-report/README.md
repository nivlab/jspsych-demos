# Questionnaires

This folder contains template jsPsych code for self-report questionnaires, demographics forms, and debriefing forms.

Please review the [notes](#notes) section before using code in live experiments.

Organization
------------

    ├── anxiety            <- Self-report measures of anxiety and related symptoms.
    │   ├── acqr           <- Anxious control qestionnaire
    │   ├── gad7           <- Generalized anxiety disorder scale
    │   ├── lsas           <- Liebowitz social anxiety scale
    │   ├── oci            <- Obsessive compulsive inventory
    │   ├── pswq           <- Penn state worry questionnaire
    │   ├── stai           <- State trait anxiety inventory
    │   ├── sticsa         <- State-trait inventory of cognitive and somatic anxiety
    │   
    ├── depression         <- Self-report measures of depression and related symptoms.
    │   ├── aes            <- Apathy evaluation scale
    │   ├── sds            <- Zung self-depression scale
    │   ├── shaps          <- Snaith-Hamilton pleasure scale
    │   
    ├── eating             <- Self-report measures of eating disorders and related symptoms.
    │   ├── eat26          <- Eating attitudes test
    │   
    ├── misc               <- Self-report measures of miscellaneous constructs.
    │   ├── covid          <- COVID behaviors inventory
    │   
    ├── mood               <- Self-report measures of mood and affect.
    │   ├── panas          <- Positive and negative affect schedule
    │   ├── slider         <- Affective slider scale
    │   
    ├── multidomain        <- Self-report measures of multiple syndromes.
    │   ├── 7u7d           <- 7-up / 7-down scale (depression, mania)
    │   ├── bisbas         <- Behavioral inhibition / behavioral activation (anxiety, depression)
    │   ├── dass           <- Depression, anxiety, and stress scale
    │   
    ├── self-efficacy      <- Self-report measures of self-efficacy beliefs.
    │   ├── docs           <- Desirability of control scale
    │   ├── gse            <- General self-efficacy scale
    │   ├── nfc6           <- Need for cognition scale
    │   ├── npoq           <- Negative problem orientation questionnaire
    │   
    ├── substance          <- Self-report measures of substance use.
    │   ├── audit          <- Alcohol use disorders identification test
    │   
    ├── uncertainty        <- Self-report measures of uncertainty tolerance and information seeking.
    │   ├── ius12          <- Intolerance of uncertainty scale
    │   ├── nfcs           <- Need for closure scale
    │   
    ├── jspsych-mental-health-alert.js     <- Mental health resources for participants
    ├── jspsych-survey-debrief.js          <- Experiment debriefing form
    ├── jspsych-survey-demo.js             <- NIMH demographics form
    ├── jspsych-survey-template.js         <- Core survey template plugin

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

The survey-debrief plugin is an extension of the [survey-data-form](https://www.jspsych.org/plugins/jspsych-survey-html-form/) plugin. It includes items asking about a participant's appraisal of an experiment (e.g. difficulty, enjoyability) and free response items asking about strategy use and general feedback.

#### jspsych-mental-health-alert

The mental-health-alert plugin displays a page that provides redirects to free-to-access mental health resources for participants. Required inclusion under the Daw lab IRB for any study involving self-report symptom measures.

## Notes
Though most of the code has been tested, we cannot guarantee that it free of error. We encourage users to double-check questionnaire contents and outputs for typos, scoring errors, and other bugs prior to online use.

The self-report measures in this folder have been contributed by members of different labs. As such, some measures may be approved under some but not all IRBs. Consult your IRB approval before using online.

## Contributing

We encourage contributions from anyone willing to donate their time. To add a new measure or plug-in, please open a pull request.
