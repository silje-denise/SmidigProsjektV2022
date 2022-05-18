import React from "react";
import styled from "styled-components";
import Settings from "../components/group2/Settings";
import monster from "../images/BackgroundPattern.png";
import XButton from"../components/common/XButton";
import { Link } from "react-router-dom";

const StyledPageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 100;
    position: absolute;
    top: 0px;
    overflow: hidden;
`;

const StyledBackground = styled.div`
    height: 20rem;
    width: 100%;
    margin-top: 100%;
    overflow: hidden;
`;

const StyledBackgroundImage = styled.img`
    height: 40rem;
    overflow: hidden;
`;

const StyledWhiteBox = styled.div`
    height: 4rem;
    width: 12rem;
    background-color: white;
    position: absolute;
    top: 30rem;
    right: 1rem;
    border-radius: 1.5rem;
`;

const StyledSecondWhiteBox = styled.div`
    height: 10rem;
    width: 14rem;
    background-color: white;
    position: absolute;
    top: 42rem;
    border-radius: 1.5rem;
`;


const SettingsPage = () => {
    return(
        <>
            <Link to={"/"}>
                <XButton/>
            </Link>

            <StyledBackground>
                <StyledBackgroundImage src={monster} />
            </StyledBackground>

            <StyledWhiteBox />
            <StyledSecondWhiteBox />

            <StyledPageWrapper>
                <Settings />
            </StyledPageWrapper>
        </>
    );
}


export default SettingsPage;