import { ComponentPropsWithoutRef } from "react";
import { ColorSet, SizeWithoutX, SvgComponent, Width } from "../types";

type MainInputOwnProps = {
  sizes?: SizeWithoutX;
  width?: Width;
  colorSet?: ColorSet;
  Icon?: SvgComponent;
};

export type MainInputProps = ComponentPropsWithoutRef<"input"> &
  MainInputOwnProps;
