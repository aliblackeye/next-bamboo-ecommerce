import { ColorTypes } from "../../../types/types";
import Input from "./Input";

interface SearchInputProps {
  className?: string;
  width?: "none" | "sm" | "md" | "xl";
  color?: ColorTypes;
  placeholder?: string;
  type?: string;
}

/**
 * Arama kutusu oluşturmak için kullanabilirsiniz.
 *
 * @example
 * // Örnek kullanım
 * <SearchInput className="text-primary" type="text" placeholder="Ara..." />
 * @param {string} type - Input tipi. Varsayılan type="text"
 * @param {string} width - Kenarlık genişliği. Varsayılan width="sm"
 * @param {string} placeholder - Ön tanımlı yazı. Varsayılan placeholder="Search..."
 * @param {string} className - Inputun css sınıfı.
 * @param {string} color - Kenarlık rengi. Varsayılan color="primary"
 */
const SearchInput = ({
  className,
  placeholder = "Search...",
  type = "text",
  width = "sm",
  color = "primary",
}: SearchInputProps) => {
  let borderWidth, borderColor;

  switch (width) {
    case "none":
      borderWidth = "border-0";
      break;
    case "sm":
      borderWidth = "border-2";
      break;
    case "md":
      borderWidth = "border-4";
      break;
    case "xl":
      borderWidth = "border-8";
      break;
  }

  switch (color) {
    case "primary":
      borderColor = "border-primary";
      break;
    case "secondary":
      borderColor = "border-secondary";
      break;
    case "dark":
      borderColor = "border-dark";
      break;
    case "light":
      borderColor = "border-light";
      break;
    case "white":
      borderColor = "border-white";
      break;
    case "danger":
      borderColor = "border-danger";
      break;
    case "success":
      borderColor = "border-success";
      break;
    case "warning":
      borderColor = "border-warning";
      break;
    case "info":
      borderColor = "border-info";
      break;
    case "transparent":
      borderColor = "border-transparent";
      break;
  }

  return (
    <div className={`${borderWidth} ${borderColor} p-2`}>
      <Input
        className={`border-0 outline-0 ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
