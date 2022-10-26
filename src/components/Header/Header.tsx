// Hooks
import { useState } from "react";

// Header Components
import HeaderButtons from "./components/HeaderButtons";
import Logo from "../../common/components/Logo/Logo";
import MenuButton from "./components/MenuButton";
import MenuModal from "./components/MenuModal";

const Header = () => {
  const [menuModal, setMenuModal] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full flex items-center bg-secondary opacity-80 drop-shadow-2xl h-[100px]">
        <div className="container p-5 mx-auto flex justify-between items-center text-white">
          <MenuButton setMenuModal={setMenuModal} />
          <Logo src="./images/logo.png" width="169px" height="47px" />
          <HeaderButtons />
        </div>
      </div>
      {menuModal && <MenuModal setMenuModal={setMenuModal} />}
    </>
  );
};

export default Header;
