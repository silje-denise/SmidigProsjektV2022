import React from "react";
import AvatarCreationBubble from "../components/group2/AvatarCreationBubble";
import Badges from "../components/group2/Badges";
import ProfileHeader from "../components/group2/ProfileHeader";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import monster from "./../images/BackgroundPattern.png";
import { Link } from "react-router-dom";

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

const ProfilePage = () => {
    return(
        <>
            <ArrowWrapper>
                {/**Link skal gå til hjem */}
                <Link to={"/"}>
                     <FontAwesomeIcon icon={faChevronLeft} size={'2x'}/>
                </Link>
               
            </ArrowWrapper>
            <ProfileHeader/>
            <Badges/>
            <StyledImage src={monster}/>
            <AvatarCreationBubble />
        </>
    );
}


export default ProfilePage;