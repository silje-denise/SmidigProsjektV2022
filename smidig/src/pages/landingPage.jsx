import React from "react";
import HelloTest from "../components/group2/Hello";
import CharacterSelection from "../components/group2/CharacterSelection";
import SkipButton from "../components/group2/SkipButton";
import AvatarHeader from "../components/group2/AvatarHeader";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    background-color:white;
    justify-content: center;
    align-items:center;
`;


const StyledLink = styled(Link)`
    color: white;
`;

const LandingPage = () => {
    return(
        <>
            <HelloTest />
            <AvatarHeader />
            <CharacterSelection />

            <ButtonDiv>
                <StyledLink to={"/profile"}>
                    <StyledButton>
                        Ferdig
                    </StyledButton>
                </StyledLink>
            </ButtonDiv>

            <Link to={"/overview"}>
                <SkipButton />
            </Link>
            
        </>
    );
}


export default LandingPage