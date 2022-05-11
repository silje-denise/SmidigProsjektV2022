import React from "react";
import styled from "styled-components";
import HelloTest from "../components/HelloTest";
import CharacterSelection from "../components/CharacterSelection";
import SkipButton from "../components/SkipButton";
import AvatarHeader from "../components/AvatarHeader";


const LandingPage = () => {
    return(
        <>
            <HelloTest />
            <AvatarHeader />
            <CharacterSelection />
            <SkipButton />
        </>
    );
}


export default LandingPage