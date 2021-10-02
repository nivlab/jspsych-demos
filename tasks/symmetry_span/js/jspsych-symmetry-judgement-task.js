/*
 * Modified by Mingyu Song, based on github.com/mahiluthra/working_memory_tests
 */

jsPsych.plugins["symmetry-judgement-task"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'symmetry-judgement-task',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      size: {
        type: jsPsych.plugins.parameterType.INT, // INT, IMAGE, KEYCODE, STRING, FUNCTION, FLOAT
        default_value: undefined
      },
      number_darkened: {
        type: jsPsych.plugins.parameterType.INT,
        default_value: undefined
      },
      proportion: {
        type: jsPsych.plugins.parameterType.FLOAT,
        default: 0.5
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Choices',
        default: ['YES', 'NO'],
        array: true,
        description: 'The labels for the buttons.'
      },
      button_html: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Button html',
        default: '<button class="jspsych-btn-numpad" style = "width:120px; font-size: 16px" >%choice%</button>',
        array: true,
        description: 'The html of the button. Can create own style.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      size_cells: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 50,
        description: 'How long to show the trial.'
      },
      black_boxes: {
        type: jsPsych.plugins.parameterType.ARRAY,
        pretty_name: 'Black boxes',
        default: null,
        description: 'Location of black boxes in the grid.'
      },
      stimulus_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stimulus name',
        default: null,
        description: 'Stimulus image filename.'
      },
      stimulus_symmetry: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Stimulus symmetry',
        default: null,
        description: 'Whether the stimulus image is symmetric or not.'
      }
    }
  }

  plugin.trial = function (display_element, trial) {

    var html = '<div id="jspsych-html-button-response-stimulus" >' + trial.stimulus + '<br><br></div>';
    display_element.innerHTML = html

    // making half of matrix:
    var rows = trial.size;
    var columns = trial.size / 2;
    var matrix = [];
    for (var i = 0; i < rows; i++) {
      m1 = i;
      for (var h = 0; h < columns; h++) {
        m2 = h;
        matrix.push([m1, m2])
      }
    };

    if (trial.black_boxes !== null) {   // This code uses the symmetry judgement stimuli from Engle lab version
      var blackBoxesFinal = trial.black_boxes
    }

    else {  // The following code makes random symmetry judgement stimuli

      // assigning number for black boxes randomly in half of matrix:
      blackBoxNumber = jsPsych.randomization.sampleWithoutReplacement(trial.number_darkened, 1)
      blackBoxes = (jsPsych.randomization.sampleWithoutReplacement(matrix, blackBoxNumber))

      // creating identical of matrix, but with black boxes removed:
      for (i = 0; i < blackBoxNumber; i++) {
        h = blackBoxes[i];
        id = matrix.indexOf(h);
        matrix.splice(id, 1);
      }

      // creating symmetric boxes:
      blackBoxesSymmetric = []
      for (i = 0; i < blackBoxNumber; i++) {
        h = 7 - blackBoxes[i][1]
        blackBoxesSymmetric.push([blackBoxes[i][0], h])
      }

      // p of being symmetric:
      var pSymmetric = jsPsych.randomization.sampleWithReplacement([0, 1], 1, [trial.proportion, 1 - trial.proportion])[0]


      //if not symmetric, change two boxes:
      if (pSymmetric == 1) {
        numberBoxesDifferent = jsPsych.randomization.sampleWithoutReplacement([3, 4], 1)[0];
        var boxes = jsPsych.randomization.sampleWithoutReplacement(blackBoxes, (blackBoxNumber - numberBoxesDifferent));
        var boxesAdd = jsPsych.randomization.sampleWithoutReplacement(matrix, numberBoxesDifferent);
        blackBoxes = []
        blackBoxes = boxes.concat(boxesAdd)
      }

      var blackBoxesFinal = blackBoxes.concat(blackBoxesSymmetric)

    }

    var columns = trial.size;

    var matrix = [];
    for (var i = 0; i < rows; i++) {
      m1 = i;
      for (var h = 0; h < columns; h++) {
        m2 = h;
        matrix.push([m1, m2])
      }
    };

    paper_size = 4 * 2 * trial.size_cells;

    display_element.innerHTML += '<div id="jspsych-visual-search-circle-container" style= "position: relative; width:' + paper_size + 'px; height:' + paper_size + 'px"></div>';
    var paper = display_element.querySelector("#jspsych-visual-search-circle-container");

    for (i = 0; i < matrix.length; i++) {
      paper.innerHTML += '<img src="./img/whitebox.png" style="position: absolute; top:' + matrix[i][0] * (trial.size_cells - 2) + 'px; left:' + matrix[i][1] * (trial.size_cells - 2) + 'px; width:' + trial.size_cells + 'px; height:' + trial.size_cells + 'px;"></img>';
    }

    for (i = 0; i < blackBoxesFinal.length; i++) {
      paper.innerHTML += '<img src="./img/blackbox.png" style="position: absolute; top:' + blackBoxesFinal[i][0] * (trial.size_cells - 2) + 'px; left:' + blackBoxesFinal[i][1] * (trial.size_cells - 2) + 'px; width:' + trial.size_cells + 'px; height:' + trial.size_cells + 'px;"></img>';
    }

    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.choices.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in html-button-response plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.choices.length; i++) {
        buttons.push(trial.button_html);
      }
    }

    var html = '<div id="jspsych-html-button-response-btngroup">';
    for (var i = 0; i < trial.choices.length; i++) {
      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
      html += '<div class="jspsych-html-button-response-button"  style="display: inline-block; margin:20px 30px" id="jspsych-html-button-response-button-' + i + '" data-choice="' + i + '">' + str + '</div>';
    }
    html += '</div>';

    display_element.innerHTML += html

    var start_time = Date.now();

    // add event listeners to buttons
    for (var i = 0; i < trial.choices.length; i++) {
      display_element.querySelector('#jspsych-html-button-response-button-' + i).addEventListener('click', function (e) {
        var choice = e.currentTarget.getAttribute('data-choice'); // integer: 0 or 1, index for choices
        after_response(choice);
      });
    }

    // store response
    var data = {
      stimulus_name: null,
      stimulus_symmetry: null,
      rt: null,
      choice_symmetry: null,
      accuracy: null,
    };

    function after_response(choice) {
      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      data.rt = rt;

      // measure choice
      data.choice_symmetry = trial.choices[choice] == 'YES';

      clear_display();
      end_trial();
    };

    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        clear_display();
        end_trial();
      }, trial.trial_duration);
    }


    function clear_display() {
      display_element.innerHTML = '';
    }

    function end_trial() {

      // disable all the buttons after a response
      var btns = document.querySelectorAll('.jspsych-html-button-response-button button');
      for (var i = 0; i < btns.length; i++) {
        //btns[i].removeEventListener('click');
        btns[i].setAttribute('disabled', 'disabled');
      }

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // record stimulus symmetry
      if (trial.black_boxes !== null) {
        data.stimulus_symmetry = trial.stimulus_symmetry;
      } else {
        data.stimulus_symmetry = pSymmetric;
      }
      data.accuracy = data.choice_symmetry == data.stimulus_symmetry;

      // gather the data to store for the trial
      var trial_data = {
        stimulus_name: trial.stimulus_name,
        stimulus_symmetry: data.stimulus_symmetry,
        rt: data.rt,
        choice_symmetry: data.choice_symmetry,
        accuracy: data.accuracy
      };

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

  };

  return plugin;
})();
