import React from "react";
import styled from "styled-components";
import Dog from '../../images/Dog.png';
import profilLinje from '../../images/ProfileLine.png';
import Points from "../common/PointsComponent";
import { Link } from "react-router-dom";

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


const ProfileHeader = () => {
    return(
        <HeaderWrapper>
            <HeaderGrid>
                <ProfileInfoWrapper>
                    <Points>
                        {/* <h4> 1 </h4>
                        <StyledFontAwesomeIcon icon={faStar}/> */}
                    </Points>
                </ProfileInfoWrapper>
            <UserInfo>
                <Username>SILJE</Username>
                <School>Solvik skole</School>
            </UserInfo>
            <ProfileInfoWrapper>
                <Link to={"/chooseavatar"}>
                     <ProfilePicture src={Dog}/>
                </Link>
               
            </ProfileInfoWrapper>
            </HeaderGrid>
            <img src={profilLinje}/>
        </HeaderWrapper>
    );
}
export default ProfileHeader;