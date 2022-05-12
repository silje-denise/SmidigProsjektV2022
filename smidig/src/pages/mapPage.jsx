import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {React, useState} from "react";
import styled from "styled-components";
import Map from "../components/Map";
import kart from "../images/kart2.png";


const PageWrapper = styled("div")`
    background-color: lightblue;
    height: 100vh;
    width: 100vw;
    background-image: url(${kart});
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
    background-color:rgb(239,241,242);
    border-radius: 50px 50px 0px 0px;
    height: 300px;
    width: 100vw;
    display:flex;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    align-items:center;
    //transform: translateY(500px);

`;

const StyledHeaderText = styled("h3")`
    font-size: 26px;

`;

const BackButton = styled("div")`
    background-color: rgba(255,255,255, 0.5);
    width: 30px;
    height: 30px;
    padding: 10px;
    border-radius: 50px;
    border: 2px gray solid;
    display:flex;
    justify-content:center;
`;

const AudioElement = styled("audio")`
`;
const ButtonWrapper = styled("div")`
    padding: 20px;
`;

const ContentWrapper = styled("div")`
    padding: 30px;
    overflow:hidden;
`;

const NavWrapper = styled("div")`
    position:absolute;
    bottom: 0px;
    //left: 10%;
    background-color:rgba(240,240,240, 0.8);
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 140px;
    backdrop-filter: blur(2px);
`;


const MapPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnclick = (e)=>{
        e.preventDefault();
        //e.target.height = "600px";
   
       if(!isOpen){
           setIsOpen(true);
           console.log(isOpen);
           e.target.style.height = "700px";
       }else{
           setIsOpen(false);
           console.log(isOpen);
           e.target.style.height = "300px";
       }
    }

    return(
        
            <PageWrapper>
            {/* <Map/> */}
                <ButtonWrapper>
                    <BackButton>
                        <FontAwesomeIcon icon={faChevronLeft} size={'2x'}/>
                    </BackButton>
                </ButtonWrapper>
                <OverlayWrapper>
                    <Overlay onClick={handleOnclick}>
                        <StyledHeaderText>Navn på sted</StyledHeaderText>
                        <div>
                            <AudioElement controls src=""/>
                        </div>
                        <ContentWrapper>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita repudiandae doloribus quam eos cum dignissimos ut, pariatur corporis facilis cumque cupiditate vitae, soluta asperiores enim quae officia eligendi, repellat et.
                        </ContentWrapper>
                    </Overlay><NavWrapper>
                    <div>Navigasjon</div>
                </NavWrapper>
                </OverlayWrapper>
                
        </PageWrapper>
        
    );
}


export default MapPage;