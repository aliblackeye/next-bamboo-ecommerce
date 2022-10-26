/**
 * Bu fonksiyon pixel değerlerini rem değerlerine çevirip rem değerini döndürür.
 * @param {number} px - pixel value
 */
const pxToRem = (px: string) => {
  
  return `${Number(px.replace("px","")) / 16}rem`;
};

export default pxToRem;
