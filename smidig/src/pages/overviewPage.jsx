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
import { getAvatarSource } from '../getAvatarSource';
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
      background-color:rgba(255,255,255,1);
      display:flex;
      align-items:flex-end;
      width: 90%;
      height: 140px;
    `;

    const LogoContainer = styled.div`
      background-color: white;
      width: 8rem;
      padding: 1rem;
      display:flex;
      flex-direction: column;
    `;

    const StyledLogo = styled.div`
      display:flex;
      flex-direction: row;

      h1:first-child{
        color:rgb(32,152,3);
      }
    `;

    const StyledImg = styled.img`
      height: auto;
      width: 120px;
    `;

    const ProfileIcon = styled.div`
      background-color: white;
      border-radius: 50px;
      width: 5rem;
      height: 5rem;
      display:flex;
      justify-content: center;
      margin-top: 2.5rem;
      margin-right: -0.25rem;
    `;

    const Header = styled.div`
      display:flex;
      justify-content: space-between;
    `;

    const StyledWhiteBox = styled.div`
    height: 15rem;
    width: 5rem;
    background-color: white;
    position: absolute;
    top: 0rem;
    left: 0rem;
    z-index: -1;
    `;

    const StyledWhiteBox2 = styled.div`
    height: 1rem;
    width: 5rem;
    background-color: white;
    position: absolute;
    top: 0rem;
    left: 2rem;
    z-index: -1;
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
            <StyledWhiteBox />
            <StyledWhiteBox2 />
            <SettingsBar>
              <SettingsIcon onClick={showOverlay} style={{
                backgroundImage: `url(${settingsIconSvg})`}}></SettingsIcon>
            </SettingsBar>
            <Link to={"/profile"}>
              <ProfileIcon> 
                <StyledImg src={getAvatarSource()} alt="Profilbilde"/>   
              </ProfileIcon>
            </Link>
        </Header>
        <LogoContainer>
          <StyledLogo>
            <h1>UT</h1>
            <h1>FORSK</h1>
          </StyledLogo>
          <StyledImg src={Logo} alt="Logoen til R??lingen kommune"/>
          </LogoContainer>
          <motion.div ref={carusel} className='scrollView' >
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width}}>
              <Link to={"/map"}>
                <LocationCard name="Vannm??lla" image={backgroundPattern}/>
              </Link>
              <Link to={"/map"}>
                <LocationCard name="Sagen" image={backgroundPattern}/>
              </Link>
              <Link to={"/map"}>
                <LocationCard name="L??ven" image={backgroundPattern}/>
              </Link>
            </motion.div>
          </motion.div>
          {/* <div className='gameShortcut'>
            <div className='gameShortcutDescription'>
              <h2>Test kunnskapen din her!</h2><br/>
              <p>Spill deg gjennom R??lingen<br/>sin kulturhistorie!</p>
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

