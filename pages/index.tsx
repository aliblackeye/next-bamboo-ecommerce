import type { NextPage } from "next";
import Head from "next/head";

import Home from "./home";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Index: NextPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
