import { ComponentProps } from "react";
import {
  AlignContent,
  AlignItems,
  Color,
  DimensionValue,
  Direction,
  JustifyContent,
  SpacingValue,
} from "../types";

interface LineOwnProps {
  w?: DimensionValue;
  h?: DimensionValue;
  p?: SpacingValue;
  m?: SpacingValue;
  bgc?: Color;
  direction?: Direction;
  gap?: string;
  multiline?: boolean;
  jc?: JustifyContent;
  ai?: AlignItems;
  ac?: AlignContent;
}

export type LineProps = ComponentProps<"div"> & LineOwnProps;
