import React, { useState } from "react";
import styled from "styled-components";
import quizQuestions from "../Quiz/quizArray";
import NextButton from "../common/NextButton"


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
    background: none;
    width: 22rem;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    margin: auto;
    font-weight: bold;
    font-size: 35px;
    margin-top: 3rem;
`;

const StyledQuizElement = styled.button`
    height: 9rem;
    width: 9.5rem;
    border-radius: 2rem;
    margin: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    display: flex;
    width: 45%;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    border: solid;
    border-width: 2px;
    border-color: #37B019;
`;

const StyledQuizAnswers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding: 0;
    border: none;
    background: none;
`;





const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = () => {
      const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length){
        setCurrentQuestion(nextQuestion);
        }
            else {
                alert("du har ikke fler spørsmål")
            }
        
    };



    /*function selectAnswer(e) {

        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        if (correct) {
            selectedButton.style.BackroundColor = 'green';
            
    
    
    
        } 
    
        handleAnswerButtonClick()
    
    }
*/
    return(
        <>
            <StyledQuizWrapper>
                <StyledQuizQuestion>
                {quizQuestions[currentQuestion].questionText}
                </StyledQuizQuestion>
            </StyledQuizWrapper>

            
            <StyledQuizDiv>
            
                <div>
                    <StyledQuizAnswers>
                    
                        {quizQuestions[currentQuestion].answerOptions.map((answerOption)=>( 
                        <StyledQuizElement onClick={handleAnswerButtonClick}> {answerOption.answerText}</StyledQuizElement>))}
                    </StyledQuizAnswers>
        
                </div>
                
               

            </StyledQuizDiv>
            
            
            <NextButton></NextButton>
        </>
    );
}



export default Quiz

