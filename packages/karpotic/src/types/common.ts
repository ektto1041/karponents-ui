import type { FC, SVGProps } from "react";

export type SizeWithoutX = "sm" | "md" | "lg";

export type Size = SizeWithoutX | "xs" | "xl";

export type Color = "default" | "dark";

export type Width = string | "full";

export type SvgComponent = FC<SVGProps<SVGSVGElement> & { title?: string }>;

export type DimensionValue = string | [string?, string?, string?];

export type SpacingValue =
  | string
  | [string, string]
  | [string, string, string]
  | [string, string, string, string];
