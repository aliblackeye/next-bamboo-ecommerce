import React from "react";
import Logo from "../../../common/components/Logo/Logo";

const FooterBottom = () => {
  return (
    <div className="flex-col md:flex-row gap-10 border-t-2 mt-5 flex items-center justify-between p-20 text-center">
      <span className="flex-1">TERMS & CONDITION POLICY</span>
      <Logo height="99px" width="112px" src="/images/logo2.png" />
      <span className="flex-1">© 2022 Bamboo All Rights Reserved</span>
    </div>
  );
};

export default FooterBottom;
