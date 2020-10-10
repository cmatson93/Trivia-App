import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const QuizCard = styled(motion.div)`
  border: 1px solid black;
  height: 300px;
  width: 200px;
  display: flex;
  margin: 20px;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  flex-direction: column;
`;
export default function Quiz({ author, title, key }) {
  return (
    <QuizCard
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
      initial={{ x: -800 }}
    >
      <span>{author}</span>
      <span>{title}</span>
    </QuizCard>
  );
}
