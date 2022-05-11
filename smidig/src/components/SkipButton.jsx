import React from "react";
import styled from "styled-components";

const StyledSkipButton = styled.div`
    align-content: center;
    padding-top: 5rem;
    text-align: center;
    color: #209803;
    font-size: 21px;

    :hover {
        text-decoration: underline;
        color: #5984b5;
    }
`;

const SkipButton = () => {
    return(
        <>
            <StyledSkipButton>
                <p>
                    Hopp over
                </p>
            </StyledSkipButton>
        </>
    );
}



export default SkipButton