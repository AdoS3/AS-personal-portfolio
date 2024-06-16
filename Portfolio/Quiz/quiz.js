const quiz = [
    {
        question: "What is the largest planet in the solar system?",
        answer: [
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Mercury", correct: false},
            {text: "Earth", correct: false},
        ]
    },
    {
        question: "Which planet is known as “The Red Planet”?",
        answer: [
            {text: "Uranus", correct: false},
            {text: "Mars", correct: true},
            {text: "Neptune", correct: false},
            {text: "Venus", correct: false},
        ]
    },
    {
        question: "How many sides does a hexagon have?",
        answer: [
            {text: "five", correct: false},
            {text: "seven", correct: false},
            {text: "six", correct: true},
            {text: "eight", correct: false},
        ]
    },
    {
        question: "What colour are emeralds?",
        answer: [
            {text: "red", correct: false},
            {text: "blue", correct: false},
            {text: "yellow", correct: false},
            {text: "green", correct: true},
        ]
    },
]

const quizHeader = document.querySelector(".quiz-header")
const quizAPP = document.querySelector(".quiz-container")
const startQuizBtn = document.querySelector(".startBtn")
let nextBtn = document.createElement("button")
nextBtn.classList.add("nextBtn")
nextBtn.innerHTML = "Next Question"

let index = 0
let score = 0

function startQuiz(){
    index = 0
    score = 0
    startQuizBtn.addEventListener("click", () => {
        quizHeader.style.display = "block"
        startQuizBtn.remove()
        displayQuestion()
        correctAnswer()
    })  
}

function displayQuestion() {
    let question = document.createElement("h2")
        question.classList.add("question")
        question.innerHTML = quiz[index].question
        quizAPP.appendChild(question)
        quiz[index].answer.forEach(function(oneAnswer){
            let answerButton = document.createElement("button")
            answerButton.classList.add("btn")
            answerButton.innerHTML = oneAnswer.text
            quizAPP.appendChild(answerButton)
        })
        quizAPP.appendChild(nextBtn)
}

function removeQuestion() {
    quizAPP.innerHTML = ""
}

function correctAnswer() {
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach(function(oneButton) {
        oneButton.addEventListener("click", (event) => {
            let selectedBtn = event.target;
            let selectedAnswer = quiz[index].answer.find(answer => answer.text === selectedBtn.innerHTML)

            if (selectedAnswer.correct) {
                selectedBtn.style.backgroundColor = "green"
                score ++
            } else {
                selectedBtn.style.backgroundColor = "red"
            }
            buttons.forEach((oneButton) => {
                oneButton.disabled = true
            })
            
        })
    })
}

function showNextQuestion(){
    removeQuestion()
    index ++
    if(index < quiz.length){
        displayQuestion()
    } else {
        let scoreElement = document.createElement("h2")
        scoreElement.classList.add("question")
        scoreElement.innerHTML = `Score: ${score} out of 4`
        quizAPP.appendChild(scoreElement)
        let playAgainBtn = document.createElement("button")
        playAgainBtn.classList.add("startBtn")
        playAgainBtn.innerHTML = "Play again"
        playAgainBtn.style.margin = "5em"
        quizAPP.appendChild(playAgainBtn)
        playAgainBtn.addEventListener("click", () => {
            location.reload()
        })
    }
    correctAnswer()
}

nextBtn.addEventListener("click", () => {
    showNextQuestion()
})

startQuiz()