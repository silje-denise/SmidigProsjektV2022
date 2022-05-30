import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {React, useState} from "react";
import styled from "styled-components";
import map from "../images/Map.png";
import Navigation from "../components/group3/Navigation";
import AudioFile from "../audio/pannekaka.mp3";


const PageWrapper = styled("div")`
    background-color: lightblue;
    height: 100vh;
    width: 100vw;
    background-image: url(${map});
`;

const OverlayWrapper = styled("div")`
    height: 90vh;
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
`;

const ContentWrapper = styled("div")`
    padding: 30px;
    overflow:hidden;
`;

const NavWrapper = styled.div`
    position:absolute;
    bottom: 0px;
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
    border: 2px solid green;
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
    border: 2px solid green;
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
    border: 2px solid green;
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
    border: 2px solid green;
    border-radius: 10px;
    font-size: 23px;
    background-color:white; 
`;


const MapPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [infoText, setInfoText] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
    const [infoHeader, setInfoHeader] = useState("Byåa");

    const handleOnclick = (id)=>{
   
       if(!isOpen){
           setIsOpen(true);
           console.log(isOpen);
          
           if(id === 0){
              setInfoHeader("Byåa");
              setInfoText("Her finner du info om Byåa: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
              
           }else if(id === 1){
            setInfoHeader("Område 1");
            setInfoText(`Her finner du info om Område 1:  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.`);
           }else if(id === 2){
            setInfoHeader("Område 2");
            setInfoText("Her finner du info om Område 2: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
           }
           else if(id === 3){
            setInfoHeader("Område 3");
            setInfoText("Her finner du info om Område 3: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.");
           }
       }else{
           setIsOpen(false);
           console.log(isOpen);
       }
    }


    return(
            <>
            <PageWrapper>
            <ButtonWrapper>
                <HeaderButtonWrapper>
                    <StyledHeaderButton onClick={() => handleOnclick(0)}>
                        <h2>Byåa</h2>
                    </StyledHeaderButton>
                </HeaderButtonWrapper>
            </ButtonWrapper>
            <AreaWrapper>
                <Area1 onClick={() => handleOnclick(1)}>
                    <p>Område 1</p>
                    <FontAwesomeIcon icon={faLocationDot} size={'2x'} color={'green'}/>
                </Area1>
                <Area2 onClick={() => handleOnclick(2)}>
                    <p>Område 2</p>
                <FontAwesomeIcon icon={faLocationDot} size={'2x'} color={'green'}/></Area2>
                <Area3 onClick={() => handleOnclick(3)}>
                    <p>Område 3</p>
                <FontAwesomeIcon icon={faLocationDot} size={'2x'} color={'green'}/></Area3>
            </AreaWrapper>
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
        </>   
    );
}

export default MapPage;