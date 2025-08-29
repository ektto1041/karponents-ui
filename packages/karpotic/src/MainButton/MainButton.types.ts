import { ComponentPropsWithoutRef, FC, SVGProps } from "react";
import { Color, SizeWithoutX, Width } from "../types";

type MainButtonOwnProps = {
  sizes?: SizeWithoutX;
  width?: Width;
  border?: boolean;
  color?: Color;
  Icon?: FC<SVGProps<SVGSVGElement> & { title?: string }>;
};

export type MainButtonProps = ComponentPropsWithoutRef<"button"> &
  MainButtonOwnProps;
