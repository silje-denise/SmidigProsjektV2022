import React from "react";
import styled from "styled-components";
import AvatarHeader from "../components/AvatarHeader";
import monster from "./../images/monster.png";

const PageWrapper = styled("div")`
    height: 100vh;
    width: 100vw;
    z-index:100;
    position: absolute;
    top: 0px;
    display:flex;
    flex-direction: column;
    align-items:center;
    
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


const ProfilePage = () => {
    return(
        <> 
        <StyledImage src={monster}/>
        <PageWrapper>
            <AvatarHeader/>
            <div>hei</div>
            <StyledButton>Fortsett</StyledButton>
        </PageWrapper>
        </>
    );
}


export default ProfilePage