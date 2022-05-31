import React from "react";
import styled from "styled-components";

const StyledHello = styled.h1`
    align-content: center;
    margin-top: 4rem;
    text-align: center;
`;

const Hello = () => {
    return(
        <>
            <StyledHello>
                Hei!
            </StyledHello>
        </>
    );
}

export default Hello;