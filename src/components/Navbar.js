import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

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
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.slate};
  }
  a:hover {
    color: ${props => props.theme.colors.mint};
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <Logo />
      <StyledLinks>
        <Link to='/'>Home</Link>
        <Link to='/create'>Create</Link>
      </StyledLinks>
    </StyledNav>
  );
}
