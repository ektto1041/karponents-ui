import { ComponentPropsWithoutRef, FC, SVGProps } from "react";
import { ColorSet, SizeWithoutX, Width } from "../types";

type MainButtonOwnProps = {
  sizes?: SizeWithoutX;
  width?: Width;
  border?: boolean;
  colorSet?: ColorSet;
  Icon?: FC<SVGProps<SVGSVGElement> & { title?: string }>;
};

export type MainButtonProps = ComponentPropsWithoutRef<"button"> &
  MainButtonOwnProps;
