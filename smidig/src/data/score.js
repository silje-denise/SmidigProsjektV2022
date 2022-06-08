const userScore = [{score: 0}]

const addScore = (input) => {
    userScore[0].score += input;
}

export default {userScore, addScore}