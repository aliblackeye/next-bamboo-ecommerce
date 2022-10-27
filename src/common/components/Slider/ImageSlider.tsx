// Packages
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import * as S from "swiper";

//Types

interface SliderProps {
  images: { id: number; image: string }[];
  parallax?: "none" | "light" | "dark";
  imageWidth?: string;
  imageHeight?: string;
  sliderClass?: string;
  imageClass?: string;
  navigation?: boolean;
  pagination?: boolean;
  mousewheel?: boolean;
  autoplay?: {
    delay: number;
    pauseOnMouseEnter: boolean;
    disableOnInteraction: boolean;
  };
  keyboard?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  slidesPerGroupSkip?: number;
  centeredSlides?: boolean;
  breakpoints?: {
    [key: string]: { slidesPerView: number; slidesPerGroup: number };
  };
  scrollbar?: boolean;
  grabCursor?: boolean;
}

import Image from "../Image/Image";

/**
 * Slider oluşturmak için bu componenti kullanın.
 *
 * @example
 * // Örnek kullanım
 * <Slider src="/images/photo.png" width="100%" height="100vh"/>
 * @param {string} images - Slider içerisinde gösterilecek resimlerin dizisi
 * @param {string} parallax - Parallax efekti için kullanılır. Varsayılan değer "none"
 * @param {string} imageWidth - Resimlerin genişliği
 * @param {string} imageHeight - Resimlerin yüksekliği
 * @param {string} imageClass - Resimlerin ekstra class'ını belirtir.
 * @param {string} sliderClass - Sliderın ekstra class'ını belirtir.
 */

const ImageSlider = ({
  images,
  parallax = "none",
  imageWidth = "100%",
  imageHeight = "100%",
  sliderClass,
  imageClass,
  slidesPerView,
  spaceBetween,
  centeredSlides,
  breakpoints,
  scrollbar,
  slidesPerGroupSkip,
  grabCursor,
  pagination = false,
  keyboard,
  navigation = true,
  mousewheel,
  autoplay,
}: SliderProps) => {
  let parallaxEffect: string;
  switch (parallax) {
    case "none":
      parallaxEffect = "brightness-100";
      break;
    case "light":
      parallaxEffect = "brightness-75";
      break;
    case "dark":
      parallaxEffect = "brightness-50";
  }

  return (
    <Swiper
      modules={[
        S.Navigation,
        S.Pagination,
        S.Scrollbar,
        S.Autoplay,
        S.FreeMode,
        S.Grid,
        S.Manipulation,
        S.Parallax,
        S.Lazy,
        S.EffectFade,
        S.EffectCube,
        S.EffectFlip,
        S.EffectCoverflow,
        S.Thumbs,
        S.Virtual,
        S.HashNavigation,
        S.History,
        S.Keyboard,
        S.Mousewheel,
        S.A11y,
        S.Controller,
        S.Zoom,
        S.EffectCreative,
        S.EffectCards,
      ]}
      cssMode={true}
      navigation={navigation}
      mousewheel={mousewheel}
      pagination={pagination && { clickable: true }}
      autoplay={autoplay}
      keyboard={keyboard}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      breakpoints={breakpoints}
      scrollbar={scrollbar}
      slidesPerGroupSkip={slidesPerGroupSkip}
      grabCursor={grabCursor}
      className={sliderClass}>
      {images.map((i) => (
        <SwiperSlide key={i.id}>
          <Image
            src={i.image}
            height={imageHeight}
            width={imageWidth}
            className={`${imageClass} ${parallaxEffect}`}
            objectFit="cover"
            alt="hero"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
