import HistoryDiv from "../components/gamesLandingPageCom/PointSystem"
import GameSelection from "../components/gamesLandingPageComponenponents/HistoryDiv"
import BackroundGames from "../components/gamesLandingPageComponents/BackgroundGames"
import PointSystem from "../components/gamesLandingPageComponentsts/GameSelection"
import styled from "styled-components"


const GameLanding = styled.div`
    margin: 32px;
`;



const GamesLandingPage = () => {

    return(
        
    <GameLanding>
     <PointSystem></PointSystem>
     <HistoryDiv></HistoryDiv>
     <BackroundGames></BackroundGames>
     <GameSelection></GameSelection>
    </GameLanding>
        
     
    );
    
    
    }
    export default GamesLandingPage
