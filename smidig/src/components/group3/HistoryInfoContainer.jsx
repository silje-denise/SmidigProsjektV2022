import { motion } from 'framer-motion'
import '../../App.css'
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import PointCounter from './PointCounter'

const HistoryInfoContainer = ({open, onClose}) => {

    if (!open) return null

    const ScrollView = styled.div`
        height: 600px;
        width: 100%auto;
        background-image: linear-gradient(120deg, rgba(169, 223, 116, 1), rgba(115, 200, 45, 1));
        border-radius: 16px;
    `;

    const TitleAndPointBar = styled.div`
        margin: 0px 12px
    `;
    



  return (
    <div>
        <ScrollView>
            <TitleAndPointBar>
                <p>Ostavågen</p>
                <PointCounter points="0"/>
            </TitleAndPointBar>

        </ScrollView>
    </div>
  )
}

export default HistoryInfoContainer