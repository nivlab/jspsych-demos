/**
* jspsych-affective-slider
*
* author(s): Dan Bennett
*
* Betella, A., & Verschure, P. F. (2016). The affective slider: A digital self-
* assessment scale for the measurement of human emotions. PloS one, 11(2), e0148037.
*
*/

// Affective slider stimuli (NOTE: must be in this order).
var slider_stimuli = [
  './special/img/slider_track.png',
  './special/img/AS_intensity_cue.png',
  './special/img/AS_unhappy.png',
  './special/img/AS_happy.png',
  './special/img/AS_sleepy.png',
  './special/img/AS_wideawake.png',
  './special/img/slider_thumb_selected.png',
  './special/img/slider_thumb_unselected.png'
];

// Affective slider
var slider = {
  type: jsPsychAffectiveSlider,
  prompt: 'Please rate your current mood from completely sad (left) to completely happy (right).',
  slider_type: 'valence',
  left_anchor: 2, // indexes into the AS_stimuli array
  right_anchor: 3, // indexes into the AS_stimuli array
  AS_stimuli: slider_stimuli,
  initial_silent_duration: 500,
  initial_blank_duration: 0
}
