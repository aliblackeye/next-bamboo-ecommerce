import { ObjectFitTypes } from "../../types/types";

export interface ImageProps {
  src: string;
  width?: string;
  height?: string;
  objectFit?: ObjectFitTypes;
  alt?: string;
  className?: string;
  imageClass?: string;
}

/**
 * Image oluşturmak için bu componenti kullanın. Pixel değerlerini otomatik olarak rem'e dönüştürür.
 *
 * @example
 * // Örnek kullanım
 * <Image src="/images/photo.png" width="32px" height="2rem" objectFit="contain" alt="profile"/>
 * @param {string} src - resmin yolunu belirtir.
 * @param {string} width - resmin genişliğini belirtir. (px veya rem olarak belirtilebilir.)
 * @param {string} height - resmin yüksekliğini belirtir. (px veya rem olarak belirtilebilir.)
 * @param {string} objectFit - resmin nasıl sığdırılacağını belirtir. Varsayılan: objectFit="fill"
 * @param {string} alt - resmin açıklamasını belirtir. Varsayılan: alt="img"
 * @param {string} className - resim kapsayıcısının ekstra class'ını belirtir.
 * @param {string} imageClass - resmin ekstra class'ını belirtir.
 */

const Image = ({
  src,
  width = "100%",
  height = "100%",
  objectFit = "fill",
  alt = "img",
  className,
  imageClass,
}: ImageProps) => {
  let fit;
  switch (objectFit) {
    case "fill":
      fit = "object-fill";
      break;
    case "contain":
      fit = "object-contain";
      break;
    case "cover":
      fit = "object-cover";
      break;
    case "none":
      fit = "object-none";
      break;
    case "scale-down":
      fit = "object-scale-down";
      break;
  }

  return (
    <div
      className={`${className ? className : ""}`}
      style={{ width: width, height: height }}>
      <img
        src={src}
        alt={alt}
        className={`!w-full !h-full ${fit} ${imageClass}`}
      />
    </div>
  );
};

export default Image;
