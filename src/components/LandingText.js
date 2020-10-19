import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
`;
const Text = styled.span`
  letter-spacing: 0.2em;
  margin-left: 1em;
  color: ${props => props.theme.colors.black};
  font-family: "GameFont";
  font-weight: 700;
  text-transform: uppercase;
`;

export default function LandingText({ children }) {
  return (
    <Container>
      <FaAngleRight />
      <Text>{children}</Text>
    </Container>
  );
}
