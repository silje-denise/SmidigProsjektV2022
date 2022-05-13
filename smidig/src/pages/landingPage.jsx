import React from "react";
import HelloTest from "../components/group2/Hello";
import CharacterSelection from "../components/group2/CharacterSelection";
import SkipButton from "../components/group2/SkipButton";
import AvatarHeader from "../components/group2/AvatarHeader";


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