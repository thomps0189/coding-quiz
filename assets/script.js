// Create a start quiz function that hides the welcome page and shows the questions
var timeEl = document.getElementById('time')
var welcomeContainerEl = document.querySelector('.welcome-container')
var questionContainerEl = document.querySelector('.question-container')
var resultContainerEl = document.querySelector('.result-container')
var rwContainerEl = document.getElementById('right-wrong-container')
var tooltipEl = document.getElementById('tooltip')


var time = 100;

var startBtn = document.getElementById('start-btn')

var questionEl = document.getElementById('question')
var answer1El = document.getElementById('answer1')
var answer2El = document.getElementById('answer2')
var answer3El = document.getElementById('answer3')
var answer4El = document.getElementById('answer4')

var finalScoreEl = document.getElementById('final-score')

var timerIntervalID = null;


function startQuiz() {
	timerIntervalID = setInterval(populateTime, 1000);
	welcomeContainerEl.classList.add('hidden')
	questionContainerEl.classList.remove("hidden")
	populateQuestion()
}


startBtn.onclick = startQuiz;

// Array of question
var questionsArray = [
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
        correctAnswer: '"hello"'
    },
    {
        question: 'How do you declare a variable?',
        answers: ['let', 'var', 'const', 'All of the above'],
        correctAnswer: 'All of the above'
    },
]

var currentQuestionIndex = 0;

function populateQuestion() {
	var currentQuestion = questionsArray[currentQuestionIndex] 

	questionEl.textContent = currentQuestion.question

	answer1El.textContent = currentQuestion.answers[0]
	answer2El.textContent = currentQuestion.answers[1]
	answer3El.textContent = currentQuestion.answers[2]
	answer4El.textContent = currentQuestion.answers[3]

	answer1El.onclick = incrementQuestionIndex
	answer2El.onclick = incrementQuestionIndex
	answer3El.onclick = incrementQuestionIndex
	answer4El.onclick = incrementQuestionIndex
}


// have question move to next one when an answer is clicked
function incrementQuestionIndex() {
	console.log(this)
	var buttonElAnswer = this.innerText
	console.log('buttonElAnswer: ', buttonElAnswer);
	checkAnswer(buttonElAnswer)
	
	currentQuestionIndex++

	if (currentQuestionIndex > questionsArray.length - 1) {
		console.log('All done!')
		questionContainerEl.classList.add('hidden')
		resultContainerEl.classList.remove('hidden')
		finalScoreEl.textContent = `Your final score is ${time + 1}!`
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
		finalScoreEl.textContent = `Your final score is 0!`
	}
}


function checkAnswer(answer) {
	var tooltipText = ''
	if (answer == questionsArray[currentQuestionIndex].correctAnswer) {
		console.log('correct')
		tooltipText = 'Correct!'
		rwContainerEl.classList.remove('hidden')
		tooltipEl.textContent = tooltipText
	} else {
		console.log('wrong')
		tooltipText = 'Wrong!'
		time = time - 10
		rwContainerEl.classList.remove('hidden')
		tooltipEl.textContent = tooltipText
	}
	setTimeout(() => {
		rwContainerEl.classList.add('hidden')
	}, 1000);
}

// local storage

var highScores = localStorage.getItem(resultContainerEl)

localStorage.setItem(resultContainerEl, finalScoreEl)