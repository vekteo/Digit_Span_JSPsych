/* 
Created by Teodora Vekony (vekteo@gmail.com)
MEMO Team (PI: Dezso Nemeth)
Lyon Neuroscience Research Center
Universite Claude Bernard Lyon 1

Github:https://github.com/vekteo/Digit_Span_JSPsych
*/


/*************** VARIABLES ***************/


let mistake = 0;
let quit = 0;
let response;
const images = ["static/images/instruction.gif"];

/* create trials */

let timeline = [];
const trialStructure = {
  type: "html-keyboard-response",
};

const welcome = {... trialStructure, stimulus: "<h2>Welcome to the task!</h2><h2>Press any key to begin.</h2>" };    
const afterPractice = {... trialStructure, stimulus: "<p>Good! The task start now. From now on, you won't receive feedback about your answer.</p><br><p>Press any button to start the task!</p>" };
const betweenBlockRest = {... trialStructure, stimulus: "<p>Now you can rest a little.</p><br><p>Press any button to continue the task!</p>" };
const instructions = {... trialStructure, stimulus: "<p>In this task, <strong>numbers</strong> will be presented on the screen, once at a time.<br><br>Each number will be presented for one second. After that, a new number will be presented, and so on.<br><br>Your task is <strong>to try to memorize all the numbers</strong>.<br><br>After a few numbers, we will ask you to type in the numbers in their order of appearance. You can submit your results by pressing the Continue button or by hitting Enter.</p><img src='static/images/instruction.gif'/><br><p>Press any key on the keyboard to continue!</p>" };
const startOfPractice = {... trialStructure, stimulus: "<p>First, you can practice the task a little bit.</p><br><p>Press any key on the keyboard to start the practice!</p>"}
const feedback1 = {
  ... trialStructure,
  stimulus: "<p>The answer is: <strong>36</strong></p>",
  on_start: function(trial) { 
    let answer = jsPsych.data.get().last(1).values()[0].responses.replace(/\D/g, "");
    answer === jsPsych.data.get().last(2).values()[0].correct_answer ? trial.stimulus = "<p>The correct answer is: <strong>36</strong></p><br><h2 class='correct'>Correct!</h2><br><br><p>Press any key for the next practice trial!</p>" : trial.stimulus = "<p>The correct answer is: <strong>36</strong></p><br><h2 class='wrong'>Wrong!</h2><br><p>Your answer was " + `${answer}` + "<br><br><p>Press any key for the next practice trial!</p>"
  }};
const feedback2 = {
    ... trialStructure,
    stimulus: "<p>The answer is: <strong>47</strong></p>",
    on_start: function(trial) {
      let answer = jsPsych.data.get().last(1).values()[0].responses.replace(/\D/g, "");
      answer === jsPsych.data.get().last(2).values()[0].correct_answer ? trial.stimulus = "<p>The correct answer is: <strong>47</strong></p><br><h2 class='correct'>Correct!</h2><br><br><p>Press any key for the next practice trial!</p>" : trial.stimulus = "<p>The correct answer is: <strong>47</strong></p><br><h2 class='wrong'>Wrong!</h2><br><p>Your answer was " + `${answer}` + "<br><br><p>Press any key to continue!</p>"
    }};

const endOfTask = {... trialStructure,
  stimulus: "<h2>End of the task</h2><br><p>The longest stream you remembered correctly contained 2 numbers.</p><br><p>Thank you!</p>",
  on_start: function(trial) {
    let result;
    if (jsPsych.data.get().last(2).values()[0].correct_answer != "295173468"){
      result = (jsPsych.data.get().last(2).values()[0].level)-1;
    } else {
      result = 9;
    }
    trial.stimulus = "<h2>End of the task</h2><br><p>The longest run you remembered correctly contained <strong>" + `${result}` +"</strong> numbers.</p><br><p>Thank you!</p>"
  }
}

const startNow = {... trialStructure, stimulus: "<h2>End of practice</h2><br><p>The task start now. From now on, you won't receive any feedback.</p><br><p>Press any key to start the task!</p>" };

