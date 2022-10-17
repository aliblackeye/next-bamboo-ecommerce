import Image from "next/image";
import { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import {
  GiHamburgerMenu,
  GiWoodenChair,
  GiSofa,
  GiParkBench,
  GiCancel,
} from "react-icons/gi";
import { FiSearch, FiPhone } from "react-icons/fi";
import { BiCabinet, BiInfoCircle } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";


const Logo = () => {
  return (
    <Link href="/home">
      <Image src="/images/logo.png" className="cursor-pointer" alt="logo" width="169px" height="47px" />
    </Link>
  );
};

const HeaderButtons = () => {
  return (
    <div className="flex gap-5 flex-1 justify-end">
      <button className="hover:text-primary transition-all">
        <FiSearch size={32} />
      </button>
      <button className="hover:text-primary transition-all">
        <HiShoppingCart size={32} />
      </button>
    </div>
  );
};

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
        <div className="py-2 px-4 border-2 border-gray-500">
          <input
            className="border-0 outline-0"
            type="text"
            placeholder="Search..."
          />
        </div>
        <nav className="flex flex-col gap-2 mt-10">
          <Link
            href="/category/chair"
            className="flex items-center gap-2 p-3 hover:bg-primary transition-all">
            <div className="flex ">
            <GiWoodenChair size={24} /> Chairs
            </div>
          </Link>
          <Link
            href="/category/chair"
            className="flex items-center gap-2 p-3 hover:bg-primary transition-all">
            <div className="flex ">
            <BiCabinet size={24} /> Cabinets
            </div>
          </Link>
          <Link
            href="/category/chair"
            className="flex items-center gap-2 p-3 hover:bg-primary transition-all">
            <div className="flex ">
            <GiSofa size={24} /> Sofas
            </div>
          </Link>
          <Link
            href="/category/chair"
            className="flex items-center gap-2 p-3 hover:bg-primary transition-all">
            <div className="flex ">
            <GiParkBench size={24} /> Benchs
            </div>
          </Link>
          <Link
            href="/category/chair"
            className="flex items-center gap-2 p-3 hover:bg-primary transition-all">
            <div className="flex ">
            <BiInfoCircle size={24} /> About Us
            </div>
          </Link>
          <Link
            href="/category/chair"
            className="flex items-center gap-2 p-3 hover:bg-primary transition-all">
            <div className="flex ">
            <FiPhone size={24} /> Contact
            </div>
          </Link>
        </nav>
        <button
          className="absolute top-2 right-2 hover:text-primary transition-all"
          onClick={() => setMenuModal(false)}>
          <GiCancel size={24} />
        </button>
      </div>
    </OutsideClickHandler>
  );
};

const MenuButton = ({
  setMenuModal,
}: {
  setMenuModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex-1 hamburger menu">
      <button
        className="hover:text-primary transition-all"
        onClick={() => setMenuModal(true)}>
        <GiHamburgerMenu size={32} />
      </button>
    </div>
  );
};

export default function Header() {
  const [menuModal, setMenuModal] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full flex items-center bg-secondary opacity-80 drop-shadow-2xl h-[100px]">
        <div className="container p-5 mx-auto flex justify-between items-center text-white">
          <MenuButton setMenuModal={setMenuModal} />
          <Logo />
          <HeaderButtons />
        </div>
      </div>
      {menuModal && <MenuModal setMenuModal={setMenuModal} />}
    </>
  );
}
