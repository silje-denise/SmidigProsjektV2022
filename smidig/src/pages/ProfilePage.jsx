import React from "react";
import AvatarCreationBubble from "../components/group2/AvatarCreationBubble";
import Badges from "../components/group2/Badges";
import ProfileHeader from "../components/group2/ProfileHeader";
import styled from "styled-components";
import monster from "./../images/BackgroundPattern.png";
import Navigation from "../components/common/Navigation";

const ArrowWrapper = styled("div")`
    height: 70px;
    display:flex;
    align-items:center;
    padding: 40px 0px 0px 40px;
    /*background-image: url(${monster});*/
`;

const StyledImage = styled("img")`
    width: 100%;
    height: auto;
`;

const NavigationWrapper = styled("div")`
    position: absolute;
    bottom: 0px;
    width: 100vw;
`;

const StyledWhiteBox = styled.div`
    height: 2rem;
    width: 7rem;
    background-color: white;
    position: absolute;
    top: 19rem;
    left: 1.75rem;
`;

const StyledWhiteBox2 = styled.div`
    height: 10rem;
    width: 20rem;
    background-color: white;
    position: absolute;
    top: 30rem;
    left: -2rem;
    transform: rotate(20deg);
`;

const ProfilePage = () => {
    return(
        <>
            <StyledWhiteBox />
            <StyledWhiteBox2 />
            <ArrowWrapper/> 
            <ProfileHeader/>
            <Badges/>
            <StyledImage src={monster} alt="The background has a green and blue pattern>"/>
            <AvatarCreationBubble />
            <NavigationWrapper>
                <Navigation/>
            </NavigationWrapper>
        </>
    );
}

export default ProfilePage;