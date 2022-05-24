import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components';
import homeIcon from '../../images/homeIcon.svg';
import mapIcon from '../../images/mapIcon.svg';
import gameIcon from '../../images/gameIcon.svg';
import profileIcon from '../../images/profileIcon.svg';

//Foreløpig kun bakgrunn for å se om det funker
const BackgroundWrapper = styled("div")`
    width: 300px;
    background-color: #F3F3F3;
    margin: auto;
    height: 70px;
    border-radius: 42px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0px 20px;
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
    height: 30px;
    width: 30px;
    display: inline-block ;
    //margin: 22px 22px 22px 54px;
    filter: ${props => (props.color ? "invert(1)": "invert(0)")};


    `;

const MapIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 30px;
    width: 30px;
    display: inline-block ;
    filter: ${props => (props.color ? "invert(1)": "invert(0)")};
`;

const GamesLandingIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 30px;
    width: 30px;
    transform: scale(1.3);
    display: inline-block ;
    filter: ${props => (props.color ? "invert(1)": "invert(0)")};

`;

const ProfileIllustration = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat ;
    height: 30px;
    width: 30px;
    display: inline-block ;
    filter: ${props => (props.color ? "invert(1)": "invert(0)")};

`;

const StyledLink = styled.div`
    background-color: green;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: ${props => (props.bgColor ? "#209803": "rgba(0,0,0,0)")};
    
`;

const StyledNavLink = styled(NavLink)`
  

  
`;

 

const Navigation= () => {

        const location = useLocation();
        console.log(location);
    
        const switchColor = (path) => {
             if(location.pathname == path){
            return true;
        }
    }
       

    return(
        <NavBar>
            <BackgroundWrapper>
              <StyledLink bgColor={switchColor("/overview")}>
                    <StyledNavLink to="/overview" >  
                        <OverviewIllustration color={switchColor("/overview")} style={{backgroundImage: `url(${homeIcon})`}} >
                            
                        </OverviewIllustration>
                    </StyledNavLink> </StyledLink>

            
                <StyledLink bgColor={switchColor("/map")}>
                    <StyledNavLink to="/map"  >
                        <MapIllustration color={switchColor("/map")} style={{backgroundImage: `url(${mapIcon})`}}>
                            
                        </MapIllustration>
                    </StyledNavLink>
                    </StyledLink>
                
                <StyledLink bgColor={switchColor("/games")}>
                    <StyledNavLink to="/games"  >
                        <GamesLandingIllustration color={switchColor("/games")} style={{backgroundImage: `url(${gameIcon})`}}>
                            
                        </GamesLandingIllustration>
                    </StyledNavLink>
                </StyledLink>
                <StyledLink bgColor={switchColor("/profile")}>
                    <StyledNavLink to="/profile"  >
                        <ProfileIllustration color={switchColor("/profile")} style={{backgroundImage: `url(${profileIcon})`}}>
                            
                        </ProfileIllustration>
                    </StyledNavLink>
                </StyledLink>
            </BackgroundWrapper>
        </NavBar>
        
    );
}
export default Navigation ;