import React from "react";
import styled from "styled-components";
import GoldenStar from '../../Images/GoldenStar.png'


const StyledPoints = styled.div`
background-color: #323232;
color: white;
display: flex;
justify-content: center;
align-items: center;
width: 80px;
height: 50px;
border-radius: 20px;
z-index: 1;
`
const StyledPointsWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin: 30px;
`



const PointSystem = () => {
  return(
    <StyledPointsWrapper>
        <StyledPoints>
            <h2>5</h2> 
            <img src={GoldenStar} alt="stjerne" />
        </StyledPoints>
    </StyledPointsWrapper>
  );
}

export default PointSystem;