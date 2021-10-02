var HORIZONS_01 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [46, 40, -1, -1, 36],
    rewards_R: [-1, -1, 55, 72, 55],
    forced_choices: [0, 0, 1, 1],
    data: {game: 1, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 43.0, mean_R: 63.5, mean_d: -20.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 46, 35, -1, 47],
    rewards_R: [28, -1, -1, 26, 24],
    forced_choices: [1, 0, 0, 1],
    data: {game: 3, info: 0, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 40.5, mean_R: 27.0, mean_d: 13.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [52, -1, 45, -1, 48],
    rewards_R: [-1, 58, -1, 60, 61],
    forced_choices: [0, 1, 0, 1],
    data: {game: 5, info: 0, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 48.5, mean_R: 59.0, mean_d: -10.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [31, -1, 41, -1, 44],
    rewards_R: [-1, 29, -1, 30, 36],
    forced_choices: [0, 1, 0, 1],
    data: {game: 7, info: 0, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 36.0, mean_R: 29.5, mean_d: 6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [56, -1, -1, 61, 68],
    rewards_R: [-1, 49, 58, -1, 53],
    forced_choices: [0, 1, 1, 0],
    data: {game: 9, info: 0, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 58.5, mean_R: 53.5, mean_d: 5.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 45, 40, -1, 42],
    rewards_R: [47, -1, -1, 55, 32],
    forced_choices: [1, 0, 0, 1],
    data: {game: 11, info: 0, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 42.5, mean_R: 51.0, mean_d: -8.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [75, -1, 80, -1, 79],
    rewards_R: [-1, 59, -1, 63, 66],
    forced_choices: [0, 1, 0, 1],
    data: {game: 13, info: 0, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 77.5, mean_R: 61.0, mean_d: 16.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [44, 41, -1, -1, 46],
    rewards_R: [-1, -1, 49, 72, 57],
    forced_choices: [0, 0, 1, 1],
    data: {game: 15, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 42.5, mean_R: 60.5, mean_d: -18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [37, 38, 41, -1, 33],
    rewards_R: [-1, -1, -1, 57, 60],
    forced_choices: [0, 0, 0, 1],
    data: {game: 17, info: -1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 38.67, mean_R: 57.0, mean_d: -18.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 38, 35],
    rewards_R: [26, 25, 22, -1, 25],
    forced_choices: [1, 1, 1, 0],
    data: {game: 19, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 38.0, mean_R: 24.33, mean_d: 13.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [37, 56, 57, -1, 58],
    rewards_R: [-1, -1, -1, 67, 68],
    forced_choices: [0, 0, 0, 1],
    data: {game: 21, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 50.0, mean_R: 67.0, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 43, -1, -1, 33],
    rewards_R: [39, -1, 28, 29, 36],
    forced_choices: [1, 0, 1, 1],
    data: {game: 23, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 43.0, mean_R: 32.0, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [52, 46, -1, 52, 56],
    rewards_R: [-1, -1, 59, -1, 47],
    forced_choices: [0, 0, 1, 0],
    data: {game: 25, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 50.0, mean_R: 59.0, mean_d: -9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 40, -1, -1, 43],
    rewards_R: [44, -1, 22, 39, 44],
    forced_choices: [1, 0, 1, 1],
    data: {game: 27, info: 1, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 40.0, mean_R: 35.0, mean_d: 5.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 60, 65, 62, 72],
    rewards_R: [58, -1, -1, -1, 54],
    forced_choices: [1, 0, 0, 0],
    data: {game: 29, info: -1, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 62.33, mean_R: 58.0, mean_d: 4.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 40, -1, 51],
    rewards_R: [48, 47, -1, 50, 57],
    forced_choices: [1, 1, 0, 1],
    data: {game: 31, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 40.0, mean_R: 48.33, mean_d: -8.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [65, -1, 68, 71, 80],
    rewards_R: [-1, 59, -1, -1, 48],
    forced_choices: [0, 1, 0, 0],
    data: {game: 33, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 68.0, mean_R: 59.0, mean_d: 9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 48, 43],
    rewards_R: [58, 64, 66, -1, 60],
    forced_choices: [1, 1, 1, 0],
    data: {game: 35, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 48.0, mean_R: 62.67, mean_d: -14.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [84, 70, -1, 93, 76],
    rewards_R: [-1, -1, 67, -1, 58],
    forced_choices: [0, 0, 1, 0],
    data: {game: 37, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 82.33, mean_R: 67.0, mean_d: 15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [41, -1, -1, -1, 33],
    rewards_R: [-1, 63, 68, 47, 60],
    forced_choices: [0, 1, 1, 1],
    data: {game: 39, info: 1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 41.0, mean_R: 59.33, mean_d: -18.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [41, -1, 41, -1, 38, 30, 49, 37, 33, 37],
    rewards_R: [-1, 17, -1, 27, 18, 34, 20, 16, 16, 8],
    forced_choices: [0, 1, 0, 1],
    data: {game: 41, info: 0, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 41.0, mean_R: 22.0, mean_d: 19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [50, 39, -1, -1, 50, 70, 40, 49, 30, 43],
    rewards_R: [-1, -1, 69, 54, 72, 42, 58, 66, 65, 55],
    forced_choices: [0, 0, 1, 1],
    data: {game: 43, info: 0, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 44.5, mean_R: 61.5, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [31, -1, -1, 44, 30, 17, 37, 36, 57, 48],
    rewards_R: [-1, 35, 21, -1, 37, 31, 38, 25, 39, 27],
    forced_choices: [0, 1, 1, 0],
    data: {game: 45, info: 0, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 37.5, mean_R: 28.0, mean_d: 9.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [52, 56, -1, -1, 54, 44, 49, 55, 59, 52],
    rewards_R: [-1, -1, 61, 60, 66, 69, 64, 56, 63, 60],
    forced_choices: [0, 0, 1, 1],
    data: {game: 47, info: 0, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 54.0, mean_R: 60.5, mean_d: -6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 28, -1, 41, 32, 41, 41, 25, 28, 48],
    rewards_R: [42, -1, 39, -1, 43, 22, 40, 43, 59, 51],
    forced_choices: [1, 0, 1, 0],
    data: {game: 49, info: 0, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 34.5, mean_R: 40.5, mean_d: -6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 68, 75, -1, 81, 72, 76, 69, 64, 66],
    rewards_R: [70, -1, -1, 53, 56, 60, 57, 73, 74, 55],
    forced_choices: [1, 0, 0, 1],
    data: {game: 51, info: 0, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 71.5, mean_R: 61.5, mean_d: 10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 31, 35, -1, 24, 53, 32, 38, 45, 54],
    rewards_R: [47, -1, -1, 53, 48, 53, 57, 58, 56, 50],
    forced_choices: [1, 0, 0, 1],
    data: {game: 53, info: 0, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 33.0, mean_R: 50.0, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 94, 78, 89, 79, 88, 82, 74, 79],
    rewards_R: [64, 70, -1, -1, 73, 56, 50, 43, 56, 56],
    forced_choices: [1, 1, 0, 0],
    data: {game: 55, info: 0, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 86.0, mean_R: 67.0, mean_d: 19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 37, 49, 51, 31, 42, 44, 56],
    rewards_R: [12, 21, 17, -1, 24, 19, 22, 17, 21, 12],
    forced_choices: [1, 1, 1, 0],
    data: {game: 57, info: 1, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 37.0, mean_R: 16.67, mean_d: 20.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 48, 52, 37, 42, 42, 57, 50, 48, 33],
    rewards_R: [61, -1, -1, -1, 47, 60, 67, 62, 59, 58],
    forced_choices: [1, 0, 0, 0],
    data: {game: 59, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 45.67, mean_R: 61.0, mean_d: -15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 38, -1, 37, 44, 41, 47, 39, 41],
    rewards_R: [21, 29, -1, 24, 16, 4, 21, 23, 30, 28],
    forced_choices: [1, 1, 0, 1],
    data: {game: 61, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 38.0, mean_R: 24.67, mean_d: 13.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [56, -1, 48, 53, 59, 52, 59, 64, 50, 53],
    rewards_R: [-1, 63, -1, -1, 58, 60, 70, 70, 59, 53],
    forced_choices: [0, 1, 0, 0],
    data: {game: 63, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 52.33, mean_R: 63.0, mean_d: -10.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 38, -1, 40, 32, 30, 47, 36, 32],
    rewards_R: [27, 25, -1, 27, 41, 31, 34, 38, 30, 35],
    forced_choices: [1, 1, 0, 1],
    data: {game: 65, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 38.0, mean_R: 26.33, mean_d: 11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [65, 56, 46, -1, 49, 57, 68, 42, 53, 72],
    rewards_R: [-1, -1, -1, 60, 60, 64, 56, 52, 51, 62],
    forced_choices: [0, 0, 0, 1],
    data: {game: 67, info: -1, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 55.67, mean_R: 60.0, mean_d: -4.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 41, -1, 48, 32, 42, 38, 30, 27],
    rewards_R: [33, 60, -1, 43, 40, 40, 45, 38, 49, 50],
    forced_choices: [1, 1, 0, 1],
    data: {game: 69, info: 1, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 41.0, mean_R: 45.33, mean_d: -4.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 73, 51, 72, 62, 76, 62, 64, 79, 75],
    rewards_R: [56, -1, -1, -1, 73, 30, 58, 71, 62, 47],
    forced_choices: [1, 0, 0, 0],
    data: {game: 71, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 65.33, mean_R: 56.0, mean_d: 9.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [38, -1, -1, -1, 32, 42, 41, 45, 35, 50],
    rewards_R: [-1, 52, 42, 48, 48, 67, 52, 50, 44, 58],
    forced_choices: [0, 1, 1, 1],
    data: {game: 73, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 38.0, mean_R: 47.33, mean_d: -9.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [85, 58, 79, -1, 71, 91, 75, 74, 84, 69],
    rewards_R: [-1, -1, -1, 60, 57, 54, 46, 60, 57, 63],
    forced_choices: [0, 0, 0, 1],
    data: {game: 75, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 74.0, mean_R: 60.0, mean_d: 14.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 42, -1, 53, 48, 56, 29, 33, 43],
    rewards_R: [59, 54, -1, 55, 62, 50, 68, 52, 61, 61],
    forced_choices: [1, 1, 0, 1],
    data: {game: 77, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 42.0, mean_R: 56.0, mean_d: -14.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [72, 80, -1, 79, 73, 79, 83, 75, 91, 71],
    rewards_R: [-1, -1, 59, -1, 60, 63, 67, 73, 81, 50],
    forced_choices: [0, 0, 1, 0],
    data: {game: 79, info: -1, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 77.0, mean_R: 59.0, mean_d: 18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
var HORIZONS_02 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 36, 37, 39],
    rewards_R: [5, 28, -1, -1, 18],
    forced_choices: [1, 1, 0, 0],
    data: {game: 2, info: 0, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 36.5, mean_R: 16.5, mean_d: 20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [36, -1, 46, -1, 45],
    rewards_R: [-1, 61, -1, 55, 59],
    forced_choices: [0, 1, 0, 1],
    data: {game: 4, info: 0, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 41.0, mean_R: 58.0, mean_d: -17.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [41, -1, 49, -1, 33],
    rewards_R: [-1, 32, -1, 37, 25],
    forced_choices: [0, 1, 0, 1],
    data: {game: 6, info: 0, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 45.0, mean_R: 34.5, mean_d: 10.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [55, -1, -1, 61, 47],
    rewards_R: [-1, 60, 66, -1, 61],
    forced_choices: [0, 1, 1, 0],
    data: {game: 8, info: 0, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 58.0, mean_R: 63.0, mean_d: -5.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [35, -1, 38, -1, 48],
    rewards_R: [-1, 36, -1, 51, 43],
    forced_choices: [0, 1, 0, 1],
    data: {game: 10, info: 0, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 36.5, mean_R: 43.5, mean_d: -7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [66, -1, -1, 75, 68],
    rewards_R: [-1, 60, 61, -1, 61],
    forced_choices: [0, 1, 1, 0],
    data: {game: 12, info: 0, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 70.5, mean_R: 60.5, mean_d: 10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 33, 49, -1, 62],
    rewards_R: [45, -1, -1, 67, 53],
    forced_choices: [1, 0, 0, 1],
    data: {game: 14, info: 0, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 41.0, mean_R: 56.0, mean_d: -15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 75, 74, -1, 96],
    rewards_R: [63, -1, -1, 48, 63],
    forced_choices: [1, 0, 0, 1],
    data: {game: 16, info: 0, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 74.5, mean_R: 55.5, mean_d: 19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 36, -1, -1, 44],
    rewards_R: [28, -1, 10, 12, 23],
    forced_choices: [1, 0, 1, 1],
    data: {game: 18, info: 1, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 36.0, mean_R: 16.67, mean_d: 19.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 57, 44, 61, 49],
    rewards_R: [70, -1, -1, -1, 73],
    forced_choices: [1, 0, 0, 0],
    data: {game: 20, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 54.0, mean_R: 70.0, mean_d: -16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 43, -1, 41],
    rewards_R: [33, 28, -1, 20, 17],
    forced_choices: [1, 1, 0, 1],
    data: {game: 22, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 43.0, mean_R: 27.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [60, 48, 57, -1, 48],
    rewards_R: [-1, -1, -1, 67, 67],
    forced_choices: [0, 0, 0, 1],
    data: {game: 24, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 55.0, mean_R: 67.0, mean_d: -12.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 46, -1, 38],
    rewards_R: [32, 37, -1, 34, 48],
    forced_choices: [1, 1, 0, 1],
    data: {game: 26, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 46.0, mean_R: 34.33, mean_d: 11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [68, -1, 54, 55, 62],
    rewards_R: [-1, 65, -1, -1, 71],
    forced_choices: [0, 1, 0, 0],
    data: {game: 28, info: -1, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 59.0, mean_R: 65.0, mean_d: -6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 36, -1, -1, 41],
    rewards_R: [46, -1, 39, 42, 47],
    forced_choices: [1, 0, 1, 1],
    data: {game: 30, info: 1, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 36.0, mean_R: 42.33, mean_d: -6.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [65, -1, 72, 63, 70],
    rewards_R: [-1, 58, -1, -1, 60],
    forced_choices: [0, 1, 0, 0],
    data: {game: 32, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 66.67, mean_R: 58.0, mean_d: 8.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 34, -1, -1, 46],
    rewards_R: [51, -1, 44, 31, 47],
    forced_choices: [1, 0, 1, 1],
    data: {game: 34, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 34.0, mean_R: 42.0, mean_d: -8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [84, 90, 66, -1, 92],
    rewards_R: [-1, -1, -1, 65, 66],
    forced_choices: [0, 0, 0, 1],
    data: {game: 36, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 80.0, mean_R: 65.0, mean_d: 15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 40, -1, 40],
    rewards_R: [54, 58, -1, 55, 51],
    forced_choices: [1, 1, 0, 1],
    data: {game: 38, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 40.0, mean_R: 55.67, mean_d: -15.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [81, -1, 76, 80, 73],
    rewards_R: [-1, 61, -1, -1, 66],
    forced_choices: [0, 1, 0, 0],
    data: {game: 40, info: -1, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 79.0, mean_R: 61.0, mean_d: 18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 42, 42, -1, 32, 41, 31, 41, 35, 40],
    rewards_R: [66, -1, -1, 54, 62, 57, 55, 79, 65, 55],
    forced_choices: [1, 0, 0, 1],
    data: {game: 42, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 42.0, mean_R: 60.0, mean_d: -18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 35, 57, -1, 27, 51, 33, 39, 39, 33],
    rewards_R: [39, -1, -1, 20, 24, 28, 31, 5, 22, 26],
    forced_choices: [1, 0, 0, 1],
    data: {game: 44, info: 0, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 46.0, mean_R: 29.5, mean_d: 16.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [37, 57, -1, -1, 47, 29, 47, 49, 49, 41],
    rewards_R: [-1, -1, 65, 50, 77, 63, 62, 66, 66, 71],
    forced_choices: [0, 0, 1, 1],
    data: {game: 46, info: 0, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 47.0, mean_R: 57.5, mean_d: -10.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 52, 42, -1, 37, 26, 56, 33, 55, 36],
    rewards_R: [39, -1, -1, 42, 35, 40, 47, 38, 46, 44],
    forced_choices: [1, 0, 0, 1],
    data: {game: 48, info: 0, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 47.0, mean_R: 40.5, mean_d: 6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [64, 59, -1, -1, 62, 75, 68, 71, 78, 64],
    rewards_R: [-1, -1, 58, 59, 56, 61, 69, 51, 68, 66],
    forced_choices: [0, 0, 1, 1],
    data: {game: 50, info: 0, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 61.5, mean_R: 58.5, mean_d: 3.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [51, -1, -1, 41, 35, 44, 29, 52, 49, 30],
    rewards_R: [-1, 51, 61, -1, 43, 42, 36, 57, 49, 46],
    forced_choices: [0, 1, 1, 0],
    data: {game: 52, info: 0, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 46.0, mean_R: 56.0, mean_d: -10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 74, 77, 67, 72, 88, 65, 80, 67],
    rewards_R: [63, 62, -1, -1, 65, 55, 72, 53, 46, 49],
    forced_choices: [1, 1, 0, 0],
    data: {game: 54, info: 0, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 75.5, mean_R: 62.5, mean_d: 13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [38, -1, -1, 36, 49, 36, 43, 31, 49, 39],
    rewards_R: [-1, 58, 57, -1, 49, 43, 66, 65, 53, 78],
    forced_choices: [0, 1, 1, 0],
    data: {game: 56, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 37.0, mean_R: 57.5, mean_d: -20.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [40, 42, -1, 43, 41, 56, 40, 46, 38, 28],
    rewards_R: [-1, -1, 60, -1, 69, 68, 56, 51, 53, 71],
    forced_choices: [0, 0, 1, 0],
    data: {game: 58, info: -1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 41.67, mean_R: 60.0, mean_d: -18.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [37, -1, -1, -1, 32, 24, 37, 30, 37, 29],
    rewards_R: [-1, 18, 20, 23, 14, 27, 29, 28, 19, 28],
    forced_choices: [0, 1, 1, 1],
    data: {game: 60, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 37.0, mean_R: 20.33, mean_d: 16.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [45, 57, 48, -1, 37, 37, 38, 42, 37, 59],
    rewards_R: [-1, -1, -1, 66, 49, 52, 66, 51, 58, 62],
    forced_choices: [0, 0, 0, 1],
    data: {game: 62, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 50.0, mean_R: 66.0, mean_d: -16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 46, -1, 29, 39, 43, 40, 41, 38],
    rewards_R: [30, 42, -1, 34, 37, 26, 29, 21, 30, 32],
    forced_choices: [1, 1, 0, 1],
    data: {game: 64, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 46.0, mean_R: 35.33, mean_d: 10.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 25, 60, 54, 48, 53, 59, 57, 60, 30],
    rewards_R: [56, -1, -1, -1, 51, 52, 71, 53, 48, 52],
    forced_choices: [1, 0, 0, 0],
    data: {game: 66, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 46.33, mean_R: 56.0, mean_d: -9.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 41, 31, 47, 35, 43, 43, 25],
    rewards_R: [31, 42, 30, -1, 38, 34, 38, 38, 34, 30],
    forced_choices: [1, 1, 1, 0],
    data: {game: 68, info: 1, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 41.0, mean_R: 34.33, mean_d: 6.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [47, -1, 66, 66, 71, 63, 39, 63, 64, 66],
    rewards_R: [-1, 54, -1, -1, 64, 53, 60, 47, 56, 64],
    forced_choices: [0, 1, 0, 0],
    data: {game: 70, info: -1, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 59.67, mean_R: 54.0, mean_d: 5.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 39, -1, 35, 41, 45, 45, 37, 41],
    rewards_R: [64, 52, -1, 33, 51, 45, 46, 46, 39, 59],
    forced_choices: [1, 1, 0, 1],
    data: {game: 72, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 39.0, mean_R: 49.67, mean_d: -10.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [73, 68, 57, -1, 81, 61, 58, 66, 72, 78],
    rewards_R: [-1, -1, -1, 58, 67, 55, 58, 65, 56, 75],
    forced_choices: [0, 0, 0, 1],
    data: {game: 74, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 66.0, mean_R: 58.0, mean_d: 8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 44, -1, -1, 35, 47, 55, 41, 47, 32],
    rewards_R: [64, -1, 57, 54, 61, 51, 57, 45, 56, 55],
    forced_choices: [1, 0, 1, 1],
    data: {game: 76, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 44.0, mean_R: 58.33, mean_d: -14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [73, 76, 85, -1, 78, 67, 67, 81, 81, 62],
    rewards_R: [-1, -1, -1, 63, 56, 58, 75, 63, 49, 67],
    forced_choices: [0, 0, 0, 1],
    data: {game: 78, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 78.0, mean_R: 63.0, mean_d: 15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 51, -1, -1, 46, 35, 35, 38, 47, 41],
    rewards_R: [66, -1, 75, 70, 56, 70, 73, 74, 70, 60],
    forced_choices: [1, 0, 1, 1],
    data: {game: 80, info: 1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 51.0, mean_R: 70.33, mean_d: -19.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
