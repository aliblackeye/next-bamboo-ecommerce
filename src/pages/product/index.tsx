/* eslint-disable @next/next/no-img-element */

// Packages
import type { NextPage } from "next";
import { useState } from "react";

// Icons
import { HiShoppingCart } from "react-icons/hi";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";

// import required modules
import Head from "../../common/components/Head/Head";
import { useAppDispatch, useAppSelector } from "../../features/hooks";

import Container from "../../common/components/Container/Container";
import ImageSlider from "../../common/components/Slider/ImageSlider";

const Product: NextPage = () => {
  const {
    products: productData,
    hero,
    categories: categoriesData,
  } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState([...productData]);
  const [heroImages, setHeroImages] = useState([...hero]);
  const [selectCategory, setSelectCategory] = useState("chair");
  const [categories, setCategories] = useState([...categoriesData]);
  const [quantity, setQuantity] = useState(1);

  const quantityHandler = (id: string) => {
    id === "add" ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
  };

  return (
    <>
      <Head title="" description="Ali Karagöz tarafından yapılmıştır." />

      <div className="container py-[12.5rem] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-5 justify-center">
          <ImageSlider
            images={products}
            imageClass="w-[21.875rem] h-[28.6563rem] sm:h-[50rem] sm:w-[38.125rem]"
          />
          {/* className="product-swiper w-[21.875rem] h-[28.6563rem] sm:h-[50rem] sm:w-[38.125rem]" */}

          <div className="flex flex-col items-center flex-[0.8]">
            <div>
              <h1 className="text-[2.625rem] font-header font-bold">
                Sona Armless Chair
              </h1>
              <span className="font-display text-[2rem]">$400.00</span>
              <span className="mb-[1.4375rem]">Available : In Stock</span>

              <p className="text-[1.125rem] mb-[2.875rem] max-w-[30.125rem]">
                Versatile elegance for dining room, office or living room. This
                seating solution offers great appeal. Bamboo chairs combine
                premium quality materials with unique high-style design, with
                the advanced product engineering and packaging reinforcement,
                each product is designed, manufactured and packaged with
                shipping in mind.
              </p>

              {/* Pickers */}
              <div className="flex gap-[10.3125rem]">
                <div className="select-color">
                  <span className="uppercase font-bold text-secondary">
                    Color
                  </span>
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

                <div className="select-size">
                  <span className="uppercase font-bold text-secondary">
                    Size
                  </span>
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
                  <button
                    onClick={(e) =>
                      quantity > 1 && quantityHandler(e.currentTarget.id)
                    }
                    id="subtract">
                    -
                  </button>
                  <span>{String(quantity).padStart(2, "0")}</span>
                  <button
                    onClick={(e) =>
                      quantity < 99 && quantityHandler(e.currentTarget.id)
                    }
                    id="add">
                    +
                  </button>
                </div>

                <button className="btn btn-primary uppercas text-2xl !flex justify-center items-center font-bold gap-1 tracking-[0.08em] w-full max-w-[20rem]">
                  <HiShoppingCart size={24} />
                  SHOP NOW
                </button>
              </div>

              <div className="flex gap-5  items-center  mt-[4.375rem]">
                <span className="font-bold text-[1.25rem]">SHARE</span>
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
            </div>
          </div>
        </div>
      </div>

      <Container className="p-5">
        <div>
          <h1 className="mb-[3.375rem] text-[3rem] font-header text-center">
            Related Product
          </h1>
          <div className="mt-5">
            <ImageSlider
              images={products.filter(
                (product) => product.category === selectCategory
              )}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;
