function verify_unload(e){
  e.preventDefault();
  (e || window.event).returnValue = null;
  return null;
};
window.addEventListener("beforeunload", verify_unload);

//------------------------------------
// set up jsPsych
//------------------------------------

var jsPsych = initJsPsych({
  show_progress_bar: true,
  use_webaudio:true,
  //override_safe_mode:true,
  on_finish: function() {

    // Remove requirement to verify redirect
    window.removeEventListener("beforeunload", verify_unload);

    // Add interactions to the data variable
    var interaction_data = jsPsych.data.getInteractionData();
    jsPsych.data.get().addToLast({interactions: interaction_data.json()});

    // Display jsPsych data in viewport.
    jsPsych.data.displayData();

  }
});
