import type { NextPage } from "next";
import Head from "next/head";
import { MouseEvent, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { HiShoppingCart } from "react-icons/hi";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

const Product: NextPage = () => {
  const [quantity, setQuantity] = useState(1);

  const quantityHandler = (id:string) => {
    id === "add"
      ? setQuantity(quantity + 1)
      : setQuantity(quantity - 1);
  };

  return (
    <>
      <Head>
        <title>Bamboo | Product Page</title>
      </Head>

      <div className="container flex">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="product-swiper">
          <SwiperSlide>
            <img src="/images/p1.png" alt="product" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/p1.png" alt="product" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/p1.png" alt="product" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/p1.png" alt="product" />
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col">
          <h1 className="text-[2.625rem] font-header font-bold">
            Sona Armless Chair
          </h1>
          <span className="font-display text-[2rem]">$400.00</span>
          <span className="mb-[1.4375rem]">Available : In Stock</span>

          <p className="text-[1.125rem] mb-[2.875rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut
            similique veritatis nemo aliquid voluptates blanditiis cumque vero
            porro dolores.
          </p>

          <div className="flex justify-between">
            <div>
              <span className="uppercase font-bold text-secondary">Color</span>
              <ul className="flex gap-[.375rem]">
                <li className="border-2 border-black rounded-full p-[0.125rem] cursor-pointer">
                  <div className="w-[1.25rem] h-[1.25rem] rounded-full bg-amber-900"></div>
                </li>
                <li className="border-2 border-transparent rounded-full p-[0.125rem] cursor-pointer">
                  <div className="w-[1.25rem] h-[1.25rem] rounded-full bg-[#404040]"></div>
                </li>
                <li className="border-2 border-transparent rounded-full p-[0.125rem] cursor-pointer">
                  <div className="w-[1.25rem] h-[1.25rem] rounded-full bg-[#C4C4C4]"></div>
                </li>
              </ul>
            </div>

            <div>
              <span className="uppercase font-bold text-secondary">Size</span>
              <ul className="flex gap-[0.9375rem]">
                <li className="w-[24px] h-[24px] rounded-sm bg-[#E8E8E8] hover:bg-[#c7c7c7] flex justify-center items-center text-[0.625rem] cursor-pointer">
                  XL
                </li>
                <li className="w-[24px] h-[24px] rounded-sm bg-primary hover:bg-[#c7c7c7] flex justify-center items-center text-[0.625rem] cursor-pointer">
                  S
                </li>
                <li className="w-[24px] h-[24px] rounded-sm bg-[#E8E8E8] hover:bg-[#c7c7c7] flex justify-center items-center text-[0.625rem] cursor-pointer">
                  M
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center mt-[7.5rem]">
            <span className="uppercase font-bold text-2xl mr-[1.25rem]">
              QTY
            </span>
            <div className="flex items-center gap-1 text-[1.125rem] rounded-[1.875rem] border-2 py-[0.75rem] w-[6rem] mr-[1.5rem] justify-center">
              <button onClick={(e) => quantity > 1 && quantityHandler(e.currentTarget.id)} id="subtract">
                -
              </button>
              <span>{String(quantity).padStart(2, "0")}</span>
              <button onClick={(e) => quantity < 99 && quantityHandler(e.currentTarget.id)} id="add">
                +
              </button>
            </div>

            <button className="btn btn-primary uppercase font-bold gap-1"><HiShoppingCart/> SHOP NOW</button>
          </div>

          <div className="flex gap-5  items-center  mt-[4.375rem]">
            <span className="font-bold text-[1.25rem]">SHARE</span>
            <ul className="flex gap-1">
              <li><a href="#"><MdOutlineFacebook className="text-facebook hover:scale-[1.1] transition-all" size={24}/></a></li>
              <li><a href="#"><AiFillTwitterCircle className="text-twitter hover:scale-[1.1] transition-all" size={24}/></a></li>
              <li className="bg-white rounded-full w-6 h-6 flex justify-center items-center hover:scale-[1.1] transition-all"><a href="#"><AiOutlineInstagram color="#333" size={21}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
