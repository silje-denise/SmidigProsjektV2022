import { useDeprecatedInvertedScale } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import ExitIcon from './ExitIcon';

const ExitMenu = ({open, onClose}) => {
    if (!open) return null

    const MenuContainer = styled.div`
        background-color: black;
        position: fixed;
        top: 50%;
        left: 50%;
        width: 256px;
        transform: translate(-50%, -50%);
        padding: 12px 12px 12px 12px;
        z-index: 100;
        border-radius: 12px;

    `;

    const MenuText = styled.p`
        font-size: 28px;
        color: white;
        text-align: center;
        font-weight: 600;
        margin-bottom: 32px;
    `;
    
    const ButtonsContainer = styled.div`
        display: flex;
        //grid-template-columns: auto auto;
        gap: 8px;
    `;

    const BackButton = styled.button`
        flex-grow: 1; 
        padding: 8px 16px;
        border-radius: 6px;
        height: 48px;
        font-size: 20px;
        font-weight: 600;
    `;

    const ExitButton = styled.button`
        flex-grow: 2;
        border-radius: 6px;
        height: 48px;
        font-size: 20px;
        font-weight: 600;
    `;

  return (
    <MenuContainer>
        <button style={{background: 'none', filter: 'invert(1)', opacity: '1', marginBottom: '20px'}}
            onClick={onClose}>
            <ExitIcon height='24px' width='24px' opacity="0.9"></ExitIcon>
        </button>

        <MenuText>Vil du avslutte?</MenuText>
        <ButtonsContainer>
            <BackButton onClick={onClose}>Tilbake</BackButton>
            <ExitButton>Avslutt</ExitButton>
        </ButtonsContainer>
    </MenuContainer>
  )
}

export default ExitMenu