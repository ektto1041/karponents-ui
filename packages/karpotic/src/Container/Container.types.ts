import { ComponentProps } from "react";
import { Color, DimensionValue, Flex, SpacingValue } from "../types";

interface ContainerOwnProps {
  w?: DimensionValue;
  h?: DimensionValue;
  p?: SpacingValue;
  m?: SpacingValue;
  bgc?: Color;
  flex?: Flex;
}

export type ContainerProps = ComponentProps<"div"> & ContainerOwnProps;
