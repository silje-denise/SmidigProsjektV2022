import React from "react";
import styled from "styled-components"



const StyledContainer = styled.div `
position: relative
`;


const StyledHistoryImage = styled.div `
position: absolute
`;

const StyledHistoryInfo = styled.div `
display: flex;
flex-direction: column

`;


const HistoryDiv = () => {

return(
    <div>
        <StyledContainer>
        <StyledHistoryInfo><h3>Historien</h3><p>Følg oss gjennom stien, og hjelp avataren</p></StyledHistoryInfo>
        <StyledHistoryImage><img src="Images/Viking.png" alt="Bilde av en viking" /></StyledHistoryImage>
       </StyledContainer>
    </div>
);


}
export default HistoryDiv;