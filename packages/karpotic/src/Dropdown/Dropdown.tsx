import { ReactComponent as ArrowDownIcon } from "@assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@assets/icons/arrow-up.svg";
import { c } from "@karponents-ui/utils";
import { FC } from "react";
import { MainButton } from "../MainButton";
import {
  DropdownMenuItemProps,
  DropdownMenuProps,
  DropdownProps,
} from "./Dropdown.types";
import styles from "./style.module.css";

const Dropdown: FC<DropdownProps> = ({
  sizes = "md",
  color = "default",
  label,
  anchor = "L",
  width = "auto",
  buttonProps,
  isOpen,
  setOpen,
  itemList,
}) => {
  console.log(buttonProps);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div
      className={c(styles.container, "r", sizes)}
      style={{
        width: width === "full" ? "100%" : width,
      }}
    >
      <MainButton
        sizes={sizes}
        width={width}
        color={color}
        {...buttonProps}
        Icon={buttonProps?.Icon || (isOpen ? ArrowUpIcon : ArrowDownIcon)}
        onClick={handleOpen}
      >
        {label}
      </MainButton>
      {isOpen && (
        <DropdownMenu itemList={itemList} color={color} anchor={anchor} />
      )}
    </div>
  );
};

const DropdownMenu: FC<DropdownMenuProps> = ({ itemList, color, anchor }) => {
  return (
    <ul
      className={c(
        styles["dropdown-menu"],
        styles[color],
        anchor === "L" ? styles["anchor-l"] : styles["anchor-r"]
      )}
    >
      {itemList.map((item, i) => (
        <DropdownMenuItem item={item} color={color} key={i} />
      ))}
    </ul>
  );
};

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({ item, color }) => {
  return item ? (
    <li
      className={c(styles["dropdown-item"], styles[color])}
      onClick={() => {
        item.onClick();
      }}
    >
      {item?.label}
    </li>
  ) : (
    <li className={styles["dropdown-divider"]}>
      <div className={[styles["divider-line"], styles[color]].join(" ")} />
    </li>
  );
};

export default Dropdown;
