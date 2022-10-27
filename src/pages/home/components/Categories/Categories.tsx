import { Dispatch, SetStateAction } from "react";

const Categories = ({
  categories,
  selected,
  setSelected,
}: {
  categories: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ul className="flex gap-[3rem] justify-center items-center uppercase mt-[30px] text-xl">
      {categories.map((category, i) => (
        <li
          key={i}
          className={`cursor-pointer border-b-transparent border-b-4 ${
            selected === category && "!border-b-primary !border-b-4"
          }`}
          onClick={() => setSelected(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
