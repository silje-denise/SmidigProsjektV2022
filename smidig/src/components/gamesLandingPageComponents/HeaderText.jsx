import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
display: flex;
 height: 80px;
 align-items: flex-end;
 margin-bottom: 10px;

`;
const StyledH1 = styled.h1`
font-size: 2rem ;
`;
const HeaderText = () => {
    return (
        <StyledHeader>
           <StyledH1>Spill</StyledH1>
        </StyledHeader>
    )
}
export default HeaderText;