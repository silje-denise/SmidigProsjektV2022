const userScore = [{score: 0}, {quizScore: 0}]

const addScore = (input) => {
    userScore[0].score += input;
}



const addScoreQuiz = (input) => {
    

    if (userScore[0].score <= 4 ) {
        
        userScore[1].quizScore += input;
        userScore[0].score += input;
    } else if (userScore[0].score > 4){
        userScore[1].quizScore = 4;
    }
    
}

const resetQuizScore = () => {
    userScore[1].quizScore = 0;
}
export default {userScore, addScore, addScoreQuiz, resetQuizScore}