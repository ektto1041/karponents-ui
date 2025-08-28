import { FC } from "react";
import "../global.css";
import { MainButtonProps } from "./MainButton.types";
import styles from "./style.module.css";

const MainButton: FC<MainButtonProps> = ({
  size = "md",
  border = true,
  color = "default",
  Icon,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        ${styles.container}
        ${
          size === "md"
            ? "r md"
            : size === "sm"
            ? "r sm"
            : size === "lg"
            ? "r lg"
            : ""
        }
        ${styles[size]}
        ${border ? styles.border : ""}
        ${color === "dark" ? styles.dark : ""}
      `}
    >
      {children}
      {Icon ? <Icon className={styles.icon} /> : <></>}
    </button>
  );
};

export default MainButton;
