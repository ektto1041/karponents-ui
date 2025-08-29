import { Color, SizeWithoutX } from "../types";

type DropdownOwnProps = {
  sizes?: SizeWithoutX;
  color?: Color;
  border?: boolean;
  label: string;
  anchor?: Anchor;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  itemList: DropdownItemData[];
  // Button: MainButton;
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
