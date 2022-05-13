import React from "react";
import styled from "styled-components";

const StyledHelloTest = styled.div`
    align-content: center;
    margin-top: 4rem;
    text-align: center;
`;

const HelloTest = () => {
    return(
        <>
            <StyledHelloTest>
                <h1>
                    Hei!
                </h1>
            </StyledHelloTest>
        </>
    );
}



export default HelloTest