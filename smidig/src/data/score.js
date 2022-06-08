const userScore = [{score: 1}]

const addScore = (input) => {
    userScore[0].score += input;
}

export default {userScore, addScore}