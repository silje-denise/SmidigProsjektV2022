import HistoryDiv from "../components/gamesLandingPageComponents/HistoryDiv"
import BackroundGames from "../components/gamesLandingPageComponents/BackgroundGames"
import PointSystem from "../components/gamesLandingPageComponents/PointSystem"
import GameSelection from '../components/gamesLandingPageComponents/GameSelection'
import styled from "styled-components"

<<<<<<< HEAD


=======
>>>>>>> 5329a50e258af32bb3adc2961082e9775ce3f085


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
