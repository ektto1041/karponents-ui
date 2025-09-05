import { ComponentProps } from "react";
import { Color, DimensionValue, SpacingValue } from "../types";

interface ContainerOwnProps {
  w?: DimensionValue;
  h?: DimensionValue;
  p?: SpacingValue;
  m?: SpacingValue;
  bgc?: Color;
}

export type ContainerProps = ComponentProps<"div"> & ContainerOwnProps;
