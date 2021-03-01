# Digit_Span_JSPsych
 
A classical Digit Span Task created with JSPsych.

<h2>Structure of the Task</h2>
One digit (1-9) per second appears one the screen (only one at a time). The task of the user is to try to remember the digits in their order of appearance. After a few presented digits, a textbox appeared on the screen and the user have to type in their answer. The answer can be submitted by clicking on the 'Continue' button, or by hittng Enter.
 
The task starts with two practice runs (with 2 digits per run). Here, the user receive feedback whether their answer was correct. After the two practice runs, the task begins. Seven levels can be completed alltogether. On the first level, three digits are presented, on each level, the length of the digit stream become one digit longer  (i.e., the maximum length is 9 digits). Each level contains four trials. If the user answers correctly in three out of the four trials, the next level is presented. If the level is not completed successfully (i.e., the user answers correctly for less than three trials), the task ends.

<h2>Output file</h2>

- <strong>success:</strong> whether fullscreen mode was successfully started/ended (true or false)
- <strong>rt:</strong> the reaction time for submitting the answer
- <strong>stimulus:</strong> stimulus on the screen in HTML
- <strong>key_press:</strong> number code of the key pressed
- <strong>trial_type:</strong> JSPSych trialtype of the given trial (fullscreen, html-keyboard-response or survey-html-form)
- <strong>trial_index:</strong> the number of the given trials (all events considered, even instructions, feedbacks!)
- <strong>time_elapsed:</strong> the time elapsed from the start of the script in ms
- <strong>internal_code_id:</strong> internal node id of the trial
- <strong>browser_event:</strong> browser events at the given trial (fullscreenenter, fullscreenexit, blur or focus)
- <strong>level:</strong> the level of the task (2 for the practice runs, 3-9 for the task runs)
- <strong>correct_answer:</strong> the stimulus stream, the correct answer
- <strong>number_within_level:</strong> the number of the trial within the given level (1-2 for the practice runs, 1-4 for the task runs)
- <strong>number_within_run:</strong> the number of the stimulus within the run (1-2 for the practice runs, 1-9 for the task runs)
- <strong>is_mistake:</strong> if the answer given was uncorrect (0 - the answer was correct; 1 - the answer was incorrect)
- <strong>responses:</strong> the answer typed in the input field (in an object)

<h2>Browser requirements</h2>
Any browser except Safari and Internet Explorer.
