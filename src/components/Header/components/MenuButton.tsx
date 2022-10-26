import { GiHamburgerMenu } from "react-icons/gi";
import { Dispatch, SetStateAction } from "react";
import IconButton from "../../../common/components/FormElements/Buttons/IconButton";

const MenuButton = ({
  setMenuModal,
}: {
  setMenuModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex-1 hamburger menu">
      <IconButton
        className="hover:text-primary transition-all"
        onClick={() => setMenuModal(true)}>
        <GiHamburgerMenu size={32} />
      </IconButton>
    </div>
  );
};

export default MenuButton;
