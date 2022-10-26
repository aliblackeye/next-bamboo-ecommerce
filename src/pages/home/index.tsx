// Hooks
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../features/hooks";

// Types
import type { NextPage } from "next";

// Components
import Image from "../../common/components/Image/Image";
import Head from "../../common/components/Head/Head";
import Slider from "../../common/components/Slider/ImageSlider";
import Products from "./components/Products/Products";
import Hero from "./components/Hero/Hero";
import Title from "../../common/components/Title/Title";
import Container from "../../common/components/Container/Container";

const Home: NextPage = () => {
  const {
    products: productData,
    hero,
    categories: categoriesData,
  } = useAppSelector((state) => state.products);
  const [products, setProducts] = useState([...productData]);
  const [heroImages, setHeroImages] = useState([...hero]);
  const [selectCategory, setSelectCategory] = useState("chair");
  const [categories, setCategories] = useState([...categoriesData]);

  return (
    <>
      <Head title="" description="Ali Karagöz tarafından yapılmıştır." />

      <Hero images={heroImages} />

      <Title className="section-title">Featured Products</Title>

      <Products productList={products} />

      <Container className="p-5">
        <Title className="section-title">Bamboo Products</Title>
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
          <Slider
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
            images={products.filter(
              (product) => product.category === selectCategory
            )}
            imageHeight="100%"
            imageWidth="100%"
            sliderClass="bamboo-products-slider py-10"
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
