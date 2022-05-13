import React from "react"
import styled from "styled-components"
import Settings from "../components/group2/Settings"
import monster from "../images/BackgroundPattern.png"
import XButton from"../components/common/XButton"

const StyledPageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index:100;
    position: absolute;
    top: 0px;
    overflow: hidden;
`;

const StyledBackground = styled.div`
    height: 20rem;
    width: 100%;
    margin-top: 110%;
    overflow: hidden;
`;

const StyledBackgroundImage = styled.img`
    height: 50rem;
    overflow: hidden;
`;

const StyledWhiteBox = styled.div`
    height: 4rem;
    width: 14rem;
    background-color: white;
    position: absolute;
    top: 31.5rem;
    right: 0rem;
    border-radius: 1.5rem;
`;

const StyledSecondWhiteBox = styled.div`
    height: 12rem;
    width: 14rem;
    background-color: white;
    position: absolute;
    top: 45rem;
    border-radius: 1.5rem;
`;


const SettingsPage = () => {
    return(
        <>
        
            <XButton />

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