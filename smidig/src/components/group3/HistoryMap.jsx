import React from 'react'
import styled from 'styled-components';
import GoldenStar from '../../images/goldStar.svg';
import Avatar from '../../images/Viking.png'
import PointCounter from './PointCounter';


const HistoryMap = ({open, onClose}) => {
    if (!open) return null

    const PointBar = styled.div`
        position: relative;
        width: 100%;
        height: 64px;
        margin-bottom: 16px;
    `;

    const PageTitle = styled.h3`
        position: absolute;
        font-size: 32px;
        font-weight: 700;
        float: left;
        bottom: 0;
    
    `;

    const PointContainer = styled.div`
        position: relative;
        height: 64px;
        border-radius: 64px;
        float: right;
        background-color: #222222;
    `;

    

    const MapContainer = styled.div`
        position: relative;
        height: 512px;
        background-color: #d5d5d5;
        border-radius: 32px;
        margin-bottom: 16px;
    
    `;

    const DialogueBox = styled.div`
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(120deg, rgba(209, 220, 147, 1), rgba(115, 198, 76, 1));
        width: 100%;
        border-radius: 16px;
        height:max-content;
    `;

    const Dialogue = styled.div`
        margin: 16px;

    `;

    const DialogueTitle = styled.p`
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 8px;

    `;
    
    const DialoguePhrase = styled.p`
    
    `;

    const DialogueAvatar = styled.div`
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        width: 40%;
        right: 8px;
        top: 8px;
        bottom: 8px;
        


    `;

    const NextButton = styled.div`
        height: 64px;
        background-image: linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38,38,38, 1));
        border-radius: 16px;
        text-align: center;
        font-size: 28px;
        color: white;
        line-height: 2.1;
        font-weight: 700;
    `;

    

  return (
      <>
            <PointBar>
                <PageTitle>Historien</PageTitle>
                    <PointContainer>
                        <PointCounter points="0"/>
                    </PointContainer>
            </PointBar>
        
            <MapContainer>
                <DialogueBox>
                    <Dialogue>
                        <DialogueTitle>Hei og velkommen!</DialogueTitle>
                        <DialoguePhrase>Endelig er du her! Nå skal vi <br/>endelig gjennom kulturstien.</DialoguePhrase>
                    </Dialogue>
                    <DialogueAvatar style={{
                backgroundImage: `url(${Avatar})`}}></DialogueAvatar>
                </DialogueBox>
            </MapContainer>
            <NextButton onClick={onClose}>La oss begynne!</NextButton>
            </>
  )
}

export default HistoryMap