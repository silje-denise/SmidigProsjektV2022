import { motion } from 'framer-motion'
import '../../App.css'
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import PointCounter from './PointCounter'
import Viking from '../../images/Viking.png'
import testPicture from '../../images/testPicture.jpg'
import CheckmarkIcon from '../../images/checkmark.svg'
import CheckmarkContainer from './CheckmarkContainer'
import ProgressDiv from '../group3/ProgressDiv'
import dashedLine from '../../images/dashedLine.svg'

const HistoryInfoContainer = ({open, onClose}) => {
    if (!open) return null

    const ScrollView = styled.div`
        height: 600px;
        width: 100%auto;
        background-image: linear-gradient(120deg, rgba(209, 220, 147, 1), rgba(115, 200, 45, 1));
        border-radius: 16px;
        padding: 16px;
        overflow: auto;
        margin-bottom: 20px;
    `;

    const Title = styled.div`
        font-size: 24px;
        font-weight: 700;
        opacity: 0.75;
        margin-bottom: 8px;
    `;

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

    const Picture = styled.div`
        height: 180px;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin-bottom: 16px;
    `;


    const ContainerBackground = styled.div`
        padding: 16px;
        background-color: rgba(255,255,255,0.7);
        border-radius: 8px;

    `;
    
    const TextContainer = styled.div`
        line-height: 1.3;
    `;

    const Oppsumert = styled.div`
        font-size: 24px;
        margin: 24px 0px 12px 0px;
        font-weight: 600;
        opacity: 0.8;
    `;

    const ReadyButton = styled.div`
        height: 80px;
        background-image: linear-gradient(120deg, rgba(85, 85, 85, 1), rgba(38, 38, 38, 1));
        margin-top: 32px;
        border-radius: 8px;
    `;

    const ReadyText = styled.p`
        color: white;
        opacity: 0.85;
        font-weight: 700;
        width: 100%;
        text-align: center;
        font-size: 32px;
        height: 100%auto;
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
    <div>
        <ScrollView>

            <AvatarContainer>
                <AvatarTextContainer>
                    <AvatarTextTitle>Her er Ostavågen!</AvatarTextTitle>
                    <AvatarTextBox>Dette er mitt hjem. Hva synest du? Er du klar for å
                        hjelpe meg med tresaging?
                    </AvatarTextBox>
                </AvatarTextContainer>
                <AvatarIllustration style={{
                backgroundImage: `url(${Viking})`}}/>
            </AvatarContainer>

            <Title>
                <p>Ostavågen</p>
            </Title>
            
            <ContainerBackground>
                <Picture style={{
                    backgroundImage: `url(${testPicture})`}}/>
                <TextContainer>
                Lorem Ipsum is simply dummy text of the printing and 
                type been the industry's standard dummy text ever since the 1500s.<br/><br/>

                Lorem Ipsum is simply dummy text of the printing and 
                typeszetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s.
                </TextContainer>

                <Oppsumert>Oppsumert</Oppsumert>
                
                <CheckmarkContainer text="Stor plankeproduksjon fra 1832."/>
                <CheckmarkContainer text="En av Norges største plankeprodesenter."/>
                <CheckmarkContainer text="Første vindmøllen ble bygget i 1871."/>
            </ContainerBackground>
            
            <ReadyButton onClick={onClose}>
                <ReadyText>Jeg er klar!</ReadyText>
            </ReadyButton>
        </ScrollView>

        <ProgressBar style={{
                    backgroundImage: `url(${dashedLine})`}}>
                <ProgressDiv number="1" color1="rgba(73, 163, 58,1)" color2="rgba(52, 109, 117, 1)" active="0px 0px 0px 6px rgba(0,0,0,0.2)"/>
                <ProgressDiv number="2" color1="rgba(254, 209, 86,1)" color2="rgba(246, 163, 88, 1)"/>
                <ProgressDiv number="3"color1="rgba(244, 150, 142,1)" color2="rgba(245, 138, 91, 1)"/>
        </ProgressBar>

    </div>
  )
}

export default HistoryInfoContainer