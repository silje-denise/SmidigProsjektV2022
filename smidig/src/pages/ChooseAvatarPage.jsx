import React from "react";
import styled from "styled-components";
import AvatarHeader from "../components/group2/AvatarHeader";
import CharacterSelection from "../components/group2/CharacterSelection";
import monster from "./../images/BackgroundPattern.png";
import { Link } from "react-router-dom";

const PageWrapper = styled("div")`
    height: 100vh;
    width: 100vw;
    z-index:100;
    position: absolute;
    top: 0px;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:40px;
    box-sizing: border-box;
    margin-top: 5rem;
`;
const StyledImage = styled("img")`
    height: auto;
    width: 100vw;
`;
const StyledButton = styled("button")`
    border-radius:40px;
    width:150px;
    height:40px;
    border: 2px solid rgb(103,179,70);
    padding: 15px;
    display:flex;
    background-color:white;
    display:flex;
    justify-content: center;
    align-items:center;
`;

const CharacterSelectionWrapper = styled("div")`
    padding-bottom: 60px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color:white;
`;

const ChooseAvatarPage = () => {
    return(
        <> 
        <StyledImage src={monster}/>
        <PageWrapper>
            <AvatarHeader/>
            <CharacterSelectionWrapper>
                <CharacterSelection/>
            </CharacterSelectionWrapper>
            <StyledLink to={"/profile"}>
                <StyledButton>
                    <h3>Ferdig</h3>
                </StyledButton>
            </StyledLink>
        </PageWrapper>
        </>
    );
}

export default ChooseAvatarPage;