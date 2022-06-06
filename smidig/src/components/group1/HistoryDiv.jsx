import React from "react";
import styled from "styled-components"
import { getAvatarSource } from "../../getAvatarSource";

const StyledContainerWrappper = styled.div`
        padding-top: 80px;
`

const StyledContainer = styled.div `
        display: grid;
        align-content: center;
        align-items: center;
        background-image: linear-gradient(to top right ,#D1DD8F 50%,#71C742);
        width: 100%;
        
        border-radius: 20px;
        grid-template-columns: 200px 100px;
        grid-template-rows: auto;
        grid-template-areas: 
                "header sidebar "
                "main sidebar";
                
`

const StyledHistoryImage = styled.div `
        grid-area: sidebar;
`;

const StyledImage = styled.img`
   height : 90px ;
`;


const StyledHeader = styled.div`
        grid-area: header;
        margin: 0;
`;

const StyledHistoryInfo = styled.div `
        grid-area: main;
`;

const StyledInfoP = styled.p`
        margin-block-start:0;
`;

const StyledText = styled.p`
        padding: 24px;
`;



const HistoryDiv = () => {

        return(
                <StyledContainerWrappper>
                        <StyledContainer>
                                <StyledText>

                                
                                <StyledHeader>
                                        <h3>Historien</h3>
                                </StyledHeader>
                                <StyledHistoryInfo>
                                        <StyledInfoP>Følg oss gjennom stien, <br></br>og hjelp avataren</StyledInfoP>
                                </StyledHistoryInfo>
                                </StyledText>
                                <StyledHistoryImage>
                                        <StyledImage src={getAvatarSource()} alt="Bilde av en hund" />
                                </StyledHistoryImage>
                        </StyledContainer>
                </StyledContainerWrappper>
        );

}
export default HistoryDiv;