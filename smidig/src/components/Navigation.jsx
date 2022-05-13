import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

//Foreløpig kun bakgrunn for å se om det funker
const BackgroundWrapper = styled.BackgroundWrapper`
    height: 100px;
    width: 100px;
    background-color: #F3F3F3;
`;

const navbar= () => {
    return(
        <BackgroundWrapper>
        <li>
        <Link to="/overwiewPage">
            <img src=""></img>
        </Link>
        </li>
        <li>
        <Link to="/mapPage">
            <img src=""></img>
        </Link>
        </li>
        <li>
        <Link to="/gamesLandingPage">
            <img src=""></img>
        </Link>
        </li>
        <li>
        <Link to="/profilePage">
            <img src=""></img>
        </Link>
        </li>
        </BackgroundWrapper>
    );
}
export default navbar;