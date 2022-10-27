import Button from "../FormElements/Buttons/Button";
import Span from "../Span/Span";

interface QuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

const Quantity = ({ quantity, setQuantity, className }: QuantityProps) => {
  const quantityHandler = (id: string) => {
    id === "add" ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
  };

  return (
    <div
      className={`${className} flex items-center justify-center gap-1 text-[1.125rem] rounded-[1.875rem] border-2 py-[0.75rem] w-[6rem]`}>
      <button
        onClick={(e) => quantity > 1 && quantityHandler(e.currentTarget.id)}
        id="subtract">
        -
      </button>
      <Span>{String(quantity).padStart(2, "0")}</Span>
      <button
        onClick={(e) => quantity < 99 && quantityHandler(e.currentTarget.id)}
        id="add">
        +
      </button>
    </div>
  );
};

export default Quantity;
