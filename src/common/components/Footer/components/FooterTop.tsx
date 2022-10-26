import React from "react";
import FooterSocial from "./FooterSocial";
import FooterSubscribe from "./FooterSubscribe";

const FooterTop = () => {
  return (
    <div className="flex-col lg:flex-row gap-10 flex items-center justify-between">
      <FooterSubscribe />
      <div className="h-20 w-1 bg-white hidden lg:inline-block"></div>
      <FooterSocial />
    </div>
  );
};

export default FooterTop;
