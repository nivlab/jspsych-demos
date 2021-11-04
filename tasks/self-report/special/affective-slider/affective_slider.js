
jsPsych.plugins["affective_slider"] = (function() {

  var plugin = {};

  // preload the affective slider images
  jsPsych.pluginAPI.registerPreload('affective_slider', 'AS_stimuli', 'image');

  // specify input arguments of plugin
  plugin.info = {
    name: 'affective_slider',
    parameters: {
      prompt: {
        type: jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: null,
        description: 'The prompt to be placed at the top of the slider'
      },
      slider_type: {
        type: jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: null,
        description: 'The type of the slider'
      },
      left_anchor: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: null,
        description: 'An index of where to find the image for the left anchor in the AS_stimuli array'
      },
      right_anchor: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: null,
        description: 'An index of where to find the image for the right anchor in the AS_stimuli array'
      },
      prompt_font: {
        type: jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: "20px Arial",
        description: 'A string specifying the size and font'
      },
      AS_stimuli: {
        type: jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: null,
        description: 'The array of paths to affective slider stimuli'
      },
      AS_dimensions: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [900, 350],
        description: 'The dimensions [width, height] of the html canvas on which the affective slider is drawn'
      },
      AS_border_width: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: 10,
        description: 'The width (in pixels) of the border around the canvas'
      },
      AS_border_colour: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: "#000000",
        description: 'The colour of the border around the canvas'
      },
      track_dimensions: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [500, 45],
        description: 'The dimensions [width, height] of the track for the affective slider'
      },
      track_offset: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [0, 0],
        description: 'The offset [horizontal, vertica] of the centre of the track from the centre of the canvas in pixels'
      },
      intensity_cue_dimensions: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [500, 40],
        description: 'The dimensions [width, height] of the intensity cue for the affective slider'
      },
      intensity_cue_offset: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [0, 50],
        description: 'The offset [horizontal, vertica] of the centre of the intensity cue from the centre of the canvas in pixels'
      },
      anchor_dimensions: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [70, 70],
        description: 'The dimensions [width, height] of the intensity cue for the affective slider'
      },
      tab_dimensions: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [35, 35],
        description: 'The dimensions [width, height] of the tab for the affective slider'
      },
      anchor_offset: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: [300, 0],
        description: 'The offset [horizontal, vertica] of the centre of the intensity cue from the centre of the canvas in pixels'
      },
      background_colour: {
        type: jsPsych.plugins.parameterType.STRING,
        default: "#FFFFFF",
        description: 'The background colour of the affective slider'
      },
      post_click_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: 1000,
        description: 'Time (in milliseconds) to show the chosen slider post-choice'
      },
      initial_silent_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: 1000,
        description: 'Time (in milliseconds) before the screen shows the slider'
      },
      initial_blank_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: 1000,
        description: 'Time (in milliseconds) before the screen shows the display'
      },
      bottom_text: {
        type: jsPsych.plugins.parameterType.STRING,
        default: 'You can use the mouse to move the gray slider. Enter your response by clicking on the slider.',
        description: 'Text at bottom of slider'
      },
    }
  }; // end plugin.info

  plugin.trial = function(display_element, trial) {

    // add a canvas to the HTML_STRING, store its context, and draw a blank background
    var new_html = '<canvas id="trial_canvas" width="'+trial.AS_dimensions[0]+'" height="'+trial.AS_dimensions[1]+'"></canvas>';
    display_element.innerHTML = new_html;
    var ctx = document.getElementById('trial_canvas').getContext('2d');
    var canvas = document.getElementById('trial_canvas');

    // create variable to hold changeable components of the display
    var display = {
      tab_type: trial.AS_stimuli[6], // unselected tab,
      tab_loc: -1
    }

    var response = {
      raw_loc: null,
      loc: null
    }

    // set a timer to show the initial slider
    jsPsych.pluginAPI.setTimeout(function() {

      // draw the background
      DrawBackground();

      // draw the intensity cue
      DrawElement(trial.AS_stimuli[1], trial.intensity_cue_dimensions, trial.intensity_cue_offset);

      // draw the left anchor
      DrawElement(trial.AS_stimuli[trial.left_anchor], trial.anchor_dimensions, [-trial.anchor_offset[0], trial.anchor_offset[1]]);

      // draw the left anchor
      DrawElement(trial.AS_stimuli[trial.right_anchor], trial.anchor_dimensions, [trial.anchor_offset[0], trial.anchor_offset[1]]);

      // draw the prompt text and bottom text
      DrawPrompt();

      // draw the moveable components of the slider
      DrawSlider();

      // set a timer to show the initial
      jsPsych.pluginAPI.setTimeout(function() {
        canvas.addEventListener('mousemove', _OnMouseMove);
        canvas.addEventListener('mousedown', _OnMouseClick);
      }, trial.initial_silent_duration);

    }, trial.initial_blank_duration);


    function DrawSlider() {

      // draw the main track
      DrawElement(trial.AS_stimuli[0], trial.track_dimensions, trial.track_offset);

      // draw the slider tab itself
      if (display.tab_loc !== -1){
        DrawElement(display.tab_type, trial.tab_dimensions, [display.tab_loc, trial.track_offset[1]]);
      };

    }; // end DrawSlider function

    function DrawBackground() {

      // main canvas
      ctx.fillStyle = trial.background_colour;
      ctx.fillRect(0, 0, trial.AS_dimensions[0], trial.AS_dimensions[1]);

      // border
      ctx.lineWidth = trial.AS_border_width;
      ctx.strokeStyle = trial.AS_border_colour;
      ctx.strokeRect(0, 0, trial.AS_dimensions[0], trial.AS_dimensions[1]);

    }; // end DrawBackground function

    function DrawElement(stimulus, dimensions, offset){

      // create new image element
      var img = new Image();

      // specify that the image should be drawn once it is loaded
      img.onload = function(){_ImageOnload(img, dimensions, offset)};

      // set the source path of the image; in JavaScript, this command also triggers the loading of the image
      img.src = stimulus;

    }; // end _DrawTrack function

    function DrawPrompt(){

      // Prompt text
      ctx.font = trial.prompt_font;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      var prompt_text = trial.prompt;
      ctx.fillText(prompt_text, trial.AS_dimensions[0]/2, 5 * ctx.measureText('M').width/2);

      // bottom text
      var bottom_text = trial.bottom_text;
      ctx.fillText(bottom_text, trial.AS_dimensions[0]/2, trial.AS_dimensions[1] - (2 * ctx.measureText('M').width/2));

    }; // end _DrawTrack function

    // function to end trial when it is time
    function EndTrial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        'slider_type': trial.slider_type,
        'raw_loc': response.raw_loc,
        'loc': response.loc
      };

      // move on to the next trial
      jsPsych.finishTrial(trial_data);

    }; // end EndTrial function

    function _ImageOnload(im, image_dimensions, image_offset){

      var stim_horiz_loc = (trial.AS_dimensions[0]/2) + image_offset[0]  - (image_dimensions[0] / 2); // specifies the x coordinate of the top left corner of the stimulus
      var stim_vert_loc = (trial.AS_dimensions[1]/2) + image_offset[1] - (image_dimensions[1] / 2); // specifies the y coordinate of the top left corner of the stimulus
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

         // change tab colour and draw it
         display.tab_type = trial.AS_stimuli[7];
         DrawSlider();

         // calculate chosen location as a proportion of the scale
         response.raw_loc = loc.x;
         response.loc = (loc.x - (canvas.width/2 - trial.track_dimensions[0]/2)) / trial.track_dimensions[0];

         // set a timer and finish the trial
         jsPsych.pluginAPI.setTimeout(function() {
           EndTrial();
         }, trial.post_click_duration);

       }


    }; // end _OnMouseMove function

  }; // end plugin.trial

  return plugin;

})(); // end plugin function
