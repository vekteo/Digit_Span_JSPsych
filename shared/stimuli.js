function createStimuli(numbers, numberWithinLevel, level) {
    let array = [];

    for (let j = 0; j < level; j++) {
        for (let i = 0; i < numbers[i].length; i++) {
            let stimulus = new Object ();
            stimulus.stimulus = "<h1 id='stimulus'>" + `${numbers[j]}` + "</h1>"
            stimulus.data = {
                level: level,
                correct_answer: numbers.join(""),
                number_within_level: numberWithinLevel,
                number_within_run: j+1,
                is_mistake: 0
            }
            array.push(stimulus)
        }
    }
    return array
}

let answerInput = {stimulus: "answer", data: {}}

let digitSpanStimuli = {
    practice: {
        level1: createStimuli(["3","6"], 1, 2),
        level2: createStimuli(["4","7"], 2, 2)
    },
    digit3: {
        level1: createStimuli(["5", "8", "2"], 1, 3),
        level2: createStimuli(["6", "9", "4"], 2, 3),
        level3: createStimuli(["1", "4", "8"], 3, 3),
        level4: createStimuli(["2", "7", "6"], 4, 3),
    },
    digit4: {
        level1: createStimuli(["6", "4", "3", "9"], 1, 4),
        level2: createStimuli(["7", "2", "8", "6"], 2, 4),
        level3: createStimuli(["9", "6", "2", "5"], 3, 4),
        level4: createStimuli(["7", "2", "9", "1"], 4, 4),
    },
    digit5: {
        level1: createStimuli(["4", "2", "8", "3", "1"], 1, 5),
        level2: createStimuli(["7", "5", "2", "3", "6"], 2, 5),
        level3: createStimuli(["6", "3", "7", "8", "1"], 3, 5),
        level4: createStimuli(["9", "6", "2", "7", "5"], 4, 5),
    },
    digit6: {
        level1: createStimuli(["6", "1", "9", "5", "8", "3"], 1, 6),
        level2: createStimuli(["3", "9", "2", "4", "8", "7"], 2, 6),
        level3: createStimuli(["7", "1", "8", "2", "9", "5"], 3, 6),
        level4: createStimuli(["1", "5", "3", "7", "2", "9"], 4, 6),
    },
    digit7: {
        level1: createStimuli(["5", "9", "1", "7", "3", "8", "2"], 1, 7),
        level2: createStimuli(["4", "1", "5", "9", "3", "8", "6"], 2, 7),
        level3: createStimuli(["6", "5", "1", "4", "3", "9", "2"], 3, 7),
        level4: createStimuli(["1", "4", "2", "5", "3", "8", "6"], 4, 7),
    },
    digit8: {
        level1: createStimuli(["5", "8", "1", "9", "2", "6", "4", "3"], 1, 8),
        level2: createStimuli(["3", "7", "2", "9", "5", "1", "8", "6"], 2, 8),
        level3: createStimuli(["5", "9", "1", "6", "8", "3", "4", "2"], 3, 8),
        level4: createStimuli(["3", "2", "5", "7", "6", "9", "1", "8"], 4, 8),
    },
    digit9: {
        level1: createStimuli(["2", "7", "5", "8", "6", "3", "9", "1", "4"], 1, 9),
        level2: createStimuli(["7", "1", "3", "9", "4", "2", "5", "6", "8"], 2, 9),
        level3: createStimuli(["8", "1", "4", "9", "6", "2", "5", "7", "3"], 3, 9),
        level4: createStimuli(["2", "9", "5", "1", "7", "3", "4", "6", "8"], 4, 9),
    }
}