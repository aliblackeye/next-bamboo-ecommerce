import Link from "next/link";
import Image, { ImageProps } from "../Image/Image";

interface LogoProps extends ImageProps {
  href?: string;
}

/**
 * Logo oluşturmak için kullanabilirsiniz.
 *
 * @example
 * // Örnek kullanım
 * <Logo src="/images/logo.png" to="/anasayfa" width="32px" height="2rem" objectFit="contain" alt="logo"/>
 * @param {string} src - logonun yolunu belirtir.
 * @param {string} href - logonun tıklandığında gidilecek sayfanın yolunu belirtir.
 * @param {string} width - logonun genişliğini belirtir. (px veya rem olarak belirtilebilir.)
 * @param {string} height - logonun yüksekliğini belirtir. (px veya rem olarak belirtilebilir.)
 * @param {string} objectFit - logonun nasıl sığdırılacağını belirtir. Varsayılan: objectFit="contain"
 * @param {string} alt - logonun açıklamasını belirtir. Varsayılan: alt="logo"
 * @param {string} className - logonun ekstra class'ını belirtir.
 */

const Logo = ({
  src,
  href = "home",
  width,
  height,
  objectFit = "contain",
  alt = "logo",
  className,
}: LogoProps) => {
  return (
    <Link href={href}>
      <div>
        <Image
          src={src}
          className={`cursor-pointer ${className ? className : ""}`}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit}
        />
      </div>
    </Link>
  );
};

export default Logo;
