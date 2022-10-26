// Packages
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import * as S from "swiper";

//Types
import { SliderProps } from "../../props/props";
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
  parallax = "light",
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
      cssMode={true}
      navigation={true}
      mousewheel={true}
      pagination={pagination ? { clickable: true } : false}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      keyboard={true}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      breakpoints={breakpoints}
      scrollbar={scrollbar}
      slidesPerGroupSkip={slidesPerGroupSkip}
      grabCursor={grabCursor}
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
      ]}
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
