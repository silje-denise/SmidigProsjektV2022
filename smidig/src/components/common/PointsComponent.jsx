import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color:rgb(250,192,42);
    padding: 5px;
`;

const StyledPoints = styled("div")`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#444444;
    color:white;
    border-radius:50px;
    height: 34px;
    width: 63px;
`;


const PointsComponent = () =>{
    return(
        <StyledPoints>
            <h4> 1 </h4>
            <StyledFontAwesomeIcon icon={faStar}/>
        </StyledPoints>
    );
}

export default PointsComponent;

