import React from "react";
import styled from "styled-components";
import Handyman from "../../images/Handyman.png"
import Hiker from "../../images/Hiker.jpg"
import Smile from "../../images/Smile.png"
import Knowledge from "../../images/Knowledge.png"

const StyledBadgeMainDiv = styled.div`
    position: fixed;
    top: 18rem;
    width: 100%;
    height: 5rem;
`;

const StyledMyBadgesText = styled.h3`
    position: fixed;
    top: 19rem;
    left: 1.75rem;
`;

const StyledBadgesDiv = styled.div`
    width: 100%;
    height: 10rem;
    position: fixed;
    top: 20rem;
    left: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StyledBadges = styled.div`
    height: 4rem;
    width: 4rem;
    background-color: rgba(103,179,70, 0.8);
    border-radius: 50%;
    margin: 2rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledBadgeImage = styled.img`
    height: 2rem;
    width: 2rem;
`;

const Badges = () => {
    return(
        <>
            <StyledBadgeMainDiv>
                <StyledMyBadgesText>
                     Mine Badges 
                </StyledMyBadgesText>

                <StyledBadgesDiv>
                    <div>
                        <StyledBadges>
                            <StyledBadgeImage src={Handyman} alt="Handyman badge"/>
                        </StyledBadges>
                    </div>
                    <div>
                        <StyledBadges>
                            <StyledBadgeImage src={Hiker} alt="Hiker badge"/>
                        </StyledBadges>
                    </div>
                    <div>
                        <StyledBadges>
                            <StyledBadgeImage src={Smile} alt="Smiley badge"/>
                        </StyledBadges>
                    </div>
                    <div>
                        <StyledBadges>
                            <StyledBadgeImage src={Knowledge} alt="Knowledge badge"/>
                        </StyledBadges>
                    </div>
                </StyledBadgesDiv>

            </StyledBadgeMainDiv>
        </>
    );
}



export default Badges