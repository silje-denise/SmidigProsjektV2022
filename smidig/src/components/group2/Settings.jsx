import React from "react";
import styled from "styled-components";
import RaelingenLogo from "../../images/RaelingenLogo.png";
import { Link } from "react-router-dom";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";

const StyledSettingsDiv = styled.div`
    text-align: right;
    margin-right: 0rem;
    font-weight: 700;
    display: grid;
`;

const StyledSettingsButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    text-align: right;
    margin-right: 4rem;
    margin-top: 2rem;
`;

const StyledSettings = styled.div`
    margin-top: 4rem;
    color: rgb(103,179,70);
`;

const StyledShareApp = styled.div`
    display: none;
    position: fixed;
    right: 2.3rem;
    top: 48rem;
`;

const StyledLogo = styled.div`
    width: 100px;
    height: 60px;
    margin-top: 22rem;
    margin-left: 2.5rem;
    background-color: white;
`;

const StyledLogoImage = styled.img`
    width: 150px;
`;

const SharedButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    text-align: right;
    margin-right: 4rem;
    margin-top: 2rem;
`;


function showShare() {
    var hidDiv = document.getElementById("hiddenDiv");

    if (hidDiv.style.display === "none") {
        hidDiv.style.display = "block";
    }

    else {
        hidDiv.style.display = "none";
    }
}

const Settings = () => {
    return(
        <>
            <StyledSettingsDiv>
                <StyledSettingsButton>
                    <StyledSettings>
                       <h1>Meny</h1> 
                    </StyledSettings>
                </StyledSettingsButton>
                <div>
                    <a href= "https://www.ralingen.kommune.no/">
                        <StyledSettingsButton>
                            <h2>Om oss</h2>
                        </StyledSettingsButton>
                    </a>
                </div>
                <div>
                    <a href= "https://www.ralingen.kommune.no/kontakt-ossviktige-telefonnummer.442197.no.html">
                        <StyledSettingsButton>
                            <h2>Kontakt oss</h2>
                        </StyledSettingsButton>
                    </a>
                </div>
                <SharedButton onClick={showShare}> 
                    <h2>Del appen</h2>
                </SharedButton>
                <StyledShareApp id="hiddenDiv">
                    <EmailShareButton>
                        <EmailIcon/>
                    </EmailShareButton>
                    <FacebookShareButton>
                        <FacebookIcon/>
                        <FacebookMessengerIcon/>
                    </FacebookShareButton>
                    <TwitterShareButton>
                        <TwitterIcon/>
                    </TwitterShareButton>
                    <WhatsappShareButton>
                        <WhatsappIcon/>
                    </WhatsappShareButton>
                </StyledShareApp>
            </StyledSettingsDiv>
            <StyledLogo>
                <StyledLogoImage src={RaelingenLogo} alt="Logoen til R??lingen kommune"/>
            </StyledLogo>
        </>
    );
}

export default Settings;