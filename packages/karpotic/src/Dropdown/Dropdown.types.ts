import { Color, SizeWithoutX } from "types";

type DropdownOwnProps = {
  sizes?: SizeWithoutX;
  color?: Color;
  border?: boolean;
  label: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  itemList: DropdownItemData[];
  // Button: MainButton;
};

export type DropdownMenuProps = {
  color: Color;
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

export type DropdownProps = DropdownOwnProps;
