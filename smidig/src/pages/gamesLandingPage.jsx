import HistoryDiv from "../components/gamesLandingPageComponents/HistoryDiv"
import BackroundGames from "../components/gamesLandingPageComponents/BackgroundGames"
import PointSystem from "../components/gamesLandingPageComponents/pointSystem"
import GamesSelection from '../components/gamesLandingPageComponents/GameSelection'






const GamesLandingPage = () => {

    return(
        
    <div>
     <PointSystem></PointSystem>
     <HistoryDiv></HistoryDiv>
     <BackroundGames></BackroundGames>
     <GamesSelection></GamesSelection>
    </div>
        
     
    );
    
    
    }
    export default GamesLandingPage
