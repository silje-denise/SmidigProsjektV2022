import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import homeIcon from '../../images/homeIcon.svg';
import mapIcon from '../../images/mapIcon.svg';
import gameIcon from '../../images/gameIcon.svg';
import profileIcon from '../../images/profileIcon.svg';

//Foreløpig kun bakgrunn for å se om det funker
const BackgroundWrapper = styled("div")`
    width: max-content;
    background-color: #e8e8e8;
    margin: auto;
    height: max-content;
    border-radius: 42px;
`;

const NavBar = styled.div`
position: relative;
width: 100%;
padding-bottom: 64px;
`;


const OverviewIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 32px;
    width: 32px;
    display: inline-block ;
    margin: 32px 32px 32px 64px;
`;

const MapIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 32px;
    width: 32px;
    display: inline-block ;
    margin: 32px 32px 32px 32px;
`;

const GamesLandingIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 32px;
    width: 32px;
    transform: scale(1.3);
    display: inline-block ;
    margin: 32px 32px 32px 32px;
`;

const ProfileIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 32px;
    width: 32px;
    display: inline-block ;
    margin: 32px 64px 32px 32px;
`;

const Navigation= () => {
    return(
        <NavBar>
            <BackgroundWrapper>
                
                    <Link to="/overwiewPage">
                        <OverviewIllustration style={{backgroundImage: `url(${homeIcon})`}}>
                        </OverviewIllustration>
                    </Link>
            
                
                    <Link to="/mapPage">
                        <MapIllustration style={{backgroundImage: `url(${mapIcon})`}}>
                        </MapIllustration>
                    </Link>
                
                
                    <Link to="/gamesLandingPage">
                        <GamesLandingIllustration style={{backgroundImage: `url(${gameIcon})`}}>
                        </GamesLandingIllustration>
                    </Link>
                
                
                    <Link to="/profilePage">
                        <ProfileIllustration style={{backgroundImage: `url(${profileIcon})`}}>
                        </ProfileIllustration>
                    </Link>
                
            </BackgroundWrapper>
        </NavBar>
        
    );
}
export default Navigation;