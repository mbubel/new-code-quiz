// Target Start quiz button
let startBtn = document.getElementById("startQuiz");
let startPrompt = document.getElementById("startingPrompt");
let quizQuestions = document.getElementById("quiz-questions");
let highScores = document.getElementById("highscore");
let timer = document.getElementById("time-left");

function showDiv(div) {
  div.style.display = "block";
}

function hideDiv(div) {
  div.style.display = "none";
}

startBtn.addEventListener("click", function () {
  showDiv(quizQuestions);
  hideDiv(startPrompt);
  hideDiv(highScores);
  var counter = 120;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      timer.innerHTML = counter + " seconds";
    }
    if (counter === 0) {
      alert("sorry, out of time"); // todo: be less lame
      clearInterval(counter);
    }
  }, 1000);
});

// Questions and buttons
let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let questionContent = document.getElementById("questionContent");
let answerValidity = document.getElementById("lastAnswerValidity");
let questions = [
  {
    question: "What was Tracer's occupation prior to joining Overwatch?",
    answers: ["1. Pilot", "2. Doctor", "3. Engineer", "4. Therapist"],
    correctAnswerIndex: 0,
  },
  {
    question: "Who is Reinhardt's squire?",
    answers: ["1. Mei", "2. Ashe", "3. Brigitte", "4. Reaper"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is Soldier: 76's real name?",
    answers: [
      "1. Jack Murphy",
      "2. Jack Morrison",
      "3. Jack Montreal",
      "4. Jack Bower",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What primary weapon does Widowmaker use?",
    answers: [
      "1. Submachine gun",
      "2. Shotgun",
      "3. Rocket Launcher",
      "4. Sniper Rifle",
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "What is the last name of the two brothers in Overwatch?",
    answers: ["1. Shimada", "2. Bubel", "3. Johnson", "4. Sawicki"],
    correctAnswerIndex: 0,
  },
];

// Questions
let questionOne = questions[0];
questionContent.innerText = questionOne.question;
questionContent.setAttribute("data-current-question-index", 0);

buttonOne.innerText = questionOne.answers[0];
buttonTwo.innerText = questionOne.answers[1];
buttonThree.innerText = questionOne.answers[2];
buttonFour.innerText = questionOne.answers[3];

// On click event of a button and shows next question
let buttonClickHandler = function (event) {
  let currentQuestionIndex = parseInt(
    questionContent.getAttribute("data-current-question-index")
  );
  let suppliedAnswerIndex = parseInt(event.target.getAttribute("data-index"));
  let correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
  if (suppliedAnswerIndex === correctAnswerIndex) {
    answerValidity.innerText = "Correct";
  } else {
    answerValidity.innerText = "Incorrect";
  }
  let nextQuestionIndex = currentQuestionIndex + 1;
  if (nextQuestionIndex === questions.length) {
    alert("youre done baby");
    return;
  }
  let nextQuestion = questions[nextQuestionIndex];
  questionContent.innerText = nextQuestion.question;
  questionContent.setAttribute(
    "data-current-question-index",
    nextQuestionIndex
  );

  buttonOne.innerText = nextQuestion.answers[0];
  buttonTwo.innerText = nextQuestion.answers[1];
  buttonThree.innerText = nextQuestion.answers[2];
  buttonFour.innerText = nextQuestion.answers[3];
};

document
  .querySelector("#answers")
  .addEventListener("click", buttonClickHandler);
// 1//   window.location.href = "index.html";
// });
// clearScores.addEventListener("click", clearScoreList);
