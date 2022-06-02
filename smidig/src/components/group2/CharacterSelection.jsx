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
    height: 5rem;
    width: 5rem;
`;

const CharacterSelection = ({handleClick, selctedAvatar}) => {
   
    return(
        <>
            <StyledCharacterSelection>
                <div>
                    <StyledCharacters onClick={()=> handleClick("Dog")} > 
                        <StyledImage src={Dog} alt="Image of a dog"></StyledImage>
                    </StyledCharacters>

                    <StyledCharacters onClick={()=> handleClick("Cat")} > 
                        <StyledImage src={Cat} alt="Image of a cat"></StyledImage>
                    </StyledCharacters>
                </div>
                <div>
                    <StyledCharacters onClick={()=> handleClick("Rat")}> 
                        <StyledImage src={Rat} alt="Image of a rat"></StyledImage>
                    </StyledCharacters>
                    <StyledCharacters onClick={()=> handleClick("Horse")}> 
                        <StyledImage src={Horse} alt="Image of a horse"></StyledImage>
                    </StyledCharacters>
                </div>
            </StyledCharacterSelection>
        </>
    );
}



export default CharacterSelection