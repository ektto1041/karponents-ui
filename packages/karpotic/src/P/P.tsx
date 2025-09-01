import { FC } from "react";
import { createStyleFromDimensions } from "../utils";
import { PProps } from "./P.types";

const P: FC<PProps> = ({ typography = "r md", w, h, p, m, ...props }) => {
  const { style, children, ...restProps } = props;
  const dimensionStyles = createStyleFromDimensions(w, h, p, m);

  return (
    <p
      {...restProps}
      style={{
        ...style,
        ...dimensionStyles,
      }}
      className={typography}
    >
      {children}
    </p>
  );
};

export default P;
