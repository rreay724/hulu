import Head from "next/head";
import { Header, Navbar } from "../components/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
    </div>
  );
}
