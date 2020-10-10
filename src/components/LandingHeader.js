import React from "react";
import styled from "styled-components";
import lines from "../media/images/header.png";
import { motion } from "framer-motion";

export default function LandingHeader() {
  const StyledHeader = styled.div`
    height: 240px;
    background-image: url(${lines});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const AnimatedTitle = styled(motion.h1)`
    font-family: "GameFont";
    color: ${props => props.theme.colors.blue};
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: center;
    position: absolute;
    width: 100%;
  `;

  return (
    <StyledHeader>
      <AnimatedTitle
        animate={{ x: -20, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 20 }}
        initial={{ y: -600 }}
      >
        Trivia-App
      </AnimatedTitle>
    </StyledHeader>
  );
}
