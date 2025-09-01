import { c } from "@karponents-ui/utils";
import { FC, JSX } from "react";
import { createStyleFromColor, createStyleFromDimensions } from "../utils";
import { ParagraphProps } from "./Paragraph.types";

export const createParagraphComponent = <T extends keyof JSX.IntrinsicElements>(
  tag: T,
  defaultTypography?: string
) => {
  const ParagraphComponent: FC<ParagraphProps<T>> = ({
    typography = defaultTypography,
    color = "inherit",
    w,
    h,
    p,
    m,
    ...props
  }) => {
    const { style, children, className, ...restProps } = props;
    const dimensionStyles = createStyleFromDimensions(w, h, p, m);
    const colorStyle = createStyleFromColor(color);

    const Component = tag as any;

    return (
      <Component
        {...restProps}
        style={{
          ...style,
          ...dimensionStyles,
          ...colorStyle,
        }}
        className={c(typography, className)}
      >
        {children}
      </Component>
    );
  };

  return ParagraphComponent;
};
