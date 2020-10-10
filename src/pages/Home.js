import React from "react";
import Wrapper from "../components/PageWrapper";
import Quizzes from "../components/Quizzes";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Quizzes />
    </Wrapper>
  );
}
