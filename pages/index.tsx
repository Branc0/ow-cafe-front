import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ow Cafe</title>
        <meta
          name="description"
          content="Ow! café ? Restaurant. ATENDEMOS: (SEG- TERÇA 11H-18H), (QUARTA A SEXTA 9H-18H) e (SÁBADOS 9H-16H.). "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </>
  );
}
