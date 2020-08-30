import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: 400px;
    width: 600px;
    box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.75);
    border-radius: 10px;
  `;

  return (
    <div>
      <Head>
        <title>Trivia App</title>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Card>
          <p style={{ fontSize: 44, fontFamily: "hack menlo inconsolata" }}>
            Trivia App
          </p>
        </Card>
      </div>
    </div>
  );
}
