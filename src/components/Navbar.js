import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo";
import StyledLink from "./StyledLink";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid ${props => props.theme.colors.red};
`;

const StyledLinks = styled.div`
  display: flex;
  flex-grow: 0.3;
  justify-content: space-evenly;
  align-items: center;
  a {
    color: ${props => props.theme.colors.black};
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <Logo />
      <StyledLinks>
        <StyledLink target='/'>Home</StyledLink>
        <StyledLink target='/create'>Create</StyledLink>
        <StyledLink target='/landing'>Landing</StyledLink>
      </StyledLinks>
    </StyledNav>
  );
}
