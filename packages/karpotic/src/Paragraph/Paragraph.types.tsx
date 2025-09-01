import { ComponentProps, JSX } from "react";
import { Color, DimensionValue, SpacingValue, Typography } from "../types";

interface ParagraphOwnProps {
  typography?: Typography;
  color?: Color;
  w?: DimensionValue;
  h?: DimensionValue;
  p?: SpacingValue;
  m?: SpacingValue;
}

export type ParagraphProps<T extends keyof JSX.IntrinsicElements> =
  ComponentProps<T> & ParagraphOwnProps;
