// Hooks
import { useState } from "react";
import { useAppSelector } from "../../features/hooks";

// Types
import type { NextPage } from "next";

// Components
import Head from "../../common/components/Head/Head";
import Products from "./components/Products/Products";
import Hero from "./components/Hero/Hero";
import Title from "../../common/components/Title/Title";
import Container from "../../common/components/Container/Container";
import Categories from "./components/Categories/Categories";
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";

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
      <Head
        title="Bamboo | Home Page"
        description="Ali Karagöz tarafından yapılmıştır."
      />

      <Hero images={heroImages} />

      <Title className="section-title">Featured Products</Title>

      <Products productList={products} />

      <Container className="p-5">
        <Title className="section-title">Bamboo Products</Title>
        <Categories
          categories={categories}
          selected={selectCategory}
          setSelected={setSelectCategory}
        />
        <ProductsSlider category={selectCategory} productList={products} />
      </Container>
    </>
  );
};

export default Home;
