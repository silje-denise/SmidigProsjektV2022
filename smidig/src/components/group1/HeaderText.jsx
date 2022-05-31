import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    height: 80px;
    align-items: flex-end;
    margin-bottom: 10px;

`;

const HeaderText = () => {
    return (
        <StyledHeader>
           <h1>Spill</h1>
        </StyledHeader>
    )
}
export default HeaderText;