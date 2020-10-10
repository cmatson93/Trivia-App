import React from "react";
import styled from "styled-components";
import LandingHeader from "../components/LandingHeader";
import GameplayPreview from "../components/GameplayPreview";
export default function Landing() {
  const LandingContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.colors.white};
  `;
  const MainContainer = styled.div`
    padding: 120px;
    display: flex;
    align-items: center;
  `;
  return (
    <LandingContainer>
      <LandingHeader />
      <MainContainer>
        <GameplayPreview />
      </MainContainer>
    </LandingContainer>
  );
}
