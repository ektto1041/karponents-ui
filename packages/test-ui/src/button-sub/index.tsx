import { ReactNode } from "react";
import styles from "./buttonsub.module.css";

interface ButtonProps {
  children: ReactNode;
}

export const ButtonSub = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
