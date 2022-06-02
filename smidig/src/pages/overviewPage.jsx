import '../App.css';
import React, { useEffect, useState, useRef } from 'react'
import LocationCard from '../components/group3/LocationCard';
import {motion} from "framer-motion";
import backgroundPattern from '../images/waterMill.jpg';
import Navigation from '../components/group3/Navigation';
import settingsIconSvg from '../images/settingsIcon.svg';
import styled from 'styled-components';
import SettingsPage from './SettingsPage';

const OverviewPage = () => {

    const [width, setWidth] = useState(0);
    const carusel = useRef();
  
    useEffect(() => {
      setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
    }, []);

    const SettingsBar = styled.div`

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
        <div className='background'></div>
        
        <div className='overviewPage'>
        <SettingsBar>
            <SettingsIcon onClick={showOverlay} style={{
              backgroundImage: `url(${settingsIconSvg})`}}></SettingsIcon>
        </SettingsBar>
          <div className='logo'></div>
          <motion.div ref={carusel} className='scrollView' >
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width}}>
              <LocationCard name="Vannmølla" image={backgroundPattern}/>
              <LocationCard name="Test" image={backgroundPattern}/>
              <LocationCard name="Test" image={backgroundPattern}/>
              <LocationCard name="Test" image={backgroundPattern}/>
              <LocationCard name="Test" image={backgroundPattern}/>
            
            
            </motion.div>
          </motion.div>
          
          <Navigation/>
        </div>

        <DivSettingPage id='SettingsOverlay'>
          <SettingsPage></SettingsPage>
        </DivSettingPage>

      </div>

    );
  }

export default OverviewPage;

