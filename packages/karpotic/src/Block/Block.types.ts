import { FC } from "react";
import { ContainerProps } from "../Container";

export type BlockProps = ContainerProps;

export interface BlockCompoundComponents {
  Center: FC<BlockProps>;
}
