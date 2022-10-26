type ObjectFitTypes = "fill" | "contain" | "cover" | "none" | "scale-down";
type ColorTypes =
  | "primary"
  | "secondary"
  | "dark"
  | "light"
  | "white"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "transparent";

type ProductTypes = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

interface ImageProps {
  src: string;
  width?: string;
  height?: string;
  objectFit?: ObjectFitTypes;
  alt?: string;
  className?: string;
  imageClass?: string;
}

interface LogoProps extends ImageProps {
  href?: string;
}

interface IconButtonProps {
  children: any;
  img?: { src: string; width: string; height: string };
  imgFit?: ObjectFitTypes;
  imgStyle?: string;
  className?: string;
  onClick?: () => void;
}

interface MenuLinkProps {
  children?: any;
  className?: string;
  href: string;
  justify?: "between" | "start" | "end";
}

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

interface ButtonProps {
  children: any;
  color: ColorTypes;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
  id?: string;
}

interface TitleProps {
  children: string;
  className?: string;
}

interface ProductListProps {
  productList: ProductTypes[];
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export type {
  ImageProps,
  LogoProps,
  IconButtonProps,
  ColorTypes,
  MenuLinkProps,
  SliderProps,
  ButtonProps,
  TitleProps,
  ProductListProps,
  ProductTypes,
  ContainerProps
};
