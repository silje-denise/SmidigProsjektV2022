import HistoryDiv from "../components/group1/HistoryDiv";
import Points from "../components/common/PointsComponent";
import GameSelection from '../components/group1/GameSelection';
import styled from "styled-components";
import Navigation from "../components/common/Navigation";
import HeaderText from "../components/group1/HeaderText";
import Background from "../images/background.png";
import { Link } from "react-router-dom";
import PointCounterBar from '../components/group3/PointCounter';


const GameLanding = styled.div`
    margin: 32px;
`;

const NavWrapper = styled.div`
    bottom: 0;
    position: absolute;
    width: 100vw;
`;

const StyledBackground = styled.div`
    background-image: url(${Background});
    width: 100%;
    height: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


const GamesLandingPage = () => {
    return(
        <StyledBackground>
            
            <GameLanding>
            <PointCounterBar points="3" open="true" />
                <StyledLink to="/history">
                    <HistoryDiv/>
                </StyledLink>
                <HeaderText/>
                <GameSelection/>
            </GameLanding>
            <NavWrapper>
                <Navigation/>
            </NavWrapper>
        </StyledBackground>
    );
}
export default GamesLandingPage;
