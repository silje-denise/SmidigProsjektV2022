import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

    const StyledXButton = styled.button`
        height: 6rem;
        width: 4rem;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: white;
        z-index: 1000;
        position: absolute;
    `;

    const WhiteBackground = styled.div`
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    `;

    const StyledPageWrapper = styled.div`
        height: 100vh;
        width: 100vw;
        z-index: 100;
        position: absolute;
        top: 0px;
        overflow: hidden;
    `;

    const StyledBackground = styled.div`
        height: 20rem;
        width: 100%;
        margin-top: 125%;
        overflow: hidden;
        position: absolute;
    `;

    const StyledHeaderDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-top: 15rem;
        padding: 2rem;
        text-align: center;
        color: rgb(103,179,70);
    `;

    const StyledTextDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-top: 1rem;
        padding: 2rem;
        text-align: center;
    `;

    const QuizComplete = () => {

    return(
        <>
            <WhiteBackground>
                <Link to={"/games"}>
                    <StyledXButton>
                        <FontAwesomeIcon icon={faXmark} size="3x"/>
                    </StyledXButton>
                </Link>
                <StyledBackground>
                </StyledBackground>
                <StyledPageWrapper>
                    <StyledHeaderDiv>
                        <h1>
                            Du er ferdig med quizzen!
                        </h1>
                    </StyledHeaderDiv>
                    <StyledTextDiv>
                        <h3>
                            Du fikk <b>3/4</b> stjerner
                        </h3>
                    </StyledTextDiv>
                </StyledPageWrapper>
            </WhiteBackground>
        </>
    );
}


export default QuizComplete;