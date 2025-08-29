import { FC } from "react";
import "../global.css";
import { MainButtonProps } from "./MainButton.types";
import styles from "./style.module.css";

const MainButton: FC<MainButtonProps> = ({
  sizes = "md",
  width = "auto",
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
          sizes === "md"
            ? "r md"
            : sizes === "sm"
            ? "r sm"
            : sizes === "lg"
            ? "r lg"
            : ""
        }
        ${styles[sizes]}
        ${border ? styles.border : ""}
        ${color === "dark" ? styles.dark : ""}
      `}
      style={{ ...props.style, width: width === "full" ? "100%" : width }}
    >
      {children}
      {Icon ? <Icon className={styles.icon} /> : <></>}
    </button>
  );
};

export default MainButton;
