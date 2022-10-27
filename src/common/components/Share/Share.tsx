import React from "react";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";

interface ShareProps {
  className?: string;
  text?: string;
}

const Share = ({ className, text = "SHARE" }: ShareProps) => {
  return (
    <div className={`${className}`}>
      <span className="font-bold text-[1.25rem]">{text}</span>
      <ul className="flex gap-1">
        <li>
          <a href="#">
            <MdOutlineFacebook
              className="text-facebook hover:scale-[1.1] transition-all"
              size={24}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillTwitterCircle
              className="text-twitter hover:scale-[1.1] transition-all"
              size={24}
            />
          </a>
        </li>
        <li className="bg-white rounded-full w-6 h-6 flex justify-center items-center hover:scale-[1.1] transition-all">
          <a href="#">
            <AiOutlineInstagram color="#333" size={21} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Share;
