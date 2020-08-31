import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function Home() {
  const Card = styled.div`
    background: #eff1f3;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: 150px;
    width: 400px;
    box-shadow: 4px 4px 20px 0px rgba(255, 255, 255, 0.75);
    border-radius: 10px;
  `;

  return (
    <div>
      <Head>
        <title>Trivia App</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
    </div>
  );
}
