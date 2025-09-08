import { FC } from "react";
import {
  createStyleFromBackgroundColor,
  createStyleFromDimensions,
} from "../utils";
import { ContainerProps } from "./Container.types";

const Container: FC<ContainerProps> = ({ w, h, p, m, bgc, flex, ...props }) => {
  const { style, children, ...restProps } = props;
  const dimensionStyles = createStyleFromDimensions(w, h, p, m);
  const bgcStyle = createStyleFromBackgroundColor(bgc);

  return (
    <div
      {...restProps}
      style={{
        ...style,
        ...dimensionStyles,
        ...bgcStyle,
        flex,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
