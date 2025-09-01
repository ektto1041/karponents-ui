import { MainButtonProps } from "../MainButton";
import { ColorSet, SizeWithoutX, Width } from "../types";

type DropdownOwnProps = {
  sizes?: SizeWithoutX;
  colorSet?: ColorSet;
  anchor?: Anchor;
  label: string;
  width?: Width;
  buttonProps: Omit<MainButtonProps, "width" | "onClick">;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  itemList: DropdownItemData[];
};

export type DropdownMenuProps = {
  colorSet: ColorSet;
  anchor: Anchor;
  itemList: DropdownItemData[];
};

export type DropdownMenuItemProps = {
  colorSet: ColorSet;
  item: DropdownItemData;
};

export type DropdownItemData = {
  label: string;
  onClick: Function;
} | null;

export type Anchor = "L" | "R";

export type DropdownProps = DropdownOwnProps;
