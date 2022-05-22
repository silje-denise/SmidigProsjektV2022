import React from 'react'
import styled from 'styled-components';
import ProgressDiv from './ProgressDiv'
import dashedLine from '../../images/dashedLine.svg'

const QuizComponent = ({open}) => {
  if (!open) return null;

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
      Her kommer quiiiz mann
      <br/><br/><br/><br/><br/><br/><br/><br/>

      <ProgressBar style={{
                    backgroundImage: `url(${dashedLine})`}}>
                <ProgressDiv number="1" color1="rgba(73, 163, 58,1)" color2="rgba(52, 109, 117, 1)"/>
                <ProgressDiv number="2" color1="rgba(254, 209, 86,1)" color2="rgba(246, 163, 88, 1)" active="0px 0px 0px 6px rgba(0,0,0,0.2)"/>
                <ProgressDiv number="3"color1="rgba(244, 150, 142,1)" color2="rgba(245, 138, 91, 1)"/>
        </ProgressBar>
    </div>
  )
}

export default QuizComponent