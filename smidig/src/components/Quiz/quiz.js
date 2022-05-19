import quizQuestions from "./quizArray";
import quizElement from "../group2/Quiz"
import QuizPage from "../../pages/QuizPage";

const highScoreOutput = document.querySelector('#highScore')
const highScoreBoard = document.querySelector('#highScoreBoard')
const questionElement = document.querySelector('#question')



/*LocalStorage*/
let highScore = localStorage.getItem('game1HighScore') || 0;
highScoreOutput.textContent = 'HIGH SCORE: ' + highScore;
highScoreBoard.textContent = 'Your Highest Score = ' + highScore;
let score = 0

let randomQuestions, currentQuestionIndex

function setNextQuestion  () {
    
    randomQuestions = quizQuestions.sort(() => Math.random() - .4)
    currentQuestionIndex = 0;
    
    

    if (currentQuestionIndex < 4) {
        resetState()
        showQuestion(randomQuestions[currentQuestionIndex])
        currentQuestionIndex++
    } else {

        
        checkHighScore()
    
}
}

function checkHighScore() {
    if (score > localStorage.getItem('game1HighScore')) {
        localStorage.setItem('game1HighScore', score);
        highScore = score

        highScoreOutput.innerText = 'Highscore:' + highScore
        highScoreBoard.innerText = 'Bra din poengsum ble:' + highScore
    }
}

function showQuestion(question) {
  
    questionElement.innerText = question.question
    question.answerOptions.forEach(answer => {
        const choice = document.createElement('div')
        choice.innerText = answer.text
        choice.classList.add('div')
        if (answer.correct) {
            choice.dataset.correct = answer.correct
        }
        choice.addEventListener('click', selectAnswer)
        questionElement.appendChild(choice)
    })
}

function resetState() {

    while (questionElement.firstChild) {
        questionElement.removeChild(questionElement.firstChild)
    }
}

function selectAnswer(e) {

    const selectedChoice = e.target
    const correct = selectedChoice.dataset.correct
    if (correct) {
        score++




    } else if (score > 0) {
        score--

    }

    setNextQuestion()

}