import React, { useState } from 'react'
import styled from 'styled-components';
import ExitIcon from '../components/group3/ExitIcon';
import ExitMenu from '../components/group3/ExitMenu.jsx';
import HistoryInfoContainer from '../components/group3/HistoryInfoContainer';
import HistoryMap from '../components/group3/HistoryMap';
import PointCounterBar from '../components/group3/PointCounterBar';

const HistoryPage = () => {

    const HistoryPage = styled.div`
        margin: 0px 32px;
    `;

    const HistoryPageContainer = styled.div`
        position: relative;
        margin: auto;
        margin-top: 32px;
        margin-bottom: 32px;
    `;

    const Background = styled.div`

    `;

    const ExitBar = styled.div`
        margin-bottom: 42px;
    `;

    const ExitButton = styled.button`
        background-color: white;
    `;

    

    

    const [isOpen, setIsOpen] = useState(false);

    const [mapIsOpen, setMapIsOpen] = useState(true);
    function mapPageHandler() {
        if (mapIsOpen == false) {
            setMapIsOpen(true);
        } else {
            setMapIsOpen(false);
            setHistoryInfoOpen(true);
            setPointBarIsOpen(true);
        }
    }

    const [historyInfoIsOpen, setHistoryInfoOpen] = useState(false);
    function historyInfoHandler() {
        if (historyInfoIsOpen == false) {
            setHistoryInfoOpen(true);
        } else {
            setHistoryInfoOpen(false);
        }
    }

    const [pointBarIsOpen, setPointBarIsOpen] = useState(false);
    

  return (
      <HistoryPage>
        <HistoryPageContainer>
          <Background></Background>
          <ExitBar>
            <ExitButton onClick={() => setIsOpen(true)}>
              <ExitIcon opacity='0.5' width="36px" height="36px"></ExitIcon>
            </ExitButton>
            <PointCounterBar points="0" open={pointBarIsOpen}/>
          </ExitBar>
          <div>
            <HistoryMap open={mapIsOpen} onClose={mapPageHandler}/>
            <HistoryInfoContainer open={historyInfoIsOpen} onClose={historyInfoHandler}/>
          </div>
          <ExitMenu open={isOpen} onClose={() => setIsOpen(false)}/>
      </HistoryPageContainer>
      </HistoryPage>
  )
}

export default HistoryPage