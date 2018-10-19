$(document).ready(function() { /* This is the start of the wrapper to enable javascript to run at HTML document ready */

/* The next section of code is to capture user input from the radio buttons on the index.html page. */
  $("#quiz-form-section").submit(function(event) {
    var fullName = $("input#inputFullName").val();
    var answerQuestion1 = $("input:radio[name=quiz-q1]:checked").val();
    var answerQuestion2 = $("input:radio[name=quiz-q2]:checked").val();
    var answerQuestion3 = $("input:radio[name=quiz-q3]:checked").val();
    var answerQuestion4 = $("input:radio[name=quiz-q4]:checked").val();
    var answerQuestion5 = $("input:radio[name=quiz-q5]:checked").val();

  /*Reset score keeping for final answer*/

    var winnerAnswer1 = 0;
    var winnerAnswer2 = 0;
    var winnerAnswer3 = 0;
    var winnerAnswer4 = 0;
    var winnerAnswer5 = 0;

  /* The next section of code sums the "points" of the answers. This is done without looping or arrays.*/

    if (answerQuestion1 === "answer1") {winnerAnswer1 += 1}
    else if (answerQuestion1 === "answer2") {winnerAnswer2 += 1}
    else if (answerQuestion1 === "answer3") {winnerAnswer3 += 1}
    else if (answerQuestion1 === "answer4") {winnerAnswer4 += 1}
    else {winnerAnswer5 += 1}

    if (answerQuestion2 === "answer1") {winnerAnswer1 += 1}
    else if (answerQuestion2 === "answer2") {winnerAnswer2 += 1}
    else if (answerQuestion2 === "answer3") {winnerAnswer3 += 1}
    else if (answerQuestion2 === "answer4") {winnerAnswer4 += 1}
    else {winnerAnswer5 += 1}

    if (answerQuestion3 === "answer1") {winnerAnswer1 += 1}
    else if (answerQuestion3 === "answer2") {winnerAnswer2 += 1}
    else if (answerQuestion3 === "answer3") {winnerAnswer3 += 1}
    else if (answerQuestion3 === "answer4") {winnerAnswer4 += 1}
    else {winnerAnswer5 += 1}

    if (answerQuestion4 === "answer1") {winnerAnswer1 += 1}
    else if (answerQuestion4 === "answer2") {winnerAnswer2 += 1}
    else if (answerQuestion4 === "answer3") {winnerAnswer3 += 1}
    else if (answerQuestion4 === "answer4") {winnerAnswer4 += 1}
    else {winnerAnswer5 += 1}

    if (answerQuestion5 === "answer1") {winnerAnswer1 += 1}
    else if (answerQuestion5 === "answer2") {winnerAnswer2 += 1}
    else if (answerQuestion5 === "answer3") {winnerAnswer3 += 1}
    else if (answerQuestion5 === "answer4") {winnerAnswer4 += 1}
    else {winnerAnswer5 += 1}

    /*This next block of code determines which answer is the winner.  This is done without looping or arrays.  Note there is not a way to resolve ties.*/

    if (winnerAnswer1 > winnerAnswer2 + winnerAnswer3 + winnerAnswer4 + winnerAnswer5) {
      $("#answer-final-a1").show();
      $("#answer-final-a2").hide();
      $("#answer-final-a3").hide();
      $("#answer-final-a4").hide();
      $("#answer-final-a5").hide();
    } else if (winnerAnswer2 > winnerAnswer1 + winnerAnswer3 + winnerAnswer4 + winnerAnswer5) {
      $("#answer-final-a1").hide();
      $("#answer-final-a2").show();
      $("#answer-final-a3").hide();
      $("#answer-final-a4").hide();
      $("#answer-final-a5").hide();
    } else if (winnerAnswer3 > winnerAnswer1 + winnerAnswer2 + winnerAnswer4 + winnerAnswer5) {
      $("#answer-final-a1").hide();
      $("#answer-final-a2").hide();
      $("#answer-final-a3").show();
      $("#answer-final-a4").hide();
      $("#answer-final-a5").hide();
    } else if (winnerAnswer4 > winnerAnswer1 + winnerAnswer2 + winnerAnswer3 + winnerAnswer5) {
      $("#answer-final-a1").hidw();
      $("#answer-final-a2").hide();
      $("#answer-final-a3").hide();
      $("#answer-final-a4").show();
      $("#answer-final-a5").hide();
    } else {
      $("#answer-final-a1").hide();
      $("#answer-final-a2").hide();
      $("#answer-final-a3").hide();
      $("#answer-final-a4").hide();
      $("#answer-final-a5").show();
    }

    $("#outputFullName").toggle();

    $(".userFullNameHere").append("fullName");

    $(".home-page-quiz-section").slideToggle();

    event.preventDefault();
  });  /* This closes the form button submit logic */

});  /* This is the end of the wrapper to enable javascript to run at HTML document ready */
