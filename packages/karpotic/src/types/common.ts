import type { FC, SVGProps } from "react";

export type SizeWithoutX = "sm" | "md" | "lg";

export type Size = SizeWithoutX | "xs" | "xl";

export type Weight = "l" | "r" | "b";

export type Typography = `${Weight} ${Size}`;

export type Color =
  | "white-1"
  | "white-2"
  | "white-3"
  | "white-4"
  | "grey-1"
  | "grey-2"
  | "grey-3"
  | "grey-4"
  | "grey-5"
  | "black-1"
  | "black-2"
  | "black-3"
  | "black-4"
  | "black-5"
  | "primary"
  | "primary-light"
  | "primary-dark";
export type ColorSet = "default" | "dark";

export type Width = string | "full";

export type SvgComponent = FC<SVGProps<SVGSVGElement> & { title?: string }>;

export type DimensionValue = string | [string?, string?, string?];

export type SpacingValue =
  | string
  | [string, string]
  | [string, string, string]
  | [string, string, string, string];
