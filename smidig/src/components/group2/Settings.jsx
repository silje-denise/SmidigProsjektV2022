import React from "react";
import styled from "styled-components";
import RaelingenLogo from "../../images/RaelingenLogo.png";
import { Link, Hash } from "react-router-dom";

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
    font-size: 33px;
    text-align: right;
    margin-right: 0rem;
    font-weight: 700;
    display: grid;
`;

const StyledSettingsButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 33px;
    text-align: right;
    margin-right: 4rem;
    margin-top: 2rem;
    font-weight: 600;
`;

const StyledSettings = styled.div`
    margin-top: 4rem;
`;

const StyledAboutUs = styled.div`
`;

const StyledContactUs = styled.div`
`;

const StyledShareApp = styled.div`
    display: none;
    position: fixed;
    right: 2.3rem;
    top: 48rem;
`;

const StyledLogOff = styled.div`
    font-size: 30px;
    margin-top: 5rem;
    color: #209803;
    font-weight: 300;
    background-color: white;
`;

const StyledLogo = styled.div`
    width: 130px;
    height: 60px;
    margin-top: 12.5rem;
    margin-left: 2.5rem;
    background-color: white;
`;

const StyledLogoImage = styled.img`
    width: 130px;
    height: 60px;
`;

const SharedButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 33px;
    text-align: right;
    font-weight: 600;
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

                <StyledSettings>
                    <Link to={"/"}>
                        <StyledSettingsButton>Innstillinger</StyledSettingsButton>
                    </Link>
                </StyledSettings>

                <StyledAboutUs>
                    <a href= "https://www.ralingen.kommune.no/">
                        <StyledSettingsButton>Om oss</StyledSettingsButton>
                    </a>
                </StyledAboutUs>

                <StyledContactUs>
                    <a href= "https://www.ralingen.kommune.no/kontakt-ossviktige-telefonnummer.442197.no.html">
                        <StyledSettingsButton>Kontakt oss</StyledSettingsButton>
                    </a>
                </StyledContactUs>

                    <SharedButton onClick={showShare}> 
                        Del appen
                    </SharedButton>

                        <StyledShareApp id="hiddenDiv">

                            <EmailShareButton>
                                <EmailIcon></EmailIcon>
                            </EmailShareButton>

                            <FacebookShareButton>
                                <FacebookIcon></FacebookIcon>
                                <FacebookMessengerIcon></FacebookMessengerIcon>
                            </FacebookShareButton>

                            <TwitterShareButton>
                                <TwitterIcon></TwitterIcon>
                            </TwitterShareButton>

                            <WhatsappShareButton>
                                <WhatsappIcon></WhatsappIcon>
                            </WhatsappShareButton>

                        </StyledShareApp>

                <StyledSettingsButton>
                      <Link to={"/"}>
                          <StyledLogOff>Logg av</StyledLogOff>
                      </Link>  
                </StyledSettingsButton>

            </StyledSettingsDiv>

            <StyledLogo>
                <StyledLogoImage src={RaelingenLogo}/>
            </StyledLogo>

        </>
    );
}



export default Settings