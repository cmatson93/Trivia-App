import React from "react";
import styled from "styled-components";
import LandingHeader from "../components/LandingHeader";

export default function Landing() {
  const LandingContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.colors.white};
  `;
  return (
    <LandingContainer>
      <LandingHeader />
      landing page
    </LandingContainer>
  );
}
