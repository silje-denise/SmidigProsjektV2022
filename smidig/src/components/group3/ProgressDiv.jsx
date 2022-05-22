import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const ProgressDiv = ({active, number, color1, color2}) => {

    const [isActive, setIsActive] = useState("none")

    function setActive() {
        if(active == "true"){
            setIsActive("3px solid rgba(0, 0, 0, 0.5");
        } else {
            setIsActive("none");
        }
    }
    

    const DivContainer = styled.div`
        border-radius: 8px;
        background-image: linear-gradient(120deg, ${color1}, ${color2});
        height: 42px;
        width: 100%;
        box-shadow: ${active};
    `;
    
    const NumberDiv = styled.div`
        height: 34px;
        width: 34px;
        background-color: white;
        border-radius: 18px;
        margin: 4px;
    `;

    const Number = styled.p`
        width: 100%;
        text-align: center;
        font-size: 22px;
        line-height: 1.5;
        font-weight: 700;
        color: ${color2};
    `;

  return (
    <DivContainer>
        <NumberDiv>
            <Number>{number}</Number>
        </NumberDiv>
    </DivContainer>
  )
}

export default ProgressDiv