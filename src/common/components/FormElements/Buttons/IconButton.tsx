import { ObjectFitTypes } from "../../../types/types";
import Image from "../../Image/Image";

interface IconButtonProps {
  children: React.ReactNode;
  img?: { src: string; width: string; height: string };
  imgFit?: ObjectFitTypes;
  imgStyle?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * @example
 * <IconButton img={{ src: "./images/hamburger.png", width: "30px", height: "30px" }}
 *     onClick={() => setMenuModal(true)}>
 * </IconButton>
 *
 * @example
 * <IconButton className="hover:text-primary transition-all">
 *     <GiHamburgerMenu size={32} />
 * </IconButton>
 * @param {string} children - Bir icon elementi olmalıdır.
 * @param {string} img - {src:"Görsel" width: Genişlik, height: Yükseklik, }.
 * @param {string} className - Button css sınıfı.
 * @param {function} onClick - Butona tıklanınca çalışacak fonksiyon.
 * @param {string} imgFit - Görselin sığdırılma özelliği.
 * @param {string} imgStyle - Görselin css sınıfı.
 * @returns
 */

const IconButton = ({
  children,
  img,
  imgFit,
  imgStyle,
  className,
  onClick,
}: IconButtonProps) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
      {img && (
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          objectFit={imgFit}
          className={imgStyle}
          alt="icon"
        />
      )}
    </button>
  );
};

export default IconButton;
