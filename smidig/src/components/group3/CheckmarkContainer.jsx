import React, { useState } from 'react'
import styled from 'styled-components';

const CheckmarkContainer = ({text}) => {

    const [isChecked, setIsChecked] = useState("linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1))");

    const Checkmark = styled.div`
        position: relative;
        height: 56px;
        background-image: ${isChecked};
        border-radius: 28px;
    `;

    const CheckmarkIllustration = styled.div`
        position: absolute;
        margin: 10px;
        height: 36px;
        width: 36px;
        border-radius: 24px;
        background-color: white;
    `;
    const CheckmarkText = styled.p`
        position: absolute;
        left: 54px;
        padding: 9px 6px;
        color: white;
    `;




    function check() {
        if (isChecked == "linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1))"){
            setIsChecked("linear-gradient(120deg, rgba(169, 223, 116, 1), rgba(115, 200, 45, 1));");
        } else {
            setIsChecked("linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1))");
        }
    }



  return (
                <Checkmark onClick={check}>
                    <CheckmarkIllustration/>
                    <CheckmarkText>
                        {text}
                    </CheckmarkText>
                </Checkmark>
  )
}

export default CheckmarkContainer