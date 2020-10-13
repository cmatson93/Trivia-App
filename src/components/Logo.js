import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h1`
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
  font-family: "GameFont";
  margin-bottom: -25px;
`;
export default function Logo() {
  return (
    <Link to='/' style={{ textDecoration: "none" }}>
      <StyledLogo>Trivia-App</StyledLogo>
    </Link>
  );
}
