import React, { ReactElement } from "react";

import Footer from "../common/components/Footer/Footer";
import Header from "../common/components/Header/Header";
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
