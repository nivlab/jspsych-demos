var jsPsychTurkRsl = (function (jspsych) {
  'use strict';

  const info = {
    name: 'turk-rsl',
    parameters: {
      stimuli: {
        type:jspsych.ParameterType.STRING,
        default: null,
        description: 'The array of paths to stimuli'
      },
      feedback_images: {
        type:jspsych.ParameterType.STRING,
        default: null,
        description: 'The array of paths to feedback images'
      },
      image_allocation: {
        type:jspsych.ParameterType.INT,
        default: [0, 1, 2, 3],
        description: 'The mapping to subject-specific images (allows randomisation of visual stimuli)'
      },
      canvas_dimensions: {
        type:jspsych.ParameterType.INT,
        default: [1000, 600],
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
        default: [340, 0],
        description: 'The offset [horizontal, vertica] of the centre of each stimulus from the centre of the canvas in pixels'
      },
      stimulus_dimensions: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Stimulus dimensions',
        default: [240, 170],
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
        default: 10,
        description: 'Thickness (in pixels) of the selection box'
      },
      selection_colour: {
        type: jspsych.ParameterType.STRING,
        default: '#000000', // #FFFFFF is white
        description: 'The colour of the selection box'
      },
      feedback_offset: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Feedback offset',
        default: [0, 0],
        description: 'The offset [horizontal, vertica] of the centre of the feedback from the centre of the canvas in pixels'
      },
      feedback_height: {
        type: jspsych.ParameterType.INT,
        pretty_name: 'Feedback dimensions',
        default: 150,
        description: 'Desired height of feedback image(in pixels)'
      }
    }
  }

  class TurkRslPlugin {
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
        left_image: null,
        right_image: null,
        left_box: null,
        right_box: null
      }

      ///// TRIAL LOOP /////

      // left stimulus
      if (trial.left_image === null){
        display.left_image = null;
      } else {
        display.left_image = trial.stimuli[trial.image_allocation[trial.left_image]];
      }

      // right stimulus
      if (trial.right_image === null){
        display.right_image = null;
      } else {
        display.right_image = trial.stimuli[trial.image_allocation[trial.right_image]];
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
        }

        // draw the left stimulus
        if (display.left_image !== null){
          _DrawStimulus([display.left_image], [-trial.stimulus_offset[0], trial.stimulus_offset[1]]);
        } else{
          _DrawBlankStimulus([-trial.stimulus_offset[0], trial.stimulus_offset[1]]);
        }

        // if the right stimulus is selected, show the appropriate selection box
        if (display.right_box == "selected"){
          _DrawSelectionBox(trial.stimulus_offset[0], trial.stimulus_offset[1], trial.selection_colour);
        }

        // draw the right stimulus
        if (display.right_image !== null){
          _DrawStimulus([display.right_image], [trial.stimulus_offset[0], trial.stimulus_offset[1]]);
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
          response.chosen_image = display.left_image;
          response.ur_chosen_image = trial.left_image;
          display.left_box = "selected";
        } else if (jsPsych.pluginAPI.compareKeys(trial.right_key, response.key)){
          response.choice = 'right';
          response.chosen_image = display.right_image;
          response.ur_chosen_image = trial.right_image;
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

        // get feedback value
        if (response.ur_chosen_image == 0){
          response.feedback = 0;
        } else if (response.ur_chosen_image == 1){
          response.feedback = 1;
        } else if (response.ur_chosen_image == 2){
          response.feedback = 2;
        } else if (response.ur_chosen_image == 3){
          response.feedback = jsPsych.randomization.sampleWithReplacement([0, 2], 1, [0.5, 0.5]);
        } else {
          response.feedback = 0;
        }
        display.feedback_image = trial.feedback_images[response.feedback];

        // draw the updated stimuli to the screen
        DrawScreen(ctx);
        _DrawFeedback(display.feedback_image);

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
          'choice_type': trial.choice_type,
          'block': counter.block,
          'trial': counter.trial,
          'left_image': display.left_image,
          'right_image': display.right_image,
          'ur_left_image': trial.left_image,
          'ur_right_image': trial.right_image,
          'chosen_image': response.chosen_image,
          'ur_chosen_image': response.ur_chosen_image,
          'rt': response.rt,
          'key_char': response.key_char,
          'choice': response.choice,
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
        img.onload = function(){
          _ImageOnload(img, [(trial.feedback_height/img.height) * img.width, trial.feedback_height], trial.feedback_offset)
        };

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
  TurkRslPlugin.info = info;

  return TurkRslPlugin;

})(jsPsychModule);
