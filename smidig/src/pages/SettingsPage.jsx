import React from "react";
import styled from "styled-components";
import Settings from "../components/group2/Settings";
import monster from "../images/BackgroundPattern.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledXButton = styled.button`
    height: 6rem;
    width: 4rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    z-index: 1000;
    position: absolute;
`;

const WhiteBackground = styled.div`
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

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
    margin-top: 125%;
    overflow: hidden;
    position: absolute;
`;

const StyledBackgroundImage = styled.img`
    height: 40rem;
    overflow: hidden;
`;

const StyledSecondWhiteBox = styled.div`
    height: 10rem;
    width: 14rem;
    background-color: white;
    position: absolute;
    top: 42rem;
    border-radius: 1.5rem;
`;

const HideSettings = styled.div`
    display: block;
`;

const SettingsPage = () => {
    function hideOverlay() {
        var visibleDiv = document.getElementById("SettingsOverlay");
    
        if (visibleDiv.style.display === "block") {
            visibleDiv.style.display = "none";
        }
    
        else {
            visibleDiv.style.display = "block";
        }
      }
    
    return(
        <>
        <HideSettings id="SettingsOverlay">
            <WhiteBackground>
                <StyledXButton onClick={()=>hideOverlay()}>
                    <FontAwesomeIcon icon={faXmark} size="3x"/>
                </StyledXButton>
                <StyledBackground>
                    <StyledBackgroundImage src={monster} alt="Bakgrunnsmønster"/>
                </StyledBackground>
                <StyledSecondWhiteBox />
                <StyledPageWrapper>
                    <Settings />
                </StyledPageWrapper>
            </WhiteBackground>
        </HideSettings>
        </>
    );
}


export default SettingsPage;