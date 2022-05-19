import HistoryDiv from "../components/gamesLandingPageComponents/HistoryDiv"
import Points from "../components/common/PointsComponent"
import GameSelection from '../components/gamesLandingPageComponents/GameSelection'
import styled from "styled-components"
import Navigation from "../components/group3/Navigation"
import HeaderText from "../components/gamesLandingPageComponents/HeaderText"
import Background from "../images/background.png"



const GameLanding = styled.div`
    margin: 32px;

`;
const NavWrapper = styled.div`
position: absolute;
bottom: 0;
z-index: 100;

`;
const Pointwrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px ;
`;
const StyledBackground = styled.div`
    background-image: url(${Background});
    width: 100%;
    height: 100%;
`;




const GamesLandingPage = () => {

    return(
    <StyledBackground>
    <GameLanding>
    <Pointwrapper>
    <Points />
    </Pointwrapper>
    <HistoryDiv></HistoryDiv>
    <HeaderText></HeaderText>
     <GameSelection></GameSelection>
     <NavWrapper>
     <Navigation/>
     </NavWrapper>
    </GameLanding>
    </StyledBackground>
        
     
    );
    
    
    }
    export default GamesLandingPage
