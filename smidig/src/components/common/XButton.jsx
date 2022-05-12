import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledXButton = styled.div`
    height: 6rem;
    width: 4rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const XButton = () => {
    return(
        <>
            <StyledXButton>
                <FontAwesomeIcon icon={faXmark} size="3x"/>
            </StyledXButton>
        </>
    );
}



export default XButton