# _Programming Course Track Suggestion Website_

#### _Friday Project for review of Javascript, JQuery, and Conditional Branching, 19 Oct 2018_

#### By _**Robert Lee**_

## Description

_This is the friday personal project for the review of lessons of the last week at Epicodus  The goal is to create a website that will suggest a course track at Epicodus based on questions asked to a user.  Javascript, JQuery, conditional branching, and HTML/javascript form inputs are some of the minimum requirements._

_Explaination of this quiz with a deterministic answer:
The user is asked a series of multiple choice questions.  Each question have the same number of answers (for example: 5 answers), but the same nth answer of that single question is a "bucket" that will increase the score of that answer "team".  The answer that the user gives to the question counts as a "point" for that answer bucket.  The answer "bucket" that gets the most number of points is the winning answer, and is returned back to the user.

The point system can be summarized in this 5x5 grid, where "ax" represents the answers the user gives to the quiz:

       | a1 | a2 | a3 | a4 | a5
track1 |
track2 |
track3 |
track4 |
track5 |

track 5 is considered the else track - there is no match._

## Setup/Installation Requirements

* _Log in to GitHub_
* _Clone GitHub URL in terminal using git_
* _Open the html file in your Web Browser_

## Known Bugs/Issues

* _In the style.css file, the image "img/background.jpg" inside the BODY will not load_
* _If the user selects all their answers to the questions as such that choice number 4 is the winner, the webpage does not generate an answer, and instead resets itself._
* _The radio buttons do not reset their positions to the default (1st answer) when the HTML page is refreshed._

## Technologies Used
_GitHub, Git, HTML, CSS, Bootstrap, Javascript, JQuery_

### License
Copyright (c) 2018 **_RL_** MIT license.
