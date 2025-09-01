import { ComponentProps } from "react";
import { DimensionValue, SpacingValue, Typography } from "../types";

interface POwnProps {
  typography?: Typography;
  w?: DimensionValue;
  h?: DimensionValue;
  p?: SpacingValue;
  m?: SpacingValue;
}

export type PProps = ComponentProps<"p"> & POwnProps;
