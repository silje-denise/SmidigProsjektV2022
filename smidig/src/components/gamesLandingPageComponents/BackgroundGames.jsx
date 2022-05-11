import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div `
height: 100%;
width: 100%;
z-index: -1;

`
    


const BackgroundGames = () =>{
    return(
        <StyledBackground>
            <img src="./Images/mønster skog-sjø 02 4.png" alt="mønster" />
        </StyledBackground>
    )
}
export default BackgroundGames;