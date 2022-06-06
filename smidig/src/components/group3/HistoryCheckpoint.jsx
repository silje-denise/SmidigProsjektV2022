import React from 'react'
import styled from 'styled-components';
import star from '../../images/goldStar.svg';
import { AvatarBox } from './AvatarBox';
import Viking from '../../images/Viking.png'
import ProgressDiv from '../group3/ProgressDiv'
import dashedLine from '../../images/dashedLine.svg'
import { getAvatarSource } from '../../getAvatarSource';

export const HistoryCheckpoint = ({open, points, star1, star2, star3, star4, onClose}) => {
    if (!open) return null;

    const HistoryCheckpointContainer = styled.div`
        position: relative;
        width: 100%;
        background-color: #EDEDED;
        border-radius: 32px;
        padding: 2px 0px;
        margin-bottom: 32px;
    `;

    const Container = styled.div`
        position: relative;
        background-image: linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1));
        border-radius: 24px;
        margin: 10px 12px;
        padding: 16px;
    `;

    const StarsContainer = styled.div`
        margin: auto;
        width: max-content;
        padding: 64px 0px 32px 0px;
        
    `;

    const SmallStar = styled.div`
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 42px;
        height: 42px;
        transform: rotate(-15deg);
        display: inline-block;
        text-shadow: 12px 12px red;
        filter: grayscale(${star1});
    `;

    const BigStar = styled.div`
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 80px;
        height: 80px;
        display: inline-block;
        margin: 0px 4px;
        margin-bottom: 4px;
        filter: grayscale(${star2});
    `;

    const SmallStar2 = styled.div`
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 42px;
        height: 42px;
        transform: rotate(15deg);
        display: inline-block;
        filter: grayscale(${star3});
    `;

    const SmallStar3 = styled.div`
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 42px;
        height: 42px;
        margin:auto;
        filter: grayscale(${star4});
    `;

    const TextContainer = styled.div`
        color: #FED156;
        font-weight: 700;
        font-size: 28px;
        width: 100%auto;
        text-align: center;
        opacity: 0.9;
        text-shadow: 0px 0px 12px #FED15650;
        margin-bottom: 64px;
    `;

    const NextButton = styled.div`
        position: relative;
        background-image: linear-gradient(120deg, rgba(209, 220, 147, 1), rgba(115, 198, 76, 1));
        height: 64px;
        border-radius: 6px;
        margin-top: -16px;
    `;

    const NextText = styled.p`
        width: 100%auto;
        text-align: center;
        font-weight: 600;
        font-size: 26px;
        color: black;
        opacity: 0.8;
        line-height: 2.4;
    `;
    
    const ProgressBar = styled.div`
    height: 42px;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 42px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

  return (
      <>
    <HistoryCheckpointContainer>    
        <Container>
            <StarsContainer>
                <SmallStar style={{backgroundImage: `url(${star})`}} />
                <BigStar style={{backgroundImage: `url(${star})`}}/>
                <SmallStar2 style={{backgroundImage: `url(${star})`}} />
                <SmallStar3 style={{backgroundImage: `url(${star})`}} />
            </StarsContainer>
            <TextContainer>{points}/4 Stjerner!</TextContainer>
            
            <AvatarBox title="Så flink du er!" body="Er du klar for neste eventyr?" illustration={getAvatarSource()} color1="rgba(243, 211, 96, 1)" color2="rgba(215, 173, 40, 1)"/>
            <NextButton onClick={onClose}>
                <NextText>Jeg er klar!</NextText>
            </NextButton>
        </Container>
    </HistoryCheckpointContainer>
    <ProgressBar style={{
                    backgroundImage: `url(${dashedLine})`}}>
                <ProgressDiv number="1" color1="rgba(73, 163, 58,1)" color2="rgba(52, 109, 117, 1)"/>
                <ProgressDiv number="2" color1="rgba(254, 209, 86,1)" color2="rgba(246, 163, 88, 1)"/>
                <ProgressDiv number="3"color1="rgba(244, 150, 142,1)" color2="rgba(245, 138, 91, 1)" active="0px 0px 0px 6px rgba(0,0,0,0.2)" />
        </ProgressBar>
    </>
  )
}
