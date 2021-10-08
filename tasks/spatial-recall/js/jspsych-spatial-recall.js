/**
* jspsych-spatial-recall
* Sam Zorowitz
*
* plugin for running one trial of a spatial recall task
*
**/

jsPsych.plugins["spatial-recall"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'spatial-recall',
    description: '',
    parameters: {
      sequence: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sequence',
        array: true,
        description: 'The sequence for the participant to learn (0-indexed).'
      },
      backwards: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Backwards',
        default: false,
        description: 'If participant should report sequence in backwards order.'
      },
      grid_size: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Grid size',
        default: 4,
        description: 'The number of tiles in each grid row/column.'
      },
      tile_size: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Tile size',
        default: 64,
        description: 'The size of each grid tile (in pixels).'
      },
      tile_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Tile duration',
        default: 750,
        description: 'How long to show a tile.'
      },
      iti_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'ITI duration',
        default: 250,
        description: 'How long between tile presentations.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: 500,
        description: 'How long to hide the stimulus.'
      },
      response_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Response duration',
        default: null,
        description: 'How long to collect responses.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // Error-catching: assert all elements in sequence are valid
    if ( Math.min(...trial.sequence) < 0 || Math.max(...trial.sequence) > trial.grid_size**2 ) {
      throw '"element of `trial.sequence` outside of grid"';
    }

    // ---------------------------------- //
    // Section 1: Define HTML             //
    // ---------------------------------- //

    // Define HTML
    var new_html = '';

    // Insert CSS
    new_html += `<style>
    .jspsych-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    /* Hide cursor during sequence presentation */
    .jspsych-content-wrapper[status='hide'] {
      cursor: none;
    }

    p {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }

    .spatial-header {

      /* Header position */
      position: relative;

      /* Header layout */
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      /* Header styling */
      visibility: visible;
      margin-bottom: 16px;
      font-size: 28px;

    }

    /* Prevent cursor events during sequence presentation */
    .spatial-header[status='hide'] {
      visibility: hidden;
    }

    .spatial-grid {

      /* Grid position */
      position: relative;

      /* Grid layout */
      display: grid;
      grid-template-columns: repeat(${trial.grid_size}, calc(100% / ${trial.grid_size}));
      grid-template-rows: repeat(${trial.grid_size}, calc(100% / ${trial.grid_size}));

      /* Grid border */
      border: 1px solid black;

    }

    /* Prevent cursor events during sequence presentation */
    .spatial-grid[status='hide'] {
      pointer-events: none;
    }

    /* Prevent cursor events after maximum number of entries reached */
    .spatial-grid[status='complete'] {
      cursor: not-allowed;
    }

    .spatial-grid .spatial-grid-tile {

      /* Grid tile size */
      height: ${trial.tile_size}px;
      width: ${trial.tile_size}px;

      /* Grid tile border */
      border: 1px solid black;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;

    }

    /* Highlight tile on hover event */
    .spatial-grid .spatial-grid-tile:hover {
      background-color: #0198E180;
    }

    /* Highlight tile on click event */
    .spatial-grid .spatial-grid-tile:active {
      background-color: #0198E1;
    }

    /* Highlight tile during sequence */
    .spatial-grid .spatial-grid-tile[status='fill'] {
      background-color: #0198E1;
    }

    /* Prevent cursor events after maximum number of entries reached */
    .spatial-grid[status='complete'] .spatial-grid-tile {
      pointer-events: none;
    }

    .spatial-entry-bar {

      /* Bar position */
      position: relative;

      /* Bar size */
      width: calc(${trial.grid_size} * ${trial.tile_size}px);
      height: 20px;

      /* Bar layout */
      display: flex;
      flex-direction: row;

      /* Bar styling */
      visibility: visible;
      margin-top: 2px;
      margin-bottom: 8px;

    }

    /* Hide element during sequence presentation */
    .spatial-entry-bar[status='hide'] {
      visibility: hidden;
    }

    .spatial-entry-bar .entry {

      /* Entry indicator size */
      height: 18px;
      width: 18px;

      /* Entry indicator border */
      border: 1px solid grey;
      border-radius: 50%;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;

    }

    /* Highlight entry after response given */
    .spatial-entry-bar .entry[status='fill'] {
      background: #0198E180;
    }

    .spatial-button-bar {

      /* Bar position */
      position: relative;

      /* Bar layout */
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      /* Bar size */
      width: calc(${trial.grid_size} * ${trial.tile_size}px);
      height: 32px;
      visibility: visible;

    }

    .spatial-button-bar[status='hide'] {
      visibility: hidden;
    }

    button[action='clear'], button[action='submit'] {

      /* Button size */
      width: 90px;
      height: 32px;

      /* Button aesthetics */
      background: #FFFFFF;
      padding: 4px 12px;

      /* Button border */
      border: 1px solid #CCCCCC;
      border-radius: 4px;

      /* Button font */
      font-size: 17px;
      line-height: 1.4;
      text-align: center;

    }
    button[action='clear'] {
      left: calc(50% - ${trial.tile_size}px * ${trial.grid_size} / 2);
    }
    button[action='submit'] {
      right: calc(50% - ${trial.tile_size}px * ${trial.grid_size} / 2);
    }
    button[action='clear']:hover, button[action='submit']:hover {

      /* Highlight button on hover event */
      background: #F5F5F5;
    }
    button[action='clear'][status='hide'], button[action='submit'][status='hide'] {

      /* Hide element during sequence presentation */
      display: none;

    }
    </style>`;

    // Draw header.
    new_html += '<div class="spatial-header" id="header">';
    new_html += '<p>RECALL' + (trial.backwards ? '<small><br>(BACKWARDS)</small>' : '') + '</p>';
    new_html += '</div>';

    // Draw tiles.
    new_html += '<div class="spatial-grid" id="spatial-grid">';
    for (let i = 0; i < trial.grid_size**2; i++) {
      new_html += `<div class="spatial-grid-tile" id="tile-${i}" data-choice=${i}></div>`;
    }
    new_html += '</div>';

    // Add spatial recall entry indicators.
    new_html += '<div class="spatial-entry-bar" id="entry-bar">';
    for (let i = 0; i < trial.sequence.length; i++) {
      new_html += `<div class="entry" id="entry-${i}"></div>`;
    }
    new_html += '</div>';

    // Add buttons.
    new_html += '<div class="spatial-button-bar" id="button-bar">';
    new_html += '<button type="button" id="clear" action="clear">Clear</button>';
    new_html += '<button type="button" id="submit" action="submit">Submit</button>';
    new_html += '</div>';

    // Display HTML.
    display_element.innerHTML = new_html;

    // Add event listeners to tiles
    for (let i = 0; i < trial.grid_size**2; i++) {
      display_element.querySelector('#tile-' + i).addEventListener('click', function(e){
        var choice = e.currentTarget.getAttribute('data-choice');
        after_response(choice);
      });
    };

    // Add event listeners to buttons
    display_element.querySelector('#clear').addEventListener('click', function(e){
      clear_responses();
    });
    display_element.querySelector('#submit').addEventListener('click', function(e){
      end_trial();
    });

    // ---------------------------------- //
    // Section 2: Sequence presentation   //
    // ---------------------------------- //

    // function to toggel display elements
    function toggle_elements(status) {

      // Hide elements
      display_element.querySelector('#header').setAttribute('status', status);
      display_element.querySelector('#entry-bar').setAttribute('status', status);
      display_element.querySelector('#button-bar').setAttribute('status', status);

      // Hide cursor
      // console.log(document.querySelector('.jspsych-content-wrapper'))
      document.querySelector('.jspsych-content-wrapper').setAttribute('status', status);

      // Hide mouse events
      display_element.querySelector('#spatial-grid').setAttribute('status', status);

    }

    // function to display sequence to participant
    function present_sequence(trial) {

      // hide elements
      toggle_elements('hide');

      // define epoch time
      const epoch = trial.tile_duration + trial.iti_duration;

      // define presentation event times
      trial.sequence.forEach((j, i) => {

        // highlight tile
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.querySelector('#tile-' + j).setAttribute('status', 'fill');
        }, trial.stimulus_duration + epoch * i);

        // clear tile
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.querySelector('#tile-' + j).setAttribute('status', '');
        }, trial.stimulus_duration + epoch * i + trial.tile_duration);

      });

      // start response phase
      jsPsych.pluginAPI.setTimeout(function() {

        // unhide elements
        toggle_elements('');

        // record start time
        start_time = performance.now();

        // end trial if time limit is set
        if (trial.response_duration !== null) {
          jsPsych.pluginAPI.setTimeout(function() {
            end_trial();
          }, trial.response_duration);
        }

      }, trial.stimulus_duration + epoch * trial.sequence.length);

    }

    // present sequence
    var start_time = performance.now();
    present_sequence(trial);

    // ---------------------------------- //
    // Section 3: Response handling       //
    // ---------------------------------- //

    // initialize response
    var responses = [];

    // function to handle responses by the subject
    function after_response(choice) {

      // store response
      responses.push( parseInt(choice) );

      // update entry indicators
      for (let i = 0; i<Math.min(responses.length, trial.sequence.length); i++) {
        display_element.querySelector('#entry-' + i).setAttribute('status', 'fill');
      }

      // update cursor (if maximum number of entries)
      if (responses.length >= trial.sequence.length) {
        display_element.querySelector('#spatial-grid').setAttribute('status', 'complete');
      }

    };

    // function to clear current responses
    function clear_responses() {

      // update entry indicators
      for (let i = 0; i<Math.min(responses.length, trial.sequence.length); i++) {
        display_element.querySelector('#entry-' + i).setAttribute('status', '');
      }

      // update cursor
      if (responses.length >= trial.sequence.length) {
        display_element.querySelector('#spatial-grid').setAttribute('status', '');
      }

      // clear repsonses
      responses = [];

    }

    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // measure response time
      var end_time = performance.now();
      var rt = end_time - start_time;

      // copy responses
      const copy = trial.backwards ? [...responses].reverse() : [...responses];

      // score responses
      var score_ls = longest_subsequence(copy, trial.sequence);
      var score_pc = partial_credit(copy, trial.sequence);
      var score_an = (score_pc == trial.sequence.length) ? 1 : 0;

      // gather the data to store for the trial
      var trial_data = {
        sequence: trial.sequence,
        sequence_length: trial.sequence.length,
        backwards: trial.backwards,
        responses: responses,
        score_an: score_an,
        score_pc: score_pc,
        score_ls: score_ls,
        rt: rt
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

  };

  // ---------------------------------- //
  // Section 4: Scoring functions       //
  // ---------------------------------- //

  // Partial credit scoring
  // scores a response as correct if it matches the sequence element
  // in the same serial position
  function partial_credit(observed, target) {
    var score = 0;
    observed.forEach((obs, i) => { if (obs == target[i]) { score++ } });
    return score;
  }

  // Longest subsequence scoring
  // (https://stackoverflow.com/questions/59925509/javascript-longest-common-subsequence)
  // identifies the longest common subsequence between the observed
  // and target sequence
  function longest_subsequence(observed, target) {

    // define n x m sized array filled with 0's
    let matrix = [...Array(observed.length+1)].map(e => Array(target.length+1).fill(0))

    // fill the matrix
    for(let i = 1; i <= observed.length; i++) {
      for(let j = 1; j <= target.length; j++) {
        if(observed[i-1] == target[j-1]) { matrix[i][j] = matrix[i-1][j] + 1}
        else matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1])
      }
    }

    // return the max which is at the right bottom corner of the matrix
    return matrix[matrix.length-1][matrix[0].length-1]
  }

  return plugin;
})();
