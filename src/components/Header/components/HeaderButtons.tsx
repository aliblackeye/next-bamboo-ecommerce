import { FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import IconButton from "../../../common/components/FormElements/Buttons/IconButton";

const HeaderButtons = () => {
  return (
    <div className="flex gap-5 flex-1 justify-end">
      <IconButton className="hover:text-primary transition-all">
        <FiSearch size={32} />
      </IconButton>
      <IconButton className="hover:text-primary transition-all">
        <HiShoppingCart size={32} />
      </IconButton>
    </div>
  );
};

export default HeaderButtons;
