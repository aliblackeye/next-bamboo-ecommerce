import Span from "../Span/Span";

const SquarePicker = () => {
  return (
    <div className="select-size">
      <Span className="uppercase font-bold text-secondary">Size</Span>
      <ul className="flex gap-[0.9375rem]">
        <li className="w-[24px] h-[24px] rounded-sm bg-[#E8E8E8] hover:bg-[#c7c7c7] flex justify-center items-center text-[0.625rem] cursor-pointer">
          XL
        </li>
        <li className="w-[24px] h-[24px] rounded-sm bg-primary hover:bg-[#c7c7c7] flex justify-center items-center text-[0.625rem] cursor-pointer">
          S
        </li>
        <li className="w-[24px] h-[24px] rounded-sm bg-[#E8E8E8] hover:bg-[#c7c7c7] flex justify-center items-center text-[0.625rem] cursor-pointer">
          M
        </li>
      </ul>
    </div>
  );
};

export default SquarePicker;
