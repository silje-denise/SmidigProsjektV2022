import React, { useState } from 'react';
import styled from 'styled-components';
import ExitMenu from '../components/group3/ExitMenu.jsx';
import HistoryInfoContainer from '../components/group3/HistoryInfoContainer';
import HistoryMap from '../components/group3/HistoryMap';
import PointCounterBar from '../components/group3/PointCounter';
import menuAudio from '../audio/menuClick.wav'
import QuizComponent from '../components/group3/QuizComponent'
import { HistoryCheckpoint } from '../components/group3/HistoryCheckpoint';
import HistoryIntroduction from '../audio/historyIntroduction.mp3'
import Ostavagen from '../audio/Ostavagen.mp3';
import sporsmalIntro from '../audio/sporsmalIntro.mp3';
import Viking from '../images/Viking.png'
import waterMill from '../images/waterMill.jpg';
import globalScore from '../data/score';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HistoryPage = () => {

    const menuClick = new Audio(menuAudio);
    const historyIntro = new Audio(HistoryIntroduction);
    const ostavagenAudio = new Audio(Ostavagen);
    const sporsmalIntroAudio = new Audio(sporsmalIntro);

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


const questionsStory1 = [
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

  const questionsStory2 = [
    {
    question: "Test spørs 1",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "riktigtestsvar3", isCorrect: true},
        {ansText: "testsvar4", isCorrect: false}
      ],
    },
    {
      question: "Test spørs 2",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "riktigtestsvar4", isCorrect: true}
      ],
    },
    {
      question: "Test spørs 3",
      answers: [
        {ansText: "riktigtestsvar1", isCorrect: true},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "testsvar4", isCorrect: false}
      ],
    },
    {
      question: "Test spørs 4",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "riktigtestsvar2", isCorrect: true},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "testsvar4", isCorrect: false}
      ],
    }, 
  ];

  const questionsStory3 = [
    {
    question: "Test spørs 1",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "riktigtestsvar3", isCorrect: true},
        {ansText: "testsvar4", isCorrect: false}
      ],
    },
    {
      question: "Test spørs 2",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "riktigtestsvar4", isCorrect: true}
      ],
    },
    {
      question: "Test spørs 3",
      answers: [
        {ansText: "riktigtestsvar1", isCorrect: true},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "testsvar4", isCorrect: false}
      ],
    },
    {
      question: "Test spørs 4",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "riktigtestsvar2", isCorrect: true},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "testsvar4", isCorrect: false}
      ],
    }, 
  ];

  const questionsStory4 = [
    {
    question: "Test spørs 1",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "riktigtestsvar3", isCorrect: true},
        {ansText: "testsvar4", isCorrect: false}
      ],
    },
    {
      question: "Test spørs 2",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "riktigtestsvar4", isCorrect: true}
      ],
    },
    {
      question: "Test spørs 3",
      answers: [
        {ansText: "riktigtestsvar1", isCorrect: true},
        {ansText: "testsvar2", isCorrect: false},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "testsvar4", isCorrect: false}
      ],
    },
    {
      question: "Test spørs 4",
      answers: [
        {ansText: "testsvar1", isCorrect: false},
        {ansText: "riktigtestsvar2", isCorrect: true},
        {ansText: "testsvar3", isCorrect: false},
        {ansText: "testsvar4", isCorrect: false}
      ],
    }, 
  ];
    

  const [story1, setStory1] = useState("true");
  const [story2, setStory2] = useState("none");
  const [story3, setStory3] = useState("none");
  const [story4, setStory4] = useState("none");
  const [storyCheckpoint, setStoryCheckpoint] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    function exitMenuHandler() {
        
        setIsOpen(true);
        menuClick.play();
    }

    const [mapIsOpen, setMapIsOpen] = useState(true);
    function mapPageHandler(story) {
        setScore(0);
        setShowGoldenStar1("100%")
        setShowGoldenStar2("100%")
        setShowGoldenStar3("100%")
        setShowGoldenStar4("100%")
        if (mapIsOpen ===false) {
            setMapIsOpen(true);
            
        } else {
            setMapIsOpen(false);
            setHistoryInfoOpen(true);
            setPointBarIsOpen(true);
            {/*ostavagenAudio.play()*/}
        }
    }

    const [historyInfoIsOpen, setHistoryInfoOpen] = useState(false);
    function historyInfoHandler() {
        if (historyInfoIsOpen ===false) {
            setHistoryInfoOpen(true);
        } else {
            setHistoryInfoOpen(false);
            setQuizPageIsOpen(true);
            {/*sporsmalIntroAudio.play()*/}
        }
    }

    const [quizPageIsOpen, setQuizPageIsOpen] = useState(false);
    function quizPageHandler() {
        if(quizPageIsOpen === false) {
            setHistoryInfoOpen(false)
            setQuizPageIsOpen(true)
        } else {
            setQuizPageIsOpen(false)
        }
    }

    const [pointBarIsOpen, setPointBarIsOpen] = useState(true);
    const [historyCheckpointIsOpen, setHistoryCheckpointIsOpen] = useState(false);
    const checkpointHandler = () => {
      if(historyCheckpointIsOpen === true) {
        setHistoryCheckpointIsOpen(false)
        if(story1==="true"){
          setStory1("none");
          setStory2("true");
          setScore(0);
        } else if(story2==="true"){
          setStory2("none");
          setStory3("true");
          setScore(0);
        } else if(story3==="true"){
          setStory3("none");
          setStory4("true");
          setScore(0);
        } else if(story4==="true") {
          setStory4("none");
          setStoryCheckpoint(true);
          setScore(0);
          {/*Her må du legge til total score checkpoint for alle sstoriene!*/}
        }
        setMapIsOpen(true)
      }
    }

    
    const [totalScore, setTotalScore] = useState(0);

    const [openQuestion, setOpenQuestion] = useState(0);
    const [showAnswerStatusCorrect, setShowAnswerStatusCorrect] = useState("none");
    const [showAnswerStatusWrong, setShowAnswerStatusWrong] = useState("none");

    const [showGoldenStar1, setShowGoldenStar1] = useState("100%");
    const [showGoldenStar2, setShowGoldenStar2] = useState("100%");
    const [showGoldenStar3, setShowGoldenStar3] = useState("100%");
    const [showGoldenStar4, setShowGoldenStar4] = useState("100%");

    function addLocalScore(input) {
      setScore(score + input);
    }
    
    const [score, setScore] = useState(0);

    
    const quizHandler = (isCorrect) => {
        
        if(isCorrect === true) {
          
            
            globalScore.addScore(1);
            addLocalScore(1);
            
            setShowAnswerStatusCorrect("true")
            setShowAnswerStatusWrong("none")
        }else {
            setShowAnswerStatusCorrect("none")
            setShowAnswerStatusWrong("true")
        }

        const nextQuestion = openQuestion + 1;
        if (nextQuestion < 4){
            setOpenQuestion(nextQuestion);
        } else {
            setTotalScore(totalScore + score);
            if (score === 1) {
              setShowGoldenStar1("0%")
            } else if (score === 2) {
              setShowGoldenStar1("0%")
              setShowGoldenStar2("0%")
            } else if (score === 3) {
              alert(score)
              setShowGoldenStar1("0%")
              setShowGoldenStar2("0%")
              setShowGoldenStar3("0%")
            } else if (score === 4) {
              
              setShowGoldenStar1("0%")
              setShowGoldenStar2("0%")
              setShowGoldenStar3("0%")
              setShowGoldenStar4("0%")
            }
            
            setQuizPageIsOpen(false);
            setHistoryCheckpointIsOpen(true);
            setOpenQuestion(0);
            
        }
    }

    const storyCheckpointHandler = () => {
      setHistoryCheckpointIsOpen(false)
      setIsOpen(true);
    }

    
    

    
    

  return (
      <HistoryPage>
          <Background></Background>
        <HistoryPageContainer>
          <ExitBar>
            <ExitButton onClick={exitMenuHandler}>
              <FontAwesomeIcon icon={faXmark} size="3x"/>
            </ExitButton>
            <PointCounterBar open={pointBarIsOpen}/>
          </ExitBar>
          <div style={{display: story1}}>
            <HistoryMap open={mapIsOpen} onClose={mapPageHandler} rud="1" avatarTitle="Hei og velkommen!" avatarBody="Endelig er du her! Nå kan vi gå gjennom kulturstien sammen."/>
            <HistoryInfoContainer open={historyInfoIsOpen} onClose={historyInfoHandler} title="Teststed1" body="Lorum ipsum tester tester tester tester tester tester ij sefijd efijowefo wo fwioehf gww roifjweiog wg orug wo fwie ofjiowe fwieof weoigh weigw. oqwpdq qopwdw dqwo dqw owefkowfj fewo few e, feowkfowe fowe. ewokfowekf." 
              fact1="oijef iejfois fesf sfef sadaefae adaw daw." fact2="noe opwqdq feu f ue." fact3="iojaeoja dwa da." illustration={`${waterMill}`} avatarTtile="Dette er Ostevågen!" avatarBody="Dette er mitt hjem! Er du klar til å hjelpe meg med noen spørsmål?" avatarIllustration={`${Viking}`}/>
            <QuizComponent open={quizPageIsOpen} openQuestion={openQuestion} quizHandler={quizHandler} questionsArray={questionsStory1} rightAnswer={showAnswerStatusCorrect} wrongAnswer={showAnswerStatusWrong}/>
            <HistoryCheckpoint open={historyCheckpointIsOpen} star1={showGoldenStar1} star2={showGoldenStar2} star3={showGoldenStar3} star4={showGoldenStar4} points={score} onClose={checkpointHandler}/>
          </div>
          <div style={{display: story2}}>
            <HistoryMap open={mapIsOpen} onClose={mapPageHandler} borgen="1" avatarTitle="Borgen" avatarBody="Nå skal vi videre til Borgen! Et vikitg samlepunkt."/>
            <HistoryInfoContainer open={historyInfoIsOpen} onClose={historyInfoHandler} title="Teststed2" body="Lorum ipsum tester tester tester tester tester tester ij sefijd efijowefo wo fwioehf gww roifjweiog wg orug wo fwie ofjiowe fwieof weoigh weigw" 
              fact1="oijef iejfois fesf sfef sadaefae adaw daw." fact2="noe opwqdq feu f ue." fact3="iojaeoja dwa da." illustration={`${waterMill}`} avatarTtile="Dette er Jergården!" avatarBody="Her bodde det mange innen skogsvirksomhet." avatarIllustration={`${Viking}`}/>
            <QuizComponent open={quizPageIsOpen} openQuestion={openQuestion} quizHandler={quizHandler} questionsArray={questionsStory2} rightAnswer={showAnswerStatusCorrect} wrongAnswer={showAnswerStatusWrong}/>
            <HistoryCheckpoint open={historyCheckpointIsOpen} star1={showGoldenStar1} star2={showGoldenStar2} star3={showGoldenStar3} star4={showGoldenStar4} points={score} onClose={checkpointHandler}/>
          </div>
          <div style={{display: story3}}>
            <HistoryMap open={mapIsOpen} onClose={mapPageHandler} norum="1" avatarTitle="Norum" avatarBody="Nå skal vi til Norum!"/>
            <HistoryInfoContainer open={historyInfoIsOpen} onClose={historyInfoHandler} title="Teststed3" body="Lorum ipsum tester tester tester tester tester tester ij sefijd efijowefo wo fwioehf gww roifjweiog wg orug wo fwie ofjiowe fwieof weoigh weigw" 
              fact1="oijef iejfois fesf sfef sadaefae adaw daw." fact2="noe opwqdq feu f ue." fact3="iojaeoja dwa da." illustration={`${waterMill}`} avatarTtile="Test3" avatarBody="Her bodde det mange innen skogsvirksomhet." avatarIllustration={`${Viking}`}/>
            <QuizComponent open={quizPageIsOpen} openQuestion={openQuestion} quizHandler={quizHandler} questionsArray={questionsStory3} rightAnswer={showAnswerStatusCorrect} wrongAnswer={showAnswerStatusWrong}/>
            <HistoryCheckpoint open={historyCheckpointIsOpen} star1={showGoldenStar1} star2={showGoldenStar2} star3={showGoldenStar3} star4={showGoldenStar4} points={score} onClose={checkpointHandler}/>
          </div>
          <div style={{display: story4}}>
            <HistoryMap open={mapIsOpen} onClose={mapPageHandler} torva="1" avatarTitle="Torva" avatarBody="Her er Torva!"/>
            <HistoryInfoContainer open={historyInfoIsOpen} onClose={historyInfoHandler} title="Teststed4" body="Lorum ipsum tester tester tester tester tester tester ij sefijd efijowefo wo fwioehf gww roifjweiog wg orug wo fwie ofjiowe fwieof weoigh weigw" 
              fact1="oijef iejfois fesf sfef sadaefae adaw daw." fact2="noe opwqdq feu f ue." fact3="iojaeoja dwa da." illustration={`${waterMill}`} avatarTtile="Test4" avatarBody="Her bodde det mange innen skogsvirksomhet." avatarIllustration={`${Viking}`}/>
            <QuizComponent open={quizPageIsOpen} openQuestion={openQuestion} quizHandler={quizHandler} questionsArray={questionsStory4} rightAnswer={showAnswerStatusCorrect} wrongAnswer={showAnswerStatusWrong}/>
            <HistoryCheckpoint open={historyCheckpointIsOpen} star1={showGoldenStar1} star2={showGoldenStar2} star3={showGoldenStar3} star4={showGoldenStar4} points={score} onClose={checkpointHandler}/>
          </div>
          <HistoryCheckpoint open={storyCheckpoint} points={totalScore} total="16" finnish="Da var vi ferdige for denne gang!" hideStars={"none"} onClose={storyCheckpointHandler}></HistoryCheckpoint>
          <ExitMenu open={isOpen} onClose={() => setIsOpen(false)}/>
      </HistoryPageContainer>
      </HistoryPage>
  );
}

export default HistoryPage;