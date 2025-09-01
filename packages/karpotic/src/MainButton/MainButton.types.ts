import { ComponentPropsWithoutRef, FC, SVGProps } from "react";
import { Border, ColorSet, SizeWithoutX, Width } from "../types";

type MainButtonOwnProps = {
  sizes?: SizeWithoutX;
  width?: Width;
  border?: Border;
  colorSet?: ColorSet;
  Icon?: FC<SVGProps<SVGSVGElement> & { title?: string }>;
};

export type MainButtonProps = ComponentPropsWithoutRef<"button"> &
  MainButtonOwnProps;
