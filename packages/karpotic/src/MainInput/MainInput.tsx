import { c } from "@karponents-ui/utils";
import { FC } from "react";
import "../global.css";
import { MainInputProps } from "./MainInput.types";
import styles from "./style.module.css";

const MainInput: FC<MainInputProps> = ({
  width = "auto",
  sizes = "md",
  color = "default",
  Icon,
  ...props
}) => {
  return (
    <div
      className={c(
        styles.container,
        width === "full" ? styles.full : "",
        color === "dark" ? styles.dark : "",
        styles[sizes]
      )}
      style={width !== "full" ? { width } : undefined}
    >
      <input {...props} className={c(styles.input, sizes, "r")} />

      {Icon ? (
        <div className={c(styles["icon-wrapper"], styles[sizes])}>
          <Icon className={styles.icon} />
        </div>
      ) : null}
    </div>
  );
};

export default MainInput;
