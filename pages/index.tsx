import type { NextPage } from "next";
import Head from "next/head";

import Home from "./home";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bamboo | Home Page</title>
        <meta
          name="description"
          content="Ali Karagöz tarafından oluşturuldu."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className="h-screen">
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
