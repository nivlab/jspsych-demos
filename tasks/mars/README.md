# Matrix reasoning item bank

Author(s): Sam Zorowitz

A jsPsych port of the matrix reasoning item bank (MaRs-IB) presented in [Chierchia et al. (2019)](https://doi.org/10.1098/rsos.190232). All materials were retrieved from the project's [OSF repository](https://osf.io/g96f4/) and the task design was modeled after the [Gorilla version](https://app.gorilla.sc/openmaterials/36164).

## Plugins

#### `jspsych-mars.js`

This is the core jsPsych plugin that runs a single trial from the matrix reasoning bank. The plugin requires the user to specify a puzzle stimulus and four choice options. Users can specify multiple features a trial, including trial length, feedback presentation, and choice order randomization.

#### `mars-experiment.js`

This is a stand-in script that generates a timeline of 3 MaRs-IB trials. Users may modify to specify which image and test sets to use, as well as what distractor version of the choice options to use (see Image section). Users can also control the length of each trial (default: 30 s) and the maximum length of the task (default: 8 min).

#### `mars-instructions.js`

This is a convenience script that generates the timeline of MaRs-IB instructions. The instructions were adapted from the publicly available [Gorilla version](https://app.gorilla.sc/openmaterials/36164).

## Images

Chierchia et al. (2019) developed three unique sets of stimuli, all of which reside in the `img` folder. The first image set (`is1`) is the same as used in the manuscript. The latter two image sets (`is2`, `is3`) are colorblind-friendly versions of the image set. Each image set has three unique test-forms (`tf`). Each test form has unique imagery but is matched item-by-item on matrix pattern and dimensionality.

Each puzzle stimulus is accompanied by two sets of four possible choice options. The sets differ in how the distractor choice options were generated. For details, please see [Chierchia et al. (2019)](https://doi.org/10.1098/rsos.190232).

For ease of download, each image set has been compressed and needs to be unpacked before they can be used. To unpack an image set, use the following command:

```unix
tar xvzf file.tar.gz
```

Note: the practice images must also be unpacked in order to run the instructions.


## Abbreviated test forms

Sam has been working on optimized, abbreviated test forms of the MaRs-IB items using item response theory. Please contact him for details. 

## References
Chierchia, G., Fuhrmann, D., Knoll, L. J., Pi-Sunyer, B. P., Sakhardande, A. L., & Blakemore, S. J. (2019). The matrix reasoning item bank (MaRs-IB): novel, open-access abstract reasoning items for adolescents and adults. Royal Society open science, 6(10), 190232.
