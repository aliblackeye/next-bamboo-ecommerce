import React from "react";
import Button from "../../../../common/components/FormElements/Buttons/Button";
import ImageSlider from "../../../../common/components/Slider/ImageSlider";

interface HeroProps {
  images: { id: number; image: string }[];
}

const Hero = ({ images }: HeroProps) => {
  return (
    <section>
      <ImageSlider
        images={images}
        imageHeight="100vh"
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        imageWidth="100%"
        sliderClass="featured-products-slider"
      />
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
        <Button color="primary" className="mt-8 !md:text-[18px] w-[188px]">
          See More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
