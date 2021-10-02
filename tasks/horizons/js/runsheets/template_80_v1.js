var HORIZONS_01 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [44, -1, 38, -1, 38],
    rewards_R: [-1, 70, -1, 54, 60],
    forced_choices: [0, 1, 0, 1],
    data: {game: 1, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 41.0, mean_R: 62.0, mean_d: -21.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 40, 44, -1, 43],
    rewards_R: [30, -1, -1, 20, 38],
    forced_choices: [1, 0, 0, 1],
    data: {game: 3, info: 0, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 42.0, mean_R: 25.0, mean_d: 17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 55, -1, 47, 53],
    rewards_R: [59, -1, 62, -1, 50],
    forced_choices: [1, 0, 1, 0],
    data: {game: 5, info: 0, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 51.0, mean_R: 60.5, mean_d: -9.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [35, 38, -1, -1, 51],
    rewards_R: [-1, -1, 39, 25, 43],
    forced_choices: [0, 0, 1, 1],
    data: {game: 7, info: 0, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 36.5, mean_R: 32.0, mean_d: 4.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 75, 63, -1, 77],
    rewards_R: [68, -1, -1, 57, 65],
    forced_choices: [1, 0, 0, 1],
    data: {game: 9, info: 0, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 69.0, mean_R: 62.5, mean_d: 6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [36, -1, -1, 43, 40],
    rewards_R: [-1, 49, 50, -1, 58],
    forced_choices: [0, 1, 1, 0],
    data: {game: 11, info: 0, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 39.5, mean_R: 49.5, mean_d: -10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [71, -1, -1, 90, 74],
    rewards_R: [-1, 69, 61, -1, 60],
    forced_choices: [0, 1, 1, 0],
    data: {game: 13, info: 0, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 80.5, mean_R: 65.0, mean_d: 15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [45, -1, 33, -1, 36],
    rewards_R: [-1, 68, -1, 47, 57],
    forced_choices: [0, 1, 0, 1],
    data: {game: 15, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 39.0, mean_R: 57.5, mean_d: -18.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [38, 42, 42, -1, 46],
    rewards_R: [-1, -1, -1, 60, 55],
    forced_choices: [0, 0, 0, 1],
    data: {game: 17, info: -1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 40.67, mean_R: 60.0, mean_d: -19.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 38, 26],
    rewards_R: [27, 20, 26, -1, 36],
    forced_choices: [1, 1, 1, 0],
    data: {game: 19, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 38.0, mean_R: 24.33, mean_d: 13.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [56, -1, 58, 39, 38],
    rewards_R: [-1, 65, -1, -1, 71],
    forced_choices: [0, 1, 0, 0],
    data: {game: 21, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 51.0, mean_R: 65.0, mean_d: -14.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [40, -1, -1, -1, 45],
    rewards_R: [-1, 36, 33, 27, 31],
    forced_choices: [0, 1, 1, 1],
    data: {game: 23, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 40.0, mean_R: 32.0, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [57, -1, 63, 60, 50],
    rewards_R: [-1, 71, -1, -1, 69],
    forced_choices: [0, 1, 0, 0],
    data: {game: 25, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 60.0, mean_R: 71.0, mean_d: -11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 45, -1, -1, 46],
    rewards_R: [42, -1, 35, 37, 36],
    forced_choices: [1, 0, 1, 1],
    data: {game: 27, info: 1, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 45.0, mean_R: 38.0, mean_d: 7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [53, -1, 58, 74, 69],
    rewards_R: [-1, 55, -1, -1, 57],
    forced_choices: [0, 1, 0, 0],
    data: {game: 29, info: -1, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 61.67, mean_R: 55.0, mean_d: 6.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 41, 45],
    rewards_R: [62, 56, 40, -1, 48],
    forced_choices: [1, 1, 1, 0],
    data: {game: 31, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 41.0, mean_R: 52.67, mean_d: -11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [82, -1, 57, 66, 74],
    rewards_R: [-1, 59, -1, -1, 56],
    forced_choices: [0, 1, 0, 0],
    data: {game: 33, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 68.33, mean_R: 59.0, mean_d: 9.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 37, -1, 49],
    rewards_R: [55, 64, -1, 43, 64],
    forced_choices: [1, 1, 0, 1],
    data: {game: 35, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 37.0, mean_R: 54.0, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [83, 82, -1, 60, 73],
    rewards_R: [-1, -1, 59, -1, 55],
    forced_choices: [0, 0, 1, 0],
    data: {game: 37, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 75.0, mean_R: 59.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 35, -1, -1, 43],
    rewards_R: [51, -1, 58, 50, 50],
    forced_choices: [1, 0, 1, 1],
    data: {game: 39, info: 1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 35.0, mean_R: 53.0, mean_d: -18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 29, 42, -1, 54, 44, 33, 36, 33, 41],
    rewards_R: [9, -1, -1, 18, 13, 17, 24, 21, 20, 37],
    forced_choices: [1, 0, 0, 1],
    data: {game: 41, info: 0, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 35.5, mean_R: 13.5, mean_d: 22.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [38, -1, 52, -1, 50, 53, 50, 45, 63, 47],
    rewards_R: [-1, 56, -1, 67, 40, 56, 52, 64, 68, 59],
    forced_choices: [0, 1, 0, 1],
    data: {game: 43, info: 0, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 45.0, mean_R: 61.5, mean_d: -16.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 30, 52, 47, 47, 44, 36, 45, 30],
    rewards_R: [34, 28, -1, -1, 38, 37, 41, 25, 31, 37],
    forced_choices: [1, 1, 0, 0],
    data: {game: 45, info: 0, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 41.0, mean_R: 31.0, mean_d: 10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [55, -1, -1, 61, 48, 47, 64, 56, 41, 50],
    rewards_R: [-1, 60, 65, -1, 59, 65, 64, 50, 64, 56],
    forced_choices: [0, 1, 1, 0],
    data: {game: 47, info: 0, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 58.0, mean_R: 62.5, mean_d: -4.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [34, 29, -1, -1, 41, 35, 34, 43, 40, 37],
    rewards_R: [-1, -1, 43, 33, 33, 38, 33, 33, 37, 46],
    forced_choices: [0, 0, 1, 1],
    data: {game: 49, info: 0, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 31.5, mean_R: 38.0, mean_d: -6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [67, 71, -1, -1, 72, 67, 74, 78, 65, 63],
    rewards_R: [-1, -1, 62, 60, 46, 62, 63, 54, 66, 63],
    forced_choices: [0, 0, 1, 1],
    data: {game: 51, info: 0, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 69.0, mean_R: 61.0, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [42, -1, 45, -1, 45, 34, 42, 27, 33, 46],
    rewards_R: [-1, 50, -1, 63, 56, 54, 53, 53, 55, 54],
    forced_choices: [0, 1, 0, 1],
    data: {game: 53, info: 0, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 43.5, mean_R: 56.5, mean_d: -13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [80, -1, 77, -1, 97, 73, 76, 82, 69, 92],
    rewards_R: [-1, 53, -1, 62, 51, 64, 74, 56, 72, 53],
    forced_choices: [0, 1, 0, 1],
    data: {game: 55, info: 0, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 78.5, mean_R: 57.5, mean_d: 21.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 38, -1, 41, 27, 50, 42, 36, 27],
    rewards_R: [15, 17, -1, 28, 20, 24, 21, 19, 18, 31],
    forced_choices: [1, 1, 0, 1],
    data: {game: 57, info: 1, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 38.0, mean_R: 20.0, mean_d: 18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [36, -1, 53, 41, 46, 50, 48, 41, 58, 46],
    rewards_R: [-1, 59, -1, -1, 48, 68, 75, 61, 67, 55],
    forced_choices: [0, 1, 0, 0],
    data: {game: 59, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 43.33, mean_R: 59.0, mean_d: -15.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 42, 48, 37, 46, 29, 30, 54],
    rewards_R: [24, 31, 20, -1, 19, 12, 37, 16, 26, 18],
    forced_choices: [1, 1, 1, 0],
    data: {game: 61, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 42.0, mean_R: 25.0, mean_d: 17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [53, 47, 49, -1, 45, 37, 55, 45, 46, 46],
    rewards_R: [-1, -1, -1, 61, 75, 67, 52, 64, 67, 68],
    forced_choices: [0, 0, 0, 1],
    data: {game: 63, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 49.67, mean_R: 61.0, mean_d: -11.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [32, -1, -1, -1, 50, 43, 34, 45, 40, 22],
    rewards_R: [-1, 32, 26, 14, 47, 38, 38, 29, 37, 27],
    forced_choices: [0, 1, 1, 1],
    data: {game: 65, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 32.0, mean_R: 24.0, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 65, 40, 57, 55, 53, 50, 68, 57, 58],
    rewards_R: [60, -1, -1, -1, 66, 56, 54, 73, 59, 69],
    forced_choices: [1, 0, 0, 0],
    data: {game: 67, info: -1, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 54.0, mean_R: 60.0, mean_d: -6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [51, -1, -1, -1, 48, 41, 63, 43, 45, 50],
    rewards_R: [-1, 51, 61, 53, 41, 47, 43, 51, 41, 57],
    forced_choices: [0, 1, 1, 1],
    data: {game: 69, info: 1, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 51.0, mean_R: 55.0, mean_d: -4.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [68, 80, 64, -1, 73, 71, 58, 64, 64, 60],
    rewards_R: [-1, -1, -1, 59, 50, 65, 67, 60, 67, 52],
    forced_choices: [0, 0, 0, 1],
    data: {game: 71, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 70.67, mean_R: 59.0, mean_d: 11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 42, 36, 42, 43, 39, 46, 41],
    rewards_R: [46, 57, 54, -1, 50, 41, 43, 54, 40, 57],
    forced_choices: [1, 1, 1, 0],
    data: {game: 73, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 42.0, mean_R: 52.33, mean_d: -10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [74, 82, 71, -1, 62, 83, 84, 65, 67, 80],
    rewards_R: [-1, -1, -1, 62, 55, 58, 44, 64, 70, 44],
    forced_choices: [0, 0, 0, 1],
    data: {game: 75, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 75.67, mean_R: 62.0, mean_d: 13.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 43, -1, 56, 46, 50, 50, 46, 48],
    rewards_R: [61, 45, -1, 66, 50, 59, 51, 57, 55, 67],
    forced_choices: [1, 1, 0, 1],
    data: {game: 77, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 43.0, mean_R: 57.33, mean_d: -14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [73, 80, 74, -1, 76, 82, 75, 89, 80, 87],
    rewards_R: [-1, -1, -1, 57, 55, 65, 48, 67, 58, 56],
    forced_choices: [0, 0, 0, 1],
    data: {game: 79, info: -1, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 75.67, mean_R: 57.0, mean_d: 18.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
var HORIZONS_02 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [38, -1, 28, -1, 45],
    rewards_R: [-1, 8, -1, 20, 17],
    forced_choices: [0, 1, 0, 1],
    data: {game: 2, info: 0, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 33.0, mean_R: 14.0, mean_d: 19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 56, 34, -1, 37],
    rewards_R: [58, -1, -1, 59, 57],
    forced_choices: [1, 0, 0, 1],
    data: {game: 4, info: 0, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 45.0, mean_R: 58.5, mean_d: -13.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 52, 41, 46],
    rewards_R: [20, 50, -1, -1, 38],
    forced_choices: [1, 1, 0, 0],
    data: {game: 6, info: 0, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 46.5, mean_R: 35.0, mean_d: 11.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 47, 54, 61],
    rewards_R: [58, 57, -1, -1, 68],
    forced_choices: [1, 1, 0, 0],
    data: {game: 8, info: 0, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 50.5, mean_R: 57.5, mean_d: -7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 37, 49, -1, 37],
    rewards_R: [45, -1, -1, 47, 55],
    forced_choices: [1, 0, 0, 1],
    data: {game: 10, info: 0, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 43.0, mean_R: 46.0, mean_d: -3.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 75, -1, 66, 72],
    rewards_R: [63, -1, 56, -1, 44],
    forced_choices: [1, 0, 1, 0],
    data: {game: 12, info: 0, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 70.5, mean_R: 59.5, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [28, -1, -1, 43, 35],
    rewards_R: [-1, 51, 54, -1, 59],
    forced_choices: [0, 1, 1, 0],
    data: {game: 14, info: 0, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 35.5, mean_R: 52.5, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [74, 85, -1, -1, 79],
    rewards_R: [-1, -1, 61, 56, 51],
    forced_choices: [0, 0, 1, 1],
    data: {game: 16, info: 0, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 79.5, mean_R: 58.5, mean_d: 21.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 37, 48],
    rewards_R: [17, 6, 23, -1, 25],
    forced_choices: [1, 1, 1, 0],
    data: {game: 18, info: 1, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 37.0, mean_R: 15.33, mean_d: 21.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [32, 54, -1, 46, 54],
    rewards_R: [-1, -1, 57, -1, 61],
    forced_choices: [0, 0, 1, 0],
    data: {game: 20, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 44.0, mean_R: 57.0, mean_d: -13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [36, -1, -1, -1, 36],
    rewards_R: [-1, 21, 23, 23, 9],
    forced_choices: [0, 1, 1, 1],
    data: {game: 22, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 36.0, mean_R: 22.33, mean_d: 13.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [49, 46, 37, -1, 54],
    rewards_R: [-1, -1, -1, 56, 55],
    forced_choices: [0, 0, 0, 1],
    data: {game: 24, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 44.0, mean_R: 56.0, mean_d: -12.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 36, 38],
    rewards_R: [22, 36, 26, -1, 30],
    forced_choices: [1, 1, 1, 0],
    data: {game: 26, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 36.0, mean_R: 28.0, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [56, 54, -1, 39, 55],
    rewards_R: [-1, -1, 56, -1, 54],
    forced_choices: [0, 0, 1, 0],
    data: {game: 28, info: -1, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 49.67, mean_R: 56.0, mean_d: -6.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 40, -1, -1, 39],
    rewards_R: [40, -1, 46, 50, 42],
    forced_choices: [1, 0, 1, 1],
    data: {game: 30, info: 1, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 40.0, mean_R: 45.33, mean_d: -5.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [61, -1, 59, 65, 75],
    rewards_R: [-1, 53, -1, -1, 66],
    forced_choices: [0, 1, 0, 0],
    data: {game: 32, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 61.67, mean_R: 53.0, mean_d: 8.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 36, 41],
    rewards_R: [44, 56, 41, -1, 57],
    forced_choices: [1, 1, 1, 0],
    data: {game: 34, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 36.0, mean_R: 47.0, mean_d: -11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [75, 88, 72, -1, 70],
    rewards_R: [-1, -1, -1, 62, 63],
    forced_choices: [0, 0, 0, 1],
    data: {game: 36, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 78.33, mean_R: 62.0, mean_d: 16.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 41, -1, 37],
    rewards_R: [44, 66, -1, 52, 54],
    forced_choices: [1, 1, 0, 1],
    data: {game: 38, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 41.0, mean_R: 54.0, mean_d: -13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [77, 91, -1, 69, 91],
    rewards_R: [-1, -1, 58, -1, 46],
    forced_choices: [0, 0, 1, 0],
    data: {game: 40, info: -1, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 79.0, mean_R: 58.0, mean_d: 21.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [35, -1, -1, 32, 40, 40, 44, 44, 43, 47],
    rewards_R: [-1, 50, 57, -1, 53, 52, 54, 63, 60, 58],
    forced_choices: [0, 1, 1, 0],
    data: {game: 42, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 33.5, mean_R: 53.5, mean_d: -20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 41, 49, 30, 38, 37, 41, 31, 31],
    rewards_R: [24, 36, -1, -1, 38, 34, 32, 40, 28, 24],
    forced_choices: [1, 1, 0, 0],
    data: {game: 44, info: 0, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 45.0, mean_R: 30.0, mean_d: 15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [52, -1, 51, -1, 59, 72, 55, 32, 51, 54],
    rewards_R: [-1, 57, -1, 63, 62, 42, 59, 68, 60, 65],
    forced_choices: [0, 1, 0, 1],
    data: {game: 46, info: 0, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 51.5, mean_R: 60.0, mean_d: -8.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [40, -1, -1, 46, 61, 33, 48, 48, 44, 41],
    rewards_R: [-1, 34, 44, -1, 24, 45, 44, 38, 25, 23],
    forced_choices: [0, 1, 1, 0],
    data: {game: 48, info: 0, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 43.0, mean_R: 39.0, mean_d: 4.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [68, -1, 65, -1, 71, 63, 63, 54, 67, 74],
    rewards_R: [-1, 65, -1, 57, 72, 65, 74, 54, 62, 57],
    forced_choices: [0, 1, 0, 1],
    data: {game: 50, info: 0, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 66.5, mean_R: 61.0, mean_d: 5.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [41, -1, -1, 41, 49, 44, 42, 46, 52, 41],
    rewards_R: [-1, 54, 51, -1, 45, 54, 53, 58, 50, 45],
    forced_choices: [0, 1, 1, 0],
    data: {game: 52, info: 0, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 41.0, mean_R: 52.5, mean_d: -11.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 81, 72, 75, 82, 70, 68, 69, 69],
    rewards_R: [54, 68, -1, -1, 62, 60, 61, 71, 52, 59],
    forced_choices: [1, 1, 0, 0],
    data: {game: 54, info: 0, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 76.5, mean_R: 61.0, mean_d: 15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [40, -1, 37, -1, 41, 40, 46, 54, 45, 23],
    rewards_R: [-1, 64, -1, 51, 61, 63, 70, 47, 72, 70],
    forced_choices: [0, 1, 0, 1],
    data: {game: 56, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 38.5, mean_R: 57.5, mean_d: -19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [36, 25, 32, -1, 39, 26, 40, 35, 45, 53],
    rewards_R: [-1, -1, -1, 50, 66, 50, 51, 53, 69, 67],
    forced_choices: [0, 0, 0, 1],
    data: {game: 58, info: -1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 31.0, mean_R: 50.0, mean_d: -19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [47, -1, -1, -1, 39, 35, 48, 51, 55, 45],
    rewards_R: [-1, 28, 32, 32, 23, 32, 14, 22, 27, 13],
    forced_choices: [0, 1, 1, 1],
    data: {game: 60, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 47.0, mean_R: 30.67, mean_d: 16.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 45, 50, 46, 53, 47, 50, 40, 38, 57],
    rewards_R: [60, -1, -1, -1, 63, 50, 58, 62, 56, 68],
    forced_choices: [1, 0, 0, 0],
    data: {game: 62, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 47.0, mean_R: 60.0, mean_d: -13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 39, -1, -1, 51, 35, 35, 28, 47, 58],
    rewards_R: [19, -1, 26, 42, 23, 28, 26, 32, 29, 45],
    forced_choices: [1, 0, 1, 1],
    data: {game: 64, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 39.0, mean_R: 29.0, mean_d: 10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [60, 42, -1, 49, 38, 44, 33, 52, 39, 53],
    rewards_R: [-1, -1, 59, -1, 63, 58, 72, 43, 56, 58],
    forced_choices: [0, 0, 1, 0],
    data: {game: 66, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 50.33, mean_R: 59.0, mean_d: -8.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 39, -1, 42, 45, 47, 28, 29, 31],
    rewards_R: [39, 38, -1, 29, 26, 38, 40, 35, 25, 31],
    forced_choices: [1, 1, 0, 1],
    data: {game: 68, info: 1, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 39.0, mean_R: 35.33, mean_d: 3.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [63, 66, -1, 78, 84, 60, 72, 63, 69, 64],
    rewards_R: [-1, -1, 62, -1, 65, 53, 59, 62, 51, 69],
    forced_choices: [0, 0, 1, 0],
    data: {game: 70, info: -1, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 69.0, mean_R: 62.0, mean_d: 7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 36, 51, 51, 42, 42, 52, 43],
    rewards_R: [51, 34, 54, -1, 35, 47, 44, 62, 53, 46],
    forced_choices: [1, 1, 1, 0],
    data: {game: 72, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 36.0, mean_R: 46.33, mean_d: -10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [62, 67, 66, -1, 58, 72, 57, 59, 68, 60],
    rewards_R: [-1, -1, -1, 53, 59, 50, 59, 59, 50, 57],
    forced_choices: [0, 0, 0, 1],
    data: {game: 74, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 65.0, mean_R: 53.0, mean_d: 12.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 48, -1, 47, 34, 36, 46, 35, 29],
    rewards_R: [59, 62, -1, 71, 50, 56, 66, 59, 56, 50],
    forced_choices: [1, 1, 0, 1],
    data: {game: 76, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 48.0, mean_R: 64.0, mean_d: -16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [74, 81, -1, 74, 56, 75, 84, 78, 81, 71],
    rewards_R: [-1, -1, 62, -1, 75, 66, 67, 56, 61, 75],
    forced_choices: [0, 0, 1, 0],
    data: {game: 78, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 76.33, mean_R: 62.0, mean_d: 14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 37, 41, 24, 30, 27, 42, 52],
    rewards_R: [65, 49, 51, -1, 65, 58, 70, 57, 62, 37],
    forced_choices: [1, 1, 1, 0],
    data: {game: 80, info: 1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 37.0, mean_R: 55.0, mean_d: -18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
