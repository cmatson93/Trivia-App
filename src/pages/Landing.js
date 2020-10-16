import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import GameplayPreview from "../components/GameplayPreview";
import Wrapper from "../components/PageWrapper";
import LandingText from "../components/LandingText";

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

export default function Landing({ location }) {
  console.log(location);

  return (
    <LandingContainer>
      <Wrapper>
        <Navbar />
        <MainContainer>
          <GameplayPreview />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <LandingText>create your own games!</LandingText>
            <LandingText>share with your friends!</LandingText>
            <LandingText>browse other user's sets!</LandingText>
            <LandingText>search by topic or author!</LandingText>
          </div>
        </MainContainer>
      </Wrapper>
    </LandingContainer>
  );
}
