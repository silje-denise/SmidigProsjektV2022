import React from 'react'
import styled from 'styled-components';

const QuestionAlternative = ({text}) => {

    const Answer = styled.div`
      height: 64px;
      width: 100%auto;
      border-radius: 40px;
      background-color: #e6e6e6;
      margin-top: 8px;
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