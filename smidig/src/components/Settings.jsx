import React from "react";
import styled from "styled-components";

const StyledSettingsDiv = styled.div`
    font-size: 33px;
    text-align: right;
    margin-right: 0rem;
    font-weight: 700;
`;

const StyledSettingsButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 33px;
    text-align: right;
    margin-right: 4rem;
    margin-top: 2rem;
    font-weight: 700;
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
    margin-top: 6rem;
    color: #209803;
    font-weight: 400;
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

        </>
    );
}



export default Settings