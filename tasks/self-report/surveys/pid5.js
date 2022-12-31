/**
* Personality Inventory for DSM-5 (PID-5)
*
* The PID-5 is a 220-item self-report inventory designed to assess maladaptive
* personality traits.
*
* Krueger, R. F., Derringer, J., Markon, K. E., Watson, D., & Skodol, A. E. (2012).
* Initial construction of a maladaptive personality trait model and inventory for
* DSM-5. Psychological medicine, 42(9), 1879-1890.
*
**/

var pid5 = {
  type: jsPsychSurveyTemplate,
  items: [

    // Anhedonia
    "I don't get as much pleasure out of things as others seem to.",
    "Nothing seems to interest me very much.",
    "I almost never enjoy life.",
    "I'm an energetic person.",
    "I almost never feel happy about my day-to-day activities.",
    "I really live life to the fullest.",
    "Nothing seems to make me feel good.",
    "I rarely get enthusiastic about anything."

    // Anxiousness
    "I worry a lot about terrible things that might happen.",
    "I often worry that something bad will happen due to mistakes I made in the past.",
    "I get very nervous when I think about the future.",
    "I rarely worry about things.",
    "I'm always worrying about something.",
    "I worry about almost everything.",
    "I am a very anxious person.",
    "I always expect the worst to happen.",
    "I'm always fearful or on edge about bad things that might happen."

    // Attention seeking
    "I do things to make sure people notice me.",
    "I do things so that people just have to admire me.",
    "I love getting the attention of other people.",
    "I like standing out in a crowd.",
    "My behavior is often bold and grabs peoples' attention.",
    "I like being a person who gets noticed.",
    "I crave attention.",
    "I like to draw attention to myself."

    // Callousness
    "I often get into physical fights.",
    "Being rude and unfriendly is just a part of who I am.",
    "I really don't care if I make other people suffer.",
    "It doesn't really bother me to see other people get hurt.",
    "I don't care about other people's feelings.",
    "You need to step on some toes to get what you want in life.",
    "I would never harm another person.",
    "I don't care if my actions hurt others.",
    "It's no big deal if I hurt other peoples' feelings.",
    "I don't care about other peoples' problems.",
    "I sometimes hit people to remind them who's in charge.",
    "I enjoy making people in control look stupid.",
    "I don't see the point in feeling guilty about things I've done that have hurt other people.",
    "Most of the time I don't see the point in being friendly."

    // Deceitfulness
    "I make up stories about things that happened that are totally untrue.",
    "I often make up things about myself to help me get what I want.",
    "People don't realize that I'm flattering them to get something.",
    "I can be sneaky if it means getting what I want.",
    "Sometimes you need to exaggerate to get ahead.",
    "I don't hesitate to cheat if it gets me ahead.",
    "I try to tell the truth even when it's hard.",
    "I use people to get what I want.",
    "Lying comes easily to me.",
    "I'll stretch the truth if it's to my advantage.",

    // Depressivity
    "I often feel like nothing I do really matters.",
    "I'm very dissatisfied with myself.",
    "The future looks really hopeless to me.",
    "The world would be better off if I were dead.",
    "I'm so ashamed by how I've let people down in lots of little ways.",
    "I often feel like a failure.",
    "I talk about suicide a lot.",
    "I'm useless as a person.",
    "Life looks pretty bleak to me.",
    "Everything seems pointless to me.",
    "I often feel just miserable.",
    "I have no worth as a person.",
    "I know I'll commit suicide sooner or later.",
    "I feel guilty much of the time.",

    // Distractibility
    "I lose track of conversations because other things catch my attention.",
    "I can't concentrate on anything.",
    "I'm not good at planning ahead.",
    "I can't achieve goals because other things capture my attention.",
    "I have trouble pursuing specific goals even for short periods of time.",
    "I have trouble keeping my mind focused on what needs to be done.",
    "I am easily distracted.",
    "I can't focus on things for very long.",
    "I get pulled off-task by even minor distractions.",

    // Eccentricity
    "I often have ideas that are too unusual to explain to anyone.",
    "I often say things that others find odd or strange.",
    "Other people seem to think my behavior is weird.",
    "People have told me that I think about things in a really strange way.",
    "My thoughts often go off in odd or unusual directions.",
    "My thoughts often don't make sense to others.",
    "People often look at me as if I'd said something really weird.",
    "Others seem to think I'm quite odd or unusual.",
    "My thoughts are strange and unpredictable.",
    "I think about things in odd ways that don't make sense to most people.",
    "I've been told more than once that I have a number of odd quirks or habits.",
    "I have several habits that others find eccentric or strange.",
    "I often have thoughts that make sense to me but that other people say are strange.",

    // Emotional Lability
    "My emotions sometimes change for no good reason.",
    "I have much stronger emotional reactions than almost everyone else.",
    "I am a highly emotional person.",
    "I get emotional easily, often for very little reason.",
    "I never know where my emotions will go from moment to moment.",
    "I get emotional over every little thing.",
    "My emotions are unpredictable."

    // Grandiosity
    "To be honest, I'm just more important than other people.",
    "I have outstanding qualities that few others possess.",
    "I'm better than almost everyone else.",
    "I've achieved far more than almost anyone I know.",
    "I deserve special treatment.",
    "I often have to deal with people who are less important than me.",

    // Hostility
    "I snap at people when they do little things that irritate me.",
    "I can be mean when I need to be.",
    "I am easily angered.",
    "I resent being told what to do, even by people in charge.",
    "I have a very short temper.",
    "I always make sure I get back at people who wrong me.",
    "I get irritated easily by all sorts of things.",
    "I am usually pretty hostile.",
    "It makes me really angry when people insult me in even a minor way.",
    "I'm nasty and short to anybody who deserves it.",

    // Impulsivity
    "I feel like I act totally on impulse.",
    "I usually do things on impulse without thinking about what might happen as a result.",
    "Even though I know better, I can't stop making rash decisions.",
    "I always do things on the spur of the moment.",
    "I usually think before I act.",
    "I am very impulsive.",

    // Intimacy Avoidance
    "I prefer to keep romance out of my life.",
    "I enjoy being in love.",
    "I break off relationships if they start to get close.",
    "I'm just not very interested in having sexual relationships.",
    "I steer clear of romantic relationships.",
    "I prefer being alone to having a close romantic partner.",

    // Irresponsibility
    "Others see me as irresponsible.",
    "I'm often pretty careless with my own and others' things.",
    "I make promises that I don't really intend to keep.",
    "I often forget to pay my bills.",
    "I've skipped town to avoid responsibilities.",
    "I just skip appointments or meetings if I'm not in the mood.",
    "I follow through on commitments.",

    // Manipulativeness
    "I'm good at making people do what I want them to do.",
    "Sweet-talking others helps me get what I want.",
    "I'm good at conning people.",
    "I can certainly turn on the charm if I need to get my way.",
    "It is easy for me to take advantage of others.",

    // Perceptual Dysregulation
    "I can have trouble telling the difference between dreams and waking life.",
    "Sometimes I get this weird feeling that parts of my body feel like they're dead or not really me.",
    "People often talk about me doing things I don't remember at all.",
    "It's weird, but sometimes ordinary objects seem to be a different shape than usual.",
    "I often see vivid dream-like images when I'm falling asleep or waking up.",
    "Sometimes when I look at a familiar object, it's somehow like I'm seeing it for the first time.",
    "I often can't control what I think about.",
    "Sometimes I feel controlled by thoughts that belong to someone else.",
    "Sometimes I think someone else is removing thoughts from my head.",
    "I have periods in which I feel disconnected from the world or from myself.",
    "I often zone out and then suddenly come to and realize that a lot of time has passed.",
    "Things around me often feel unreal, or more real than usual.",

    // Perseveration
    "It is hard for me to stop an activity, even when it's time to do so.",
    "I've missed out on things because I was busy trying to get something I was doing exactly right.",
    "I keep approaching things the same way, even when it isn't working.",
    "It is hard for me to shift from one activity to another.",
    "I have trouble changing how I'm doing something even if what I'm doing isn't going well.",
    "I get fixated on certain things and can't stop.",
    "I get stuck on things a lot.",
    "I get stuck on one way of doing things, even when it's clear it won't work.",
    "I feel compelled to go on with things even when it makes little sense to do so.",

    // Restricted Affectivity
    `When it comes to my emotions, people tell me I'm a "cold fish".`,
    "I don't have very long-lasting emotional reactions to things.",
    "I don't get emotional.",
    "I don't show emotions strongly.",
    "People tell me it's difficult to know what I'm feeling.",
    "I never show emotions to others.",
    "I don't react much to things that seem to make others emotional.",

    // Rigid Perfectionism
    "I've been told that I spend too much time making sure things are exactly in place.",
    "People tell me that I focus too much on minor details.",
    "If something I do isn't absolutely perfect, it's simply not acceptable.",
    "People complain about my need to have everything all arranged.",
    "Even though it drives other people crazy, I insist on absolute perfection in everything I do.",
    "I check things several times to make sure they are perfect.",
    "It is important to me that things are done in a certain way.",
    "I keep trying to make things perfect, even when I've gotten them as good as they're likely to get.",
    "I simply won't put up with things being out of their proper places.",
    "I have a strict way of doing things.",

    // Risk Taking
    "People would describe me as reckless.",
    "I avoid risky situations.",
    "I avoid risky sports and activities.",
    "I have no limits when it comes to doing dangerous things.",
    "I do a lot of things that others consider risky.",
    "I like to take risks.",
    "When I want to do something, I don't let the possibility that it might be risky stop me.",
    "I avoid anything that might be even a little bit dangerous.",
    "I prefer to play it safe rather than take unnecessary chances.",
    "I don't mind a little risk now and then.",
    "I do what I want regardless of how unsafe it might be.",
    "I never take risks.",
    "I don't think about getting hurt when I'm doing things that might be dangerous.",
    "I hate to take chances."

    // Separation Insecurity
    "I dread being without someone to love me.",
    "I worry a lot about being alone.",
    "I'd rather be in a bad relationship than be alone.",
    "I can't stand being left alone, even for a few hours.",
    "I fear being alone in life more than anything else.",
    "I'll do just about anything to keep someone from abandoning me.",
    "I never want to be alone.",

    // Submissiveness
    "I change what I do depending on what others want.",
    "I usually do what others think I should do.",
    "I do what other people tell me to do.",
    "I try to do what others want me to do.",

    // Suspiciousness
    "Plenty of people are out to get me.",
    "Others would take advantage of me if they could.",
    "I'm always on my guard for someone trying to trick or harm me.",
    "People are basically trustworthy.",
    "It seems like I'm always getting a raw deal from others.",
    "I rarely feel that people I know are trying to take advantage of me.",
    'I suspect that even my so-called "friends" betray me a lot.',

    // Unusual Beliefs & Experiences
    "I have some unusual abilities, like sometimes knowing exactly what someone is thinking.",
    "I sometimes have heard things that others couldn't hear.",
    "I often have unusual experiences, such as sensing the presence of someone who isn't actually there.",
    "I have seen things that weren't really there.",
    "I believe that some people can move things with their minds.",
    "Sometimes I can influence other people just by sending my thoughts to them.",
    "I often see unusual connections between things that most people miss.",
    "I've had some really weird experiences that are very difficult to explain.",

    // Withdrawal
    "I prefer not to get too close to people.",
    "I keep to myself.",
    "I go out of my way to avoid any kind of group activity.",
    "I keep my distance from people.",
    "I don’t like spending time with others.",
    "I’m not interested in making friends.",
    "I say as little as possible when dealing with people.",
    "I don’t like to get too close to people.",
    "I don’t deal with people unless I have to.",
    "I avoid social events."

  ],
  scale: [
    "Very False or Often False",
    "Sometimes or Somewhat False",
    "Sometimes or Somewhat True",
    "Very True or Often True"
  ],
  reverse: [

    // Anhedonia
    false, false, false, true, false, true, false, false,

    // Anxiousness
    false, false, false, true, false, false, false, false, false,

    // Attention seeking
    false, false, false, false, false, false, false, false,

    // Callousness
    false, false, false, false, false, false, true, false, false, false, false, false, false, false,

    // Deceitfulness
    false, false, false, false, false, false, true, false, false, false,

    // Depressivity
    false, false, false, false, false, false, false, false, false, false, false, false, false, false,

    // Distractibility
    false, false, false, false, false, false, false, false, false,

    // Eccentricity
    false, false, false, false, false, false, false, false, false, false, false, false, false,

    // Emotional Lability
    false, false, false, false, false, false, false,

    // Grandiosity
    false, false, false, false, false, false,

    // Hostility
    false, false, false, false, false, false, false, false, false, false,

    // Impulsivity
    false, false, false, false, true, false,

    // Intimacy Avoidance
    false, true, false, false, false, false,

    // Irresponsibility
    false, false, false, false, false, false, true,

    // Manipulativeness
    false, false, false, false, false,

    // Perceptual Dysregulation
    false, false, false, false, false, false, false, false, false, false, false, false,

    // Perseveration
    false, false, false, false, false, false, false, false, false,

    // Restricted Affectivity
    false, false, false, false, false, false, false,

    // Rigid Perfectionism
    false, false, false, false, false, false, false, false, false, false,

    // Risk Taking
    false, true, true, false, false, false, false, true, true, false, false, true, false, true,

    // Separation Insecurity
    false, false, false, false, false, false, false,

    // Submissiveness
    false, false, false, false,

    // Suspiciousness
    false, false, false, true, false, true, false,

    // Unusual Beliefs & Experiences
    false, false, false, false, false, false, false, false,

    // Withdrawal
    false, false, false, false, false, false, false, false, false, false

  ],
  instructions: "This is a list of things different people might say about themselves. Read each statement carefully and select the response that best describes you. There are no right or wrong answers."
}
