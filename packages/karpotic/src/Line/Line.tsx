import { c } from "@karponents-ui/utils";
import { FC } from "react";
import { Container } from "../Container";
import { createStylesFromFlex } from "../utils";
import { LineProps } from "./Line.types";
import styles from "./style.module.css";

const Line: FC<LineProps> = ({
  direction = "row",
  multiline,
  gap,
  jc,
  ai,
  ac,
  className,
  style,
  children,
  ...restProps
}) => {
  const flexStyles = createStylesFromFlex(direction, gap, jc, ai, ac);

  const combinedStyle = {
    ...style,
    ...flexStyles,
  };

  const composedClassName = c(
    className,
    styles.line,
    multiline ? styles.multiline : undefined
  );

  return (
    <Container
      {...restProps}
      style={combinedStyle}
      className={composedClassName}
    >
      {children}
    </Container>
  );
};

export default Line;
