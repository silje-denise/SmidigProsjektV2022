import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import styled from 'styled-components'
import ExitIconSvg from '../../images/x.svg';

const ExitBar = ({width, height, opacity}) => {

    

    const ExitIcon = styled.div`
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: ${width};
        height: ${height};
        opacity: ${opacity};
        &:hover {
          cursor: pointer;
        }
    `;

    

    

  return (
      
        <ExitIcon style={{backgroundImage: `url(${ExitIconSvg})`}}></ExitIcon>

  )
}

export default ExitBar