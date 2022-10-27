import Span from "../Span/Span";

interface ColorPickerProps {
  className?: string;
  pickerName?: string;
  colors?: { id: string; color: string }[];
  textClass?: string;
  selectedColor?: string;
  setSelectedColor?: any;
  circleColor?: string;
}

const ColorPicker = ({
  className,
  pickerName,
  colors,
  textClass,
  selectedColor,
  setSelectedColor,
  circleColor = "#000",
}: ColorPickerProps) => {
  let bgColor: string;

  return (
    <div className={`select-color ${className}`}>
      <Span className={`${textClass}`}>{pickerName}</Span>
      <ul className="flex gap-[.375rem]">
        {colors &&
          colors.map((c) => (
            <li
              id={c.id}
              key={c.id}
              className={`${className} border-transparent border-2 rounded-full p-[0.125rem] cursor-pointer`}
              onClick={(e) => setSelectedColor(e.currentTarget.id)}
              style={{
                borderColor: selectedColor === c.id ? circleColor : "",
              }}>
              <div
                className={`w-[1.25rem] h-[1.25rem] rounded-full`}
                style={{ backgroundColor: c.color }}></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ColorPicker;
