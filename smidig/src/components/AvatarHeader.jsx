import React from "react";
import styled from "styled-components";


const StyledAvatarHeader = styled("div")`
    background-color:red;
    height: 100px;
    display:flex;
    justify-content:center;
`;

const AvatarHeader = () => {
    return(
        <>
            <StyledAvatarHeader>
                <img src="../images/avatar.png" alt="avatar picture"/>
                <h3>Velg din avatar</h3>
            </StyledAvatarHeader>
        </>
    );
}


export default AvatarHeader;