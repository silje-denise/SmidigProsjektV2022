import HistoryDiv from "../components/gamesLandingPageComponents/HistoryDiv"
import BackroundGames from "../components/gamesLandingPageComponents/BackgroundGames"
import PointSystem from "../components/gamesLandingPageComponents/PointSystem"
import GameSelection from '../components/gamesLandingPageComponents/GameSelection'
import styled from "styled-components"
import { Link } from "react-router-dom"


const GameLanding = styled.div`
    margin: 32px;
`;



const GamesLandingPage = () => {

    return(
        
    <GameLanding>
     <PointSystem></PointSystem>
     <Link to="/history">
     <HistoryDiv></HistoryDiv>
     </Link>
     <BackroundGames></BackroundGames>
     <GameSelection></GameSelection>
    </GameLanding>
        
     
    );
    
    
    }
    export default GamesLandingPage
