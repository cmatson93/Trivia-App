import React, { useEffect, useState } from "react";
import Wrapper from "../components/PageWrapper";
import Quizzes from "../components/Quizzes";
import Navbar from "../components/Navbar";
import api from "../utils/api";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Quizzes />
    </Wrapper>
  );
}
