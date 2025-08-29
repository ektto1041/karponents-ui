import { MainButtonProps } from "../MainButton";
import { Color, SizeWithoutX, Width } from "../types";

type DropdownOwnProps = {
  sizes?: SizeWithoutX;
  color?: Color;
  anchor?: Anchor;
  label: string;
  width?: Width;
  buttonProps: Omit<MainButtonProps, "width" | "onClick">;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  itemList: DropdownItemData[];
};

export type DropdownMenuProps = {
  color: Color;
  anchor: Anchor;
  itemList: DropdownItemData[];
};

export type DropdownMenuItemProps = {
  color: Color;
  item: DropdownItemData;
};

export type DropdownItemData = {
  label: string;
  onClick: Function;
} | null;

export type Anchor = "L" | "R";

export type DropdownProps = DropdownOwnProps;
