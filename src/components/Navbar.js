import React from "react";
import styled from "styled-components";
import Underline from "../components/SvgHeaderUnderline";
import Logo from "../components/Logo";
import StyledLink from "./StyledLink";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-grow: 0.3;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: ${props => props.theme.colors.red};
    font-family: "GameFont";
  }
`;

const StyledButtons = styled.div`
  width: 300px;
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledButtons>Buttons</StyledButtons>
      <CenterSection>
        <Logo />
        <Underline />
      </CenterSection>
      <StyledLinks>
        <StyledLink target='/'>Home</StyledLink>
        <StyledLink target='/create'>Create</StyledLink>
        <StyledLink target='/landing'>Landing</StyledLink>
      </StyledLinks>
    </StyledNav>
  );
}
