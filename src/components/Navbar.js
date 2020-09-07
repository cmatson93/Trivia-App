import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo";
import StyledLink from "./StyledLink";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.white};
  height: 80px;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-grow: 0.3;
  justify-content: space-evenly;
  align-items: center;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <Logo />
      <StyledLinks>
        <StyledLink target='/'>Home</StyledLink>
        <StyledLink target='/create'>Create</StyledLink>
      </StyledLinks>
    </StyledNav>
  );
}
