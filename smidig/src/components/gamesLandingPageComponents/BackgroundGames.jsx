import React from "react";
import styled from "styled-components";
import backroundSpill from "../../Images/backroundSpill.png"

const StyledBackground = styled.div `
height: 100%;
width: 100%;
z-index: -1;
background-image: url("./Images/backroundSpill.png")

`;
    


const BackgroundGames = () =>{
    return(
        <StyledBackground>
            <img src={backroundSpill} alt= "Dette er en bakgrunn for spill landing side"></img>
        </StyledBackground>
    )
}
export default BackgroundGames;