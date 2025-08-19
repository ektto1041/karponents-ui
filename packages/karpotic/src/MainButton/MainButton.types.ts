import { ComponentPropsWithoutRef, FC, SVGProps } from "react";
import { Color, SizeWithoutX } from "types";

type MainButtonOwnProps = {
  size?: SizeWithoutX;
  border?: boolean;
  color?: Color;
  Icon?: FC<SVGProps<SVGSVGElement> & { title?: string }>;
};

export type MainButtonProps = ComponentPropsWithoutRef<"button"> &
  MainButtonOwnProps;
