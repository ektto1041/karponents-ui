import { FC } from "react";
import { Container } from "../Container";
import { BlockCompoundComponents, BlockProps } from "./Block.types";
import styles from "./style.module.css";

const Block: BlockCompoundComponents & FC<BlockProps> = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

const Center: FC<BlockProps> = ({ className, ...props }) => (
  <Block {...props} className={`${styles.center} ${className}`}>
    {props.children}
  </Block>
);

Block.Center = Center;

export default Block;
