import { FC } from "react";
import {
  createStyleFromBackgroundColor,
  createStyleFromDimensions,
} from "../utils";
import { BlockCompoundComponents, BlockProps } from "./Block.types";
import styles from "./style.module.css";

const Block: BlockCompoundComponents & FC<BlockProps> = ({
  w,
  h,
  p,
  m,
  bgc,
  ...props
}) => {
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
      }}
    >
      {children}
    </div>
  );
};

const Center: FC<BlockProps> = ({ className = "", ...props }) => (
  <Block {...props} className={`${styles.center} ${className}`}>
    {props.children}
  </Block>
);

Block.Center = Center;

export default Block;
