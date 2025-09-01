import { c } from "@karponents-ui/utils";
import { FC } from "react";
import "../global.css";
import { createBorderClassName } from "../utils";
import { MainButtonProps } from "./MainButton.types";
import styles from "./style.module.css";

const MainButton: FC<MainButtonProps> = ({
  sizes = "md",
  width = "auto",
  border = "none",
  colorSet = "default",
  Icon,
  iconPosition = "after",
  children,
  ...props
}) => {
  const borderClassName = createBorderClassName(border);

  return (
    <button
      {...props}
      className={c(
        styles.container,
        "r",
        sizes,
        styles[sizes],
        borderClassName && styles[borderClassName],
        colorSet === "dark" ? styles.dark : "",
        styles[`${iconPosition}-icon`]
      )}
      style={{ ...props.style, width: width === "full" ? "100%" : width }}
    >
      {children}
      {Icon ? <Icon className={styles.icon} /> : <></>}
    </button>
  );
};

export default MainButton;
