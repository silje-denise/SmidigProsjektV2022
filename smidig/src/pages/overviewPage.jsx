import '../App.css';
import React, { useEffect, useState, useRef } from 'react'
import LocationCard from '../components/group3/LocationCard';
import {motion} from "framer-motion";
import backgroundPattern from '../images/waterMill.jpg';

const OverviewPage = () => {

    const [width, setWidth] = useState(0);
    const carusel = useRef();
  
    useEffect(() => {
      setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth)
    }, []);
    
    
    return (
      <div className="App">
        <div className='background'></div>
        <div className='overviewPage'>
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
          <div className='gameShortcut'>
            <div className='gameShortcutDescription'>
              <h7>Test kunnskapen<br/>din her!</h7>
              <p>Spill deg gjennom Rælingen<br/>sin kulturhistorie!</p>
            </div>
            <div className='gameShortcutImage'></div>
          </div>
        </div>
      </div>
    );
  }

export default OverviewPage;

