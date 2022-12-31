var jsPsychAudioTest = (function (jspsych) {
  'use strict';

  const info = {
    name: 'audio-test',
    description: '',
    parameters: {
      stimulus: {
        type: jspsych.ParameterType.AUDIO,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The array of audio stimuli to be played.'
      },
      correct_responses: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Choices',
        default: ['tiger', 'shark', 'turtle', 'fish'],
        array: true,
        description: 'The correct responses for each audio stimulus'
      },
      choices: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Choices',
        default: ['Submit your answer', 'Play the word again'],
        array: true,
        description: 'The button labels.'
      },
      margin_vertical: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Margin vertical',
        default: '0px',
        description: 'Vertical margin of button.'
      },
      margin_horizontal: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Margin horizontal',
        default: '8px',
        description: 'Horizontal margin of button.'
      },
      prompt: {
        type: jspsych.ParameterType.STRING,
        pretty_name: 'Prompt',
        default: '<br>If you are unable to hear the word, you should return this experiment.',
      }
    }
  }

  /**
  * audio-test
  * Daniel Bennett
  *
  * plugin for playing an audio file, getting a text response, and verifying that it is correct
  * made by playing with jspsych template plugins
  *
  **/
  class AudioTestPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      var context = jsPsych.pluginAPI.audioContext();
      var audio_ix = jsPsych.randomization.sampleWithReplacement([0,1,2,3], 1);
      var audio = null;

      // load audio file
      jsPsych.pluginAPI.getAudioBuffer(trial.stimulus[audio_ix])
      .then(function (buffer) {
        if (context !== null) {
          audio = context.createBufferSource();
          audio.buffer = buffer;
          audio.connect(context.destination);
        } else {
          audio = buffer;
          audio.currentTime = 0;
        }
      })
      .catch(function (err) {
        console.error(`Failed to load audio file "${trial.stimulus}". Try checking the file path. We recommend using the preload plugin to load audio files.`)
        console.error(err)
      });

      // display stimulus
      var html = '<div id="jspsych-html-button-response-stimulus">In order to complete this eperiment, you will need to have your computer audio on. If you do not have computer audio, you will not be able to complete this experiment.<br><br>We will now test your audio. When you press the button below, you will hear a word being spoken.<br><br>On the following screen, we will ask you to tell us what word you heard. This allows us to verify that your audio is working. </div>';

      //display buttons
      const str = '<button class="jspsych-btn">Continue</button>';
      html += '<div id="jspsych-html-button-response-btngroup">';
      html += '<div class="jspsych-html-button-response-button" style="display: inline-block; margin:'+trial.margin_vertical+' '+trial.margin_horizontal+'" id="jspsych-html-button-response-button-' + 0 +'" data-choice="'+0+'">'+str+'</div>';
      html += '</div>';

      display_element.innerHTML = html;

      // add event listeners to buttons
      display_element.querySelector('#jspsych-html-button-response-button-' + 0).addEventListener('click', function(e){
        do_audio_test();
      });

      // store response
      var response = {
        rt: null,
        button: null
      };

      function do_audio_test() {

        html = '<form>Please type the word that you heard in the box below.<br>(HINT: it is a type of animal)<br><br><input type="text" name="response", id="word_response", style="border:2px solid black;" onkeypress="return noenter()"></form><br><br>'

        //display buttons
        var buttons = [];
        for (var i = 0; i < trial.choices.length; i++) {
          buttons.push('<button class="jspsych-btn">%choice%</button>');
        }

        html += '<div id="jspsych-audio-button-response-btngroup">';
        for (var i = 0; i < trial.choices.length; i++) {
          var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
          html += '<div class="jspsych-audio-button-response-button" style="cursor: pointer; display: inline-block; margin:'+trial.margin_vertical+' '+trial.margin_horizontal+'" id="jspsych-audio-button-response-button-' + i +'" data-choice="'+i+'">'+str+'</div>';
        }
        html += '</div>';

        //show prompt if there is one
        if (trial.prompt !== null) {
          html += trial.prompt;
        }

        display_element.innerHTML = html;

        // start time
        var startTime = performance.now();

        // start audio
        if (context !== null) {
          startTime = context.currentTime;
          audio.start(startTime);
        } else {
          audio.play();
        }

        // add event listeners to buttons
        display_element.querySelector('#jspsych-audio-button-response-button-0').addEventListener('click', function(e){
          check_response();
        });

        display_element.querySelector('#jspsych-audio-button-response-button-1').addEventListener('click', function(e){
          // load audio file
          jsPsych.pluginAPI.getAudioBuffer(trial.stimulus[audio_ix])
          .then(function (buffer) {
            if (context !== null) {
              audio = context.createBufferSource();
              audio.buffer = buffer;
              audio.connect(context.destination);
              startTime = context.currentTime;
              audio.start(startTime);
            } else {
              audio.play()
            }
          })
          .catch(function (err) {
            console.error(`Failed to load audio file "${trial.stimulus}". Try checking the file path. We recommend using the preload plugin to load audio files.`)
            console.error(err)
          });
        });

      };

      function check_response(){

        var input_val = document.getElementById("word_response").value;
        if (input_val.toUpperCase().trim() === trial.correct_responses[audio_ix].toUpperCase()){
          end_trial();
        } else {
          alert('Sorry, that response is incorrect. Please try again or return the experiment to Prolific.')
        }

      };

      // function to end trial when it is time
      function end_trial() {

        // stop the audio file if it is playing
        // remove end event listeners if they exist
        if(context !== null){
          audio.stop();
          audio.onended = function() { }
        } else {
          audio.pause();
          audio.removeEventListener('ended', end_trial);
        }

        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();

        // gather the data to store for the trial
        var trial_data = {
          "rt": response.rt,
          "stimulus": trial.stimulus,
          "button_pressed": response.button
        };

        // clear the display
        display_element.innerHTML = '';

        // move on to the next trial
        jsPsych.finishTrial(trial_data);
      };

    }
  }
  AudioTestPlugin.info = info;

  return AudioTestPlugin;

})(jsPsychModule);

function noenter() {
  return !(window.event && window.event.keyCode == 13);
}
