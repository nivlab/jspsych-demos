var HORIZONS_01 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [39, 35, -1, -1, 38],
    rewards_R: [-1, -1, 57, 58, 48],
    forced_choices: [0, 0, 1, 1],
    data: {game: 1, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 37.0, mean_R: 57.5, mean_d: -20.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 37, 43, 50],
    rewards_R: [32, 16, -1, -1, 17],
    forced_choices: [1, 1, 0, 0],
    data: {game: 3, info: 0, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 40.0, mean_R: 24.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 53, 49, -1, 45],
    rewards_R: [54, -1, -1, 66, 70],
    forced_choices: [1, 0, 0, 1],
    data: {game: 5, info: 0, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 51.0, mean_R: 60.0, mean_d: -9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 27, -1, 39, 40],
    rewards_R: [25, -1, 34, -1, 37],
    forced_choices: [1, 0, 1, 0],
    data: {game: 7, info: 0, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 33.0, mean_R: 29.5, mean_d: 3.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 75, 66, -1, 64],
    rewards_R: [67, -1, -1, 62, 76],
    forced_choices: [1, 0, 0, 1],
    data: {game: 9, info: 0, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 70.5, mean_R: 64.5, mean_d: 6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 52, -1, 33, 40],
    rewards_R: [56, -1, 51, -1, 38],
    forced_choices: [1, 0, 1, 0],
    data: {game: 11, info: 0, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 42.5, mean_R: 53.5, mean_d: -11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 80, 70, 84],
    rewards_R: [68, 49, -1, -1, 57],
    forced_choices: [1, 1, 0, 0],
    data: {game: 13, info: 0, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 75.0, mean_R: 58.5, mean_d: 16.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 54, 31, -1, 41],
    rewards_R: [58, -1, -1, 70, 66],
    forced_choices: [1, 0, 0, 1],
    data: {game: 15, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 42.5, mean_R: 64.0, mean_d: -21.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 38, 40, 45, 31],
    rewards_R: [60, -1, -1, -1, 67],
    forced_choices: [1, 0, 0, 0],
    data: {game: 17, info: -1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 41.0, mean_R: 60.0, mean_d: -19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [40, -1, -1, -1, 52],
    rewards_R: [-1, 40, 19, 18, 31],
    forced_choices: [0, 1, 1, 1],
    data: {game: 19, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 40.0, mean_R: 25.67, mean_d: 14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 49, 36, 48, 42],
    rewards_R: [61, -1, -1, -1, 62],
    forced_choices: [1, 0, 0, 0],
    data: {game: 21, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 44.33, mean_R: 61.0, mean_d: -16.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 44, -1, -1, 43],
    rewards_R: [31, -1, 36, 36, 28],
    forced_choices: [1, 0, 1, 1],
    data: {game: 23, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 44.0, mean_R: 34.33, mean_d: 9.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [54, -1, 48, 35, 54],
    rewards_R: [-1, 54, -1, -1, 51],
    forced_choices: [0, 1, 0, 0],
    data: {game: 25, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 45.67, mean_R: 54.0, mean_d: -8.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 52, -1, -1, 40],
    rewards_R: [62, -1, 37, 39, 24],
    forced_choices: [1, 0, 1, 1],
    data: {game: 27, info: 1, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 52.0, mean_R: 46.0, mean_d: 6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [68, -1, 63, 70, 73],
    rewards_R: [-1, 60, -1, -1, 50],
    forced_choices: [0, 1, 0, 0],
    data: {game: 29, info: -1, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 67.0, mean_R: 60.0, mean_d: 7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 42, -1, 32],
    rewards_R: [55, 48, -1, 49, 41],
    forced_choices: [1, 1, 0, 1],
    data: {game: 31, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 42.0, mean_R: 50.67, mean_d: -8.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [62, 63, 76, -1, 67],
    rewards_R: [-1, -1, -1, 55, 56],
    forced_choices: [0, 0, 0, 1],
    data: {game: 33, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 67.0, mean_R: 55.0, mean_d: 12.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [36, -1, -1, -1, 30],
    rewards_R: [-1, 49, 53, 55, 66],
    forced_choices: [0, 1, 1, 1],
    data: {game: 35, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 36.0, mean_R: 52.33, mean_d: -16.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [76, 81, -1, 67, 80],
    rewards_R: [-1, -1, 58, -1, 65],
    forced_choices: [0, 0, 1, 0],
    data: {game: 37, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 74.67, mean_R: 58.0, mean_d: 16.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 41, -1, 32],
    rewards_R: [54, 64, -1, 69, 69],
    forced_choices: [1, 1, 0, 1],
    data: {game: 39, info: 1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 41.0, mean_R: 62.33, mean_d: -21.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [48, -1, 33, -1, 48, 50, 34, 41, 48, 35],
    rewards_R: [-1, 23, -1, 19, 36, 32, 18, 28, 33, 10],
    forced_choices: [0, 1, 0, 1],
    data: {game: 41, info: 0, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 40.5, mean_R: 21.0, mean_d: 19.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [40, -1, 48, -1, 48, 30, 48, 24, 53, 53],
    rewards_R: [-1, 60, -1, 62, 56, 60, 68, 53, 62, 55],
    forced_choices: [0, 1, 0, 1],
    data: {game: 43, info: 0, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 44.0, mean_R: 61.0, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 39, -1, 47, 46, 48, 33, 41, 45, 46],
    rewards_R: [42, -1, 22, -1, 36, 38, 46, 28, 29, 24],
    forced_choices: [1, 0, 1, 0],
    data: {game: 45, info: 0, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 43.0, mean_R: 32.0, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 59, 52, -1, 53, 63, 63, 48, 68, 53],
    rewards_R: [66, -1, -1, 58, 71, 51, 56, 57, 70, 56],
    forced_choices: [1, 0, 0, 1],
    data: {game: 47, info: 0, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 55.5, mean_R: 62.0, mean_d: -6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [37, -1, 52, -1, 51, 63, 39, 41, 34, 41],
    rewards_R: [-1, 54, -1, 48, 35, 39, 49, 58, 36, 65],
    forced_choices: [0, 1, 0, 1],
    data: {game: 49, info: 0, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 44.5, mean_R: 51.0, mean_d: -6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [69, 74, -1, -1, 68, 70, 66, 62, 69, 78],
    rewards_R: [-1, -1, 56, 66, 63, 57, 61, 59, 66, 56],
    forced_choices: [0, 0, 1, 1],
    data: {game: 51, info: 0, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 71.5, mean_R: 61.0, mean_d: 10.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 39, -1, 57, 46, 41, 36, 37, 46, 30],
    rewards_R: [71, -1, 59, -1, 54, 48, 63, 60, 69, 65],
    forced_choices: [1, 0, 1, 0],
    data: {game: 53, info: 0, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 48.0, mean_R: 65.0, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 77, 80, 56, 78, 93, 94, 71, 85],
    rewards_R: [64, 54, -1, -1, 63, 64, 58, 60, 46, 48],
    forced_choices: [1, 1, 0, 0],
    data: {game: 55, info: 0, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 78.5, mean_R: 59.0, mean_d: 19.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 44, -1, 40, 39, 46, 43, 32, 50],
    rewards_R: [27, 23, -1, 17, 26, 18, 21, 22, 19, 12],
    forced_choices: [1, 1, 0, 1],
    data: {game: 57, info: 1, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 44.0, mean_R: 22.33, mean_d: 21.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [42, -1, 42, 38, 58, 52, 32, 38, 51, 53],
    rewards_R: [-1, 56, -1, -1, 70, 64, 60, 65, 59, 58],
    forced_choices: [0, 1, 0, 0],
    data: {game: 59, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 40.67, mean_R: 56.0, mean_d: -15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 39, -1, -1, 42, 52, 39, 35, 34, 33],
    rewards_R: [22, -1, 24, 26, 23, 36, 13, 30, 25, 32],
    forced_choices: [1, 0, 1, 1],
    data: {game: 61, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 39.0, mean_R: 24.0, mean_d: 15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 50, 49, 66, 38, 43, 48, 58, 39, 53],
    rewards_R: [63, -1, -1, -1, 81, 47, 43, 56, 62, 64],
    forced_choices: [1, 0, 0, 0],
    data: {game: 63, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 55.0, mean_R: 63.0, mean_d: -8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 43, -1, 43, 36, 42, 29, 56, 59],
    rewards_R: [30, 37, -1, 36, 28, 33, 30, 36, 24, 17],
    forced_choices: [1, 1, 0, 1],
    data: {game: 65, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 43.0, mean_R: 34.33, mean_d: 8.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 60, 49, 54, 34, 47, 55, 60, 56, 49],
    rewards_R: [59, -1, -1, -1, 60, 60, 53, 58, 63, 57],
    forced_choices: [1, 0, 0, 0],
    data: {game: 67, info: -1, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 54.33, mean_R: 59.0, mean_d: -4.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 38, -1, 49, 20, 28, 33, 40, 48],
    rewards_R: [46, 40, -1, 40, 53, 37, 51, 41, 57, 43],
    forced_choices: [1, 1, 0, 1],
    data: {game: 69, info: 1, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 38.0, mean_R: 42.0, mean_d: -4.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [60, -1, 69, 67, 66, 74, 82, 75, 67, 60],
    rewards_R: [-1, 56, -1, -1, 70, 60, 53, 60, 62, 49],
    forced_choices: [0, 1, 0, 0],
    data: {game: 71, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 65.33, mean_R: 56.0, mean_d: 9.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 45, -1, 40, 36, 45, 24, 39, 26],
    rewards_R: [57, 56, -1, 47, 56, 42, 51, 62, 45, 55],
    forced_choices: [1, 1, 0, 1],
    data: {game: 73, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 45.0, mean_R: 53.33, mean_d: -8.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [75, 80, -1, 67, 77, 89, 77, 70, 80, 86],
    rewards_R: [-1, -1, 61, -1, 61, 71, 58, 61, 70, 80],
    forced_choices: [0, 0, 1, 0],
    data: {game: 75, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 74.0, mean_R: 61.0, mean_d: 13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 36, -1, -1, 45, 37, 35, 48, 38, 31],
    rewards_R: [47, -1, 43, 59, 52, 59, 63, 52, 63, 59],
    forced_choices: [1, 0, 1, 1],
    data: {game: 77, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 36.0, mean_R: 49.67, mean_d: -13.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 94, 79, 78, 80, 82, 85, 75, 72, 81],
    rewards_R: [64, -1, -1, -1, 65, 62, 56, 65, 66, 61],
    forced_choices: [1, 0, 0, 0],
    data: {game: 79, info: -1, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 83.67, mean_R: 64.0, mean_d: 19.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
var HORIZONS_02 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 43, 42, 36],
    rewards_R: [14, 27, -1, -1, 16],
    forced_choices: [1, 1, 0, 0],
    data: {game: 2, info: 0, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 42.5, mean_R: 20.5, mean_d: 22.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [51, -1, -1, 37, 41],
    rewards_R: [-1, 68, 52, -1, 64],
    forced_choices: [0, 1, 1, 0],
    data: {game: 4, info: 0, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 44.0, mean_R: 60.0, mean_d: -16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [35, -1, 46, -1, 34],
    rewards_R: [-1, 28, -1, 36, 31],
    forced_choices: [0, 1, 0, 1],
    data: {game: 6, info: 0, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 40.5, mean_R: 32.0, mean_d: 8.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 48, -1, 56, 58],
    rewards_R: [56, -1, 58, -1, 54],
    forced_choices: [1, 0, 1, 0],
    data: {game: 8, info: 0, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 52.0, mean_R: 57.0, mean_d: -5.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 48, 40, -1, 39],
    rewards_R: [57, -1, -1, 40, 61],
    forced_choices: [1, 0, 0, 1],
    data: {game: 10, info: 0, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 44.0, mean_R: 48.5, mean_d: -4.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [73, -1, -1, 63, 61],
    rewards_R: [-1, 58, 56, -1, 53],
    forced_choices: [0, 1, 1, 0],
    data: {game: 12, info: 0, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 68.0, mean_R: 57.0, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [49, 26, -1, -1, 34],
    rewards_R: [-1, -1, 55, 46, 57],
    forced_choices: [0, 0, 1, 1],
    data: {game: 14, info: 0, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 37.5, mean_R: 50.5, mean_d: -13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 74, 68, 77],
    rewards_R: [45, 58, -1, -1, 51],
    forced_choices: [1, 1, 0, 0],
    data: {game: 16, info: 0, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 71.0, mean_R: 51.5, mean_d: 19.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 44, -1, -1, 35],
    rewards_R: [30, -1, 22, 22, 22],
    forced_choices: [1, 0, 1, 1],
    data: {game: 18, info: 1, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 44.0, mean_R: 24.67, mean_d: 19.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [32, 44, 52, -1, 52],
    rewards_R: [-1, -1, -1, 59, 64],
    forced_choices: [0, 0, 0, 1],
    data: {game: 20, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 42.67, mean_R: 59.0, mean_d: -16.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 43, 34],
    rewards_R: [32, 18, 31, -1, 25],
    forced_choices: [1, 1, 1, 0],
    data: {game: 22, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 43.0, mean_R: 27.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [48, 37, 67, -1, 45],
    rewards_R: [-1, -1, -1, 61, 52],
    forced_choices: [0, 0, 0, 1],
    data: {game: 24, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 50.67, mean_R: 61.0, mean_d: -10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 40, 37],
    rewards_R: [33, 38, 22, -1, 29],
    forced_choices: [1, 1, 1, 0],
    data: {game: 26, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 40.0, mean_R: 31.0, mean_d: 9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 63, 45, 51, 64],
    rewards_R: [60, -1, -1, -1, 45],
    forced_choices: [1, 0, 0, 0],
    data: {game: 28, info: -1, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 53.0, mean_R: 60.0, mean_d: -7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 42, -1, 48],
    rewards_R: [53, 46, -1, 46, 40],
    forced_choices: [1, 1, 0, 1],
    data: {game: 30, info: 1, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 42.0, mean_R: 48.33, mean_d: -6.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [77, -1, 58, 63, 73],
    rewards_R: [-1, 55, -1, -1, 66],
    forced_choices: [0, 1, 0, 0],
    data: {game: 32, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 66.0, mean_R: 55.0, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [39, -1, -1, -1, 34],
    rewards_R: [-1, 48, 48, 45, 61],
    forced_choices: [0, 1, 1, 1],
    data: {game: 34, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 39.0, mean_R: 47.0, mean_d: -8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [67, -1, 76, 76, 85],
    rewards_R: [-1, 57, -1, -1, 55],
    forced_choices: [0, 1, 0, 0],
    data: {game: 36, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 73.0, mean_R: 57.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 42, -1, -1, 46],
    rewards_R: [61, -1, 48, 63, 38],
    forced_choices: [1, 0, 1, 1],
    data: {game: 38, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 42.0, mean_R: 57.33, mean_d: -15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [86, -1, 86, 77, 96],
    rewards_R: [-1, 65, -1, -1, 68],
    forced_choices: [0, 1, 0, 0],
    data: {game: 40, info: -1, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 83.0, mean_R: 65.0, mean_d: 18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 38, 46, -1, 31, 26, 39, 45, 24, 43],
    rewards_R: [59, -1, -1, 65, 57, 63, 49, 59, 60, 62],
    forced_choices: [1, 0, 0, 1],
    data: {game: 42, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 42.0, mean_R: 62.0, mean_d: -20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [43, -1, -1, 48, 33, 34, 48, 57, 49, 41],
    rewards_R: [-1, 33, 27, -1, 27, 14, 36, 15, 22, 24],
    forced_choices: [0, 1, 1, 0],
    data: {game: 44, info: 0, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 45.5, mean_R: 30.0, mean_d: 15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 48, -1, 47, 58, 33, 53, 46, 51, 57],
    rewards_R: [56, -1, 55, -1, 52, 46, 50, 73, 50, 56],
    forced_choices: [1, 0, 1, 0],
    data: {game: 46, info: 0, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 47.5, mean_R: 55.5, mean_d: -8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 31, 45, -1, 35, 29, 31, 61, 34, 34],
    rewards_R: [30, -1, -1, 34, 26, 35, 33, 39, 32, 32],
    forced_choices: [1, 0, 0, 1],
    data: {game: 48, info: 0, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 38.0, mean_R: 32.0, mean_d: 6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 77, 58, 62, 67, 47, 58, 50, 67],
    rewards_R: [65, 59, -1, -1, 76, 62, 53, 52, 46, 51],
    forced_choices: [1, 1, 0, 0],
    data: {game: 50, info: 0, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 67.5, mean_R: 62.0, mean_d: 5.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [33, -1, 47, -1, 25, 29, 42, 45, 38, 56],
    rewards_R: [-1, 45, -1, 55, 47, 49, 46, 59, 49, 46],
    forced_choices: [0, 1, 0, 1],
    data: {game: 52, info: 0, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 40.0, mean_R: 50.0, mean_d: -10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [71, -1, 72, -1, 68, 76, 73, 76, 83, 92],
    rewards_R: [-1, 58, -1, 59, 67, 60, 70, 59, 67, 80],
    forced_choices: [0, 1, 0, 1],
    data: {game: 54, info: 0, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 71.5, mean_R: 58.5, mean_d: 13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 46, 40, -1, 38, 38, 40, 43, 42, 30],
    rewards_R: [66, -1, -1, 63, 65, 49, 78, 54, 60, 71],
    forced_choices: [1, 0, 0, 1],
    data: {game: 56, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 43.0, mean_R: 64.5, mean_d: -21.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [33, -1, 31, 37, 47, 56, 34, 28, 48, 48],
    rewards_R: [-1, 54, -1, -1, 51, 75, 67, 66, 59, 59],
    forced_choices: [0, 1, 0, 0],
    data: {game: 58, info: -1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 33.67, mean_R: 54.0, mean_d: -20.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 43, -1, -1, 32, 26, 40, 36, 33, 35],
    rewards_R: [25, -1, 27, 29, 30, 20, 20, 27, 38, 23],
    forced_choices: [1, 0, 1, 1],
    data: {game: 60, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 43.0, mean_R: 27.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 44, 59, 46, 44, 36, 49, 36, 43, 38],
    rewards_R: [64, -1, -1, -1, 60, 63, 73, 48, 58, 58],
    forced_choices: [1, 0, 0, 0],
    data: {game: 62, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 49.67, mean_R: 64.0, mean_d: -14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [36, -1, -1, -1, 40, 41, 45, 35, 28, 46],
    rewards_R: [-1, 25, 32, 20, 23, 33, 23, 44, 35, 34],
    forced_choices: [0, 1, 1, 1],
    data: {game: 64, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 36.0, mean_R: 25.67, mean_d: 10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 52, 45, 36, 35, 46, 54, 60, 40, 57],
    rewards_R: [56, -1, -1, -1, 48, 53, 59, 62, 62, 52],
    forced_choices: [1, 0, 0, 0],
    data: {game: 66, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 44.33, mean_R: 56.0, mean_d: -11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [41, -1, -1, -1, 56, 36, 32, 37, 36, 40],
    rewards_R: [-1, 45, 29, 32, 17, 27, 9, 33, 37, 32],
    forced_choices: [0, 1, 1, 1],
    data: {game: 68, info: 1, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 41.0, mean_R: 35.33, mean_d: 5.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [53, 62, -1, 69, 73, 59, 71, 64, 55, 59],
    rewards_R: [-1, -1, 57, -1, 55, 68, 75, 65, 66, 64],
    forced_choices: [0, 0, 1, 0],
    data: {game: 70, info: -1, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 61.33, mean_R: 57.0, mean_d: 4.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 34, -1, -1, 61, 61, 45, 45, 27, 42],
    rewards_R: [41, -1, 39, 57, 43, 46, 45, 49, 61, 52],
    forced_choices: [1, 0, 1, 1],
    data: {game: 72, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 34.0, mean_R: 45.67, mean_d: -11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [61, 74, 63, -1, 78, 71, 79, 47, 80, 62],
    rewards_R: [-1, -1, -1, 57, 62, 68, 57, 54, 69, 68],
    forced_choices: [0, 0, 0, 1],
    data: {game: 74, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 66.0, mean_R: 57.0, mean_d: 9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 44, 43, 35, 39, 39, 49, 35],
    rewards_R: [54, 67, 54, -1, 53, 38, 41, 61, 52, 52],
    forced_choices: [1, 1, 1, 0],
    data: {game: 76, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 44.0, mean_R: 58.33, mean_d: -14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [65, 84, 82, -1, 84, 79, 80, 74, 72, 80],
    rewards_R: [-1, -1, -1, 60, 69, 66, 53, 66, 55, 44],
    forced_choices: [0, 0, 0, 1],
    data: {game: 78, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 77.0, mean_R: 60.0, mean_d: 17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 42, 51, 42, 33, 47, 36, 50],
    rewards_R: [68, 50, 64, -1, 47, 53, 67, 65, 61, 57],
    forced_choices: [1, 1, 1, 0],
    data: {game: 80, info: 1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 42.0, mean_R: 60.67, mean_d: -18.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
