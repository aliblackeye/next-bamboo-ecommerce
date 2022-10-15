import Image from "next/image";

import {AiFillTwitterCircle,AiOutlineInstagram } from "react-icons/ai";
import {MdOutlineFacebook } from "react-icons/md";

const Logo = () => {
  return (
    <a href="#">
      <Image src="/images/logo2.png" alt="logo" width="112px" height="99px" />
    </a>
  );
};

export default function Footer() {
  return (
    <div className="bg-secondary px-[66px] py-[21px] ">
      <div className="container mx-auto text-white">
        <div className="flex-col lg:flex-row gap-10 flex items-center justify-between">
          <div className="sm:flex-col lg:flex-row flex flex-1 items-center py-5 md:py-0 justify-center gap-5">
            <span className="font-bold text-white">
              SUBSCRIBE TO OUR NEWSLETTER
            </span>
            <button className="btn">Enter Your E-mail Address Here →</button>
          </div>
          <div className="h-20 w-1 bg-white hidden lg:inline-block" >
            
          </div>
          <div className="flex gap-5 flex-1 justify-center">
            <span>JOIN US ON</span>
            <ul className="flex gap-5">
              <li><a href="#"><MdOutlineFacebook className="text-facebook" size={24}/></a></li>
              <li><a href="#"><AiFillTwitterCircle className="text-twitter" size={24}/></a></li>
              <li className="bg-white rounded-full w-6 h-6 flex justify-center items-center"><a href="#"><AiOutlineInstagram color="#333" size={21}/></a></li>
            </ul>
          </div>
        </div>
        <div className="flex-col md:flex-row gap-10 border-t-2 mt-5 flex items-center justify-between p-20 text-center">
          <span className="flex-1">TERMS & CONDITION POLICY</span>
          <Logo />
          <span className="flex-1">© 2019 Bamboo All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
