import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Quiz from "../components/Quiz";
import styled from "styled-components";

const QuizzesContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 85vw;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuizzes();
    getQuestions();
    return () => {
      //cleanup
    };
  }, []);

  const getQuizzes = () => {
    api
      .getAll()
      .then(res => {
        console.log("Quizzes: ", res);
        setQuizzes(res);
      })
      .catch(error => console.log("API Error: ", error));
  };
  const getQuestions = () => {
    api
      .getAllQuestions()
      .then(res => {
        console.log("Questions: ", res);
        setQuestions(res);
      })
      .catch(error => console.log("API Error: ", error));
  };

  return (
    <QuizzesContainer>
      {quizzes.map(quiz => (
        <Quiz
          key={quiz.data.title}
          author={quiz.data.author}
          title={quiz.data.title}
        />
      ))}
    </QuizzesContainer>
  );
}
