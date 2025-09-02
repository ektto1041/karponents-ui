import { c } from "@karponents-ui/utils";
import { FC } from "react";
import {
  createStyleFromBackgroundColor,
  createStyleFromDimensions,
  createStylesFromFlex,
} from "../utils";
import { LineProps } from "./Line.types";
import styles from "./style.module.css";

const Line: FC<LineProps> = ({
  bgc,
  w,
  h,
  p,
  m,
  direction = "row",
  multiline,
  gap,
  jc,
  ai,
  ac,
  style,
  children,
  className,
  ...restProps
}) => {
  const dimensionStyles = createStyleFromDimensions(w, h, p, m);
  const bgcStyle = createStyleFromBackgroundColor(bgc);
  const flexStyles = createStylesFromFlex(direction, gap, jc, ai, ac);
  
  const combinedStyles = {
    ...style,
    ...dimensionStyles,
    ...bgcStyle,
    ...flexStyles,
  };

  const composedClassName = c(
    className,
    styles.line,
    multiline ? styles.multiline : undefined
  );

  return (
    <div
      {...restProps}
      style={combinedStyles}
      className={composedClassName}
    >
      {children}
    </div>
  );
};

export default Line;
