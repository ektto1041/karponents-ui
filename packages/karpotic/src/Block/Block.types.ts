import { ComponentProps, FC } from "react";
import { DimensionValue, SpacingValue } from "../types";

interface BlockOwnProps {
  w?: DimensionValue;
  h?: DimensionValue;
  p?: SpacingValue;
  m?: SpacingValue;
}

export type BlockProps = ComponentProps<"div"> & BlockOwnProps;

export interface BlockCompoundComponents {
  Center: FC<BlockProps>;
}
