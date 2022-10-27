import React from "react";
import Share from "../../Share/Share";
import FooterSubscribe from "./FooterSubscribe";

const FooterTop = () => {
  return (
    <div className="flex-col lg:flex-row gap-10 flex items-center justify-between">
      <FooterSubscribe />
      <div className="h-20 w-1 bg-white hidden lg:inline-block"></div>
      <Share text="JOIN US ON" className="flex gap-5 flex-1 justify-center" />
    </div>
  );
};

export default FooterTop;
