import React from "react";
import styled from "styled-components";

const QuizCard = styled.div`
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
    <QuizCard>
      <span>{author}</span>
      <span>{title}</span>
    </QuizCard>
  );
}
