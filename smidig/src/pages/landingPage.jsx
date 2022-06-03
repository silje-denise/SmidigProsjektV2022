import React, { useState } from "react";
import Hello from "../components/group2/Hello";
import CharacterSelection from "../components/group2/CharacterSelection";
import SkipButton from "../components/group2/SkipButton";
import AvatarHeader from "../components/group2/AvatarHeader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAvatarSource } from "../getAvatarSource";

const ButtonDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 2rem;
`;

const StyledButton = styled("button")`
    border-radius:40px;
    width:150px;
    height:40px;
    border: 2px solid #209803;
    font-size:20px;
    padding: 15px;
    display:flex;
    background-color: white;
    justify-content: center;
    align-items:center;
`;


const StyledLink = styled(Link)`
    color: white;
`;

const LandingPage = () => {

    const [selectedAvatar, setSelectedAvatar] = useState(localStorage.getItem("valgtAvatar"))
    
    const handleClick = (type) => {
        localStorage.setItem("valgtAvatar", type) 
        setSelectedAvatar(type)
    }

    return(
        <>
            <Hello />
            <AvatarHeader source={getAvatarSource(selectedAvatar)}/>
            <CharacterSelection handleClick={handleClick} selctedAvatar={selectedAvatar}/>
            <ButtonDiv>
                <StyledLink to={"/overview"}>
                    <StyledButton>
                        <h3>Ferdig</h3>
                    </StyledButton>
                </StyledLink>
            </ButtonDiv>
            <Link to={"/overview"}>
                <SkipButton />
            </Link>
        </>
    );
}

export default LandingPage;