import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: white;
`;

const StyledSkipButton = styled.div`
    align-content: center;
    padding-top: 2.5rem;
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
            <StyledLink to="/overview">
            <StyledSkipButton>
                <h3>
                    Hopp over
                </h3>
            </StyledSkipButton>
            </StyledLink>
        </>
    );
}



export default SkipButton