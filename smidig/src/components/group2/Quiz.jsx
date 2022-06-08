import React, { useState } from "react";
import styled from "styled-components";
import quizQuestions from "../../data/quizArray";
import NextButton from "../common/NextButton";
import QuizComplete from "./QuizComplete";
import { keyframes } from "styled-components";
import globalScore from "../../data/score.js";

//import PointsComponent from '../common/PointsComponent'

const StyledQuizWrapper = styled.div`
    overflow: hidden; 
    display: flex;
    justify-content: center;
`;

const StyledQuizQuestion = styled.h3`
    height: 100%;
    width: 20rem;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    font-size: 27px;
    text-align: center;
    font-weight: 700;
`;

const StyledQuizDiv = styled.div`
    width: 22rem;
    height: 18rem;
    display: flex;
    border-radius: 1.5rem;
    margin: auto;
    font-weight: bold;
    font-size: 35px;
    margin-top: 3rem; 
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

const StyledQuizElement = styled.button`
    border-radius: 2rem;
    margin: 5px;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    border: solid;
    border-width: 2px;
    border-color: #37B019;
    background-color: #ffffff;
    align-items: center;
`;

const DivQuizPage = styled.div`
    display: none;
`;



const Quiz = () => {
    const [answerClicked, setAnswerClicked] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerButtonClick = (correct,index)  => {  
       setAnswerClicked(index);
       
       setTimeout(nextQuestion, 500)
       
    };

    const getClassNameForOption = (index) => {
        let returnValue = "";
        if (index === answerClicked) {
            const isCorrect = quizQuestions[currentQuestion].answerOptions[index].correct
            if(isCorrect===true){
                globalScore.addScoreQuiz(0.5);
                alert(globalScore.userScore[1].quizScore + " " + globalScore.userScore[0].score )
                
                returnValue = "correct";
            }
            else if(isCorrect===false){
                returnValue = "false"
            }
            
        }
        return returnValue;
    }

    const nextQuestion = () => {
        let nextQuestion = currentQuestion + 1;

        if (nextQuestion < 4){
            setCurrentQuestion(nextQuestion);
            setAnswerClicked(-1)
            
        }else {
            setAnswerClicked(-1)
            
                showQuiz()
                setTimeout(showQuiz, 100)
            }
    }

    function showQuiz() {
        setScore(globalScore.userScore[1].quizScore)
        var hiddenDiv = document.getElementById("CompleteQuizOverlay");
    
        if (hiddenDiv.style.display === "none") {
            hiddenDiv.style.display = "block";
        } else {
            hiddenDiv.style.display = "none";
        }
      }


    return(
        <>
            <StyledQuizWrapper>
                {showScore}  
                <StyledQuizQuestion>
                    {quizQuestions[currentQuestion].questionText}
                </StyledQuizQuestion>
            </StyledQuizWrapper>
            <StyledQuizDiv>
                {quizQuestions[currentQuestion].answerOptions.map((answerOption, index)=>( 
                <StyledQuizElement  onClick={() => {handleAnswerButtonClick(answerOption.correct, index)}} className={getClassNameForOption(index)}> {answerOption.answerText} </StyledQuizElement>))}
            </StyledQuizDiv>
            <NextButton onClick={nextQuestion}></NextButton>

            <DivQuizPage id='CompleteQuizOverlay'>
                <QuizComplete points={score}/>
            </DivQuizPage>
        </>
    );
}

export default Quiz;

