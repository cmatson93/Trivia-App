import Head from "next/head";
import styled from "styled-components";

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
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: "#43C6AC",
          background:
            "-webkit-linear-gradient(to top, #191654, #43C6AC)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to top, #191654, #43C6AC)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
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
