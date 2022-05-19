import React from "react";
import styled from "styled-components";
import Dog from "../../images/Dog.png"
import Horse from "../../images/Horse.png"
import Cat from "../../images/Cat.png"
import Rat from "../../images/Rat.png"

const StyledCharacterSelection = styled.div`
    background: #f5f2f2;
    width: 18rem;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    margin: auto;
`;

const StyledCharacters = styled.div`
    height: 5rem;
    width: 5rem;
    background-color: lightblue;
    border-radius: 50%;
    margin-top: 5rem;
    margin: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border: solid;
    border-color: #f5f2f2;
    border-width: 0.3rem;
    border-height: 0.3rem;

    &:hover {
        border: solid;
        border-color: green;
        border-width: 0.3rem;
        border-height: 0.3rem;
    }
`;

const StyledImage = styled.img`
    height: 5rem;
    width: 5rem;
`;

const CharacterSelection = () => {
    return(
        <>
            <StyledCharacterSelection>
                <div>
                    <StyledCharacters > 
                        <StyledImage src={Dog}></StyledImage>
                    </StyledCharacters>

                    <StyledCharacters > 
                        <StyledImage src={Cat}></StyledImage>
                    </StyledCharacters>
                </div>
                <div>
                    <StyledCharacters > 
                        <StyledImage src={Rat}></StyledImage>
                    </StyledCharacters>
                    <StyledCharacters > 
                        <StyledImage src={Horse}></StyledImage>
                    </StyledCharacters>
                </div>
            </StyledCharacterSelection>
        </>
    );
}



export default CharacterSelection