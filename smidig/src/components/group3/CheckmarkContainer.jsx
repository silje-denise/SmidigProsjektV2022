import React, { useState } from 'react'
import styled from 'styled-components';
import checkmark from '../../images/checkmark.svg'
import selectedAudio from '../../audio/selectSound.wav'



const CheckmarkContainer = ({text}) => {

    const [isChecked, setIsChecked] = useState("linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1))");
    const [textColor, setTextColor] = useState("rgba(255, 255, 255, 1)");
    const [showDiv, setShowDiv] = useState("show");
    const [showIcon, setShowIcon] = useState("");

    const selectedSound = new Audio(selectedAudio);
    

    const Checkmark = styled.div`
        position: relative;
        height: 56px;
        background-image: ${isChecked};
        border-radius: 28px;
        margin-bottom: 8px;
    `;

    const CheckmarkIllustration = styled.div`
        visibility: ${showDiv};
        position: absolute;
        margin: 10px;
        height: 36px;
        width: 36px;
        border-radius: 24px;
        background-color: white;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    `;
    const CheckmarkText = styled.p`
        position: absolute;
        left: 54px;
        right: 12px;
        padding: 9px 6px;
        color: ${textColor};
    `;

    const CheckmarkIcon = styled.div`
        position: absolute;
        margin: 10px;
        height: 36px;
        width: 36px;
        border-radius: 24px;
        background-image: url(${showIcon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    `;


    




    function check() {
        selectedSound.play()

        if (isChecked == "linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1))"){
            setIsChecked("linear-gradient(120deg, rgba(169, 223, 116, 1), rgba(115, 200, 45, 1));");
            setTextColor("rgba(0, 0, 0, 0.75)");
            setShowDiv("hidden");
            setShowIcon(`${checkmark}`);

        } else {
            setIsChecked("linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1))");
            setTextColor("rgba(255, 255, 255, 1)");
            setShowDiv("show");
            setShowIcon("");
        }
    }



  return (
                <Checkmark onClick={check}>
                    <CheckmarkIllustration/>
                    <CheckmarkIcon style={{
                    backgroundImage: `url(${showIcon})`}}/>
                    <CheckmarkText>
                        {text}
                    </CheckmarkText>
                </Checkmark>
  )
}

export default CheckmarkContainer