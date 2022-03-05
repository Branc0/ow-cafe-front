import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ow Café</title>
        <meta
          name="description"
          content="Ow! café ? Restaurant. ATENDEMOS: (SEG- TERÇA 11H-18H), (QUARTA A SEXTA 9H-18H) e (SÁBADOS 9H-16H.). "
        />
      </Head>
      <main>
        <section className="lg:h-screen bg-zinc-900">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8 sm:text-center lg:text-left">
            {/* left side */}
            <div className="pt-40  sm:px-6 lg:px-0 md:pt-40 lg:pt-40 pb-20 lg:pb-0 xl:pt-64 2xl:pt-80">
              <h2 className="text-4xl tracking-tight font-semibold text-white sm:text-5xl md:text-6xl">
                Café não é amargo
              </h2>
              <p className="mt-3 font-medium text-base text-zinc-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Redescubra o café, sabores e aromas exclusivos feitos com
                dedicação e paixão por quem realmente entende.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="cafes">
                    <a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-zinc-900 bg-yellow-500 hover:bg-yellow-700 md:text-lg md:px-10">
                      Cafés
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="gastronomia">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-zinc-900 bg-yellow-100 hover:bg-indigo-200 md:text-lg md:px-10"
                    >
                      Gastronomia
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* right side */}
            <div></div>
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}
