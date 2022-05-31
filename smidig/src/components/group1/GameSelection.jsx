import { motion } from "framer-motion";
import { useRef , useEffect, useState } from "react";
import React from "react";
import '../../App.css';
import quizillustartion from "../../images/questionMark.svg"
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  height: 100%;
`;

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
          <StyledLink to="/Quiz">
        <GameCard name="Quiz" color1="#49A33A" color2="#346D75" description="Svar på spørsmål!" numberOfStars="5" gameCardIllstration={quizillustartion}/>
        </StyledLink>
        </motion.div>
     </motion.div>
    </div>
    );
}


export default GameSelection;
