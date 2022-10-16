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

  return (
    <>
      <Head>
        <title>Bamboo | Home Page</title>
        <meta
          name="description"
          content="Ali Karagöz tarafından oluşturuldu."
        />
      </Head>

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
        <SwiperSlide>
          <div className="h-[728px] w-screen">
            <img
              src="/images/hero.png"
              className="!w-full !h-full object-cover"
              alt="hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[728px] w-screen">
            <img
              src="/images/hero2.jpg"
              className="!w-full !h-full object-cover"
              alt="hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[728px] w-screen">
            <img
              src="/images/hero3.jpg"
              className="!w-full !h-full object-cover"

              alt="hero"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[728px] w-screen">
            <img
              src="/images/hero4.jpg"
              className="!w-full !h-full object-cover"

              alt="hero"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-5xl text-center font-bold mt-5">Featured Products</h1>
      <div className="p-5 container mx-auto">
        <div className="grid grid-cols-3 gap-3 justify-items-center ">
          {products.map((product, i) => (
            <div className="relative max-h-[510px] max-w-[396px]" key={i}>
              <img
                src={product.image}
                alt="product"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