let levels = [
  digitSpanStimuli.digit3.level1, digitSpanStimuli.digit3.level2, digitSpanStimuli.digit3.level3, digitSpanStimuli.digit3.level4,
  digitSpanStimuli.digit4.level1, digitSpanStimuli.digit4.level2, digitSpanStimuli.digit4.level3, digitSpanStimuli.digit4.level4,
  digitSpanStimuli.digit5.level1, digitSpanStimuli.digit5.level2, digitSpanStimuli.digit5.level3, digitSpanStimuli.digit5.level4,
  digitSpanStimuli.digit6.level1, digitSpanStimuli.digit6.level2, digitSpanStimuli.digit6.level3, digitSpanStimuli.digit6.level4,
  digitSpanStimuli.digit7.level1, digitSpanStimuli.digit7.level2, digitSpanStimuli.digit7.level3, digitSpanStimuli.digit7.level4,
  digitSpanStimuli.digit8.level1, digitSpanStimuli.digit8.level2, digitSpanStimuli.digit8.level3, digitSpanStimuli.digit8.level4,
  digitSpanStimuli.digit9.level1, digitSpanStimuli.digit9.level2, digitSpanStimuli.digit9.level3, digitSpanStimuli.digit9.level4,
  ]

const answer = {
  type: 'survey-html-form',
  preamble: '<p>What numbers have you seen?</b><br><p>Enter them <strong> in order </strong>the text box below!</p>',
  html: '<p><input name="answer" type="text" id="input" required/></p>',
  on_load: function() {
    document.getElementById("input").focus()
  }
};

const test = {
  ... trialStructure,
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: jsPsych.NO_KEYS,
  data: jsPsych.timelineVariable('data'),
  trial_duration: stimulusDuration,
  stimulus_duration: stimulusDuration,
}

/* function for adding trials to timeline */

function pushElement(stimulus, testOrAnswer){
  let element = {
    ... timelineElementStructure, 
    timeline_variables: stimulus,
    timeline: [testOrAnswer],
    conditional_function: function(){
      if (quit == 1){
        return false;
      }  else {
        return true
      }
    }
  }
  timeline.push(element)
}

/* define timeline elements */
 
const timelineElementStructure = {
    repetitions: 1,
    randomize_order: false,
}

const practiceBlock1 = { ... timelineElementStructure, timeline_variables: digitSpanStimuli.practice.level1, timeline: [test] }
const practiceBlock2 = { ... timelineElementStructure, timeline_variables: digitSpanStimuli.practice.level2, timeline: [test] }
const practiceAnswer = { ... timelineElementStructure, timeline_variables: answerInput, timeline: [answer] }

timeline.push({type: "fullscreen", fullscreen_mode: true}, welcome, instructions, startOfPractice, practiceBlock1, practiceAnswer, feedback1, practiceBlock2, practiceAnswer, feedback2, startNow);

for (i = 0; i < levels.length; i++) {
  pushElement(levels[i], test)
  pushElement(answerInput, answer)
}

timeline.push(endOfTask, {type: "fullscreen", fullscreen_mode: false});

/* start the experiment */
jsPsych.init({
  timeline: timeline,
  preload_images: images,
  on_close: function(){
    jsPsych.data.get().localSave("csv", "output.csv");
  },
  on_data_update: function(){

    if(jsPsych.data.get().last(2).values()[0]) {

      if (jsPsych.data.get().last(2).values()[0].number_within_level === 1) {
        mistake = 0;
      }

      if(jsPsych.data.get().last(2).values()[0].level > 2) {
        if (jsPsych.data.get().last(1).values()[0].trial_type === "survey-html-form") {
          let lastAnswer = jsPsych.data.get().last(1).values()[0].responses.replace(/\D/g, "")
          if (lastAnswer !== jsPsych.data.get().last(2).values()[0].correct_answer) {
            mistake++
            jsPsych.data.get().last(1).values()[0].is_mistake = 1;
          }
          if (mistake == 2) {
            quit = 1;
          }
        }
      }
    }

    let interactionData = jsPsych.data.getInteractionData()
    const interactionDataOfLastTrial = interactionData.filter({'trial': jsPsych.data.get().last(1).values()[0].trial_index}).values();
    if (interactionDataOfLastTrial) {
      jsPsych.data.get().last(1).values()[0].browser_events = JSON.stringify(interactionDataOfLastTrial)
     }

  },
  on_finish: function() {
    jsPsych.data.get().localSave("csv", "output.csv");
  }
});