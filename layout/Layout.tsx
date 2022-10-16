import React,{ReactElement} from "react";

import type { NextPage } from "next";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Layout = ({ children }:{children:ReactElement}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
