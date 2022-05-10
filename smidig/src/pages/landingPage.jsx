import React from "react";
import styled from "styled-components";
import HelloTest from "../components/HelloTest";
import CharacterSelection from "../components/CharacterSelection";
import SkipButton from "../components/SkipButton";


const LandingPage = () => {
    return(
        <>
            <HelloTest />
            <CharacterSelection />
            <SkipButton />
        </>
    );
}


export default LandingPage