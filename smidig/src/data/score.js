const userScore = [{score: 0}, {quizScore: 0}]

const addScore = (input) => {
    userScore[0].score += input;
}



const addScoreQuiz = (input) => {
    
let globScore = 0;
    if (userScore[0].score <= 4 ) {
        globScore =+ input;
        userScore[1].quizScore += input;
       
    } else if (userScore[0].score > 4){
        userScore[1].quizScore = 4;
        globScore = 4;
    }
    userScore[0].score += globScore;
    
}

const resetQuizScore = () => {
    let quizScore = userScore[1].quizScore;
    let score = userScore[0].score;

    userScore[1].quizScore = quizScore - quizScore;
    userScore[0].score = score - quizScore;
}
export default {userScore, addScore, addScoreQuiz, resetQuizScore}