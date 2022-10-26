import { TitleProps } from "../../props/props";

const Title = ({ children, className }: TitleProps) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export default Title;
