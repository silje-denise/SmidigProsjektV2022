import React from "react";
import styled from "styled-components";
import profilLinje from '../../images/ProfileLine.png';
import Points from "../common/PointsComponent";
import { Link } from "react-router-dom";
import { getAvatarSource } from "../../getAvatarSource";
import PointCounter from "../group3/PointCounter";


const HeaderWrapper = styled("div")`
    display:flex;
    justify-content:center;
    width: 100vw;
    flex-direction:column;
    margin-bottom: 20px;
`;

const HeaderGrid = styled("div")`
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100vw;
    height:150px;
`;

const ProfilePicture = styled("img")`
    width: 70px;
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

const Username = styled("h1")`
    margin:0;
`;
const School = styled("h2")`
    margin:0;
    text-align:right;
`;

const PointView = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: -78px 32px 0px 32px;
`;

const ProfilePage = styled.div`
    position: relative;
`;



const ProfileHeader = () => {
    return(
        <ProfilePage>
        <PointView>
            <PointCounter></PointCounter>
        </PointView>
        <HeaderWrapper>
            
            <HeaderGrid>
                <ProfileInfoWrapper>
                
                </ProfileInfoWrapper>
            <UserInfo>
            
                <Username>SILJE</Username>
                <School>Solvik skole</School>
            </UserInfo>
            <ProfileInfoWrapper>
                <Link to={"/chooseavatar"}>
                     <ProfilePicture src={getAvatarSource()} alt="Profilbilde"/>
                </Link>
            </ProfileInfoWrapper>
            </HeaderGrid>
            <img src={profilLinje} alt="Linje"/>
        </HeaderWrapper>
        </ProfilePage>
    );
}
export default ProfileHeader;