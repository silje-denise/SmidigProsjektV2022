import React from "react";
import styled from "styled-components";
import Dog from '../images/Dog.png';
import profilLinje from '../images/profilLinje.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled("div")`
    display:flex;
    justify-content:center;
    width: 100vw;
    flex-direction:column;
    margin-bottom: 20px;
`;

const HeaderGrid = styled("div")`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100vw;
    height:150px;
`;

const ProfilePicture = styled("img")`
    width: 50px;
`;

const ProfileInfoWrapper = styled("div")`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Points = styled("div")`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#444444;
    color:white;
    border-radius:50px;
    height: 34px;
    width: 63px;
`;
const UserInfo = styled("div")`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-end;
   
`;

const Username = styled("h2")`
    margin:0;
    
`;
const School = styled("h3")`
    margin:0;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color:rgb(250,192,42);
    padding: 5px;
`;

const ProfileHeader = () => {
    return(
        <HeaderWrapper>
            <HeaderGrid>
                <ProfileInfoWrapper>
                    <Points>
                        <h4> 1 </h4>
                        <StyledFontAwesomeIcon icon={faStar}/>
                    </Points>
                </ProfileInfoWrapper>
            <UserInfo>
                <Username>SILJE</Username>
                <School>Solvik skole</School>
            </UserInfo>
            <ProfileInfoWrapper>
                <ProfilePicture src={Dog}/>
            </ProfileInfoWrapper>
            </HeaderGrid>
            <img src={profilLinje}/>
        </HeaderWrapper>
    );
}
export default ProfileHeader;