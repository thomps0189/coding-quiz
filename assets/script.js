// Create a start quiz function that hides the welcome page and shows the questions
let timeEl = document.getElementById('time');
let welcomeContainerEl = document.querySelector('.welcome-container');
let questionContainerEl = document.querySelector('.question-container');
let resultContainerEl = document.querySelector('.result-container');
let rwContainerEl = document.getElementById('#right-wrong-contaienr');
let tooltipEl = document.getElementById('tooltip');

let time = 100;

let startBtn = document.getElementById('start-btn');

let questionEl = document.getElementById('question');
let answer1El = document.getElementById('answer1');
let answer2El = document.getElementById('answer2');
let answer3El = document.getElementById('answer3');
let answer4El = document.getElementById('answer4');

let finalScoreEl = document.getElementById("final-score");

let timerIntervalID = null;



function startQuiz() {
    // when start is pushed we want timer to start
    timerIntervalID = setInterval(populateTime, 1000);
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
        correctAnswer: 'Image'
    },
    {
        question: 'How would you create an alert message in Javascript?',
        answers: ['alert(message)', '.alert.message', 'alert"message"', 'alert.window.message'],
        correctAnswer: 'alert(message)'
    },
    {
        question: 'What is an example of a string value?',
        answers: ['True', '13', '"hello"', 'null'],
        correctAnswer: 'hello'
    },
    {
        question: 'How do you declare a variable?',
        answers: ['let', 'var', 'const', 'All of the above'],
        correctAnswer: 'All of the above'
    },
]

let currentQuestionIndex = 0;

function populateQuestion() {
    let currentQuestion = questionsArray[currentQuestionIndex];

    questionEl.textContent = currentQuestion.question;

    answer1El.textContent = currentQuestion.answers[0]
    answer2El.textContent = currentQuestion.answers[1]
    answer3El.textContent = currentQuestion.answers[2]
    answer4El.textContent = currentQuestion.answers[3]

    answer1El.onclick = incrementQuestionIndex
    answer1El.onclick = incrementQuestionIndex
    answer1El.onclick = incrementQuestionIndex
    answer1El.onclick = incrementQuestionIndex
}

// have question move to next one when an answer is clicked
function incrementQuestionIndex() {
    console.log(this)
    let buttonElAnswer = this.innerText
    console.log('buttonElAnswer: ', buttonElAnswer);
    checkAnswer(buttonElAnswer)

    currentQuestionIndex++;

    if (currentQuestionIndex > questionsArray.length -1) {
        console.log('Quiz Complete!')
        questionContainerEl.classList.add('hidden')
        resultContainerEl.classList.remove('hidden')
        finalScoreContainerEl.textContent = `${time +1}`
        clearInterval(timerIntervalID)
        return
    }
    populateQuestion()
}

function populateTime() {
    timeEl.textContent = `Time: ${time}`
    time--
    if (time < 0) {
        time = 0;
        questionContainerEl.classList.add('hidden')
        resultContainerEl.classList.remove('hidden')
        finalScoreContainerEl.textContent = `Your final score is 0!`
    }
}

function checkAnswer(answer) {
    let tooltipText = ''
    if (answer == questionsArray[currentQuestionIndex].correctAnswer) {
        console.log('correct')
        tooltipText = 'Correct!'
        rwContainerEl.classList.remove('hidden')
        tooltipEl.textContent = tooltipText
    } else {
        console.log('wrong')
        tooltipText = 'Wrong!'
        time = time -10
        rwContainerEl.classList.remove('hidden')
        tooltipEl.textContent = tooltipText
    }
    setTimeout(() => {
        rwContainerEl.classList.add('hidden')
    }, 1000);
}