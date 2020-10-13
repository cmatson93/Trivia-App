import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import GameplayPreview from "../components/GameplayPreview";
import Wrapper from "../components/PageWrapper";
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
      <Wrapper>
        <Navbar />
        <MainContainer>
          <GameplayPreview />
        </MainContainer>
      </Wrapper>
    </LandingContainer>
  );
}
