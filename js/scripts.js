$(document).ready(function() { /* This is the start of the wrapper to enable javascript to run at HTML document ready */

/* The next section of code is to capture user input from the radio buttons on the index.html page. */

  var answerQuestion1 = $("input:radio[name=quiz-q1]:checked").val();
  var answerQuestion2 = $("input:radio[name=quiz-q2]:checked").val();
  var answerQuestion3 = $("input:radio[name=quiz-q3]:checked").val();
  var answerQuestion4 = $("input:radio[name=quiz-q4]:checked").val();
  var answerQuestion5 = $("input:radio[name=quiz-q5]:checked").val();

  var winnerAnswer1 = 0;
  var winnerAnswer2 = 0;
  var winnerAnswer3 = 0;
  var winnerAnswer4 = 0;
  var winnerAnswer5 = 0;

/* The next section of code is to determine who is the "winner" of the quiz. This is done without looping or arrays.  Ties will count.*/

  if (answerQuestion1 === "answer1") {winnerAnswer1 +=}
  else if (answerQuestion 1 === "answer2") {winnerAnswer2 +=}
  else if (answerQuestion 1 === "answer2") {winnerAnswer3 +=}
  else if (answerQuestion 1 === "answer2") {winnerAnswer4 +=}
  else {winnerAnswer5 +=}

alert winnerQuestion1;  /*the branch logic and display logic appears to not work.....*/






});  /* This is the end of the wrapper to enable javascript to run at HTML document ready */
