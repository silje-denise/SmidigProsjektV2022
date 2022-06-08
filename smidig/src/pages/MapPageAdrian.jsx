import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {React, useState} from "react";
import styled from "styled-components";
import map from "../images/Map.png";
import Navigation from "../components/common/Navigation";
import AudioFile from "../audio/pannekaka.mp3";
import { keyframes } from "styled-components";
import GLMap, { Marker, Popup }from 'react-map-gl';
import mapIconBorgen from '../images/mapIconBorgen.svg';
import 'mapbox-gl/dist/mapbox-gl.css';
import historyLocations from '../data/historyLocations.json';
import mapIconNorum from '../images/mapIconNorum.svg';
import mapIconRud from '../images/mapIconRud.svg';
import mapIconTorva from '../images/mapIconTorva.svg';


const PageWrapper = styled("div")`
    position: relative;
    height: 100vh;
    width: 100vw;
`;

const OverlayWrapper = styled("div")`
    
    width: 100vw;
    display:flex;
    justify-content: flex-end;
    flex-direction: column;
    position:absolute;
    bottom:0px;
`;

const Overlay = styled("div")`
    border-radius: 50px 50px 0px 0px;
    background-color:white;
    width: 100vw;
    display:flex;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    align-items:center;
    z-index:90;
    box-shadow: 20px 30px 30px 20px gray;
    height: ${props => (props.visible ? "700px" : "300px")};
    animation: ${props => (props.visible ? transformer : false)} 0.6s forwards;
`;

const transformer = keyframes`
    from {height: 300px}
    to {height: 700px}
`;

const StyledHeaderText = styled("h1")`
    padding: 15px;
    font-weight: 600;
`;

const AudioElement = styled("audio")`

&::-webkit-media-controls-panel {
    background-color: white;
  }
  &::-webkit-media-controls-current-time-display{
      display:none;
  }
  &::-webkit-media-controls-time-remaining-display{
    display:none;
  }
`;

const ButtonWrapper = styled("div")`
    padding: 20px;
    display:flex;
    backdrop-filter: blur(2px);
    z-index: 100;
`;

const ContentWrapper = styled("div")`
    padding: 30px;
    overflow:hidden;
`;

const NavWrapper = styled.div`
    position:absolute;
    z-index:100;
    background-color:rgba(255,255,255,1);
    display:flex;
    align-items:flex-end;
    width: 100%;
    height: 140px;
    //backdrop-filter: blur(2px);
`;

const AreaWrapper = styled("div")`
    width: 90%;
    height: 50%;
    margin:auto;
    position: relative;
`;

const Area1 = styled("button")`
    background-color: white;
    border-radius:30px;
    width:130px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:50px;
    position:absolute;
    top: 40px;
    left: 50px;
    z-index:50;
`;
const Area2 = styled("button")`
    position:absolute;
    top: 100px;
    right: 50px;
    background-color: white;
    border-radius:30px;
    border: 2px solid rgb(103,179,70);
    width:130px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:50px;
    z-index:50;
`;
const Area3 = styled("button")`
    position:absolute;
    bottom: 30px;
    left: 40px;
    width:130px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:50px;
    background-color: white;
    border-radius:30px;
    border: 2px solid rgb(103,179,70);
    z-index:50;
`;

const HeaderButtonWrapper = styled("div")`
    display:flex;
    justify-content:center;
    width: 100%;
`;

const StyledHeaderButton = styled("button")`
    width: 160px;
    height: 50px;
    border-radius: 10px;
    font-size: 24px;
    background-color: #ededed; 
`;

const MapDiv = styled.div`
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        width: 100%;
        top: 80px;
    `;

const MarkerIcon = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 48px;
    width: 200px;
`;




const MapPageAdrian = () => {
    const [viewState, setViewState] = useState({
        latitude: 59.912484,
        longitude: -348.931581,
        width: "100vh",
        height: "100vh",
        zoom: 11,
    });
    const [isOpen, setIsOpen] = useState(false);
    const [infoText, setInfoText] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
    const [infoHeader, setInfoHeader] = useState("Byåa");
    

    const handleOnclick = (id)=>{
   
       if(!isOpen){
           setIsOpen(true);
          
           if(id === 0){
              setInfoHeader("Byåa");
              setInfoText("Her finner du info om Byåa: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
              
           }else if(id === 1){
            setInfoHeader("Borgen");
            setInfoText(`Her finner du info om Vannmølla:  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.`);
           }else if(id === 2){
            setInfoHeader("Norum");
            setInfoText("Her finner du info om Sagen: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
           }
           else if(id === 3){
            setInfoHeader("Torva");
            setInfoText("Her finner du info om Låven: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
           }
       }else{
           setIsOpen(false);
       }
    }

    

  
    const [pointActive, setPointActive] = useState(null);


    return(
            
            <PageWrapper>
            <ButtonWrapper>
                <HeaderButtonWrapper>
                    <StyledHeaderButton onClick={() => handleOnclick(0)}>
                        <h2>Byåa</h2>
                    </StyledHeaderButton>
                </HeaderButtonWrapper>
            </ButtonWrapper>
            
            <MapDiv>
                <GLMap {...viewState} 
                        mapboxAccessToken={"pk.eyJ1IjoiYWRkaW1hbm5pIiwiYSI6ImNsM3drdjZicjBhbm8zY21tbmc0cDM0M2MifQ.3DIlK5bhql2VKREmCXBgMQ"}
                        onMove={evt => {setViewState(evt.viewState)}}
                        mapStyle="mapbox://styles/mapbox/streets-v9">
                        <Marker
                            latitude={historyLocations.historyLocations[0].coordinates[0]}
                            longitude={historyLocations.historyLocations[0].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    handleOnclick(1)
                                    setPointActive(historyLocations.historyLocations[0])
                                    
                                }}
                                style={{backgroundImage: `url(${mapIconBorgen})`}}/>
                        </Marker>
                        <Marker
                            latitude={historyLocations.historyLocations[1].coordinates[0]}
                            longitude={historyLocations.historyLocations[1].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    handleOnclick(2)
                                    setPointActive(historyLocations.historyLocations[0])
                                }}
                                style={{backgroundImage: `url(${mapIconNorum})`}}/>
                        </Marker>
                        <Marker
                            latitude={historyLocations.historyLocations[2].coordinates[0]}
                            longitude={historyLocations.historyLocations[2].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    handleOnclick(3)
                                    setPointActive(historyLocations.historyLocations[0])
                                }}
                                style={{backgroundImage: `url(${mapIconRud})`}}/>
                        </Marker>
                        <Marker
                            latitude={historyLocations.historyLocations[3].coordinates[0]}
                            longitude={historyLocations.historyLocations[3].coordinates[1]}>
                                <MarkerIcon onClick={(e) => {
                                    e.preventDefault();
                                    handleOnclick(4)
                                    setPointActive(historyLocations.historyLocations[0])
                                }}
                                style={{backgroundImage: `url(${mapIconTorva})`}}/>
                        </Marker>
                        
                </GLMap>
            </MapDiv>
            
            <OverlayWrapper>
                <Overlay visible={isOpen} onClick={handleOnclick}>
                    <StyledHeaderText>
                        {infoHeader}
                    </StyledHeaderText>
                    <div>
                        <AudioElement controls src={AudioFile} />
                    </div>
                    <ContentWrapper>
                        {infoText}
                    </ContentWrapper>
                </Overlay>
                <NavWrapper>
                    <Navigation/>
                </NavWrapper>
            </OverlayWrapper>   
        </PageWrapper>
          
    );
}

export default MapPageAdrian;