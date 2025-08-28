import { Color, SizeWithoutX } from "types";

type DropdownOwnProps = {
  sizes?: SizeWithoutX;
  color?: Color;
  label: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  itemList: DropdownItemData[];
  // Button: MainButton;
};

export type DropdownMenuProps = {
  itemList: DropdownItemData[];
};

export type DropdownMenuItemProps = {
  item: DropdownItemData;
};

export type DropdownItemData = {
  label: string;
  onClick: Function;
} | null;

export type DropdownProps = DropdownOwnProps;
