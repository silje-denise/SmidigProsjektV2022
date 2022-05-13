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
    background-color: #37B019;
    color: white;
    border-radius: 3rem;
    font-size: 24px;
`;

const NextButton = () => {
    return(
        <>
            <StyledNextButton>
                NESTE
            </StyledNextButton>
        </>
    );
}



export default NextButton