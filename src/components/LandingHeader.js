import React from "react";
import styled from "styled-components";
import lines from "../media/images/header.png";

export default function LandingHeader() {
  const StyledHeader = styled.div`
    height: 240px;
    background-image: url(${lines});
    background-size: cover;
    font-family: "GameFont";
    font-size: 72px;
    color: ${props => props.theme.colors.blue};
    font-weight: 700;
    letter-spacing: 4px;
    line-height: 32px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledHeader>
      <span>Trivia-App</span>
    </StyledHeader>
  );
}
