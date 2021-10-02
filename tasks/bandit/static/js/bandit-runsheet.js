// specify stimuli
var face_conditioning_stimuli = [

  // free choice trials
  {choice_type: "free", left_image_type: "face", left_image_number: 0, right_image_type: "face", right_image_number: 1},
  {choice_type: "free", left_image_type: "face", left_image_number: 1, right_image_type: "face", right_image_number: 0},
  {choice_type: "free", left_image_type: "face", left_image_number: 0, right_image_type: "face", right_image_number: 1},
  {choice_type: "free", left_image_type: "face", left_image_number: 1, right_image_type: "face", right_image_number: 0},
  {choice_type: "free", left_image_type: "face", left_image_number: 0, right_image_type: "face", right_image_number: 1},
  {choice_type: "free", left_image_type: "face", left_image_number: 1, right_image_type: "face", right_image_number: 0},

  // forced choice trials
  {choice_type: "forced", left_image_type: "face", left_image_number: null, right_image_type: null, right_image_number: null},
  {choice_type: "forced", left_image_type: null, left_image_number: null, right_image_type: "face", right_image_number: null},
  {choice_type: "forced", left_image_type: "face", left_image_number: null, right_image_type: null, right_image_number: null},
  {choice_type: "forced", left_image_type: null, left_image_number: null, right_image_type: "face", right_image_number: null}

]

// specify stimuli
var place_conditioning_stimuli = [

    // free choice trials
    {choice_type: "free", left_image_type: "place", left_image_number: 0, right_image_type: "place", right_image_number: 1},
    {choice_type: "free", left_image_type: "place", left_image_number: 1, right_image_type: "place", right_image_number: 0},
    {choice_type: "free", left_image_type: "place", left_image_number: 0, right_image_type: "place", right_image_number: 1},
    {choice_type: "free", left_image_type: "place", left_image_number: 1, right_image_type: "place", right_image_number: 0},
    {choice_type: "free", left_image_type: "place", left_image_number: 0, right_image_type: "place", right_image_number: 1},
    {choice_type: "free", left_image_type: "place", left_image_number: 1, right_image_type: "place", right_image_number: 0},

    // forced choice trials
    {choice_type: "forced", left_image_type: "place", left_image_number: null, right_image_type: null, right_image_number: null},
    {choice_type: "forced", left_image_type: null, left_image_number: null, right_image_type: "place", right_image_number: null},
    {choice_type: "forced", left_image_type: "place", left_image_number: null, right_image_type: null, right_image_number: null},
    {choice_type: "forced", left_image_type: null, left_image_number: null, right_image_type: "place", right_image_number: null}

]
