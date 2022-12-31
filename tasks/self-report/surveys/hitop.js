/**
* HiTOP Internalizing Syptom Battery
*
* Battery of items measuring internalizing symptoms, drawn from the
* broader HiTOP consortium scale development project
*
* Watson, D., Forbes, M. K., Levin-Aspenson, H. F., Ruggero, C. J., Kotelnikova,
* Y., Khoo, S., ... & Kotov, R. (2022). The development of preliminary HiTOP
* internalizing spectrum scales. Assessment, 29(1), 17-33.
*
* Sellbom, M., Forbush, K. T., Gould, S. R., Markon, K. E., Watson, D., & Witthöft,
* M. (2022). HiTOP assessment of the somatoform spectrum and eating disorders.
* Assessment, 29(1), 62-74.
*
**/

var hitop = {
  type: jsPsychSurveyTemplate,
  items: [

    // Depression / anxiety
    "Nothing seemed interesting to me.",
    "It took a lot of effort to do everyday activities.",
    "I felt depressed.",
    "I was unable to enjoy things like I normally do.",
    "I had very little energy.",
    "I felt emotionally numb.",
    "I was overwhelmed by anxiety.",
    "I worried about almost everything.",
    "I had a lot of nervous energy.",
    "I felt very stressed.",
    "I felt nervous and on edge.",
    "I felt tense.",
    "Thoughts were racing in my head.",
    "I blamed myself for things.",
    "I thought a lot about death.",

    // Compulsivity
    "I had to check something (e.g., whether the door was locked) several times to make sure I had really done it.",
    "I checked things over and over again.",
    "I felt the urge to check to make sure I really had done something.",
    "It was difficult for me to touch something that was dirty.",
    "I felt the need to wash my hands again and again.",
    "I had to clean myself because I felt contaminated.",
    "I needed to count to a certain number before starting an activity.",
    "I counted things over and over again.",
    "I felt compelled to count things.",
    "I was obsessed with cleanliness.",
    "I avoided using public restrooms.",
    "I felt compelled to follow certain rituals.",
    "It made me uncomfortable when I didn't do things in a particular order.",
    'I needed to do things over and over until they felt "just right."',
    'I felt the urge to rearrange things so they were "just right."',

    // Social anxiety
    "I felt socially awkward.",
    "I felt shy around other people.",
    "I felt uncomfortable being the center of attention.",
    "I felt self-conscious around others.",
    "I was uncomfortable meeting new people.",
    "I was uncomfortable entering a room when others already were present.",
    "I was nervous with people who I did not know well.",
    "I got nervous because others were evaluating me.",
    "I avoided performing or giving a talk in front of others.",
    "I avoided situations in which I would have to meet new people.",
    "I avoided situations in which others were likely to watch me.",
    "I found it difficult to talk to people I did not know well.",
    "I found it difficult to speak up in front of others.",
    "I had difficulty making eye contact with others.",
    "It was difficult for me to eat while someone was watching me.",

    // Bipolar mania
    "I had much more energy than usual.",
    "I felt a lot more hyper or active than usual.",
    "I was much more talkative than usual.",
    "I had so much energy that others couldn't keep up with me.",
    "I felt very excited and hyper for no reason.",
    'Others noticed that I was unusually excited or up.',
    "I was so excited I could not sleep.",
    "I felt I could do things that no one else could.",
    "I tried to do something that others said was impossible.",
    "I felt that I was someone very important or powerful.",
    "I felt that I had special talents or powers, like controlling things with my mind or knowing the future.",
    "I felt that nothing could hurt me.",
    "Others worried I was taking too many risks.",
    "I felt so happy that I used a lot more alcohol or drugs than usual.",
    "I did things that were unusual for me and could have caused trouble.",

    // Body image / eating disorders
    "I thought about ways to lose weight.",
    "I was dissatisfied with the shape of my body.",
    "I did not like my weight (the number on the scale).",
    "My weight was one of the most important things in my life.",
    "I care more about my weight than if other people liked me.",
    "I couldn't keep myself from comparing my body to those of others nearby.",
    "I would do almost anything to avoid gaining weight.",
    "I would be upset if I gained 2 pounds.",
    "I used certain medications (e.g. laxatives, diuretics) to lose weight.",
    "I intentionally skipped a meal to lose weight.",
    "I tried to avoid eating during the day.",
    "I made excuses to avoid eating.",
    "I went a long time without eating.",
    "I enjoyed the feeling of having an empty stomach.",
    "I vomited to control my weight."
  ],
  scale: [
    "Not at all",
    "A little",
    "Moderately",
    "A lot"
  ],
  reverse: Array(75).fill(1).map(x => false),
  instructions: "Have there been significant times during the <b>last 12 months</b> in which the following statements applied to you?",
  survey_width: 925,
  item_width: 50,
  scale_repeat: 7
}
