import React from 'react'
import styled from 'styled-components';
import Viking from '../../images/Viking.png'

export const AvatarBox = ({title, body, illustration, color1, color2}) => {


    const AvatarContainer = styled.div`
        position: relative;
        background-color: white;
        border-radius: 14px;
        padding: 16px;
        margin-bottom: 32px;
    `;

    const AvatarTextContainer = styled.div`
        width: 65%;
    `;
    const AvatarTextTitle = styled.p`  
        font-weight: 600;
        font-size: 20px;
        opacity: 0.8;
        margin-bottom: 8px;
    `;

    const AvatarTextBox = styled.p`
        font-weight: 400;
        opacity: 0.7;
        font-size: 15px;
        line-height: 1.2;
    `;

    const AvatarIllustration = styled.div`
        position: absolute;
        width: 30%;
        right: 8px;
        top: 8px;
        bottom: 8px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    `;

  return (
    <AvatarContainer style={{
        backgroundImage:  `linear-gradient(120deg, ${color1}, ${color2})`}}>
        <AvatarTextContainer>
            <AvatarTextTitle>{title}</AvatarTextTitle>
            <AvatarTextBox>{body}</AvatarTextBox>
        </AvatarTextContainer>
        <AvatarIllustration style={{
                backgroundImage: `url(${illustration})`}}/>
    </AvatarContainer>
  )
}
