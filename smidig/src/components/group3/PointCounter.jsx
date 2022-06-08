import React from 'react'
import styled from 'styled-components';
import GoldenStar from '../../images/goldStar.svg';
import score from "../../data/score"

const PointCounter = ({points}) => {

    const PointNumber = styled.p`
        font-size: 32px;
        font-weight: 600;
        color: white;
        margin: 0px 16px 0px 16px;
        float:left;
        line-height: 2;
        height: 100%;
    `;

    const StarIllustration = styled.div`
        
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 36px;
        height: 64px;
        display: inline-block;
        right: 0;
        margin-right: 16px;
    
    `;
    
    const PointContainer = styled.div`
    position: relative;
    height: 64px;
    border-radius: 64px;
    float: right;
    background-color: #222222;
`;

const getPoints = () => {
  return score.userScore[0].score;
}

  return (
    <PointContainer>
        <PointNumber>{getPoints()}</PointNumber>
        <StarIllustration style={{backgroundImage: `url(${GoldenStar})`}}></StarIllustration>
    </PointContainer>
  )
}

export default PointCounter