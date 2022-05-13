import React from "react";
import styled from "styled-components";

const StyledHello = styled.div`
    align-content: center;
    margin-top: 4rem;
    text-align: center;
`;

const Hello = () => {
    return(
        <>
            <StyledHello>
                <h1>
                    Hei!
                </h1>
            </StyledHello>
        </>
    );
}



export default Hello;