import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector, useAppDispatch } from "../../features/hooks";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  Scrollbar,
} from "swiper";
import { useState } from "react";
import Image from "../../common/components/Image/Image";
import Head from "../../common/components/Head/Head";

const Home: NextPage = () => {
  // The `state` arg is correctly typed as `RootState` already
  const { products: productData, hero, categories:categoriesData } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState([...productData]);
  const [heroImages, setHeroImages] = useState([...hero]);
  const [selectCategory, setSelectCategory] = useState("chair");
  const [categories, setCategories] = useState([
    ...categoriesData
  ]);

  return (
    <>

    <Head title="" description="Ali Karagöz tarafından yapılmıştır." />

      <section>
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
          className="featured-products-swiper">
          {heroImages.map((heroImage) => (
            <SwiperSlide key={heroImage.id}>
              <Image
                src={heroImage.image}
                height="100vh"
                width="100vw"
                objectFit="cover"
                alt="hero"
              />
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
          <p className="mt-4 hidden text-[18px] md:inline-block md:text-[24px]">
            Classic meet modern living, Bamboo has a fantastic range of indoor
            furniture, perfect for any modern home.
          </p>
          <button className="btn btn-primary px-8 py-3 rounded-md mt-8 md:text-[18px] w-[188px]">
            See More
          </button>
        </div>
      </section>
      <h1 className="text-xl sm:text-[34px] md:text-5xl text-center font-bold mt-5 font-header">
        Featured Products
      </h1>
      <div className="p-5 container mx-auto">
        <div className="grid grid-cols-3 gap-5 justify-items-center ">
          {products
            .map((product) => (
              <a
                href="#"
                className="featured-product relative max-h-[510px] max-w-[396px] transition ease-out hover:border-primary rounded-[10px] hover:border-4 hover:-translate-y-3 drop-shadow-xl duration-200 "
                key={product.id}>
                <img
                  src={product.image}
                  alt="product"
                  className="!w-full !h-full object-cover"
                />
                <div className="featured-product-price absolute flex items-end justify-center py-4 opacity-0 transition-all bottom-0 left-0 font-display text-white text-2xl w-full h-1/4 bg-gradient-to-t from-black to-transparent">
                  <span>${product.price}</span>
                </div>
              </a>
            ))
            .slice(0, 12)}
        </div>
      </div>

      <div className="container p-5 mx-auto">
        <h1 className="text-center text-[36px] font-header font-bold">
          Bamboo Products
        </h1>
        <ul className="flex gap-[3rem] justify-center items-center uppercase mt-[30px] text-xl">
          {categories.map((category, i) => (
            <li
              key={i}
              className={`cursor-pointer border-b-transparent border-b-4 ${
                selectCategory === category && "!border-b-primary !border-b-4"
              }`}
              onClick={() => setSelectCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
        <div className="gap-5 mt-5">
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
                  <div className="">
                    <img
                      src={p.image}
                      alt="product"
                      className="object-cover !w-full !h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
