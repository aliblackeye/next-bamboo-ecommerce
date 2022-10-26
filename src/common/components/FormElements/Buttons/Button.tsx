import Link from "next/link";
import { ButtonProps } from "../../../props/props";

/**
 *
 * @example
 * <TextButton text="See More"/>
 * @param {any} children - Buton içeriği
 * @param {string} color - Butonun rengi
 * @param {string} className - Butonun ekstra class'ı
 * @param {function} onClick - Butona tıklandığında çalışacak fonksiyon
 * @param {string} href - Butona tıklandığında yönlendirilecek link
 * @param {string} target - Butona tıklandığında yönlendirilecek linkin açılacağı sekme
 * @param {string} disabled - Butonun aktif olup olmayacağı
 * @param {string} id - Butonun id'si
 *
 */

const Button = ({
  children,
  color,
  className,
  onClick,
  href,
  target,
  disabled,
  id,
}: ButtonProps) => {
  let buttonColor: string;
  switch (color) {
    case "primary":
      buttonColor = "btn-primary";
      break;
    case "secondary":
      buttonColor = "btn-secondary";
      break;
    case "dark":
      buttonColor = "btn-dark";
      break;
    case "light":
      buttonColor = "btn-light";
      break;
    case "white":
      buttonColor = "btn-white";
      break;
    case "danger":
      buttonColor = "btn-danger";
      break;
    case "success":
      buttonColor = "btn-success";
      break;
    case "warning":
      buttonColor = "btn-warning";
      break;
    case "info":
      buttonColor = "btn-info";
      break;
    case "transparent":
      buttonColor = "btn-transparent";
      break;
  }

  const ButtonElement = () => {
    return (
      <button
        id={id}
        disabled={disabled}
        className={`btn ${buttonColor} ${className}`}
        onClick={onClick}>
        {children}
      </button>
    );
  };
  return (
    <>
      {href ? (
        <Link href={href} target={target}>
          <ButtonElement />
        </Link>
      ) : (
        <ButtonElement />
      )}
    </>
  );
};

export default Button;
