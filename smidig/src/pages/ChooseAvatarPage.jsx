import React from "react";
import styled from "styled-components";
import AvatarHeader from "../components/group2/AvatarHeader";
import CharacterSelection from "../components/group2/CharacterSelection";
import monster from "./../images/BackgroundPattern.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
    
`;
const StyledImage = styled("img")`
    height: auto;
    width: 100vw;
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
    display:flex;
    justify-content: center;
    align-items:center;
`;

const CharacterSelectionWrapper = styled("div")`
    padding-bottom: 60px;
`;
const ArrowWrapper = styled("div")`
    height: 70px;
    display:flex;
    align-items:center;
    padding: 40px 0px 0px 40px;
    backgrond-image: url(${monster});
`;
const StyledLink = styled(Link)`
    text-decoratiom: none;
    color:white;
`;

const ChooseAvatarPage = () => {
    return(
        <> 
         {/* <ArrowWrapper>
                <Link to={"/profile"}>
                     <FontAwesomeIcon icon={faChevronLeft} size={'2x'}/>
                </Link>
               
            </ArrowWrapper> */}
        <StyledImage src={monster}/>
        <PageWrapper>
            <AvatarHeader/>
            <CharacterSelectionWrapper>
                <CharacterSelection/>
            </CharacterSelectionWrapper>
            <StyledLink to={"/profile"}>
                <StyledButton>Ferdig</StyledButton>
            </StyledLink>
        </PageWrapper>
        </>
    );
}


export default ChooseAvatarPage;