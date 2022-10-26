// Packages
import OutsideClickHandler from "react-outside-click-handler";

// Icons
import { Dispatch, SetStateAction } from "react";
import { GiWoodenChair, GiSofa, GiParkBench, GiCancel } from "react-icons/gi";
import { BiCabinet, BiInfoCircle } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import IconButton from "../../FormElements/Buttons/IconButton";
import SearchInput from "../../FormElements/Inputs/SearchInput";
import MenuLink from "../../Links/MenuLink";

// Components

const MenuModal = ({
  setMenuModal,
}: {
  setMenuModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setMenuModal(false);
      }}>
      <div className="drop-shadow-lg fixed top-0 left-0 h-screen bg-white rounded-tr-md rounded-br-md p-10 font-bold z-50 uppercase">
        <SearchInput placeholder="Search..." />

        <nav className="flex flex-col gap-2 mt-10">
          <MenuLink href="/product">
            <GiWoodenChair size={24} /> Chairs
          </MenuLink>
          <MenuLink href="/product">
            <BiCabinet size={24} /> Cabinets
          </MenuLink>
          <MenuLink href="/product">
            <GiSofa size={24} /> Sofas
          </MenuLink>
          <MenuLink href="/product">
            <GiParkBench size={24} /> Benchs
          </MenuLink>
          <MenuLink href="/product">
            <BiInfoCircle size={24} /> About Us
          </MenuLink>
          <MenuLink href="/product">
            <FiPhone size={24} /> Contact
          </MenuLink>
        </nav>

        <IconButton
          className="absolute hover:text-primary transition-all top-2 right-2"
          onClick={() => setMenuModal(false)}>
          <GiCancel size={24} />
        </IconButton>
      </div>
    </OutsideClickHandler>
  );
};

export default MenuModal;
