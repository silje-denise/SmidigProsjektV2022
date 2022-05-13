import React from "react"
import styled from "styled-components"
import NextButton from "../components/common/NextButton";
import XButton from "../components/common/XButton";
import Quiz from "../components/Quiz";



const QuizPage = () => {
    return(
        <>
            <XButton />
            <Quiz />
            <NextButton />
        </> 
    );
}


export default QuizPage