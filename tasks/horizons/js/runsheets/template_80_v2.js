var HORIZONS_01 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [23, -1, 53, -1, 30],
    rewards_R: [-1, 60, -1, 57, 64],
    forced_choices: [0, 1, 0, 1],
    data: {game: 1, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 38.0, mean_R: 58.5, mean_d: -20.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 40, 55, -1, 22],
    rewards_R: [24, -1, -1, 40, 28],
    forced_choices: [1, 0, 0, 1],
    data: {game: 3, info: 0, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 47.5, mean_R: 32.0, mean_d: 15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [53, -1, -1, 48, 53],
    rewards_R: [-1, 63, 61, -1, 56],
    forced_choices: [0, 1, 1, 0],
    data: {game: 5, info: 0, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 50.5, mean_R: 62.0, mean_d: -11.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 40, -1, 37, 37],
    rewards_R: [35, -1, 35, -1, 24],
    forced_choices: [1, 0, 1, 0],
    data: {game: 7, info: 0, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 38.5, mean_R: 35.0, mean_d: 3.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 75, 54, -1, 71],
    rewards_R: [54, -1, -1, 65, 65],
    forced_choices: [1, 0, 0, 1],
    data: {game: 9, info: 0, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 64.5, mean_R: 59.5, mean_d: 5.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 53, 35, -1, 45],
    rewards_R: [47, -1, -1, 58, 53],
    forced_choices: [1, 0, 0, 1],
    data: {game: 11, info: 0, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 44.0, mean_R: 52.5, mean_d: -8.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 68, 72, 79],
    rewards_R: [58, 52, -1, -1, 58],
    forced_choices: [1, 1, 0, 0],
    data: {game: 13, info: 0, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 70.0, mean_R: 55.0, mean_d: 15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [30, -1, 37, -1, 32],
    rewards_R: [-1, 51, -1, 56, 44],
    forced_choices: [0, 1, 0, 1],
    data: {game: 15, info: 0, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 33.5, mean_R: 53.5, mean_d: -20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [33, 32, -1, 50, 45],
    rewards_R: [-1, -1, 57, -1, 69],
    forced_choices: [0, 0, 1, 0],
    data: {game: 17, info: -1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 38.33, mean_R: 57.0, mean_d: -18.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 31, -1, -1, 46],
    rewards_R: [19, -1, 20, 9, 31],
    forced_choices: [1, 0, 1, 1],
    data: {game: 19, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 31.0, mean_R: 16.0, mean_d: 15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 54, 34, 53, 38],
    rewards_R: [60, -1, -1, -1, 45],
    forced_choices: [1, 0, 0, 0],
    data: {game: 21, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 47.0, mean_R: 60.0, mean_d: -13.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [42, -1, -1, -1, 33],
    rewards_R: [-1, 42, 23, 29, 22],
    forced_choices: [0, 1, 1, 1],
    data: {game: 23, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 42.0, mean_R: 31.33, mean_d: 10.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [46, 65, 49, -1, 56],
    rewards_R: [-1, -1, -1, 65, 59],
    forced_choices: [0, 0, 0, 1],
    data: {game: 25, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 53.33, mean_R: 65.0, mean_d: -11.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 39, -1, 44],
    rewards_R: [41, 37, -1, 30, 53],
    forced_choices: [1, 1, 0, 1],
    data: {game: 27, info: 1, split: 1, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 39.0, mean_R: 36.0, mean_d: 3.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 57, 62, 75, 62],
    rewards_R: [58, -1, -1, -1, 60],
    forced_choices: [1, 0, 0, 0],
    data: {game: 29, info: -1, split: 1, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 64.67, mean_R: 58.0, mean_d: 6.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 38, -1, 48],
    rewards_R: [55, 49, -1, 42, 49],
    forced_choices: [1, 1, 0, 1],
    data: {game: 31, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 38.0, mean_R: 48.67, mean_d: -10.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [68, -1, 81, 79, 70],
    rewards_R: [-1, 66, -1, -1, 55],
    forced_choices: [0, 1, 0, 0],
    data: {game: 33, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 76.0, mean_R: 66.0, mean_d: 10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 41, -1, 44],
    rewards_R: [52, 57, -1, 60, 55],
    forced_choices: [1, 1, 0, 1],
    data: {game: 35, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 41.0, mean_R: 56.33, mean_d: -15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 78, 78, 73, 66],
    rewards_R: [61, -1, -1, -1, 57],
    forced_choices: [1, 0, 0, 0],
    data: {game: 37, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 76.33, mean_R: 61.0, mean_d: 15.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 42, 42],
    rewards_R: [63, 55, 63, -1, 69],
    forced_choices: [1, 1, 1, 0],
    data: {game: 39, info: 1, split: 1, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 42.0, mean_R: 60.33, mean_d: -18.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 53, 41, 21, 41, 20, 43, 52, 45],
    rewards_R: [32, 18, -1, -1, 21, 18, 37, 21, 17, 30],
    forced_choices: [1, 1, 0, 0],
    data: {game: 41, info: 0, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 47.0, mean_R: 25.0, mean_d: 22.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 38, 49, 43, 51, 42, 48, 40, 46],
    rewards_R: [61, 57, -1, -1, 55, 62, 61, 63, 65, 64],
    forced_choices: [1, 1, 0, 0],
    data: {game: 43, info: 0, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 43.5, mean_R: 59.0, mean_d: -15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 45, 35, 42, 43, 23, 41, 44, 43],
    rewards_R: [30, 32, -1, -1, 38, 30, 27, 23, 23, 41],
    forced_choices: [1, 1, 0, 0],
    data: {game: 45, info: 0, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 40.0, mean_R: 31.0, mean_d: 9.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 42, -1, 56, 59, 47, 54, 64, 56, 60],
    rewards_R: [58, -1, 53, -1, 77, 62, 58, 66, 67, 74],
    forced_choices: [1, 0, 1, 0],
    data: {game: 47, info: 0, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 49.0, mean_R: 55.5, mean_d: -6.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [44, -1, -1, 33, 45, 38, 32, 40, 46, 28],
    rewards_R: [-1, 34, 52, -1, 32, 50, 55, 56, 53, 67],
    forced_choices: [0, 1, 1, 0],
    data: {game: 49, info: 0, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 38.5, mean_R: 43.0, mean_d: -4.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [67, -1, 70, -1, 67, 61, 80, 85, 70, 73],
    rewards_R: [-1, 57, -1, 58, 69, 54, 56, 59, 53, 63],
    forced_choices: [0, 1, 0, 1],
    data: {game: 51, info: 0, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 68.5, mean_R: 57.5, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 33, 39, -1, 38, 34, 31, 41, 40, 37],
    rewards_R: [49, -1, -1, 52, 61, 47, 47, 46, 52, 57],
    forced_choices: [1, 0, 0, 1],
    data: {game: 53, info: 0, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 36.0, mean_R: 50.5, mean_d: -14.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 87, 78, -1, 90, 86, 75, 61, 84, 83],
    rewards_R: [65, -1, -1, 61, 58, 54, 65, 63, 49, 56],
    forced_choices: [1, 0, 0, 1],
    data: {game: 55, info: 0, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 82.5, mean_R: 63.0, mean_d: 19.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 37, -1, 41, 39, 56, 23, 34, 46],
    rewards_R: [13, 19, -1, 19, 19, 15, 35, 33, 28, 27],
    forced_choices: [1, 1, 0, 1],
    data: {game: 57, info: 1, split: 1, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 37.0, mean_R: 17.0, mean_d: 20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [51, -1, 38, 58, 49, 41, 65, 49, 53, 41],
    rewards_R: [-1, 63, -1, -1, 58, 52, 69, 68, 48, 62],
    forced_choices: [0, 1, 0, 0],
    data: {game: 59, info: -1, split: 1, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 49.0, mean_R: 63.0, mean_d: -14.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 39, 43, 48, 35, 45, 45, 44],
    rewards_R: [28, 26, 15, -1, 19, 9, 16, 27, 18, 30],
    forced_choices: [1, 1, 1, 0],
    data: {game: 61, info: 1, split: 1, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 39.0, mean_R: 23.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [50, -1, 57, 41, 49, 38, 63, 54, 52, 53],
    rewards_R: [-1, 60, -1, -1, 63, 52, 54, 57, 59, 63],
    forced_choices: [0, 1, 0, 0],
    data: {game: 63, info: -1, split: 1, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 49.33, mean_R: 60.0, mean_d: -10.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 37, -1, 33, 49, 24, 38, 48, 48],
    rewards_R: [32, 32, -1, 18, 45, 23, 28, 29, 36, 40],
    forced_choices: [1, 1, 0, 1],
    data: {game: 65, info: 1, split: 1, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 37.0, mean_R: 27.33, mean_d: 9.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [70, -1, 40, 64, 53, 48, 57, 41, 59, 42],
    rewards_R: [-1, 65, -1, -1, 74, 69, 63, 57, 79, 57],
    forced_choices: [0, 1, 0, 0],
    data: {game: 67, info: -1, split: 1, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 58.0, mean_R: 65.0, mean_d: -7.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 34, -1, -1, 53, 37, 44, 41, 44, 25],
    rewards_R: [50, -1, 25, 43, 36, 39, 49, 43, 34, 37],
    forced_choices: [1, 0, 1, 1],
    data: {game: 69, info: 1, split: 1, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 34.0, mean_R: 39.33, mean_d: -5.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [63, 72, -1, 69, 57, 66, 75, 70, 65, 83],
    rewards_R: [-1, -1, 57, -1, 62, 55, 58, 60, 55, 53],
    forced_choices: [0, 0, 1, 0],
    data: {game: 71, info: -1, split: 1, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 68.0, mean_R: 57.0, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [32, -1, -1, -1, 22, 43, 33, 41, 26, 35],
    rewards_R: [-1, 33, 53, 43, 69, 46, 54, 46, 51, 50],
    forced_choices: [0, 1, 1, 1],
    data: {game: 73, info: 1, split: 1, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 32.0, mean_R: 43.0, mean_d: -11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [76, 71, 71, -1, 85, 82, 65, 80, 92, 87],
    rewards_R: [-1, -1, -1, 56, 64, 58, 68, 61, 49, 67],
    forced_choices: [0, 0, 0, 1],
    data: {game: 75, info: -1, split: 1, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 72.67, mean_R: 56.0, mean_d: 16.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 45, -1, -1, 33, 40, 45, 25, 51, 25],
    rewards_R: [49, -1, 57, 69, 55, 50, 47, 60, 50, 61],
    forced_choices: [1, 0, 1, 1],
    data: {game: 77, info: 1, split: 1, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 45.0, mean_R: 58.33, mean_d: -13.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [83, 83, -1, 81, 90, 86, 93, 63, 69, 72],
    rewards_R: [-1, -1, 63, -1, 45, 44, 56, 59, 60, 57],
    forced_choices: [0, 0, 1, 0],
    data: {game: 79, info: -1, split: 1, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 82.33, mean_R: 63.0, mean_d: 19.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
var HORIZONS_02 = [
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 33, -1, 39, 43],
    rewards_R: [22, -1, 12, -1, 32],
    forced_choices: [1, 0, 1, 0],
    data: {game: 2, info: 0, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 36.0, mean_R: 17.0, mean_d: 19.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [39, 56, -1, -1, 35],
    rewards_R: [-1, -1, 57, 69, 55],
    forced_choices: [0, 0, 1, 1],
    data: {game: 4, info: 0, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 47.5, mean_R: 63.0, mean_d: -15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 32, 46, 38],
    rewards_R: [39, 16, -1, -1, 24],
    forced_choices: [1, 1, 0, 0],
    data: {game: 6, info: 0, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 39.0, mean_R: 27.5, mean_d: 11.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [45, -1, 68, -1, 54],
    rewards_R: [-1, 65, -1, 59, 64],
    forced_choices: [0, 1, 0, 1],
    data: {game: 8, info: 0, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 56.5, mean_R: 62.0, mean_d: -5.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 32, 39, -1, 34],
    rewards_R: [30, -1, -1, 48, 40],
    forced_choices: [1, 0, 0, 1],
    data: {game: 10, info: 0, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 35.5, mean_R: 39.0, mean_d: -3.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [60, -1, -1, 72, 64],
    rewards_R: [-1, 60, 53, -1, 58],
    forced_choices: [0, 1, 1, 0],
    data: {game: 12, info: 0, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 66.0, mean_R: 56.5, mean_d: 9.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [50, -1, -1, 31, 37],
    rewards_R: [-1, 63, 49, -1, 53],
    forced_choices: [0, 1, 1, 0],
    data: {game: 14, info: 0, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 40.5, mean_R: 56.0, mean_d: -15.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [81, 86, -1, -1, 74],
    rewards_R: [-1, -1, 61, 67, 57],
    forced_choices: [0, 0, 1, 1],
    data: {game: 16, info: 0, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 83.5, mean_R: 64.0, mean_d: 19.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 41, -1, 49],
    rewards_R: [17, 21, -1, 20, 8],
    forced_choices: [1, 1, 0, 1],
    data: {game: 18, info: 1, split: 2, mu_L: 40, mu_R: 20, mu_d: 20, mean_L: 41.0, mean_R: 19.33, mean_d: 21.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 52, 62, 45, 52],
    rewards_R: [68, -1, -1, -1, 56],
    forced_choices: [1, 0, 0, 0],
    data: {game: 20, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 53.0, mean_R: 68.0, mean_d: -15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 38, -1, -1, 40],
    rewards_R: [21, -1, 16, 36, 31],
    forced_choices: [1, 0, 1, 1],
    data: {game: 22, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 38.0, mean_R: 24.33, mean_d: 13.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [53, 59, -1, 43, 52],
    rewards_R: [-1, -1, 60, -1, 47],
    forced_choices: [0, 0, 1, 0],
    data: {game: 24, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 51.67, mean_R: 60.0, mean_d: -8.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 35, 35],
    rewards_R: [33, 15, 32, -1, 26],
    forced_choices: [1, 1, 1, 0],
    data: {game: 26, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 35.0, mean_R: 26.67, mean_d: 8.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [45, 62, 55, -1, 55],
    rewards_R: [-1, -1, -1, 60, 68],
    forced_choices: [0, 0, 0, 1],
    data: {game: 28, info: -1, split: 2, mu_L: 55, mu_R: 60, mu_d: -5, mean_L: 54.0, mean_R: 60.0, mean_d: -6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 36, -1, 38],
    rewards_R: [45, 40, -1, 36, 34],
    forced_choices: [1, 1, 0, 1],
    data: {game: 30, info: 1, split: 2, mu_L: 40, mu_R: 45, mu_d: -5, mean_L: 36.0, mean_R: 40.33, mean_d: -4.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [68, -1, 75, 76, 69],
    rewards_R: [-1, 61, -1, -1, 67],
    forced_choices: [0, 1, 0, 0],
    data: {game: 32, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 73.0, mean_R: 61.0, mean_d: 12.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, -1, 40, 52],
    rewards_R: [57, 40, 54, -1, 47],
    forced_choices: [1, 1, 1, 0],
    data: {game: 34, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 40.0, mean_R: 50.33, mean_d: -10.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [69, 72, 79, -1, 71],
    rewards_R: [-1, -1, -1, 60, 53],
    forced_choices: [0, 0, 0, 1],
    data: {game: 36, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 73.33, mean_R: 60.0, mean_d: 13.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, -1, 41, -1, 40],
    rewards_R: [57, 54, -1, 59, 57],
    forced_choices: [1, 1, 0, 1],
    data: {game: 38, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 41.0, mean_R: 56.67, mean_d: -15.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 5,
    rewards_L: [-1, 77, 69, 94, 91],
    rewards_R: [60, -1, -1, -1, 46],
    forced_choices: [1, 0, 0, 0],
    data: {game: 40, info: -1, split: 2, mu_L: 80, mu_R: 60, mu_d: 20, mean_L: 80.0, mean_R: 60.0, mean_d: 20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [47, -1, -1, 46, 47, 41, 31, 48, 46, 36],
    rewards_R: [-1, 63, 70, -1, 68, 54, 67, 63, 55, 61],
    forced_choices: [0, 1, 1, 0],
    data: {game: 42, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 46.5, mean_R: 66.5, mean_d: -20.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, 42, 48, 24, 32, 38, 47, 46, 26],
    rewards_R: [31, 29, -1, -1, 22, 28, 26, 5, 25, 26],
    forced_choices: [1, 1, 0, 0],
    data: {game: 44, info: 0, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 45.0, mean_R: 30.0, mean_d: 15.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 51, 55, -1, 62, 60, 59, 53, 58, 61],
    rewards_R: [62, -1, -1, 60, 48, 57, 70, 77, 85, 52],
    forced_choices: [1, 0, 0, 1],
    data: {game: 46, info: 0, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 53.0, mean_R: 61.0, mean_d: -8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 37, -1, 42, 50, 30, 44, 34, 33, 40],
    rewards_R: [42, -1, 25, -1, 36, 49, 27, 22, 42, 36],
    forced_choices: [1, 0, 1, 0],
    data: {game: 48, info: 0, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 39.5, mean_R: 33.5, mean_d: 6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [66, -1, -1, 59, 73, 70, 67, 56, 62, 82],
    rewards_R: [-1, 61, 57, -1, 51, 59, 62, 75, 57, 64],
    forced_choices: [0, 1, 1, 0],
    data: {game: 50, info: 0, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 62.5, mean_R: 59.0, mean_d: 3.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 55, 44, -1, 35, 42, 30, 52, 33, 30],
    rewards_R: [53, -1, -1, 67, 51, 58, 50, 56, 49, 49],
    forced_choices: [1, 0, 0, 1],
    data: {game: 52, info: 0, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 49.5, mean_R: 60.0, mean_d: -10.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [82, 75, -1, -1, 72, 73, 71, 70, 85, 78],
    rewards_R: [-1, -1, 65, 63, 54, 66, 51, 67, 65, 55],
    forced_choices: [0, 0, 1, 1],
    data: {game: 54, info: 0, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 78.5, mean_R: 64.0, mean_d: 14.5},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [31, -1, -1, 42, 44, 39, 47, 48, 39, 38],
    rewards_R: [-1, 51, 58, -1, 67, 60, 66, 62, 68, 65],
    forced_choices: [0, 1, 1, 0],
    data: {game: 56, info: 0, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 36.5, mean_R: 54.5, mean_d: -18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 45, 35, 33, 28, 41, 46, 45, 33, 25],
    rewards_R: [59, -1, -1, -1, 67, 62, 66, 67, 63, 65],
    forced_choices: [1, 0, 0, 0],
    data: {game: 58, info: -1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 37.67, mean_R: 59.0, mean_d: -21.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 39, 37, 44, 45, 41, 43, 42],
    rewards_R: [21, 20, 33, -1, 34, 35, 38, 28, 24, 24],
    forced_choices: [1, 1, 1, 0],
    data: {game: 60, info: 1, split: 2, mu_L: 40, mu_R: 25, mu_d: 15, mean_L: 39.0, mean_R: 24.67, mean_d: 14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [53, 37, 44, -1, 46, 43, 41, 47, 41, 47],
    rewards_R: [-1, -1, -1, 59, 66, 70, 61, 65, 46, 77],
    forced_choices: [0, 0, 0, 1],
    data: {game: 62, info: -1, split: 2, mu_L: 45, mu_R: 60, mu_d: -15, mean_L: 44.67, mean_R: 59.0, mean_d: -14.33},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [33, -1, -1, -1, 47, 30, 34, 54, 49, 38],
    rewards_R: [-1, 26, 25, 18, 12, 27, 32, 35, 15, 20],
    forced_choices: [0, 1, 1, 1],
    data: {game: 64, info: 1, split: 2, mu_L: 40, mu_R: 30, mu_d: 10, mean_L: 33.0, mean_R: 23.0, mean_d: 10.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 49, 47, 63, 55, 38, 49, 50, 41, 57],
    rewards_R: [61, -1, -1, -1, 58, 50, 61, 56, 71, 63],
    forced_choices: [1, 0, 0, 0],
    data: {game: 66, info: -1, split: 2, mu_L: 50, mu_R: 60, mu_d: -10, mean_L: 53.0, mean_R: 61.0, mean_d: -8.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, -1, -1, 45, 33, 53, 30, 45, 34, 48],
    rewards_R: [38, 42, 37, -1, 38, 48, 38, 42, 45, 59],
    forced_choices: [1, 1, 1, 0],
    data: {game: 68, info: 1, split: 2, mu_L: 40, mu_R: 35, mu_d: 5, mean_L: 45.0, mean_R: 39.0, mean_d: 6.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 55, 61, 66, 61, 77, 62, 70, 61, 63],
    rewards_R: [56, -1, -1, -1, 50, 57, 58, 66, 67, 64],
    forced_choices: [1, 0, 0, 0],
    data: {game: 70, info: -1, split: 2, mu_L: 65, mu_R: 60, mu_d: 5, mean_L: 60.67, mean_R: 56.0, mean_d: 4.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 40, -1, -1, 34, 42, 68, 35, 43, 40],
    rewards_R: [51, -1, 50, 48, 46, 44, 59, 46, 36, 64],
    forced_choices: [1, 0, 1, 1],
    data: {game: 72, info: 1, split: 2, mu_L: 40, mu_R: 50, mu_d: -10, mean_L: 40.0, mean_R: 49.67, mean_d: -9.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [78, 61, -1, 65, 78, 86, 60, 74, 73, 78],
    rewards_R: [-1, -1, 57, -1, 59, 70, 66, 59, 70, 56],
    forced_choices: [0, 0, 1, 0],
    data: {game: 74, info: -1, split: 2, mu_L: 70, mu_R: 60, mu_d: 10, mean_L: 68.0, mean_R: 57.0, mean_d: 11.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [36, -1, -1, -1, 56, 43, 41, 34, 41, 44],
    rewards_R: [-1, 63, 44, 51, 56, 62, 63, 50, 46, 66],
    forced_choices: [0, 1, 1, 1],
    data: {game: 76, info: 1, split: 2, mu_L: 40, mu_R: 55, mu_d: -15, mean_L: 36.0, mean_R: 52.67, mean_d: -16.67},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 80, 74, 77, 83, 80, 60, 86, 82, 72],
    rewards_R: [61, -1, -1, -1, 83, 66, 65, 52, 54, 67],
    forced_choices: [1, 0, 0, 0],
    data: {game: 78, info: -1, split: 2, mu_L: 75, mu_R: 60, mu_d: 15, mean_L: 77.0, mean_R: 61.0, mean_d: 16.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
  {
    type: 'horizons-trial',
    horizon: 10,
    rewards_L: [-1, 41, -1, -1, 35, 42, 25, 17, 39, 41],
    rewards_R: [64, -1, 60, 53, 69, 59, 69, 71, 61, 55],
    forced_choices: [1, 0, 1, 1],
    data: {game: 80, info: 1, split: 2, mu_L: 40, mu_R: 60, mu_d: -20, mean_L: 41.0, mean_R: 59.0, mean_d: -18.0},
    on_finish: function(data) {
     data.browser_interactions = jsPsych.data.getInteractionData().filter({trial: data.trial_index}).count();
   }
  },
]
