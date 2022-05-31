import React from 'react'
import styled from 'styled-components';
import ProgressDiv from './ProgressDiv'
import dashedLine from '../../images/dashedLine.svg'
import AvatarIllu from '../../images/Viking.png'
import QuestionAlternative from './QuestionAlternative';

const QuizComponent = ({open}) => {
  if (!open) return null;

  const ProgressBar = styled.div`
        height: 42px;
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 42px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `;

    const QuizCard = styled.div`
      position:relative;
      background-color: white;
      box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.20);
      margin: 64px 0px;
      border-radius: 32px;
      padding: 16px;
    `;

    const QuizStatusBar = styled.div`
    
    `;

    const StatusQuiz = styled.div`
      height: 36px;
      width: 64px;
      background-image: linear-gradient(120deg, rgba(254, 209, 86,1),rgba(246, 163, 88, 1));
      border-radius: 18px;
      display: inline-block;
    `;

    const StatusText = styled.p`
      width: 100%auto;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.7;
      opacity: 0.7;
      
    `;

    const AvatarSatus = styled.div`
      height: 36px;
      background-image: linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1));
      display: inline-block;
      float: right;
      border-radius: 18px;
    `;

    const Avatar = styled.div`
      width: 32px;
      height: 32px;
      margin: 2px;
      border-radius: 16px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      display: inline-block;
      float: right;
    `;

    const AvatarText = styled.p`
      font-size: 14px;
      color: white;
      line-height: 2.5;
      margin: 0px 8px 0px 12px;
      display: inline-block;
    `;

    const QuizQuestionContainer = styled.div`
      margin: 48px 0px;
    `;

    const QuestionCategory = styled.p`
      width: 100%auto;
      text-align: center;
      font-weight: 700;
      font-style: italic;
      opacity: 0.5;
      margin-bottom: 16px;
    `;

    const Question = styled.div`
      width: 100%;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
      opacity: 0.8;
    `;

    const AnswerAlternatives = styled.div`
      
    `;


const QuestionArray = ["Når ble Rælingen kommune grunnlagt?", "Hvilke farger har våpenskjoldet?", 
"Hvilke kommuner grenser til Rælingen kommune?", ""];
    

  return (
    <div>
      <QuizCard>
        <QuizStatusBar> 
          <StatusQuiz>
            <StatusText>1/4</StatusText>
          </StatusQuiz>

          <AvatarSatus>
            <AvatarText>Kan du hjelpe meg å svare?</AvatarText>
            <Avatar style={{
                    backgroundImage: `url(${AvatarIllu})`}}/>
          </AvatarSatus>
        </QuizStatusBar>
        
        <QuizQuestionContainer>
            <QuestionCategory>Spørsmål:</QuestionCategory>
            <Question>Når ble Rælingen kommune grunnlagt?</Question>
        </QuizQuestionContainer>

        <AnswerAlternatives>
          <QuestionAlternative text="1921"/>
          <QuestionAlternative text="1929"/>
          <QuestionAlternative text="1991"/>
          <QuestionAlternative text="2012"/>
        </AnswerAlternatives>

        
      </QuizCard>

        <ProgressBar style={{
                    backgroundImage: `url(${dashedLine})`}}>
                <ProgressDiv number="1" color1="rgba(73, 163, 58,1)" color2="rgba(52, 109, 117, 1)"/>
                <ProgressDiv number="2" color1="rgba(254, 209, 86,1)" color2="rgba(246, 163, 88, 1)" active="0px 0px 0px 6px rgba(0,0,0,0.2)"/>
                <ProgressDiv number="3"color1="rgba(244, 150, 142,1)" color2="rgba(245, 138, 91, 1)"/>
        </ProgressBar>
    </div>
  )
}

export default QuizComponent