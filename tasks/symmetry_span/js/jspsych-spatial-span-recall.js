/*
 * Modified by Mingyu Song, based on github.com/mahiluthra/working_memory_tests
 */

jsPsych.plugins["spatial-span-recall"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'spatial-span-recall',
    description: '',
    parameters: {
      grid_size: {
        type: jsPsych.plugins.parameterType.INT, // INT, IMAGE, KEYCODE, STRING, FUNCTION, FLOAT
        default_value: 4,
        description: 'size of grid for stimuli.'
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
        default: 70,
        description: 'How long to show the trial.'
      },
      correct_order: {
        type: jsPsych.plugins.parameterType.INT,
        default: undefined,
        description: 'Recored the correct array'
      }
    }
  }


  plugin.trial = function (display_element, trial) {

    // making matrix:
    var grid = trial.grid_size;
    var recalledGrid = [];
    var correctGrid = [];
    var nRecalled = 0
    var nothing = " "

    function indexOfArray(val, array) {
      var
        hash = {},
        indexes = {},
        i, j;
      for (i = 0; i < array.length; i++) {
        hash[array[i]] = i;
      }
      return (hash.hasOwnProperty(val)) ? hash[val] : -1;
    };

    var divArray = []
    var ttArray = []
    recordClick = function (data) {
      var tt = data.getAttribute('id')
      var div = document.getElementById(tt);
      var tt = ("#" + tt)
      nRecalled += 1
      div.innerHTML = nRecalled
      display_element.querySelector(tt).className += '-responded';
      recalledGrid.push(data.getAttribute('data-choice'));
      console.log(recalledGrid)
      ttArray.push(tt)
      divArray.push(div)
    }

    clearSpace = function () {
      if (nRecalled > 0) {
        lastGrid = recalledGrid[recalledGrid.length - 1]
        recalledGrid = recalledGrid.slice(0, (recalledGrid.length - 1))
        console.log(recalledGrid)
        nRecalled -= 1
        if (lastGrid !== "blank") {
          var div = divArray[divArray.length - 1]
          var tt = ttArray[ttArray.length - 1]
          div.innerHTML = nothing
          display_element.querySelector(tt).className = "jspsych-btn-grid"
          divArray = divArray.slice(0, (divArray.length - 1))
          ttArray = ttArray.slice(0, (ttArray.length - 1))
        }
      }
      // for (i=0; i<matrix.length; i++){
      //  var id = "jspsych-spatial-span-grid-button-"+i
      //   var div = document.getElementById(id);
      //   div.innerHTML = nothing
      //   display_element.querySelector("#"+"jspsych-spatial-span-grid-button-"+i).className ="jspsych-btn-grid"
      // }
    }

    blankSpace = function () {
      recalledGrid.push("blank")
      nRecalled += 1
    }

    var matrix = [];
    for (var i = 0; i < grid; i++) {
      m1 = i;
      for (var h = 0; h < grid; h++) {
        m2 = h;
        matrix.push([m1, m2])
      }
    };

    for (var i = 0; i < trial.correct_order.length; i++) {
      correctGrid.push(indexOfArray(trial.correct_order[i], matrix))
    }

    //red_box = trial.selected_box

    paper_size = grid * trial.size_cells;

    display_element.innerHTML = '<div style="font-size:20; text-align:center"><br><br>Select the squares in the order presented. Use the Blank button to fill in forgotten items.<br><br></div>'
    display_element.innerHTML += '<div><br></div>'
    display_element.innerHTML += '<div id="jspsych-html-button-response-btngroup" style= "display: block; margin: 0 auto; position: relative; width:' + paper_size + 'px; height:' + paper_size + 'px"></div>';
    var paper = display_element.querySelector("#jspsych-html-button-response-btngroup");

    for (var i = 0; i < matrix.length; i++) {
      paper.innerHTML += '<div class="jspsych-btn-grid" style="position: absolute; top:' + matrix[i][0] * (trial.size_cells - 3) + 'px; left:' + matrix[i][1] * (trial.size_cells - 3) + 'px"; id="jspsych-spatial-span-grid-button-' + i + '" data-choice="' + i + '" onclick="recordClick(this)">' + nothing + '</div>';
    }

    display_element.innerHTML += '<div></n></div>'

    display_element.innerHTML += '<div class="jspsych-btn-numpad" style="display: inline-block; position: relative; top:10px;  margin:' + 10 + ' ' + 0 + '" id="jspsych-html-button-response-button-blank" onclick="blankSpace(this)">Blank</div>';

    display_element.innerHTML += '<div></n></div>'

    display_element.innerHTML += '<div class="jspsych-btn-numpad" style="display: inline-block; margin:' + 30 + ' ' + 3 + '" id="jspsych-html-button-response-button-clear" onclick="clearSpace(this)">Backspace</div>';

    display_element.innerHTML += '<div class="jspsych-btn-numpad" style="display: inline-block; margin:' + 30 + ' ' + 30 + '" id="jspsych-html-button-response-button">Confirm</div>';


    var start_time = Date.now();


    display_element.querySelector('#jspsych-html-button-response-button').addEventListener('click', function (e) {
      var Ncorrect = 0
      for (var i = 0; i < correctGrid.length; i++) {
        if (recalledGrid[i] == correctGrid[i]) {
          Ncorrect += 1
        }
      }
      after_response(Ncorrect);
    });

    var response = {
      rt: null,
      button: null
    };

    function after_response(Ncorrect) {
      // measure rt
      var end_time = Date.now();
      var rt = end_time - start_time;
      response.Ncorrect = Ncorrect;
      response.rt = rt;

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

      // gather the data to store for the trial
      var trial_data = {
        rt: response.rt,
        recall: recalledGrid,
        stimuli: correctGrid,
        Ncorrect: response.Ncorrect,
      }

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    }
  };

  return plugin;
})();
