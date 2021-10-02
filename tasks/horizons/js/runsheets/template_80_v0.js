var HORIZONS_01 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [48, -1, -1, 39, 39],
    rewards_R: [-1, 75, 52, -1, 71],
    forced_choices: [0, 1, 1, 0],
    data: {game: 1, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 43.5, mean_R: 63.5, mean_d: -20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [35, 40, -1, -1, 37],
    rewards_R: [-1, -1, 22, 25, 20],
    forced_choices: [0, 0, 1, 1],
    data: {game: 3, info: 0, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 37.5, mean_R: 23.5, mean_d: 14.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [53, -1, -1, 56, 58],
    rewards_R: [-1, 66, 62, -1, 51],
    forced_choices: [0, 1, 1, 0],
    data: {game: 5, info: 0, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 54.5, mean_R: 64.0, mean_d: -9.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 40, -1, 36, 41],
    rewards_R: [31, -1, 32, -1, 36],
    forced_choices: [1, 0, 1, 0],
    data: {game: 7, info: 0, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 38.0, mean_R: 31.5, mean_d: 6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 68, 54, -1, 58],
    rewards_R: [55, -1, -1, 55, 54],
    forced_choices: [1, 0, 0, 1],
    data: {game: 9, info: 0, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 61.0, mean_R: 55.0, mean_d: 6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [46, -1, -1, 31, 38],
    rewards_R: [-1, 62, 33, -1, 47],
    forced_choices: [0, 1, 1, 0],
    data: {game: 11, info: 0, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 38.5, mean_R: 47.5, mean_d: -9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 69, -1, 74, 78],
    rewards_R: [49, -1, 65, -1, 72],
    forced_choices: [1, 0, 1, 0],
    data: {game: 13, info: 0, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 71.5, mean_R: 57.0, mean_d: 14.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 38, 36, -1, 34],
    rewards_R: [57, -1, -1, 61, 48],
    forced_choices: [1, 0, 0, 1],
    data: {game: 15, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 37.0, mean_R: 59.0, mean_d: -22.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [44, 45, 27, -1, 41],
    rewards_R: [-1, -1, -1, 60, 63],
    forced_choices: [0, 0, 0, 1],
    data: {game: 17, info: -1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 38.67, mean_R: 60.0, mean_d: -21.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 32, 56],
    rewards_R: [19, 7, 27, -1, 14],
    forced_choices: [1, 1, 1, 0],
    data: {game: 19, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 32.0, mean_R: 17.67, mean_d: 14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [37, 45, -1, 48, 36],
    rewards_R: [-1, -1, 59, -1, 37],
    forced_choices: [0, 0, 1, 0],
    data: {game: 21, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 43.33, mean_R: 59.0, mean_d: -15.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 43, 29],
    rewards_R: [37, 20, 48, -1, 24],
    forced_choices: [1, 1, 1, 0],
    data: {game: 23, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 43.0, mean_R: 35.0, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [61, -1, 49, 61, 51],
    rewards_R: [-1, 67, -1, -1, 73],
    forced_choices: [0, 1, 0, 0],
    data: {game: 25, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 57.0, mean_R: 67.0, mean_d: -10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [36, -1, -1, -1, 50],
    rewards_R: [-1, 40, 28, 30, 41],
    forced_choices: [0, 1, 1, 1],
    data: {game: 27, info: 1, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 36.0, mean_R: 32.67, mean_d: 3.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [67, 62, -1, 51, 52],
    rewards_R: [-1, -1, 53, -1, 60],
    forced_choices: [0, 0, 1, 0],
    data: {game: 29, info: -1, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 60.0, mean_R: 53.0, mean_d: 7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [39, -1, -1, -1, 40],
    rewards_R: [-1, 56, 31, 64, 47],
    forced_choices: [0, 1, 1, 1],
    data: {game: 31, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 39.0, mean_R: 50.33, mean_d: -11.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [69, 67, -1, 78, 76],
    rewards_R: [-1, -1, 61, -1, 71],
    forced_choices: [0, 0, 1, 0],
    data: {game: 33, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 71.33, mean_R: 61.0, mean_d: 10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 40, -1, 28],
    rewards_R: [53, 58, -1, 54, 62],
    forced_choices: [1, 1, 0, 1],
    data: {game: 35, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 40.0, mean_R: 55.0, mean_d: -15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [73, 78, -1, 72, 80],
    rewards_R: [-1, -1, 59, -1, 60],
    forced_choices: [0, 0, 1, 0],
    data: {game: 37, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 74.33, mean_R: 59.0, mean_d: 15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 37, 31],
    rewards_R: [53, 59, 57, -1, 48],
    forced_choices: [1, 1, 1, 0],
    data: {game: 39, info: 1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 37.0, mean_R: 56.33, mean_d: -19.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [43, 45, -1, -1, 46, 56, 33, 31, 36, 44],
    rewards_R: [-1, -1, 28, 16, 20, 13, 14, 14, 18, 47],
    forced_choices: [0, 0, 1, 1],
    data: {game: 41, info: 0, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 44.0, mean_R: 22.0, mean_d: 22.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [47, 35, -1, -1, 37, 34, 45, 34, 46, 53],
    rewards_R: [-1, -1, 55, 58, 61, 63, 61, 60, 62, 63],
    forced_choices: [0, 0, 1, 1],
    data: {game: 43, info: 0, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 41.0, mean_R: 56.5, mean_d: -15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [40, -1, 34, -1, 35, 48, 42, 41, 46, 46],
    rewards_R: [-1, 26, -1, 28, 17, 41, 21, 32, 29, 26],
    forced_choices: [0, 1, 0, 1],
    data: {game: 45, info: 0, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 37.0, mean_R: 27.0, mean_d: 10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 62, 61, 59, 59, 60, 54, 43, 54],
    rewards_R: [68, 61, -1, -1, 66, 66, 56, 72, 68, 66],
    forced_choices: [1, 1, 0, 0],
    data: {game: 47, info: 0, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 61.5, mean_R: 64.5, mean_d: -3.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 43, 44, -1, 47, 27, 55, 33, 37, 33],
    rewards_R: [47, -1, -1, 52, 63, 49, 38, 38, 44, 43],
    forced_choices: [1, 0, 0, 1],
    data: {game: 49, info: 0, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 43.5, mean_R: 49.5, mean_d: -6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 88, -1, 62, 71, 74, 70, 82, 82, 85],
    rewards_R: [68, -1, 61, -1, 72, 59, 53, 63, 63, 68],
    forced_choices: [1, 0, 1, 0],
    data: {game: 51, info: 0, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 75.0, mean_R: 64.5, mean_d: 10.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 39, 30, -1, 42, 24, 41, 36, 38, 41],
    rewards_R: [52, -1, -1, 49, 60, 71, 45, 53, 55, 51],
    forced_choices: [1, 0, 0, 1],
    data: {game: 53, info: 0, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 34.5, mean_R: 50.5, mean_d: -16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [79, -1, -1, 78, 79, 76, 81, 60, 83, 83],
    rewards_R: [-1, 56, 65, -1, 69, 60, 47, 56, 77, 61],
    forced_choices: [0, 1, 1, 0],
    data: {game: 55, info: 0, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 78.5, mean_R: 60.5, mean_d: 18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 32, 36, 37, 46, 38, 38, 52],
    rewards_R: [12, 9, 11, -1, 30, 28, 35, 24, 31, 29],
    forced_choices: [1, 1, 1, 0],
    data: {game: 57, info: 1, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 32.0, mean_R: 10.67, mean_d: 21.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [39, 55, -1, 30, 54, 47, 35, 38, 54, 29],
    rewards_R: [-1, -1, 56, -1, 58, 46, 58, 74, 56, 52],
    forced_choices: [0, 0, 1, 0],
    data: {game: 59, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 41.33, mean_R: 56.0, mean_d: -14.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 39, -1, -1, 40, 50, 32, 37, 45, 47],
    rewards_R: [27, -1, 22, 22, 29, 5, 17, 29, 22, 45],
    forced_choices: [1, 0, 1, 1],
    data: {game: 61, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 39.0, mean_R: 23.67, mean_d: 15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 58, 52, 55, 49, 62, 46, 57, 59, 47],
    rewards_R: [63, -1, -1, -1, 53, 47, 59, 57, 59, 58],
    forced_choices: [1, 0, 0, 0],
    data: {game: 63, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 55.0, mean_R: 63.0, mean_d: -8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 45, 43, 39, 34, 45, 39, 54],
    rewards_R: [34, 35, 30, -1, 35, 37, 15, 40, 36, 25],
    forced_choices: [1, 1, 1, 0],
    data: {game: 65, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 45.0, mean_R: 33.0, mean_d: 12.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [54, 74, 56, -1, 50, 55, 62, 58, 68, 34],
    rewards_R: [-1, -1, -1, 67, 59, 56, 61, 60, 61, 52],
    forced_choices: [0, 0, 0, 1],
    data: {game: 67, info: -1, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 61.33, mean_R: 67.0, mean_d: -5.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 42, -1, 56, 50, 29, 41, 41, 35],
    rewards_R: [43, 53, -1, 43, 51, 51, 44, 42, 40, 40],
    forced_choices: [1, 1, 0, 1],
    data: {game: 69, info: 1, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 42.0, mean_R: 46.33, mean_d: -4.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [74, 65, 64, -1, 77, 80, 74, 67, 70, 75],
    rewards_R: [-1, -1, -1, 59, 65, 70, 56, 53, 67, 54],
    forced_choices: [0, 0, 0, 1],
    data: {game: 71, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 67.67, mean_R: 59.0, mean_d: 8.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [38, -1, -1, -1, 33, 40, 26, 37, 43, 36],
    rewards_R: [-1, 33, 49, 61, 44, 54, 60, 54, 48, 51],
    forced_choices: [0, 1, 1, 1],
    data: {game: 73, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 38.0, mean_R: 47.67, mean_d: -9.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 66, 77, 71, 71, 77, 69, 67, 76, 92],
    rewards_R: [58, -1, -1, -1, 71, 46, 63, 45, 68, 53],
    forced_choices: [1, 0, 0, 0],
    data: {game: 75, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 71.33, mean_R: 58.0, mean_d: 13.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [41, -1, -1, -1, 34, 37, 55, 34, 38, 35],
    rewards_R: [-1, 58, 58, 53, 59, 63, 51, 52, 53, 59],
    forced_choices: [0, 1, 1, 1],
    data: {game: 77, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 41.0, mean_R: 56.33, mean_d: -15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [78, -1, 74, 91, 62, 67, 77, 85, 79, 83],
    rewards_R: [-1, 62, -1, -1, 66, 63, 58, 55, 65, 63],
    forced_choices: [0, 1, 0, 0],
    data: {game: 79, info: -1, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 81.0, mean_R: 62.0, mean_d: 19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
var HORIZONS_02 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 37, 33, 57],
    rewards_R: [17, 16, -1, -1, 12],
    forced_choices: [1, 1, 0, 0],
    data: {game: 2, info: 0, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 35.0, mean_R: 16.5, mean_d: 18.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 40, 44, 54],
    rewards_R: [57, 54, -1, -1, 60],
    forced_choices: [1, 1, 0, 0],
    data: {game: 4, info: 0, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 42.0, mean_R: 55.5, mean_d: -13.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [37, -1, -1, 50, 54],
    rewards_R: [-1, 32, 38, -1, 38],
    forced_choices: [0, 1, 1, 0],
    data: {game: 6, info: 0, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 43.5, mean_R: 35.0, mean_d: 8.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 61, 73, -1, 59],
    rewards_R: [70, -1, -1, 75, 60],
    forced_choices: [1, 0, 0, 1],
    data: {game: 8, info: 0, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 67.0, mean_R: 72.5, mean_d: -5.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 30, 42, -1, 46],
    rewards_R: [45, -1, -1, 36, 52],
    forced_choices: [1, 0, 0, 1],
    data: {game: 10, info: 0, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 36.0, mean_R: 40.5, mean_d: -4.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [76, 51, -1, -1, 66],
    rewards_R: [-1, -1, 59, 52, 44],
    forced_choices: [0, 0, 1, 1],
    data: {game: 12, info: 0, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 63.5, mean_R: 55.5, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [45, -1, 42, -1, 35],
    rewards_R: [-1, 55, -1, 64, 68],
    forced_choices: [0, 1, 0, 1],
    data: {game: 14, info: 0, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 43.5, mean_R: 59.5, mean_d: -16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 87, 83, -1, 81],
    rewards_R: [60, -1, -1, 66, 60],
    forced_choices: [1, 0, 0, 1],
    data: {game: 16, info: 0, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 85.0, mean_R: 63.0, mean_d: 22.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 42, -1, 47],
    rewards_R: [20, 30, -1, 16, 22],
    forced_choices: [1, 1, 0, 1],
    data: {game: 18, info: 1, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 42.0, mean_R: 22.0, mean_d: 20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [43, 42, 40, -1, 38],
    rewards_R: [-1, -1, -1, 57, 62],
    forced_choices: [0, 0, 0, 1],
    data: {game: 20, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 41.67, mean_R: 57.0, mean_d: -15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [43, -1, -1, -1, 29],
    rewards_R: [-1, 31, 33, 22, 33],
    forced_choices: [0, 1, 1, 1],
    data: {game: 22, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 43.0, mean_R: 28.67, mean_d: 14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [41, 53, 53, -1, 48],
    rewards_R: [-1, -1, -1, 58, 56],
    forced_choices: [0, 0, 0, 1],
    data: {game: 24, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 49.0, mean_R: 58.0, mean_d: -9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 41, -1, 34],
    rewards_R: [30, 39, -1, 30, 43],
    forced_choices: [1, 1, 0, 1],
    data: {game: 26, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 41.0, mean_R: 33.0, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 53, 55, 50, 55],
    rewards_R: [57, -1, -1, -1, 59],
    forced_choices: [1, 0, 0, 0],
    data: {game: 28, info: -1, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 52.67, mean_R: 57.0, mean_d: -4.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 42, 38],
    rewards_R: [49, 42, 49, -1, 44],
    forced_choices: [1, 1, 1, 0],
    data: {game: 30, info: 1, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 42.0, mean_R: 46.67, mean_d: -4.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 69, 70, 77, 65],
    rewards_R: [60, -1, -1, -1, 58],
    forced_choices: [1, 0, 0, 0],
    data: {game: 32, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 72.0, mean_R: 60.0, mean_d: 12.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 41, 33],
    rewards_R: [52, 51, 51, -1, 39],
    forced_choices: [1, 1, 1, 0],
    data: {game: 34, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 41.0, mean_R: 51.33, mean_d: -10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [80, 75, 75, -1, 62],
    rewards_R: [-1, -1, -1, 60, 58],
    forced_choices: [0, 0, 0, 1],
    data: {game: 36, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 76.67, mean_R: 60.0, mean_d: 16.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 41, -1, 42],
    rewards_R: [55, 59, -1, 57, 62],
    forced_choices: [1, 1, 0, 1],
    data: {game: 38, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 41.0, mean_R: 57.0, mean_d: -16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 86, 86, 71, 88],
    rewards_R: [63, -1, -1, -1, 65],
    forced_choices: [1, 0, 0, 0],
    data: {game: 40, info: -1, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 81.0, mean_R: 63.0, mean_d: 18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 43, -1, 51, 39, 48, 65, 42, 29, 50],
    rewards_R: [65, -1, 65, -1, 63, 55, 60, 53, 54, 53],
    forced_choices: [1, 0, 1, 0],
    data: {game: 42, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 47.0, mean_R: 65.0, mean_d: -18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 45, 32, -1, 36, 52, 41, 37, 31, 42],
    rewards_R: [18, -1, -1, 28, 37, 35, 24, 30, 32, 25],
    forced_choices: [1, 0, 0, 1],
    data: {game: 44, info: 0, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 38.5, mean_R: 23.0, mean_d: 15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [42, -1, 60, -1, 46, 51, 47, 40, 61, 54],
    rewards_R: [-1, 56, -1, 63, 66, 60, 69, 65, 63, 60],
    forced_choices: [0, 1, 0, 1],
    data: {game: 46, info: 0, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 51.0, mean_R: 59.5, mean_d: -8.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [46, -1, 34, -1, 51, 48, 40, 35, 24, 45],
    rewards_R: [-1, 35, -1, 36, 28, 19, 48, 40, 26, 25],
    forced_choices: [0, 1, 0, 1],
    data: {game: 48, info: 0, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 40.0, mean_R: 35.5, mean_d: 4.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 66, -1, 61, 76, 63, 62, 62, 81, 68],
    rewards_R: [46, -1, 67, -1, 62, 54, 56, 64, 65, 39],
    forced_choices: [1, 0, 1, 0],
    data: {game: 50, info: 0, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 63.5, mean_R: 56.5, mean_d: 7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [36, -1, -1, 39, 44, 33, 41, 32, 53, 36],
    rewards_R: [-1, 45, 52, -1, 52, 52, 51, 34, 38, 46],
    forced_choices: [0, 1, 1, 0],
    data: {game: 52, info: 0, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 37.5, mean_R: 48.5, mean_d: -11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [64, -1, 86, -1, 79, 76, 82, 69, 66, 88],
    rewards_R: [-1, 57, -1, 60, 60, 75, 51, 56, 49, 66],
    forced_choices: [0, 1, 0, 1],
    data: {game: 54, info: 0, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 75.0, mean_R: 58.5, mean_d: 16.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [42, 40, -1, -1, 29, 44, 36, 47, 46, 30],
    rewards_R: [-1, -1, 58, 65, 63, 70, 61, 52, 67, 65],
    forced_choices: [0, 0, 1, 1],
    data: {game: 56, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 41.0, mean_R: 61.5, mean_d: -20.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 39, 42, 58, 25, 48, 39, 45, 44, 36],
    rewards_R: [66, -1, -1, -1, 63, 53, 63, 57, 59, 59],
    forced_choices: [1, 0, 0, 0],
    data: {game: 58, info: -1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 46.33, mean_R: 66.0, mean_d: -19.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 43, -1, -1, 40, 36, 51, 41, 33, 46],
    rewards_R: [21, -1, 30, 30, 29, 35, 26, 12, 31, 17],
    forced_choices: [1, 0, 1, 1],
    data: {game: 60, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 43.0, mean_R: 27.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [41, -1, 44, 52, 45, 47, 43, 36, 46, 48],
    rewards_R: [-1, 60, -1, -1, 66, 59, 74, 64, 70, 60],
    forced_choices: [0, 1, 0, 0],
    data: {game: 62, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 45.67, mean_R: 60.0, mean_d: -14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [49, -1, -1, -1, 54, 27, 31, 46, 46, 41],
    rewards_R: [-1, 47, 35, 30, 27, 28, 33, 16, 13, 16],
    forced_choices: [0, 1, 1, 1],
    data: {game: 64, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 49.0, mean_R: 37.33, mean_d: 11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [51, -1, 47, 64, 49, 64, 50, 53, 58, 46],
    rewards_R: [-1, 64, -1, -1, 45, 61, 69, 74, 61, 67],
    forced_choices: [0, 1, 0, 0],
    data: {game: 66, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 54.0, mean_R: 64.0, mean_d: -10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 42, 39, 53, 37, 40, 39, 28],
    rewards_R: [38, 33, 44, -1, 35, 27, 39, 24, 36, 43],
    forced_choices: [1, 1, 1, 0],
    data: {game: 68, info: 1, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 42.0, mean_R: 38.33, mean_d: 3.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 69, 58, 63, 68, 62, 68, 79, 62, 63],
    rewards_R: [58, -1, -1, -1, 71, 70, 70, 54, 71, 64],
    forced_choices: [1, 0, 0, 0],
    data: {game: 70, info: -1, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 63.33, mean_R: 58.0, mean_d: 5.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 40, 33, 34, 37, 29, 37, 43],
    rewards_R: [68, 42, 42, -1, 46, 69, 41, 64, 44, 59],
    forced_choices: [1, 1, 1, 0],
    data: {game: 72, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 40.0, mean_R: 50.67, mean_d: -10.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [70, -1, 72, 81, 73, 79, 91, 70, 76, 74],
    rewards_R: [-1, 64, -1, -1, 53, 59, 69, 59, 58, 60],
    forced_choices: [0, 1, 0, 0],
    data: {game: 74, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 74.33, mean_R: 64.0, mean_d: 10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 40, 49, 31, 36, 37, 42, 35],
    rewards_R: [55, 59, 53, -1, 58, 39, 41, 60, 63, 56],
    forced_choices: [1, 1, 1, 0],
    data: {game: 76, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 40.0, mean_R: 55.67, mean_d: -15.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [82, 77, 66, -1, 72, 70, 70, 77, 79, 60],
    rewards_R: [-1, -1, -1, 59, 65, 57, 49, 54, 66, 61],
    forced_choices: [0, 0, 0, 1],
    data: {game: 78, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 75.0, mean_R: 59.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [39, -1, -1, -1, 43, 42, 48, 31, 27, 34],
    rewards_R: [-1, 50, 63, 66, 59, 62, 58, 53, 73, 57],
    forced_choices: [0, 1, 1, 1],
    data: {game: 80, info: 1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 39.0, mean_R: 59.67, mean_d: -20.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
