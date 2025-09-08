import type { CSSProperties, FC, SVGProps } from "react";

// Size types
export type SizeWithoutX = "sm" | "md" | "lg";
export type Size = SizeWithoutX | "xs" | "xl";

// Typography types
export type Weight = "l" | "r" | "b";
export type Typography = `${Weight} ${Size}`;

// Color types
export type Color =
  | "inherit"
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

// Border, width, and SVG types
export type Border = "none" | "rounded" | "oval";
export type Width = string | "full";
export type SvgComponent = FC<SVGProps<SVGSVGElement> & { title?: string }>;
export type IconPosition = "before" | "after";
export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
export type JustifyContent = CSSProperties["justifyContent"];
export type AlignItems = CSSProperties["alignItems"];
export type AlignContent = CSSProperties["alignContent"];
export type Flex = CSSProperties["flex"];

// Layout value types
export type DimensionValue = string | [string?, string?, string?];
export type SpacingValue =
  | string
  | [string, string]
  | [string, string, string]
  | [string, string, string, string];
