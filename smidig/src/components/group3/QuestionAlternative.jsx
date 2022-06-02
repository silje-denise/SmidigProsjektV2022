import React from 'react'
import styled, { keyframes } from 'styled-components';

const QuestionAlternative = ({text}) => {


  const fader = keyframes`
    from {opacity:0}
    to {opacity:1}
  `;

    const Answer = styled.div`
      height: 64px;
      width: 100%auto;
      border-radius: 40px;
      margin-top: 8px;
      background-color: #e6e6e6;
      animation: ${fader} 2s forwards linear;
      &:hover {
        background-color: #c9c9c9;
      }
    `;

    const AnswerText = styled.p`
      width: 100%auto;
      text-align: center;
      line-height: 3.9;
      font-weight: 600;
    `;



  return (
    <Answer>
        <AnswerText>{text}</AnswerText>
    </Answer>
  )
}

export default QuestionAlternative