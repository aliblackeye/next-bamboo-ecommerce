import React from "react";

// Components
import Button from "../../../../common/components/FormElements/Buttons/Button";
import Paragraph from "../../../../common/components/Paragraph/Paragraph";
import ImageSlider from "../../../../common/components/Slider/ImageSlider";
import Span from "../../../../common/components/Span/Span";
import Title from "../../../../common/components/Title/Title";

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
        parallax="dark"
        imageWidth="100%"
        sliderClass="featured-products-slider"
      />
      <div className="text-white flex flex-col items-center absolute top-1/4 left-1/2 -translate-x-1/2 z-40 text-center">
        <Span className="tracking-[3px] mb-[30px] font-bold text-[16px] md:text-[24px]">
          INDOORS
        </Span>
        <Title className="font-header text-[30px] mb-1 md:text-[38px] leading-[63px] md:mb-2">
          See Bamboo&#39;s New Range Of Indoor Furniture
        </Title>

        <Paragraph className="paragraph">
          Classic meet modern living, Bamboo has a fantastic range of indoor
          furniture, perfect for any modern home.
        </Paragraph>
        <Button color="primary" className="mt-8 !md:text-[18px] w-[188px]" href="/product">
          See More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
