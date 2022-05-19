import Dog from '../../images/Dog.png'


const quizQuestions = [{
    questionText: 'Hva heter stadioen til Liverpool?',
    answerOptions:
    // Q1
        [
        { answerText: 'Anfield', image: Dog, correct: true },
        { answerText: 'Stamford Bridge', correct: false },
        { answerText: 'Test2', correct: false },
        { answerText: 'Test', correct: false }
    ]
},
{
    questionText: 'hva heter kapteinen på Liverpool?',
    answerOptions:
    // Q2
        [
        { answerText: 'Van dijk', correct: false },
        { answerText: 'Henderson', correct: false },
        { answerText: 'Trent-Alexander-Arnold', correct: false },
        { answerText: 'Keita', correct: true }
    ]
},
{
    questionText: 'Hvor mange trofeer har liverpool?',
    answerOptions:
    // Q3
        [
        { answerText: '9', correct: true },
        { answerText: '8', correct: false }
    ]
},
{
    questionText: 'Hvilke spiller selges det mest drakter av?',
    answerOptions:
    // Q4
        [
        { answerText: 'Salah', correct: true },
        { answerText:'Mane', correct: false },
        { answerText: 'Navarsete', correct: false },
        { answerText: 'Brage', correct: false }

    ]
}

]

export default quizQuestions;