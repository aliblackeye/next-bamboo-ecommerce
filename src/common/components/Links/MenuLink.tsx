// Packages
import Link from "next/link";

// Props
import { MenuLinkProps } from "../../props/props";

/**
 * Hamburger menüler için kullanabilirsiniz.
 *
 * @example
 * //İkonsuz Kullanım
 * <MenuLink href="/sandalyeler" justify="between"/>
 *
 * //İkonlu Kullanım
 * <MenuLink href="/urunler" justify="between">
 *  <GiWoodenChair size={24} /> Chairs
 * </MenuLink>
 * @param {string} href - Linke tıklandığında gidilecek sayfanın yolunu belirtir.
 * @param {string} children - İkon eklemek için kullanılır.
 * @param {string} className - Linkin ekstra class'ını belirtir.
 */

const MenuLink = ({
  href,
  className,
  children,
  justify = "start",
}: MenuLinkProps) => {
  switch (justify) {
    case "between":
      className = "justify-between";
      break;
    case "start":
      className = "justify-start";
      break;
    case "end":
      className = "justify-end";
      break;
  }

  return (
    <Link href={href}>
      <span
        className={`cursor-pointer flex items-center ${justify} gap-2 p-3 hover:bg-primary transition-all ${className}`}>
        {children}
      </span>
    </Link>
  );
};

export default MenuLink;
