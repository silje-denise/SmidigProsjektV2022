import React from "react";
import styled from "styled-components";
import Blonde from "../../images/Blonde.svg"
import Brunette from "../../images/Brunette.svg"
import Brunette2 from "../../images/Brunette2.svg"
import Blue from "../../images/Blue.svg"

const StyledCharacterSelection = styled.div`
    background: #f5f2f2;
    width: 18rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    margin: auto;
`;

const StyledCharacters = styled.button`
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
        border-color: rgb(103,179,70);
        border-width: 0.3rem;
        border-height: 0.3rem;
    }
`;

const StyledImage = styled.img`
    height: 4.5rem;
    width: 4.5rem;
`;

const CharacterSelection = ({handleClick, selectedAvatar}) => {
   
    return(
        <>
            <StyledCharacterSelection>
                <div>
                    <StyledCharacters onClick={()=> handleClick("Blonde")} > 
                        <StyledImage src={Blonde} alt="A blonde person with long relaxed hair, and a happy smile"></StyledImage>
                    </StyledCharacters>

                    <StyledCharacters onClick={()=> handleClick("Brunette")} > 
                        <StyledImage src={Brunette} alt="A brunette with a big smile, big curls, and love heart eyes"></StyledImage>
                    </StyledCharacters>
                </div>
                <div>
                    <StyledCharacters onClick={()=> handleClick("Brunette2")}> 
                        <StyledImage src={Brunette2} alt="A brunette with a bun, with glasses and a frown"></StyledImage>
                    </StyledCharacters>
                    <StyledCharacters onClick={()=> handleClick("Blue")}> 
                        <StyledImage src={Blue} alt="A blue haired person with short hair, a wink and their tounge sticking out"></StyledImage>
                    </StyledCharacters>
                </div>
            </StyledCharacterSelection>
        </>
    );
}



export default CharacterSelection