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
    padding-bottom: 54px;
`;


const OverviewIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 25px;
    width: 25px;
    display: inline-block ;
    margin: 22px 22px 22px 54px;
`;

const MapIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 25px;
    width: 25px;
    display: inline-block ;
    margin: 22px;
`;

const GamesLandingIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 25px;
    width: 25px;
    transform: scale(1.3);
    display: inline-block ;
    margin: 22px;
`;

const ProfileIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 25px;
    width: 25px;
    display: inline-block ;
    margin: 22px 54px 22px 22px;
`;

const SelectedItem = styled.div`

`;

const Navigation= () => {
    return(
        <NavBar>
            <BackgroundWrapper>
                
                    <Link to="/overview">
                        <OverviewIllustration style={{backgroundImage: `url(${homeIcon})`}}>
                        </OverviewIllustration>
                    </Link>
            
                
                    <Link to="/map">
                        <MapIllustration style={{backgroundImage: `url(${mapIcon})`}}>
                        </MapIllustration>
                    </Link>
                

                    <Link to="/games">
                        
                        <GamesLandingIllustration style={{backgroundImage: `url(${gameIcon})`}}>
                        </GamesLandingIllustration>
                    </Link>
                
                
                    <Link to="/profile">
                        <ProfileIllustration style={{backgroundImage: `url(${profileIcon})`}}>
                        </ProfileIllustration>
                    </Link>
                
            </BackgroundWrapper>
        </NavBar>
        
    );
}
export default Navigation;