// Initialize jsPsych.
var jsPsych = initJsPsych({
  on_finish: function() {

    // Add interactions to the data variable
    var interaction_data = jsPsych.data.getInteractionData();
    jsPsych.data.get().addToLast({interactions: interaction_data.json()});

    // Display jsPsych data in viewport.
    jsPsych.data.displayData();

  }
});
