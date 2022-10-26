import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { HiShoppingCart } from "react-icons/hi";

// import required modules
import { Navigation, Mousewheel, Scrollbar } from "swiper";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

const Product: NextPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "/images/p1.png",
      type: "chair",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "/images/p2.png",
      type: "chair",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "/images/p3.png",
      type: "cabinet",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "/images/p4.png",
      type: "sofa",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      image: "/images/p5.png",
      type: "sofa",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      image: "/images/p6.png",
      type: "cabinet",
    },
    {
      id: 7,
      name: "Product 7",
      price: 700,
      image: "/images/p7.png",
      type: "bench",
    },
    {
      id: 8,
      name: "Product 8",
      price: 800,
      image: "/images/p8.png",
      type: "bench",
    },
    {
      id: 9,
      name: "Product 9",
      price: 900,
      image: "/images/p9.png",
      type: "chair",
    },
    {
      id: 10,
      name: "Product 9",
      price: 900,
      image: "/images/p9.png",
      type: "chair",
    },

    {
      id: 11,
      name: "Product 5",
      price: 500,
      image: "/images/p5.png",
      type: "sofa",
    },
    {
      id: 12,
      name: "Product 3",
      price: 300,
      image: "/images/p3.png",
      type: "cabinet",
    },
    {
      id: 13,
      name: "Product 3",
      price: 300,
      image: "/images/p3.png",
      type: "cabinet",
    },
  ]);

  const [heroImages, setHeroImages] = useState([
    { id: 1, image: "/images/hero.jpg" },
    { id: 2, image: "/images/hero2.jpg" },
    { id: 3, image: "/images/hero3.jpg" },
  ]);

  const [selectCategory, setSelectCategory] = useState("chair");

  const [categories, setCategories] = useState([
    "chair",
    "cabinet",
    "sofa",
    "bench",
  ]);

  const [quantity, setQuantity] = useState(1);

  const quantityHandler = (id: string) => {
    id === "add" ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
  };

  return (
    <>
      <Head>
        <title>Bamboo | Product Page</title>
      </Head>

      <div className="container py-[12.5rem] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-5 justify-center">
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            modules={[Navigation, Mousewheel]}
            className="product-swiper w-[21.875rem] h-[28.6563rem] sm:h-[50rem] sm:w-[38.125rem]">
            <SwiperSlide>
              <div className="w-[21.875rem] h-[28.6563rem] sm:h-[50rem] sm:w-[38.125rem]">
                <img
                  src="/images/p1.png"
                  className="w-full h-full"
                  alt="product"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[21.875rem] h-[28.6563rem] sm:h-[50rem] sm:w-[38.125rem]">
                <img
                  src="/images/p3.png"
                  className="w-full h-full"
                  alt="product"
                />
              </div>
            </SwiperSlide>
          </Swiper>

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

      <div className="container mx-auto p-5">
        <div>
          <h1 className="mb-[3.375rem] text-[3rem] font-header text-center">
            Related Product
          </h1>
          <div className="mt-5">
            <Swiper
              slidesPerView={3}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              breakpoints={{
                769: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
              }}
              scrollbar={true}
              spaceBetween={40}
              modules={[Scrollbar]}
              className="bamboo-products-swiper py-10">
              {products
                .filter((product) => product.type === selectCategory)
                .map((p) => (
                  <SwiperSlide key={p.id}>
                    <img
                      src={p.image}
                      alt="product"
                      className="object-cover !w-full !h-full"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
