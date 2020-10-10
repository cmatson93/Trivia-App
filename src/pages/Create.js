import React from "react";
import StyledButton from "../components/Button";
import Wrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";

export default function Create() {
  return (
    <Wrapper>
      <Navbar />
      <StyledButton>Create Game</StyledButton>
    </Wrapper>
  );
}
