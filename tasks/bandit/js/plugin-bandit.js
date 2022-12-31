var jsPsychBanditTrial = (function (jspsych) {
  'use strict';

  const info = {
    name: 'bandit',
    parameters: {
      face_stimuli: {
        type: jspsych.ParameterType.STRING,
        default: null,
        description: 'The array of paths to face stimuli'
      },
      place_stimuli: {
        type: jspsych.ParameterType.STRING,
        default: null,
        description: 'The array of paths to place stimuli'
      },
      feedback_images: {
        type: jspsych.ParameterType.STRING,
        default: null,
        description: 'The array of paths to feedback images'
      },
      image_allocation: {
        type: jspsych.ParameterType.INT,
        default: [0, 1, 2],
        description: 'The mapping to subject-specific images (allows randomisation of visual stimuli)'
      },
      canvas_dimensions: {
        type: jspsych.ParameterType.INT,
        default: [1000, 500],
        description: 'The dimensions [width, height] of the html canvas on which things are drawn'
      },
      background_colour: {
        type: jspsych.ParameterType.STRING,
        default: '#878787',
        description: 'The colour of the background'
      },
      stimulus_offset: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Stimulus offset',
        default: [270, 0],
        description: 'The offset [horizontal, vertica] of the centre of each stimulus from the centre of the canvas in pixels'
      },
      stimulus_dimensions: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Stimulus dimensions',
        default: [250, 250],
        description: 'Stimulus dimensions in pixels [width, height]'
      },
      left_key: {
        type: jspsych.ParameterType.KEYCODE,
        pretty_name: 'Left key',
        default: 'arrowleft',
        description: 'The key to be pressed to select the left planet'
      },
      right_key: {
        type: jspsych.ParameterType.KEYCODE,
        pretty_name: 'Right key',
        default: 'arrowright',
        description: 'The key to be pressed to select the right planet'
      },
      choice_listen_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Choice window duration',
        default: 100000,
        description: 'How long to wait for a response (in milliseconds).'
      },
      choice_display_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Choice display duration',
        default: 1500,
        description: 'How long to display the response (in milliseconds).'
      },
      feedback_display_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Feedback display duration',
        default: 2000,
        description: 'How long to display the feedback (in milliseconds).'
      },
      iti_duration: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Duration of inter-trial interval',
        default: 1500,
        description: 'How long to display a blank screen between trials (in milliseconds).'
      },
      selection_pen_width: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Width of selection box',
        default: 15,
        description: 'Thickness (in pixels) of the selection box'
      },
      selection_colour: {
        type: jspsych.ParameterType.STRING,
        default: '#FFFFFF', // #FFFFFF is white
        description: 'The colour of the selection box'
      },
      feedback_offset: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Feedback offset',
        default: [0, 0],//[270, -200],
        description: 'The offset [horizontal, vertica] of the centre of the feedback from the centre of the canvas in pixels'
      },
      feedback_dimensions: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Feedback dimensions',
        default: [120, 120],
        description: 'Feedback image dimensions in pixels [width, height]'
      },
      reward_colour: {
        type: jspsych.ParameterType.STRING,
        default: '#00CA33', // #00CA33 is green
        description: 'The colour of the selection box during reward feedback'
      },
      non_reward_colour: {
        type: jspsych.ParameterType.STRING,
        default: '#FF0000', // #FF0000 is red
        description: 'The colour of the selection box during non-reward feedback'
      }
    }
  }

  class BanditTrialPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // add a canvas to the HTML_STRING, store its context, and draw a blank background
      var new_html = '<canvas id="trial_canvas" width="'+trial.canvas_dimensions[0]+'" height="'+trial.canvas_dimensions[1]+'"></canvas>';
      display_element.innerHTML = new_html;
      var ctx = document.getElementById('trial_canvas').getContext('2d');
      DrawBackground(); // draw the background of the canvas

      // set up a container for key responses
      var response = {
        rt: null,
        key: null,
        key_char: null,
        choice: null
      };

      // set up a container for display configuration
      var display = {
        left_stimulus: null,
        right_stimulus: null,
        left_image_number: null,
        right_image_number: null,
        left_box: null,
        right_box: null
      }

      ///// TRIAL LOOP /////

      // set the images
      if (trial.choice_type == "free"){

        display.left_image_number = trial.image_allocation[trial.left_image_number];
        display.right_image_number = trial.image_allocation[trial.right_image_number];

        // left stimulus, free choice
        if (trial.left_image_type == "face") {
          display.left_stimulus = [trial.face_stimuli[display.left_image_number]];
        } else if (trial.left_image_type == "place") {
          display.left_stimulus = [trial.place_stimuli[display.left_image_number]];
        } else {
          display.left_stimulus = null;
        }

        // right stimulus, free choice
        if (trial.right_image_type == "face") {
          display.right_stimulus = [trial.face_stimuli[display.right_image_number]];
        } else if (trial.right_image_type == "place") {
          display.right_stimulus = [trial.place_stimuli[display.right_image_number]];
        } else {
          display.right_stimulus = null;
        }

      } else if (trial.choice_type == "forced"){

        // left stimulus, forced choice
        if (trial.left_image_type == "face"){

          // check to see whether there is a null trial in the queue. If so, take it. If not, randomly select an image
          if (Array.isArray(queues.null_trial_queue) && queues.null_trial_queue.length > 0) {
            display.left_image_number = trial.image_allocation[queues.null_trial_queue[0]]; // get the image number from the null trial queue
            queues.null_trial_queue.shift(); // remove the first item of the null trial queue
          } else {
            display.left_image_number = trial.image_allocation[jsPsych.randomization.sampleWithReplacement([...Array(queues.rpq.length).keys()], 1)];
          }
          display.left_stimulus = [trial.face_stimuli[display.left_image_number]];

        } else if (trial.left_image_type == "place") {

          // check to see whether there is a null trial in the queue. If so, take it. If not, randomly select an image
          if (Array.isArray(queues.null_trial_queue) && queues.null_trial_queue.length > 0) {
            display.left_image_number = trial.image_allocation[queues.null_trial_queue[0]]; // get the image number from the null trial queue
            queues.null_trial_queue.shift(); // remove the first item of the null trial queue
          } else {
            display.left_image_number = trial.image_allocation[jsPsych.randomization.sampleWithReplacement([...Array(queues.rpq.length).keys()], 1)];
          }
          display.left_stimulus = [trial.place_stimuli[display.left_image_number]];

        } else {
          display.left_stimulus = null;
        }

        // right stimulus, forced choice
        if (trial.right_image_type == "face"){

          // check to see whether there is a null trial in the queue. If so, take it. If not, randomly select an image
          if (Array.isArray(queues.null_trial_queue) && queues.null_trial_queue.length > 0) {
            display.right_image_number = trial.image_allocation[queues.null_trial_queue[0]]; // get the image number from the null trial queue
            queues.null_trial_queue.shift(); // remove the first item of the null trial queue
          } else {
            display.right_image_number = trial.image_allocation[jsPsych.randomization.sampleWithReplacement([...Array(queues.rpq.length).keys()], 1)];
          }
          display.right_stimulus = [trial.face_stimuli[display.right_image_number]];

        } else if (trial.right_image_type == "place") {

          // check to see whether there is a null trial in the queue. If so, take it. If not, randomly select an image
          if (Array.isArray(queues.null_trial_queue) && queues.null_trial_queue.length > 0) {
            display.right_image_number = trial.image_allocation[queues.null_trial_queue[0]]; // get the image number from the null trial queue
            queues.null_trial_queue.shift(); // remove the first item of the null trial queue
          } else {
            display.right_image_number = trial.image_allocation[jsPsych.randomization.sampleWithReplacement([...Array(queues.rpq.length).keys()], 1)];
          }
          display.right_stimulus = [trial.place_stimuli[display.right_image_number]];

        } else {
          display.right_stimulus = null;
        }
      }

      DrawScreen();

      // start the response listener
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: AfterResponse,
        valid_responses: [trial.left_key, trial.right_key],
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });

      // set a timeout function to end the trial after a given time if no response is recorded
      if (trial.choice_listen_duration !== null) {

        jsPsych.pluginAPI.setTimeout(function() {
          EndTrial();
        }, trial.choice_listen_duration);

      } //end if-loop

      ///// MAIN FUNCTIONS /////

      // function to draw background
      function DrawBackground(){

        // draw the background
        ctx.fillStyle = trial.background_colour;
        ctx.fillRect(0, 0, trial.canvas_dimensions[0], trial.canvas_dimensions[1]);

        // draw the progress text
        ctx.font = "28px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        var info_text = "Block " + counter.block + " of " + counter.n_blocks + ", Trial " + counter.trial + " of " + trial.n_trials;
        ctx.fillText(info_text, trial.canvas_dimensions[0]/2, 3* ctx.measureText('M').width/2);


      }; // end DrawBackground function

      // function to draw the stimuli to screen flexibly
      function DrawScreen() {

        // if the left stimulus is selected, show the appropriate selection box
        if (display.left_box == "selected"){
          _DrawSelectionBox(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.selection_colour);
        } else if (display.left_box == "reward"){
          var feedback_image = trial.feedback_images[1]
          _DrawSelectionBox(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.reward_colour);
          _DrawFeedback(feedback_image);
        } else if (display.left_box == "non-reward"){
          var feedback_image = trial.feedback_images[0]
          _DrawSelectionBox(-trial.stimulus_offset[0], trial.stimulus_offset[1], trial.non_reward_colour);
          _DrawFeedback(feedback_image);
        }

        // draw the left stimulus
        if (display.left_stimulus !== null){
          _DrawStimulus(display.left_stimulus, [-trial.stimulus_offset[0], trial.stimulus_offset[1]]);
        } else{
          _DrawBlankStimulus([-trial.stimulus_offset[0], trial.stimulus_offset[1]]);
        }

        // if the right stimulus is selected, show the appropriate selection box
        if (display.right_box == "selected"){
          _DrawSelectionBox(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.selection_colour);
        } else if (display.right_box == "reward"){
          var feedback_image = trial.feedback_images[1]
          _DrawSelectionBox(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.reward_colour);
          _DrawFeedback(feedback_image);
        } else if (display.right_box == "non-reward"){
          var feedback_image = trial.feedback_images[0]
          _DrawSelectionBox(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.non_reward_colour);
          _DrawFeedback(feedback_image);
        }

        // draw the right stimulus
        if (display.right_stimulus !== null){
          _DrawStimulus(display.right_stimulus, [trial.stimulus_offset[0], trial.stimulus_offset[1]]);
        } else{
          _DrawBlankStimulus([trial.stimulus_offset[0], trial.stimulus_offset[1]]);
        }

      }; // end DrawScreen function

      // function to handle responses by the subject
      function AfterResponse(info) {

        // clear keyboard listener
        jsPsych.pluginAPI.cancelAllKeyboardResponses();

        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();

        // only record the first response
        if (response.key == null) {
          response = info;
        }

        // assign response variables
        if (jsPsych.pluginAPI.compareKeys(trial.left_key, response.key)){
          response.choice = 'left';
          response.chosen_image = display.left_image_number;
          response.ur_chosen_image = trial.left_image_number;
          display.left_box = "selected";
        } else if (jsPsych.pluginAPI.compareKeys(trial.right_key, response.key)){
          response.choice = 'right';
          response.chosen_image = display.right_image_number;
          response.ur_chosen_image = trial.right_image_number;
          display.right_box = "selected";
        }

        // update the screen with the pressed key
        DrawScreen(ctx);

        // set a timeout to display the feedback after a given delay
        jsPsych.pluginAPI.setTimeout(function() {
          DisplayFeedback();
        }, trial.choice_display_duration);

      }; // end AfterResponse

      function DisplayFeedback(){

        var left_image_number = null;
        var right_image_number = null;

        if (trial.choice_type == "free"){
          left_image_number = trial.left_image_number;
          right_image_number = trial.right_image_number;
        } else if (trial.left_image_type !== null){
          left_image_number = trial.image_allocation.findIndex(function(element, index, arr){return element == this}, display.left_image_number);
          if (response.choice == "left"){
            response.chosen_image = display.left_image_number
            response.ur_chosen_image = left_image_number
          }
        } else if (trial.right_image_type !== null){
          right_image_number = trial.image_allocation.findIndex(function(element, index, arr){return element == this}, display.right_image_number);
          if (response.choice == "right"){
            response.chosen_image = display.right_image_number
            response.ur_chosen_image = right_image_number
          }
        }

        // check recorded choice and display corresponding colour
        if (response.choice == "left"){

          // get feedback from the queue and update the queue
          if (trial.left_image_type == "face"){
            if (queues.rfq[left_image_number].length > 0){
              response.feedback = queues.rfq[left_image_number][0];
              queues.rfq[left_image_number].shift();
            } else {
              response.feedback = jsPsych.randomization.sampleWithReplacement(queues.rfq[left_image_number],1)
            }
          } else if (trial.left_image_type == "place"){
            if (queues.rpq[left_image_number].length > 0){
              response.feedback = queues.rpq[left_image_number][0];
              queues.rpq[left_image_number].shift();
            } else {
              response.feedback = jsPsych.randomization.sampleWithReplacement(queues.rpq[left_image_number],1)
            }
          } else {
            response.feedback = 0;
          }

          // set selection box colour
          if (response.feedback == 0){
            display.left_box = "non-reward";
          } else if (response.feedback == 1){
            display.left_box = "reward";
          }

          // if this was a free choice trial, update the forced choice queue
          if (trial.choice_type == "free"){
            queues.null_trial_queue.push(right_image_number);
          }

        } else if (response.choice == "right"){

          // get feedback from the queue and update the queue
          if (trial.right_image_type == "face"){
            if (queues.rfq[right_image_number].length > 0){
              response.feedback = queues.rfq[right_image_number][0];
              queues.rfq[right_image_number].shift();
            } else {
              response.feedback = jsPsych.randomization.sampleWithReplacement(queues.rfq[right_image_number],1)
            }
          } else if (trial.right_image_type == "place"){
            if (queues.rpq[right_image_number].length > 0){
              response.feedback = queues.rpq[right_image_number][0];
              queues.rpq[right_image_number].shift();
            } else {
              response.feedback = jsPsych.randomization.sampleWithReplacement(queues.rpq[right_image_number],1)
            }
          } else {
            response.feedback = 0;
          }

          // set selection box colour
          if (response.feedback == 0){
            display.right_box = "non-reward";
          } else if (response.feedback == 1){
            display.right_box = "reward";
          }

          // if this was a free choice trial, update the forced choice queue
          if (trial.choice_type == "free"){
            queues.null_trial_queue.push(left_image_number);
          }

        }

        // draw the updated stimuli to the screen
        DrawScreen(ctx);

        // set a timeout to end the trial after a given delay
        jsPsych.pluginAPI.setTimeout(function() {
          ITI();
        }, trial.feedback_display_duration);

      } // end DisplayFeedback

      // function to show an empty screen for the duration of the inter-trial interval
      function ITI() {

        // draw the background of the canvas
        DrawBackground();

        // clear keyboard listener
        jsPsych.pluginAPI.cancelAllKeyboardResponses();

        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();

        // set a timeout to end the ITI after a given delay
        jsPsych.pluginAPI.setTimeout(function() {
          EndTrial();
        }, trial.iti_duration);

      }; // end EndTrial function

      // function to end trial when it is time
      function EndTrial() {

        // clear keyboard listener
        jsPsych.pluginAPI.cancelAllKeyboardResponses();

        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();

        // gather the data to store for the trial
        var trial_data = {
          'trial_type': trial.choice_type,
          'left_image_number': display.left_image_number,
          'right_image_number': display.right_image_number,
          'left_image_type': trial.left_image_type,
          'right_image_type': trial.right_image_type,
          'ur_left_image': trial.image_allocation.findIndex(function(element, index, arr){return element == this}, display.left_image_number),
          'ur_right_image': trial.image_allocation.findIndex(function(element, index, arr){return element == this}, display.right_image_number),
          'chosen_image': response.chosen_image,
          'ur_chosen_image': response.ur_chosen_image,
          'rt': response.rt,
          'key_char': response.key_char,
          'choice': response.choice,
          'stimulus_array': [trial.left_image_number, trial.right_image_number],
          'feedback': response.feedback
        };

        // increment the trial counter
        counter.trial += 1;

        // move on to the next trial
        jsPsych.finishTrial(trial_data);

      }; // end EndTrial function

      function _DrawSelectionBox(stimulus_horiz_offset, stimulus_vert_offset, colour) {

        var selection_horiz_loc = (trial.canvas_dimensions[0]/2) + stimulus_horiz_offset  - (trial.stimulus_dimensions[0] / 2) - trial.selection_pen_width;
        var stim_vert_loc = (trial.canvas_dimensions[1]/2) + stimulus_vert_offset  - (trial.stimulus_dimensions[1] / 2) - trial.selection_pen_width; // specifies the y coordinate of the top left corner of the stimulus

        ctx.fillStyle = colour;
        ctx.fillRect(selection_horiz_loc, stim_vert_loc, trial.stimulus_dimensions[0] + (2 * trial.selection_pen_width), trial.stimulus_dimensions[1] + (2 * trial.selection_pen_width));

      } // end _DrawSelectionBox function


      function _DrawStimulus(stimulus_array, stimulus_offset) {

        // array sanity check: only draw a stimulus array if (a) the array exists, and (b) the array has a length greater than 0
        if (Array.isArray(stimulus_array) && stimulus_array.length > 0) {

          // create new image element
          var img = new Image();

          // specify that the image should be drawn once it is loaded
          img.onload = function(){_ImageOnload(img, trial.stimulus_dimensions, stimulus_offset)};

          // set the source path of the image; in JavaScript, this command also triggers the loading of the image
          img.src = stimulus_array[0];

        } // end array sanity check if-loop

      } // end _DrawStimulus function

      function _DrawBlankStimulus(stimulus_offset) {

        var stim_horiz_loc = (trial.canvas_dimensions[0]/2) + stimulus_offset[0]  - (trial.stimulus_dimensions[0] / 2); // specifies the x coordinate of the top left corner of the stimulus
        var stim_vert_loc = (trial.canvas_dimensions[1]/2) + stimulus_offset[1] - (trial.stimulus_dimensions[1] / 2); // specifies the y coordinate of the top left corner of the stimulus

        ctx.fillStyle = trial.background_colour;
        ctx.fillRect(stim_horiz_loc, stim_vert_loc, trial.stimulus_dimensions[0], trial.stimulus_dimensions[1]);

      } // end _DrawBlankStimulus function

      function _DrawFeedback(feedback_image) {

        // create new image element
        var img = new Image();

        // specify that the image should be drawn once it is loaded
        img.onload = function(){_ImageOnload(img, trial.feedback_dimensions, trial.feedback_offset)};

        // set the source path of the image; in JavaScript, this command also triggers the loading of the image
        img.src = feedback_image;

      } // end _DrawFeedback function

      function _ImageOnload(im, image_dimensions, image_offset){

        var stim_horiz_loc = (trial.canvas_dimensions[0]/2) + image_offset[0]  - (image_dimensions[0] / 2); // specifies the x coordinate of the top left corner of the stimulus
        var stim_vert_loc = (trial.canvas_dimensions[1]/2) + image_offset[1] - (image_dimensions[1] / 2); // specifies the y coordinate of the top left corner of the stimulus
        ctx.drawImage(im, stim_horiz_loc, stim_vert_loc, image_dimensions[0], image_dimensions[1]);

      } // end _StimulusOnload function

    } // end plugin.trial
  }
  BanditTrialPlugin.info = info;

  return BanditTrialPlugin;

})(jsPsychModule);
