import React from "react"
import NextButton from "../components/common/NextButton";
import XButton from "../components/common/XButton";
import Quiz from "../components/group2/Quiz";
import { Link } from "react-router-dom";


const QuizPage = () => {
    return(
        <>
        {/**Link skal tilbake til GamesLandingPage */}
        <Link to={"/"}>
            <XButton />
        </Link>
            
            <Quiz />
            <NextButton />
        </> 
    );
}


export default QuizPage