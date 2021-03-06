import React from "react";
import styled from "styled-components";

const StyledNextButton = styled.button`
    height: 4rem;
    width: 10rem;
    margin-left: 30%;
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: rgb(103,179,70);
    color: white;
    border-radius: 3rem;
    font-size: 24px;
    position: absolute;
`;

const NextButton = ({onClick}) => {
    return(
        <>
            <StyledNextButton onClick={onClick}>
                NESTE
            </StyledNextButton>
        </>
    );
}

export default NextButton;