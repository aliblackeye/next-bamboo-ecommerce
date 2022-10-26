type ObjectFitTypes = "fill" | "contain" | "cover" | "none" | "scale-down";
type ColorTypes = "primary" | "secondary" | "dark" | "light" | "white" | "danger" | "success" | "warning" | "info" | "transparent";

interface ImageProps {
  src: string;
  width: string;
  height: string;
  objectFit?: ObjectFitTypes;
  alt?: string;
  className?: string;
}

interface LogoProps extends ImageProps {
  href?: string;
}

interface IconButtonProps {
  children: any;
  img?: {src:string,width:string,height:string};
  imgFit?: ObjectFitTypes;
  imgStyle?:string;
  className?: string;
  onClick?: () => void;
  
}

interface MenuLinkProps {
  children?: any;
  className?: string;
  href: string;
  justify?: "between" | "start" | "end";
}



export type { ImageProps, LogoProps,IconButtonProps,ColorTypes,MenuLinkProps };
