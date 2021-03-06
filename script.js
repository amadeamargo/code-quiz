//HTML PAGE 1: QUIZ PAGE
//1. HOMEPAGE
    //start quiz button
    //info box about the quiz
    //link to highscores page on the top left corner of the page
//2. START
    //once user clicks the start button, the following will happen:
    //timer starts at the top right corner of the page
    //first question pops up
//3. QUESTION CARDS
    //Q1: What does HTML stand for?
        //a. Hypertext Markup Language
        //b. Hypertext Markup Learning
        //c. Hypotext  Marked Language
        //d. Hypertension Marked Landing
    //Q2:  True or False: 100 % 50 would equal to 0
        //a. True 
        //b. False
    //Q3: Which of the following is not a data type?
        //a. Boolean
        //b: Thing
        //c. Array
        //d. String
    //Q4: True or False: To assign a value to a variable, you would use ===.
        //a. True 
        //b. False
    //Q5: Which of the following symbols are used to invoke a function?
        //a. {}
        //b. []
        //c. ()
        //d. \/
//4. ANSWERING QUESTIONS
    //when user clicks on answer button, "correct or incorrect" shows up.
    //button turns green if user clicks on correct buton
    //button turns red if user clicks on incorrect answer
    //either way, move on to the next question card
//5. RESULT CARD
    //last card shows how many questions user scored and what their score is
    //allow user to input their name in the input box
    //add button to allow user to submit initials
    //when user clicks submit, user will be taken to the HIGHSCORES HTML PAGE


    
//HTML PAGE 2: HIGHSCORES PAGE
    //user initials will be appended to the HIGHSCORES HTMLS PAGE
    //ask user if they would like to play again
    //use if statement and "play again" button to redirect user to the QUIZ HTML PAGE


var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var restartButton = document.getElementById("restart-btn")

startButton.addEventListener('click',startQuiz);

var questionBox= document.getElementById("quiz-box")
var secondsLeft = 120;
var timeEl = document.querySelector(".timer-seconds")

function startQuiz(){
    displayTimeLeft();
    scrollDown();
}

function displayTimeLeft() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

nextButton.addEventListener('click', scrollDown);
function scrollDown(){
    window.scrollBy(0, 800)
}


function result(){
    if (document.getElementById('correct-one').checked){
        console.log(secondsLeft);}
        else {
            secondsLeft -10
        }
    if (document.getElementById('correct-two').checked){
        score++;}
        else {
            secondsLeft -10
        }
    if (document.getElementById('correct-three').checked){
        score++;}
        else {
            secondsLeft -10
        }
    if (document.getElementById('correct-four').checked){
        score++;}
        else {
            secondsLeft -10
        }
    if (document.getElementById('correct-five').checked){
        score++;}
        else {
            secondsLeft -10
        }
    document.write("You answered " + score + " out of 5 questions correct!");
}

