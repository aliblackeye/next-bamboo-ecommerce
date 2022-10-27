import React from "react";
import ImageSlider from "../../../../common/components/Slider/ImageSlider";
import { ProductTypes } from "../../../../common/types/types";

interface ProductsSliderProps {
  productList: ProductTypes[];
  category: string;
}

const ProductsSlider = ({ productList, category }: ProductsSliderProps) => {
  return (
    <section className="mt-5">
      <ImageSlider
        images={productList.filter((product) => product.category === category)}
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        navigation={false}
        grabCursor={true}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        spaceBetween={40}
        sliderClass="bamboo-products-slider py-10"
      />
    </section>
  );
};

export default ProductsSlider;
