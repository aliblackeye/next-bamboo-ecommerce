import React, { ReactElement } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
