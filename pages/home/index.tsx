import type { NextPage } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, image: "/images/p1.png" },
    { id: 2, name: "Product 2", price: 200, image: "/images/p2.png" },
    { id: 3, name: "Product 3", price: 300, image: "/images/p3.png" },
    { id: 4, name: "Product 4", price: 400, image: "/images/p4.png" },
    { id: 5, name: "Product 5", price: 500, image: "/images/p5.png" },
    { id: 6, name: "Product 6", price: 600, image: "/images/p6.png" },
    { id: 7, name: "Product 7", price: 700, image: "/images/p7.png" },
    { id: 8, name: "Product 8", price: 800, image: "/images/p8.png" },
    { id: 9, name: "Product 9", price: 900, image: "/images/p9.png" },
  ]);

  const [heroImages, setHeroImages] = useState([
    { id: 1, image: "/images/hero.jpg" },
    { id: 2, image: "/images/hero2.jpg" },
    { id: 3, image: "/images/hero3.jpg" },
  ]);

  return (
    <>
      <Head>
        <title>Bamboo | Home Page</title>
        <meta
          name="description"
          content="Ali Karagöz tarafından oluşturuldu."
        />
      </Head>

      <div className="relative">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper">
          {heroImages.map((heroImage) => (
            <SwiperSlide key={heroImage.id}>
              <div className="h-[728px] w-screen">
                <img
                  src={heroImage.image}
                  className="!w-full !h-full object-cover"
                  alt="hero"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-white flex flex-col items-center absolute top-1/4 left-1/2 -translate-x-1/2 z-40 text-center">
          <span className="tracking-[3px] mb-[30px] font-bold text-[16px] md:text-[24px]">
            INDOORS
          </span>
          <h1 className="font-header text-[30px] mb-1 md:text-[38px] leading-[63px] md:mb-2">
            See Bamboo&#39;s New Range Of Indoor Furniture
          </h1>
          <p className="mt-4 hidden text-[18px] sm:inline-block md:text-[24px]">
            Classic meet modern living, Bamboo has a fantastic range of indoor
            furniture, perfect for any modern home.
          </p>
          <button className="btn btn-primary px-8 py-3 rounded-md mt-8 md:text-[18px] w-[188px]">
            See More
          </button>
        </div>
      </div>

      <h1 className="text-xl sm:text-[34px] md:text-5xl text-center font-bold mt-5 font-header">
        Featured Products
      </h1>
      <div className="p-5 container mx-auto">
        <div className="grid grid-cols-3 gap-5 justify-items-center ">
          {products.map((product) => (
            <a
              href="#"
              className="featured-product relative max-h-[510px] max-w-[396px] transition ease-out hover:border-primary rounded-[10px] hover:border-4 hover:-translate-y-3 drop-shadow-xl duration-200"
              key={product.id}>
              <img
                src={product.image}
                alt="product"
                className="!w-full !h-full object-cover"
              />
              <div className="featured-product-price absolute flex items-end justify-center py-4 opacity-0 transition-all bottom-0 left-0 font-display text-white text-2xl w-full h-1/4 bg-gradient-to-t from-black to-transparent"><span>$400.00</span></div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
