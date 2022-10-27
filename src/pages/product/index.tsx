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
import ProductsSlider from "../home/components/ProductsSlider/ProductsSlider";
import Title from "../../common/components/Title/Title";
import Paragraph from "../../common/components/Paragraph/Paragraph";
import Span from "../../common/components/Span/Span";
import Button from "../../common/components/FormElements/Buttons/Button";
import Quantity from "../../common/components/Quantity/Quantity";
import Share from "../../common/components/Share/Share";
import ColorPicker from "../../common/components/Pickers/ColorPicker";
import SquarePicker from "../../common/components/Pickers/SquarePicker";

const Product: NextPage = () => {
  const { products: productData, categories: categoriesData } = useAppSelector(
    (state) => state.products
  );
  const [products, setProducts] = useState([...productData]);
  const [selectCategory, setSelectCategory] = useState("chair");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("bg-primary");

  return (
    <>
      <Head
        title="Bamboo | Kitchen Chair "
        description="Ali Karagöz tarafından yapılmıştır."
      />

      <Container className="pt-[10.5rem] pb-[3rem] px-5">
        <div className="flex flex-col lg:flex-row gap-5 justify-center">
          <ImageSlider
            images={products}
            imageClass="w-[350px] h-[450px] sm:h-[600px] sm:w-[500px]"
            sliderClass="product-slider w-[350px] h-[450px] sm:h-[600px] sm:w-[500px]"
          />

          <div className="flex flex-col  gap-2 flex-[0.8]">
            <Title className="product-title">Sona Armless Chair</Title>
            <Span className="font-display  text-[2rem]">$400.00</Span>

            <Span className="">Available : In Stock</Span>

            <Paragraph className="text-[1.125rem] mb-[2.875rem] max-w-[30.125rem]">
              Versatile elegance for dining room, office or living room. This
              seating solution offers great appeal. Bamboo chairs combine
              premium quality materials with unique high-style design, with the
              advanced product engineering and packaging reinforcement, each
              product is designed, manufactured and packaged with shipping in
              mind.
            </Paragraph>

            <div className="flex gap-[10.3125rem]  ">
              <ColorPicker
                colors={[
                  { id: "1", color: "#78350F" },
                  { id: "2", color: "#404040" },
                  { id: "3", color: "#c4c4c4" },
                ]}
                textClass="uppercase font-bold text-secondary"
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                pickerName="COLORS"
              />
              <SquarePicker />
            </div>
            <div className="flex items-center mt-[7.5rem]">
              <Span className="uppercase font-bold text-2xl mr-[1.25rem]">
                QTY
              </Span>
              <Quantity
                quantity={quantity}
                setQuantity={setQuantity}
                className="mr-[1.5rem]"
              />
              <Button
                color="primary"
                className="uppercase text-2xl !flex justify-center items-center font-bold gap-1 tracking-[0.08em] w-full max-w-[20rem]">
                <HiShoppingCart size={24} />
                SHOP NOW
              </Button>
            </div>

            <Share className="flex gap-5 mt-5" />
          </div>
        </div>

        <div className="pt-20">
          <Title className="section-title">Related Product</Title>
          <ProductsSlider category={selectCategory} productList={products} />
        </div>
      </Container>
    </>
  );
};

export default Product;
