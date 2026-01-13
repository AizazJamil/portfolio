/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  link: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

const Button: React.FC<ButtonProps> = ({ children, link, target }: any) => {
  return (
    <div className="button-wrap">
      <Link
        to={link}
        className="button btn__primary"
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        <span className="dot"></span> {children}
      </Link>
    </div>
  );
};

export default Button;
