import React from "react";
import styled from "styled-components";

const StyledBadges = styled.div`
    align-content: center;
    margin-top: 4rem;
    text-align: center;
`;

const Badges = () => {
    return(
        <>
            <StyledBadges>
                <p> 
                    Mine Badges 
                </p>
            </StyledBadges>
        </>
    );
}



export default Badges