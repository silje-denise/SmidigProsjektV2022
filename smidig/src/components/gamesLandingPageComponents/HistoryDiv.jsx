import React from "react";
import styled from "styled-components"
import Dog from "../../images/Dog.png"

const StyledContainerWrappper = styled.div`
display: flex;
justify-content: center;
`

const StyledContainer = styled.div `
display: grid;
align-content: center;
align-items: center;
padding: 20px;
background-image: linear-gradient(to top right ,#D1DD8F 50%,#71C742);
width: 300px;
height: 70px;
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
`

const StyledHistoryInfo = styled.div `
grid-area: main;
`
const StyledInfoP = styled.p`
margin-block-start:0;
`



const HistoryDiv = () => {

return(
        <StyledContainerWrappper>
        <StyledContainer>
        <StyledHeader>
        <h2>Historien</h2>
        </StyledHeader>
        <StyledHistoryInfo>
        <StyledInfoP>Følg oss gjennom stien, <br></br>og hjelp avataren</StyledInfoP>
        </StyledHistoryInfo>
        <StyledHistoryImage>
        <StyledImage src={Dog} alt="Bilde av en hund" /></StyledHistoryImage>
       </StyledContainer>
        </StyledContainerWrappper>
);


}
export default HistoryDiv;