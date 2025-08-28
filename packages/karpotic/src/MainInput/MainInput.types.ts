import { ComponentPropsWithoutRef } from "react";
import { Color, SizeWithoutX, SvgComponent, Width } from "../types";

type MainInputOwnProps = {
  sizes?: SizeWithoutX;
  width?: Width;
  color?: Color;
  Icon?: SvgComponent;
};

export type MainInputProps = ComponentPropsWithoutRef<"input"> &
  MainInputOwnProps;
