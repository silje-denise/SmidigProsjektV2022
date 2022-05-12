import React from "react";
import styled from "styled-components";

const StyledSettingsDiv = styled.div`
    font-size: 33px;
    text-align: right;
    margin-right: 4rem;
    margin-top: 4rem;
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
`;

const StyledLogOff = styled.div`
    font-size: 30px;
    margin-top: 8rem;
    color: #209803;
    font-weight: 400;
`;

const Settings = () => {
    return(
        <>
            <StyledSettingsDiv>

                <StyledSettings>
                    <p>Innstillinger</p>
                </StyledSettings>

                <StyledAboutUs>
                    <p>Om oss</p>
                </StyledAboutUs>

                <StyledContactUs>
                    <p>Kontakt oss</p>
                </StyledContactUs>

                <StyledShareApp>
                    <p>Del appen</p>
                </StyledShareApp>

                <StyledLogOff>
                    <p>Logg av</p>
                </StyledLogOff>

            </StyledSettingsDiv>

        </>
    );
}



export default Settings