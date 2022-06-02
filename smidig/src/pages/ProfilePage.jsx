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
    backgrond-image: url(${monster});
`;
const StyledImage = styled("img")`
    width: 100vw;
    height: auto;
`;
const NavigationWrapper = styled("div")`
    position: absolute;
    bottom: 0px;
    width: 100vw;
`;

const ProfilePage = () => {
    return(
        <>
            <ArrowWrapper/> 
            <ProfileHeader/>
            <Badges/>
            <StyledImage src={monster} alt="The background has a green and blue pattern looking like >"/>
            <AvatarCreationBubble />
            <NavigationWrapper>
                <Navigation/>
            </NavigationWrapper>
        </>
    );
}

export default ProfilePage;