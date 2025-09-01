import { ComponentProps, FC } from "react";
import { Color, DimensionValue, SpacingValue } from "../types";

interface BlockOwnProps {
  w?: DimensionValue;
  h?: DimensionValue;
  p?: SpacingValue;
  m?: SpacingValue;
  bgc?: Color;
}

export type BlockProps = ComponentProps<"div"> & BlockOwnProps;

export interface BlockCompoundComponents {
  Center: FC<BlockProps>;
}
