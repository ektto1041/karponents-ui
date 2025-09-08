import { ContainerProps } from "../Container";
import { AlignContent, AlignItems, Direction, JustifyContent } from "../types";

interface LineOwnProps {
  direction?: Direction;
  gap?: string;
  multiline?: boolean;
  jc?: JustifyContent;
  ai?: AlignItems;
  ac?: AlignContent;
}

export type LineProps = ContainerProps & LineOwnProps;
