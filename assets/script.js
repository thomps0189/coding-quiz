// Create a start quiz function that hides the welcome page and shows the questions
let timeEl = document.querySelector('.timer');
let welcomeContainerEl = document.querySelector('.welcome-container');
let questionContainerEl = document.querySelector('.quesetion-container');
let rwContainerEl = document.getElementById('#right-wrong-contaienr');
let scoreContainerEl = document.querySelector('.score-container');

let time = 100;

let startBtn = document.querySelector('.start-btn');

let questionEl = document.querySelector('.question');
let answer1El = document.getElementById('#answer1');
let answer2El = document.getElementById('#answer2');
let answer3El = document.getElementById('#answer3');
let answer4El = document.getElementById('#answer4');

let timerIntervalID = null;

function startQuiz() {
    // when start is pushed we want timer to start
    timerIntervalID = setInterval(startTimer, 1000);
    // the wecome screen is hidden and 1st question shows
    welcomeContainerEl.classList.add('hidden');
    questionContainerEl.classList.remove('hidden');
    populateQuestion();
}

startBtn.onclick = startQuiz();

// Array of question
let questionsArray = [
    {
        question: 'Which of the following is not a Javascript data type?',
        answers: ['Number', 'Boolean', 'String', 'Image'],
        correctAnswer: ['Image']
    },
    {
        question: 'How would you create an alert message in Javascript?',
        answers: ['alert(message)', '.alert.message', 'alert"message"', 'alert.window.message'],
        correctAnswer: ['alert(message)']
    },
    {
        question: 'What is an example of a string value?',
        answers: ['True', '13', '"hello"', 'null'],
        correctAnswer: ['"hello"']
    },
]