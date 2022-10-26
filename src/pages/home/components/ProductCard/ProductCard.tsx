// Packages
import Link from "next/link";

// Icons
import { HiShoppingCart } from "react-icons/hi";

// Components
import Image from "../../../../common/components/Image/Image";

const ProductCard = ({ image, price }: { image: string; price: number }) => {
  return (
    <Link href="#">
      <div>
        <Image src={image} alt="product" />
        <div className="featured-product-price absolute flex items-end justify-center py-4 opacity-0 transition-all bottom-0 rounded-[10px] left-0 font-display text-white text-2xl w-full h-1/4 bg-gradient-to-t from-black to-transparent">
          <div className="flex items-center gap-1">
            <span>${price}</span>
            <HiShoppingCart className="self-end" size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
