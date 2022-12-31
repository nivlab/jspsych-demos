var jsPsychProbabilityElicitation = (function (jspsych) {
  'use strict';

  // specify input arguments of plugin
  const info = {
    name: 'probability-elicitation',
    parameters: {
      upper_prompt: {
        type: jspsych.ParameterType.STRING,
        default: 'How good was this orchard in the context of the task?',
        description: 'The prompt to be placed at the top of the screen'
      },
      lower_prompt: {
        type: jspsych.ParameterType.STRING,
        default: 'Click directly on the slider to enter your response.',
        description: 'The prompt to be placed at the bottom of the screen'
      },
      prompt_font: {
        type: jspsych.ParameterType.STRING,
        default: "20px Arial",
        description: 'A string specifying the size and font'
      },
      slider_images: {
        type: jspsych.ParameterType.STRING,
        default: null,
        description: 'The array of paths to slider images'
      },
      orchard_images: {
        type: jspsych.ParameterType.STRING,
        default: null,
        description: 'The array of paths to orchard images'
      },
      orchard_offset: {
        type: jspsych.ParameterType.INT,
        default: [0, -70],
        description: 'The offset [horizontal, vertica] of the centre of the track from the centre of the canvas in pixels'
      },
      orchard_dimensions: {
        type: jspsych.ParameterType.INT,
        default: [240, 170],
        description: 'Orchard stimulus dimensions in pixels [width, height]'
      },
      canvas_dimensions: {
        type: jspsych.ParameterType.INT,
        default: [1000, 500],
        description: 'The dimensions [width, height] of the html canvas on which things are drawn'
      },
      track_dimensions: {
        type: jspsych.ParameterType.INT,
        default: [700, 45],
        description: 'The dimensions [width, height] of the track for the slider'
      },
      track_offset: {
        type: jspsych.ParameterType.INT,
        default: [0, 100],
        description: 'The offset [horizontal, vertica] of the centre of the track from the centre of the canvas in pixels'
      },
      tab_dimensions: {
        type: jspsych.ParameterType.INT,
        default: [35, 35],
        description: 'The dimensions [width, height] of the tab for the affective slider'
      },
      background_colour: {
        type: jspsych.ParameterType.STRING,
        default: "#878787",
        description: 'The background colour'
      },
      post_click_duration: {
        type: jspsych.ParameterType.INT,
        default: 1000,
        description: 'Time (in milliseconds) to show the chosen slider post-choice'
      },
      initial_silent_duration: {
        type: jspsych.ParameterType.INT,
        default: 1000,
        description: 'Time (in milliseconds) before the screen shows the slider'
      },
      initial_blank_duration: {
        type: jspsych.ParameterType.INT,
        default: 500,
        description: 'Time (in milliseconds) before the screen shows the display'
      },
      image_allocation: {
        type:jspsych.ParameterType.INT,
        default: [0, 1, 2, 3],
        description: 'The mapping to subject-specific images (allows randomisation of visual stimuli)'
      }
    }
  }; // end plugin.info

  class ProbabilityElicitationPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      // add a canvas to the HTML_STRING, store its context, and draw a blank background
      var new_html = '<canvas id="trial_canvas" width="'+trial.canvas_dimensions[0]+'" height="'+trial.canvas_dimensions[1]+'"></canvas>';
      display_element.innerHTML = new_html;
      var ctx = document.getElementById('trial_canvas').getContext('2d');
      var canvas = document.getElementById('trial_canvas');

      // create variable to hold changeable components of the display
      var display = {
        tab_type: trial.slider_images[1],
        tab_loc: -1
      }

      var response = {
        raw_loc: null,
        loc: null
      }

      var reported_goodness = Array(trial.orchard_images.length).fill(null)

      var im_number = 0;
      DoElicitation();


      function DoElicitation() {

        // reset display
        display.tab_type = trial.slider_images[1];
        display.tab_loc = -1;

        // reset response variable
        response.raw_loc = null;
        response.loc = null;

        // set a timer to show the initial slider
        jsPsych.pluginAPI.setTimeout(function() {

          // draw the background
          DrawBackground();

          // draw the orchard
          DrawElement(trial.orchard_images[im_number], trial.orchard_dimensions, trial.orchard_offset);

          // draw the prompt text and anchor text
          DrawText();

          // draw the moveable components of the slider
          DrawSlider();

          // set a timer to show the initial slider
          jsPsych.pluginAPI.setTimeout(function() {
            canvas.addEventListener('mousemove', _OnMouseMove);
            canvas.addEventListener('mousedown', _OnMouseClick);
          }, trial.initial_silent_duration);

        }, trial.initial_blank_duration);

      }

      function DrawSlider() {

        // draw the main track
        DrawElement(trial.slider_images[0], trial.track_dimensions, trial.track_offset);

        // draw the slider tab itself
        if (display.tab_loc !== -1){
          DrawElement(display.tab_type, trial.tab_dimensions, [display.tab_loc, trial.track_offset[1]]);
        };

      }; // end DrawSlider function

      function DrawBackground() {

        // main canvas
        ctx.fillStyle = trial.background_colour;
        ctx.fillRect(0, 0, trial.canvas_dimensions[0], trial.canvas_dimensions[1]);

      }; // end DrawBackground function

      function DrawElement(stimulus, dimensions, offset){

        // create new image element
        var img = new Image();

        // specify that the image should be drawn once it is loaded
        img.onload = function(){_ImageOnload(img, dimensions, offset)};

        // set the source path of the image; in JavaScript, this command also triggers the loading of the image
        img.src = stimulus;

      }; // end _DrawTrack function

      function DrawText(){

        // Constants for drawing text
        ctx.font = trial.prompt_font;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";

        // left anchor
        var left_anchor = ['The worst', 'orchard'];
        for (i = 0; i < left_anchor.length; i++){
          ctx.fillText(left_anchor[i], trial.canvas_dimensions[0]/2 - trial.track_dimensions[0]/2 + ctx.measureText('M').width, trial.canvas_dimensions[1]/2 + trial.track_offset[1] + ( (i * 1.5) + 2.5) * ctx.measureText('M').width);
        }

        // centre anchor
        var centre_anchor = ['About', 'average'];
        for (i = 0; i < centre_anchor.length; i++){
          ctx.fillText(centre_anchor[i], trial.canvas_dimensions[0]/2, trial.canvas_dimensions[1]/2 + trial.track_offset[1] + ( (i * 1.5) + 2.5) * ctx.measureText('M').width);
        }

        // right anchor
        var right_anchor = ['The best', 'orchard'];
        for (i = 0; i < right_anchor.length; i++){
          ctx.fillText(right_anchor[i], trial.canvas_dimensions[0]/2 + trial.track_dimensions[0]/2 - ctx.measureText('M').width, trial.canvas_dimensions[1]/2 + trial.track_offset[1] + ( (i * 1.5) + 2.5) * ctx.measureText('M').width);
        }

        // upper prompt
        var upper_prompt = trial.upper_prompt;
        ctx.fillText(upper_prompt, trial.canvas_dimensions[0]/2, 3 * ctx.measureText('M').width/2);

        // lower prompt
        var lower_prompt = trial.lower_prompt;
        ctx.fillText(lower_prompt, trial.canvas_dimensions[0]/2, trial.canvas_dimensions[1] - (3 * ctx.measureText('M').width/2));

      }; // end _DrawText function

      // function to end trial when it is time
      function EndTrial() {

        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();

        // gather the data to store for the trial
        var trial_data = {
          'reported_goodness': reported_goodness
        };

        // move on to the next trial
        jsPsych.finishTrial(trial_data);

      }; // end EndTrial function

      function _ImageOnload(im, image_dimensions, image_offset){

        var stim_horiz_loc = (trial.canvas_dimensions[0]/2) + image_offset[0]  - (image_dimensions[0] / 2); // specifies the x coordinate of the top left corner of the stimulus
        var stim_vert_loc = (trial.canvas_dimensions[1]/2) + image_offset[1] - (image_dimensions[1] / 2); // specifies the y coordinate of the top left corner of the stimulus
        ctx.drawImage(im, stim_horiz_loc, stim_vert_loc, image_dimensions[0], image_dimensions[1]);

      } // end _StimulusOnload function

      function _windowToCanvas(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();

        return { x: x - bbox.left * (canvas.width  / bbox.width),
          y: y - bbox.top  * (canvas.height / bbox.height)
        };
      }; //end _windowToCanvas function

      function _OnMouseMove(e) {

        var loc = _windowToCanvas(canvas, e.clientX, e.clientY);
        if ( loc.x < canvas.width/2 - trial.track_dimensions[0]/2 + trial.tab_dimensions[0]/2) {
          display.tab_loc = -trial.track_dimensions[0]/2 + trial.tab_dimensions[0]/2
        } else if ( loc.x > canvas.width/2 + trial.track_dimensions[0]/2 - trial.tab_dimensions[0]/2)  {
          display.tab_loc = trial.track_dimensions[0]/2 - trial.tab_dimensions[0]/2
        } else {
          display.tab_loc = loc.x - (canvas.width / 2)
        };
        DrawSlider();

      }; // end _OnMouseMove function

      function _OnMouseClick(e) {

        var loc = _windowToCanvas(canvas, e.clientX, e.clientY);

        if (
          (loc.x > canvas.width/2 + trial.track_offset[0] - trial.track_dimensions[0] / 2) &&
          (loc.x < canvas.width/2 + trial.track_offset[0] + trial.track_dimensions[0] / 2) &&
          (loc.y > canvas.height/2 + trial.track_offset[1] - trial.track_dimensions[1] / 2) &&
          (loc.y < canvas.height/2 + trial.track_offset[1] + trial.track_dimensions[1] / 2)
        ){

          // turn off tab location updating
          canvas.removeEventListener('mousemove', _OnMouseMove);
          canvas.removeEventListener('mousedown', _OnMouseClick);

          // change tab colour and draw it
          display.tab_type = trial.slider_images[2];
          DrawSlider();

          // calculate chosen location as a proportion of the scale
          response.raw_loc = loc.x;
          response.loc = (loc.x - (canvas.width/2 - trial.track_dimensions[0]/2)) / trial.track_dimensions[0];

          // log it
          reported_goodness[trial.image_allocation.indexOf(im_number)] = response.loc;

          // set a timer and finish the trial
          jsPsych.pluginAPI.setTimeout(function() {
            if (im_number == trial.orchard_images.length-1){
              EndTrial();
            } else {
              im_number += 1;
              DoElicitation();
            }
          }, trial.post_click_duration);

        }


      }; // end _OnMouseMove function

    }; // end plugin.trial

  }
  ProbabilityElicitationPlugin.info = info;

  return ProbabilityElicitationPlugin;

})(jsPsychModule);
