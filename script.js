// Questions and buttons
let buttonOne = document.querySelector("#button1");
let buttonTwo = document.querySelector("#button2");
let buttonThree = document.querySelector("#button3");
let buttonFour = document.querySelector("#button4");
let questionContent = document.querySelector("#questionContent");
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

// Question One
let questionOne = questions[0];
questionContent.innerText = questionOne.question;
questionContent["data-current-question-index"] = 0;

buttonOne.innerText = questionOne.answers[0];
buttonTwo.innerText = questionOne.answers[1];
buttonThree.innerText = questionOne.answers[2];
buttonFour.innerText = questionOne.answers[3];

// On click event of a button and shows next question
let buttonClickHandler = function () {
  let nextQuestionIndex = questionContent["data-current-question-index"] + 1;
  let nextQuestion = questions[nextQuestionIndex];
  questionContent.innerText = nextQuestion.question;
  questionContent["data-current-question-index"] = nextQuestionIndex;

  buttonOne.innerText = nextQuestion.answers[0];
  buttonTwo.innerText = nextQuestion.answers[1];
  buttonThree.innerText = nextQuestion.answers[2];
  buttonFour.innerText = nextQuestion.answers[3];
};

buttonOne.addEventListener("click", buttonClickHandler);
buttonTwo.addEventListener("click", buttonClickHandler);
buttonThree.addEventListener("click", buttonClickHandler);
buttonFour.addEventListener("click", buttonClickHandler);

// Timer
