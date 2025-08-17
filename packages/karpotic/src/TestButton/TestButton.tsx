import { FC, ReactNode } from "react";
import styles from "./style.module.css";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
}) => (
  <button
    className={styles.container}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
