import React, { useState } from "react";
import styled from "styled-components";
import quizQuestions from "../Quiz/quizArray";
import NextButton from "../common/NextButton";
import PointsComponent from '../common/PointsComponent'



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
    background-color: #ffffff;
    align-items: center;
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
    
    

    const [answerClicked, setAnswerClicked] = useState(-1);
    
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (correct,index)  => {
        
       setAnswerClicked(index);
       
        
    };

    const getClassNameForOption = (index) => {
        
        if (index === answerClicked) {
            const isCorrect = quizQuestions[currentQuestion].answerOptions[index].correct
            if(isCorrect===true){
                return "correct"
            }
            else if(isCorrect===false){
                return "false"
            }
        }
        
    }
    console.log(answerClicked)

    const nextQuestion = () => {
        console.log('hei')
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < quizQuestions.length){
        setCurrentQuestion(nextQuestion);
        setAnswerClicked(-1)
        }
            else {
                
                alert("quizen er ferdig")
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
            
                <div>
                    <StyledQuizAnswers>
                    
                    {quizQuestions[currentQuestion].answerOptions.map((answerOption, index)=>( 
                        <StyledQuizElement  onClick={() => handleAnswerButtonClick(answerOption.correct, index)} className={getClassNameForOption(index)}> {answerOption.answerText} </StyledQuizElement>))}
                    </StyledQuizAnswers>
        
                </div>
                
               

            </StyledQuizDiv>
           
            
           
            <NextButton onClick={nextQuestion}></NextButton>
        
           
        </>
    );
}



export default Quiz

