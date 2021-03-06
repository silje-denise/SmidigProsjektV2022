import React from "react";
import styled from "styled-components";
import { getAvatarSource } from "../../getAvatarSource";


const StyledAvatarHeader = styled("div")`
    height: 200px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;
const StyledAvatarImageWrapper = styled("div")`
    border-radius: 100%;
    border: solid 2px #ccc;
    width: 100px;
    height: 100px;
`;
const StyledAvatarImage = styled("img")`
    border-radius: 100%;
    width: 100px;
    height: 100px;
`;
const StyledHeaderText = styled("h2")`
    margin-top: 1.25rem;
`;

const AvatarHeader = () => {
    return(
        <>
            <StyledAvatarHeader>
               <StyledAvatarImageWrapper>
                   <StyledAvatarImage src={getAvatarSource()} alt="The chosen avatar (interchangable)"/>
               </StyledAvatarImageWrapper>
                <StyledHeaderText>Velg din avatar</StyledHeaderText>
            </StyledAvatarHeader>
       </>
    );
}


export default AvatarHeader;