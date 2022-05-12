import React from "react";
import { Link } from "react-router-dom";

//Foreløpig kun bakgrunn for å se om det funker
const BackgroundWrapper = styled("div")`
    height: 100px;
    width: 100px;
    background-color: #F3F3F3;
`;

const navbar= () => {
    return(
        <BackgroundWrapper>
        <li>
        <Link to="/overwiewPage">'Icon'</Link>
        </li>
        <li>
        <Link to="/mapPage">'Icon'</Link>
        </li>
        <li>
        <Link to="/gamesLandingPage">'Icon'</Link>
        </li>
        <li>
        <Link to="/profilePage">'Icon'</Link>
        </li>
        </BackgroundWrapper>
    );
}
export default navbar;