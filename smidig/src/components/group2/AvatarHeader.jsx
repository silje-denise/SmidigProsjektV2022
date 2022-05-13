import React from "react";
import styled from "styled-components";
//import {FontAwesomeIcon} from '@fortawesome/fontawesome-free';
//mport {faUser} from '@fortawesome/free-solid-svg-icons';
import Dog from '../../images/Dog.png';

const StyledAvatarHeader = styled("div")`
    height: 200px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;
const StyledAvatarImageWrapper = styled("div")`
    border-radius: 100%;
    border: solid 2px #ccc;
    width: 100px;
    height: 100px;
`;
const StyledAvatarImage = styled("img")`
    border-radius: 100%;
    width: 100px;
    height: 100px;
`;
const StyledHeaderText = styled("h3")`
    @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
    font-size:29px;
    font-family: "Source Sans Pro", sans-serif;
`;

const AvatarHeader = () => {
    return(
        <>
            <StyledAvatarHeader>
                {/*<FontAwesomeIcon icon={faUser} size={'2x'}/>*/}
               <StyledAvatarImageWrapper>
                   <StyledAvatarImage src={Dog}/>
               </StyledAvatarImageWrapper>
                <StyledHeaderText>Velg din avatar</StyledHeaderText>
            </StyledAvatarHeader>
       </>
    );
}


export default AvatarHeader;