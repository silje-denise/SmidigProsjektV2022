import React from 'react'
import styled, { keyframes } from 'styled-components';
import ExitIcon from './ExitIcon';
import { Link } from 'react-router-dom';

const ExitMenu = ({open, onClose}) => {
    if (!open) return null

    const fade = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    `;

    const View = styled.div`
        animation: ${fade} 0.2s forwards;
    `;

    const MenuContainer = styled.div`
        background-image: linear-gradient(120deg, rgba(70, 70, 70, 1), rgba(38, 38, 38, 1));
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
        background-image: linear-gradient(120deg, rgba(169, 223, 116, 1), rgba(115, 200, 45, 1));
    `;

    const ExitButton = styled.button`
        flex-grow: 2;
        border-radius: 6px;
        height: 48px;
        font-size: 20px;
        font-weight: 600;
        background-image: linear-gradient(120deg, rgba(239, 164, 159, 1), rgba(235, 102, 87, 1));
    `;

    const OverLayDiv = styled.div`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: white;
        opacity: 0.7;
        filter: blur(8px);
        z-index: 100;
    `;


  return (
      <View>
    <OverLayDiv></OverLayDiv>
    <MenuContainer>
        
        <button style={{background: 'none', filter: 'invert(1)', opacity: '1', marginBottom: '20px'}}
            onClick={onClose}>
            <ExitIcon height='24px' width='24px' opacity="0.9"></ExitIcon>
        </button>

        <MenuText>Vil du avslutte?</MenuText>
        <ButtonsContainer>
            <BackButton onClick={onClose}>Tilbake</BackButton>
            <ExitButton><Link to='/games' style={{ textDecoration: 'none', color: 'black' }}>Avslutt</Link></ExitButton>
        </ButtonsContainer>
    </MenuContainer>
    </View>
  )
}

export default ExitMenu