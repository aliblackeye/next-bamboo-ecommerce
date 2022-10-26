// Props
import { ProductListProps } from "../../../../common/props/props";

// Components
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ productList }: ProductListProps) => {
  return (
    <section className="p-5 container mx-auto">
      <div className="grid grid-cols-3 gap-5 justify-items-center ">
        {productList.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer featured-product relative max-h-[510px] max-w-[396px] transition ease-out hover:border-primary rounded-[10px] hover:border-4 hover:-translate-y-3 drop-shadow-xl duration-200 ">
            <ProductCard image={product.image} price={product.price} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
