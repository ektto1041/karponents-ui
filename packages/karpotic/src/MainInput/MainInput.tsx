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
      className={[
        styles.container,
        width === "full" && styles.full,
        color === "dark" && styles.dark,
        styles[sizes],
      ]
        .filter(Boolean)
        .join(" ")}
      style={width !== "full" ? { width } : undefined}
    >
      <input {...props} className={[styles.input, sizes, "r"].join(" ")} />

      {Icon ? (
        <div className={`${styles["icon-wrapper"]} ${styles[sizes]}`}>
          <Icon className={styles.icon} />
        </div>
      ) : null}
    </div>
  );
};

export default MainInput;
