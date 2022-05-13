
import { motion } from "framer-motion";
import { useRef , useEffect, useState } from "react";
import React from "react";
import '../../App.css';
import Images from "./Images";



function GameSelection(){

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect (() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
 
  return (
    <div className="GameSelection">
     <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div drag ="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
            {Images.map(Image =>{
              return(
                  <motion.div className="carousel-item" key={Image}>
                <img src={Image} alt=""/>
                  </motion.div>
              );
            })}
        </motion.div>
     </motion.div>
    </div>
    );
}


export default GameSelection;