import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '../../images/Viking.png';
import GLMap, { Marker, Popup }from 'react-map-gl';
import mapLocationIcon from '../../images/mapLocationIcon.svg';
import historyLocations from '../../data/historyLocations.json';
import { getAvatarSource } from '../../getAvatarSource';
import mapIconNorum from '../../images/mapIconNorum.svg';
import mapIconBorgen from '../../images/mapIconBorgen.svg';
import mapIconRud from '../../images/mapIconRud.svg';
import mapIconTorva from '../../images/mapIconTorva.svg';



const TitleBar = styled.div`
        position: relative;
        width: 100%;
        height: 42px;
        margin-bottom: 16px;
    `;

    const PageTitle = styled.h3`
        position: absolute;
        font-size: 32px;
        font-weight: 700;
        float: left;
        bottom: 0;
    `;

    const MapContainer = styled.div`
        position: relative;
        height: 544px;
        background-color: #d5d5d5;
        border-radius: 16px;
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

    const MapDiv = styled.div`
        position: relative;
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        border-radius: 16px;
        width: 100%;
    `;

    const MarkerIcon = styled.div`
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 48px;
        width: 200px;
    `;

    const PointPopUp = styled.div`
        position: relative;
        height: 128px;
        width: 128px;
        background-color: white;

    `;

    const ProfileIcon = styled.div`
    border-radius: 50px;
    width: 5rem;
    height: 5rem;
    display:flex;
    justify-content: center;
    position: fixed;
    right: 2.5rem;
  `;

    const StyledImg = styled.img`
      height: 5rem;
      width: 5rem;
    `;

    const DialogBody = styled.p`
        width: 80%;
        margin-bottom: 42px;
    `;


const HistoryMap = ({open, onClose, rud, borgen, norum, torva, avatarTitle, avatarBody}) => {
    const [viewState, setViewState] = React.useState({
        latitude: 59.932484,
        longitude: -348.931581,
        width: "100vh",
        height: "100vh",
        zoom: 11,
    });

    const [pointActive, setPointActive] = useState(null);
    if (!open) return null

    

  return (
      <>
        <TitleBar>
            <PageTitle>Historien</PageTitle>
        </TitleBar>
        <MapContainer>
            <MapDiv>
                <GLMap {...viewState} 
                        mapStyle="mapbox://styles/mapbox/outdoors-v10?optimize=true"
                        mapboxAccessToken={"pk.eyJ1IjoiYWRkaW1hbm5pIiwiYSI6ImNsM3drdjZicjBhbm8zY21tbmc0cDM0M2MifQ.3DIlK5bhql2VKREmCXBgMQ"}
                        style={{borderRadius: "16px"}}
                        onMove={evt => {setViewState(evt.viewState)}}>
                        
                        <Marker
                            latitude={historyLocations.historyLocations[0].coordinates[0]}
                            longitude={historyLocations.historyLocations[0].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    setPointActive(historyLocations.historyLocations[0])
                                }}
                                style={{backgroundImage: `url(${mapIconBorgen})`, opacity: `${borgen ? borgen : 0.5}`}}/>
                        </Marker>
                        <Marker
                            latitude={historyLocations.historyLocations[1].coordinates[0]}
                            longitude={historyLocations.historyLocations[1].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    setPointActive(historyLocations.historyLocations[0])
                                }}
                                style={{backgroundImage: `url(${mapIconNorum})`, opacity: `${norum ? norum : 0.5}`}}/>
                        </Marker>
                        <Marker
                            latitude={historyLocations.historyLocations[2].coordinates[0]}
                            longitude={historyLocations.historyLocations[2].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    setPointActive(historyLocations.historyLocations[0])
                                }}
                                style={{backgroundImage: `url(${mapIconRud})`, opacity: `${rud ? rud : 0.5}`}}/>
                        </Marker>
                        <Marker
                            latitude={historyLocations.historyLocations[3].coordinates[0]}
                            longitude={historyLocations.historyLocations[3].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    setPointActive(historyLocations.historyLocations[0])
                                }}
                                style={{backgroundImage: `url(${mapIconTorva})`, opacity: `${torva ? torva : 0.5}`}}/>
                        </Marker>
                        {pointActive ? (
                            <Popup latitude={pointActive.coordinates[0]} longitude={pointActive.coordinates[1]} anchor="bottom">
                                <PointPopUp>
                                    test
                                </PointPopUp>
                            </Popup>
                        ) : null}
                </GLMap>
            </MapDiv>
                <DialogueBox>
                    <Dialogue>
                        <DialogueTitle>{avatarTitle}</DialogueTitle>
                        <DialogBody>{avatarBody}</DialogBody>
                    </Dialogue>
                    <DialogueAvatar>
                        <ProfileIcon> 
                            <StyledImg src={getAvatarSource()}/>   
                        </ProfileIcon>
                    </DialogueAvatar>
                </DialogueBox>
        </MapContainer>
        <NextButton onClick={onClose}>La oss begynne!</NextButton>
    </>
  );
}

export default HistoryMap;