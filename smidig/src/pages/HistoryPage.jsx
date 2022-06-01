import React, { useState } from 'react'
import styled from 'styled-components';
import ExitIcon from '../components/group3/ExitIcon';
import ExitMenu from '../components/group3/ExitMenu.jsx';
import HistoryInfoContainer from '../components/group3/HistoryInfoContainer';
import HistoryMap from '../components/group3/HistoryMap';
import PointCounterBar from '../components/group3/PointCounterBar';
import menuAudio from '../audio/menuClick.wav'
import backgroundPattern from '../images/backgroundPattern2.svg'
import QuizComponent from '../components/group3/QuizComponent'

const HistoryPage = () => {

    const menuClick = new Audio(menuAudio);

    const HistoryPage = styled.div`
        margin: 0px 32px;
    `;

    const HistoryPageContainer = styled.div`
        position: relative;
        margin: auto;
        margin-top: 32px;
        margin-bottom: 32px;
    `;

    const Background = styled.div`
        position: absolute;
        
        
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    `;

    const ExitBar = styled.div`
        margin-bottom: 42px;
    `;

    const ExitButton = styled.button`
        background-color: white;
    `;


const questionsArray = [
    {
    question: "Når ble Rælingen kommune grunnlagt?",
      answers: [
        {ansText: "1921", isCorrect: false},
        {ansText: "1929", isCorrect: true},
        {ansText: "1991", isCorrect: false},
        {ansText: "2012", isCorrect: false}
      ],
    },
    {
      question: "Hvordan lagde vi planker på 1920-tallet?",
      answers: [
        {ansText: "Sag", isCorrect: false},
        {ansText: "Øks", isCorrect: true},
        {ansText: "Motorsag", isCorrect: false},
        {ansText: "Sirkelsag", isCorrect: false}
      ],
    },
    {
      question: "Hvor kommer Ole Brum og gjengen fra?",
      answers: [
        {ansText: "Universal Studios", isCorrect: false},
        {ansText: "Disney", isCorrect: true},
        {ansText: "Fox", isCorrect: false},
        {ansText: "BBC", isCorrect: false}
      ],
    },
    {
      question: "Hvem er Kendrick Lamar?",
      answers: [
        {ansText: "Artist", isCorrect: true},
        {ansText: "Skuespiller", isCorrect: false},
        {ansText: "Politiker", isCorrect: false},
        {ansText: "Fotballspiller", isCorrect: false}
      ],
    }, 
  ];
    


    const [isOpen, setIsOpen] = useState(false);
    function exitMenuHandler() {
        
        setIsOpen(true);
        menuClick.play();
    }

    const [mapIsOpen, setMapIsOpen] = useState(true);
    function mapPageHandler() {
        if (mapIsOpen == false) {
            setMapIsOpen(true);
        } else {
            setMapIsOpen(false);
            setHistoryInfoOpen(true);
            setPointBarIsOpen(true);
        }
    }

    const [historyInfoIsOpen, setHistoryInfoOpen] = useState(false);
    function historyInfoHandler() {
        if (historyInfoIsOpen == false) {
            setHistoryInfoOpen(true);
        } else {
            setHistoryInfoOpen(false);
            setQuizPageIsOpen(true);
        }
    }

    const [quizPageIsOpen, setQuizPageIsOpen] = useState(false);
    function quizPageHandler() {
        if(quizPageIsOpen == false) {
            setHistoryInfoOpen(false)
            setQuizPageIsOpen(true)
        } else {
            setQuizPageIsOpen(false)
        }
    }

    const [pointBarIsOpen, setPointBarIsOpen] = useState(false);

    const [score, setScore] = useState(0);

    const [openQuestion, setOpenQuestion] = useState(0);
    const [showAnswerStatusCorrect, setShowAnswerStatusCorrect] = useState("none");
    const [showAnswerStatusWrong, setShowAnswerStatusWrong] = useState("none");
    

    const quizHandler = (isCorrect) => {
        const nextQuestion = openQuestion + 1;
        if(isCorrect === true) {
            setScore(score+1)
            setShowAnswerStatusCorrect("true")
            setShowAnswerStatusWrong("none")
        }else {
            setShowAnswerStatusCorrect("none")
            setShowAnswerStatusWrong("true")
        }

        if (nextQuestion < 4){
            setOpenQuestion(nextQuestion);
        } else {
            {/* Her kan du aktivere neste side etter quiz! */}
        }
    }

    
    

  return (
      <HistoryPage>
          <Background></Background>
        <HistoryPageContainer>
          <ExitBar>
            <ExitButton onClick={exitMenuHandler}>
              <ExitIcon opacity='0.5' width="36px" height="36px"></ExitIcon>
            </ExitButton>
            <PointCounterBar points={score} open={pointBarIsOpen}/>
          </ExitBar>
          <div>
            <HistoryMap open={mapIsOpen} onClose={mapPageHandler}/>
            <HistoryInfoContainer open={historyInfoIsOpen} onClose={historyInfoHandler}/>
            <QuizComponent open={quizPageIsOpen} openQuestion={openQuestion} quizHandler={quizHandler} questionsArray={questionsArray} rightAnswer={showAnswerStatusCorrect} wrongAnswer={showAnswerStatusWrong}/>
          </div>
          <ExitMenu open={isOpen} onClose={() => setIsOpen(false)}/>
      </HistoryPageContainer>
      </HistoryPage>
  )
}

export default HistoryPage