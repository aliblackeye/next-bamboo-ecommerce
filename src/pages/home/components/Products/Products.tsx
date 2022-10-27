// Types
import Container from "../../../../common/components/Container/Container";
import { ProductTypes } from "../../../../common/types/types";

// Props
interface ProductListProps {
  productList: ProductTypes[];
}

// Components
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ productList }: ProductListProps) => {
  return (
    <Container>
      <section className="p-5">
        <div className="grid grid-cols-3 gap-5 justify-items-center ">
          {productList.slice(0, 12).map((product) => (
            <div
              key={product.id}
              className="cursor-pointer featured-product relative max-h-[510px] max-w-[396px] transition ease-out hover:border-primary rounded-[14px] hover:border-4 hover:-translate-y-3 drop-shadow-xl duration-200 ">
              <ProductCard image={product.image} price={product.price} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Products;
