import React from "react";
import styled from "styled-components";
import Points from '../common/PointsComponent'



const StyledPointsWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin: 30px;
`



const PointSystem = () => {
  return(
    <StyledPointsWrapper>
      
       <Points></Points>
    </StyledPointsWrapper>
  );
}

export default PointSystem;