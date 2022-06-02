import '../App.css';
import React, { useEffect, useState, useRef } from 'react'
import LocationCard from '../components/group3/LocationCard';
import {motion} from "framer-motion";
import backgroundPattern from '../images/waterMill.jpg';
import Navigation from '../components/common/Navigation';
import settingsIconSvg from '../images/settingsIcon.svg';
import styled from 'styled-components';
import SettingsPage from './SettingsPage';
import Logo from '../images/RaelingenLogo.png';
import Dog from '../images/Dog.png';
import {Link} from 'react-router-dom';

const OverviewPage = () => {

    const [width, setWidth] = useState(0);
    const carusel = useRef();
  
    useEffect(() => {
      setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
    }, []);

    const SettingsBar = styled.div`
      padding-top: 30px;
    `;

    const SettingsIcon = styled.div`
        height: 36px;
        width: 36px;
        margin-bottom: 42px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    `;
    
    const DivSettingPage = styled.div`
      display: none;
    `;

    const NavWrapper = styled.div`
      position:absolute;
      bottom: 0px;
      z-index:100;
      background-color:rgba(255,255,255,1);
      display:flex;
      align-items:flex-end;
      width: 90%;
      height: 140px;
    `;

    const LogoContainer = styled.div`
      background-color: white;
      width: 188px;
      padding: 10px;
      display:flex;
      flex-direction: column;
    `;

    const StyledLogo = styled.div`
      display:flex;
      flex-direction: row;

      h1:first-child{
        color:rgb(121,176,85);
      }
    `;

    const StyledImg = styled.img`
      height: auto;
      width: 120px;
    `;

    const ProfileIcon = styled.div`
      background-color: lightgrey;
      border-radius: 50px;
      width: 60px;
      height:60px;
      display:flex;
      justify-content:center;
      margin-top:20px;
    `;

    const Header = styled.div`
      display:flex;
      justify-content: space-between;
    `;

    function showOverlay() {
      var hiddenDiv = document.getElementById("SettingsOverlay");
  
      if (hiddenDiv.style.display === "none") {
          hiddenDiv.style.display = "block";
      }
  
      else {
          hiddenDiv.style.display = "none";
      }
    }

    
    return (
      <div className="App">
        <div className='background'/>
        <div className='overviewPage'>
          <Header>
            <SettingsBar>
              <SettingsIcon onClick={showOverlay} style={{
                backgroundImage: `url(${settingsIconSvg})`}}></SettingsIcon>
            </SettingsBar>
            <Link to={"/profile"}>
              <ProfileIcon> 
                <StyledImg src={Dog}/>   
              </ProfileIcon>
            </Link>
        </Header>
        <LogoContainer>
          <StyledLogo>
            <h1>UT</h1>
            <h1>FORSK</h1>
          </StyledLogo>
          <StyledImg src={Logo}/>
          </LogoContainer>
          <motion.div ref={carusel} className='scrollView' >
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width}}>
              <Link to={"/map"}>
                <LocationCard name="Vannmølla" image={backgroundPattern}/>
              </Link>
              <Link to={"/map"}>
                <LocationCard name="Sagen" image={backgroundPattern}/>
              </Link>
              <Link to={"/map"}>
                <LocationCard name="Låven" image={backgroundPattern}/>
              </Link>
            </motion.div>
          </motion.div>
          {/* <div className='gameShortcut'>
            <div className='gameShortcutDescription'>
              <h2>Test kunnskapen din her!</h2><br/>
              <p>Spill deg gjennom Rælingen<br/>sin kulturhistorie!</p>
            </div>
             <div className='gameShortcutImage'></div> 
          </div> */}
          <NavWrapper>
             <Navigation/>
          </NavWrapper>
        </div>
        <DivSettingPage id='SettingsOverlay'>
          <SettingsPage/>
        </DivSettingPage>
      </div>

    );
  }

export default OverviewPage;

