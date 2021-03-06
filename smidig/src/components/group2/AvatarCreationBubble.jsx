import React from "react";
import styled from "styled-components";
import SittingDog from "../../images/SittingDog.png";
import { Link } from "react-router-dom";

const StyledAvatarCreationBubble = styled.div`
    align-content: center;
    margin-top: -6rem;
    text-align: center;
    width: 100%;
    display: flex;
    position: fixed;    
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
`;

const StyledAvatarCreationBubblePerson = styled.div`
    width: 10rem;
    height: 10rem;
    position: fixed;
    margin-left: 1rem;
    top: 34rem;
`;

const StyledAvatarCreationBubbleImage = styled.img`
    width: 10rem;
    height: 10rem;
`;

const StyledAvatarCreationBubbleText = styled.div`
    height: 7rem;
    width: 10rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: rgb(103,179,70);
    background-color: white;
    display: flex;    
    justify-content: center;
    align-items: center;
`;

const StyledAvatarCreationBubbleButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    padding-left: 0.3rem;
    color: rgb(103,179,70);
`;

const AvatarCreationBubble = () => {
    return(
        <>
            <StyledAvatarCreationBubblePerson>
                <StyledAvatarCreationBubbleImage src={SittingDog} alt="Sitting dog"/>
            </StyledAvatarCreationBubblePerson>
            <StyledAvatarCreationBubble>
                <StyledAvatarCreationBubbleText>
                    <p>
                        Start med å velge din avatar 
                        <Link to={"/chooseavatar"}>
                            <StyledAvatarCreationBubbleButton> HER</StyledAvatarCreationBubbleButton>
                        </Link>
                    </p>
                </StyledAvatarCreationBubbleText>
            </StyledAvatarCreationBubble>
        </>
    );
}

export default AvatarCreationBubble;