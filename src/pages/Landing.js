import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import GameplayPreview from "../components/GameplayPreview";
import Wrapper from "../components/PageWrapper";
import LandingText from "../components/LandingText";
import Button from "../components/Button";

const LandingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.colors.white};
`;
const MainContainer = styled(motion.div)`
  padding: 120px;
  height: 60vh;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 120px;
`;

export default function Landing({ location }) {
  console.log(location);

  return (
    <LandingContainer>
      <Wrapper>
        <Navbar />
        <MainContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <GameplayPreview />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LandingText>create your own games!</LandingText>
            <LandingText>share with your friends!</LandingText>
            <LandingText>browse other user's sets!</LandingText>
            <LandingText>search by topic or author!</LandingText>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItemns: "center",
              }}
            >
              <Button
                primary={props => props.theme.colors.blue}
                secondary={props => props.theme.colors.white}
                text='Sign Up'
              />
              <Button
                primary={props => props.theme.colors.orange}
                secondary={props => props.theme.colors.white}
                text='Login'
              />
            </div>
          </div>
        </MainContainer>
      </Wrapper>
    </LandingContainer>
  );
}
