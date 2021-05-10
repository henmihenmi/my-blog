import { Header } from "../components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <Header />
      <p>アバウトページです</p>
    </div>
  );
}