type ObjectFitTypes = "fill" | "contain" | "cover" | "none" | "scale-down";
type ColorTypes =
  | "primary"
  | "secondary"
  | "dark"
  | "light"
  | "white"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "transparent";

type ProductTypes = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export type { ColorTypes, ProductTypes, ObjectFitTypes };
