import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {React, useState} from "react";
import styled from "styled-components";
import map from "../images/Map.png";
import { Link } from "react-router-dom";


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
    background-color:rgb(239,241,242);
    border-radius: 50px 50px 0px 0px;
    height: 300px;
    width: 100vw;
    display:flex;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    align-items:center;
    z-index:90;
    //transform: translateY(500px);

`;

const StyledHeaderText = styled("h3")`
    font-size: 26px;
    padding: 15px;

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
    z-index:100;
    background-color:rgba(240,240,240, 0.8);
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 140px;
    backdrop-filter: blur(2px);
`;

const AreaWrapper = styled("div")`
    background-color: red;
    width: 90%;
    height: 50%;
    margin:auto;
    position: relative;
`;

const Area1 = styled("button")`
    background-color: blue;
    width:100px;
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
    background-color: green;
    width: 70px;
    height:50px;
    z-index:50;
`;
const Area3 = styled("button")`
    position:absolute;
    bottom: 30px;
    left: 40px;
    width: 70px;
    height:50px;
    background-color: pink;
    z-index:50;
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

    function mapClick() {
       console.log("clicked");
      
    }

    return(
        
            <PageWrapper>
            {/* <Map/> */}

                <ButtonWrapper>
                    <BackButton>
                        <Link to={"/overview"}>
                             <FontAwesomeIcon icon={faChevronLeft} size={'2x'}/>
                        </Link>
                    </BackButton>
                </ButtonWrapper>
                <AreaWrapper>
                    <Area1 onClick={mapClick}>Område 1</Area1>
                    <Area2 onClick={mapClick}>Område 2</Area2>
                    <Area3 onClick={mapClick}>Område 3</Area3>
                </AreaWrapper>
               
                <OverlayWrapper>
                    <Overlay onClick={handleOnclick}>
                        <StyledHeaderText>Byåa</StyledHeaderText>
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