import React from "react";
import styled from "styled-components";

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

const StyledQuizElement = styled.div`
    height: 9rem;
    width: 9.5rem;
    border-radius: 2rem;
    margin: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    text-align: center;
    border: solid;
    border-width: 2px;
    border-color: #37B019;
`;

const StyledQuizAnswers = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Quiz = () => {
    return(
        <>
            <StyledQuizWrapper>
                <StyledQuizQuestion>
                    Jeg spør deg om noe.
                </StyledQuizQuestion>
            </StyledQuizWrapper>

            
            <StyledQuizDiv>

                <div>
                    <StyledQuizElement>
                        <StyledQuizAnswers>Answer</StyledQuizAnswers>
                    </StyledQuizElement>
        
                    <StyledQuizElement>
                        <StyledQuizAnswers>Option</StyledQuizAnswers>
                    </StyledQuizElement>
                </div>
                
                <div>
                    <StyledQuizElement>
                        <StyledQuizAnswers>Option</StyledQuizAnswers>
                    </StyledQuizElement>

                    <StyledQuizElement>
                        <StyledQuizAnswers>Option</StyledQuizAnswers>
                    </StyledQuizElement>
                </div>

            </StyledQuizDiv>

        </>
    );
}



export default Quiz