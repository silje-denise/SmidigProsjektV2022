import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProgressDiv from './ProgressDiv';
import dashedLine from '../../images/dashedLine.svg';
import AvatarIllu from '../../images/Viking.png';
import QuestionAlternative from './QuestionAlternative';
import checkmarkCircle from '../../images/checkmarkCircle.svg';
import xCircle from '../../images/xCircle.svg';
import waterMill from '../../images/waterMill.jpg';
import { getAvatarSource } from '../../getAvatarSource';

const QuizComponent = ({open, openQuestion, quizHandler, questionsArray, rightAnswer, wrongAnswer}) => {
  if (!open) return null;

  const fader = keyframes`
    from {opacity:0}
    to {opacity:1}
  `;

  const faderToClear = keyframes`
    from {opacity:1}
    to {opacity:0.5}
  `;

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
      margin: 32px 0px;
      border-radius: 32px;
      padding: 16px;
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
      position: relative;
      right: 0.4rem;
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
  animation: ${fader} 0.3s forwards linear;
  `;

  const AnswerAlternatives = styled.div`

  `;

  const AnswerStatus = styled.button`
    position: relative;
    height: 48px;
    width: 100%;
    background-image: linear-gradient(120deg, rgba(169, 223, 116, 1), rgba(115, 200, 45, 1));
    margin-top: 32px;
    border-radius: 24px;
    color: #e8e8e8;
    font-weight: 600;
    font-size: 24px;
    animation: ${faderToClear} 2s forwards linear;
  `;
 
  const AnswerStatusText = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: black;
    opacity: 0.7;
  `;

  const AnswerStatusIcon = styled.div`
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    left: 0;
    top: 0;
    width: 34px;
    height: 48px;
    margin-left: 8px;
    
  `;

  const StyledImg = styled.img`
  height: auto;
  width: auto;
  `
  
  return (
    <div>
      <QuizCard>
        <div> 
          <StatusQuiz>
            <StatusText>{openQuestion + 1}/{questionsArray.length}</StatusText>
          </StatusQuiz>
          <AvatarSatus>
            <AvatarText>Kan du hjelpe meg å svare?</AvatarText>
            <Avatar>
              <StyledImg src={getAvatarSource()}/>   
            </Avatar>
          </AvatarSatus>
        </div>
        <QuizQuestionContainer>
            <QuestionCategory>Spørsmål:</QuestionCategory>
            <Question>{questionsArray[openQuestion].question}</Question>
        </QuizQuestionContainer>
        <AnswerAlternatives>
          {questionsArray[openQuestion].answers.map((ansAlternative) => 
          <div onClick={() => quizHandler(ansAlternative.isCorrect)}>
            <QuestionAlternative text={ansAlternative.ansText}/>
          </div>
          )}
          <AnswerStatus style={{
                    display: `${rightAnswer}`}}>
            <AnswerStatusText>Korrekt!</AnswerStatusText>
            <AnswerStatusIcon style={{
                    backgroundImage: `url(${checkmarkCircle})`}}></AnswerStatusIcon>
          </AnswerStatus>
          <AnswerStatus style={{
                    backgroundImage: `linear-gradient(120deg, rgba(239, 164, 159, 1), rgba(235, 102, 87, 1))`,
                    display: `${wrongAnswer}`}}>
            <AnswerStatusText>Feil</AnswerStatusText>
            <AnswerStatusIcon style={{
                    backgroundImage: `url(${xCircle})`}}></AnswerStatusIcon>
          </AnswerStatus>
        </AnswerAlternatives>
      </QuizCard>
      <ProgressBar style={{
                  backgroundImage: `url(${dashedLine})`}}>
        <ProgressDiv number="1" color1="rgba(73, 163, 58,1)" color2="rgba(52, 109, 117, 1)"/>
        <ProgressDiv number="2" color1="rgba(254, 209, 86,1)" color2="rgba(246, 163, 88, 1)" active="0px 0px 0px 6px rgba(0,0,0,0.2)"/>
        <ProgressDiv number="3"color1="rgba(244, 150, 142,1)" color2="rgba(245, 138, 91, 1)"/>
      </ProgressBar>
    </div>
  );
}

export default QuizComponent;