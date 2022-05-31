import React from "react"
import styled from "styled-components";
import XButton from "../components/common/XButton";
import Quiz from "../components/group2/Quiz";
import { Link } from "react-router-dom";
import Navigation from "../components/group3/Navigation";

const NavigationWrapper = styled.div`
    bottom: 0;
    position: absolute;
    width: 100vw;
`;
    
const QuizPage = () => {
    return(
        <>
            <Link to={"/games"}>
                <XButton />
            </Link>
            <Quiz />
            <NavigationWrapper>
                <Navigation/>
            </NavigationWrapper>
        </> 
    );
}


export default QuizPage