import { c } from "@karponents-ui/utils";
import { FC } from "react";
import "../global.css";
import { MainButtonProps } from "./MainButton.types";
import styles from "./style.module.css";

const MainButton: FC<MainButtonProps> = ({
  sizes = "md",
  width = "auto",
  border = true,
  colorSet = "default",
  Icon,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={c(
        styles.container,
        "r",
        sizes,
        styles[sizes],
        border ? styles.border : "",
        colorSet === "dark" ? styles.dark : ""
      )}
      style={{ ...props.style, width: width === "full" ? "100%" : width }}
    >
      {children}
      {Icon ? <Icon className={styles.icon} /> : <></>}
    </button>
  );
};

export default MainButton;
