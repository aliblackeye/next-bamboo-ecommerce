import { ImageProps } from "../../props/props";


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
 * @param {string} className - resmin ekstra class'ını belirtir.
 */

const Image = ({ src, width, height,objectFit="fill",alt="img",className}: ImageProps) => {


  return (
    <div className={`${className ? className : ""}`} style={{width: width,height: height,objectFit:objectFit}}>
      <img src={src} alt={alt} className={`!w-full !h-full`}/>
    </div>
  );
};

export default Image;
