import React from "react";
import styled from "styled-components";
import RælingenLogo from "../../images/RaelingenLogo.png"

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
    margin-top: -2rem;
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

const Settings = () => {
    return(
        <>

            <StyledSettingsDiv>

                <StyledSettings>
                    <StyledSettingsButton>Innstillinger</StyledSettingsButton>
                </StyledSettings>

                <StyledAboutUs>
                    <StyledSettingsButton>Om oss</StyledSettingsButton>
                </StyledAboutUs>

                <StyledContactUs>
                    <StyledSettingsButton>Kontakt oss</StyledSettingsButton>
                </StyledContactUs>

                <StyledSettingsButton>
                    <StyledShareApp>
                        <p>Del appen</p>
                    </StyledShareApp>
                </StyledSettingsButton>

                <StyledSettingsButton>
                    <StyledLogOff>
                        <p>Logg av</p>
                    </StyledLogOff>
                </StyledSettingsButton>

            </StyledSettingsDiv>

            <StyledLogo>
                <StyledLogoImage src={RælingenLogo}/>
            </StyledLogo>

        </>
    );
}



export default Settings