import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trivia App</title>
      </Head>
      <Navbar />
    </div>
  );
}
