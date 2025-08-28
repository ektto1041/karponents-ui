import { ReactComponent as ArrowDownIcon } from "@assets/icons/arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@assets/icons/arrow-up.svg";
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
  isOpen,
  setOpen,
  itemList,
}) => {
  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={[styles.container, "r", sizes].join(" ")}>
      <MainButton
        size={sizes}
        color={color}
        Icon={isOpen ? ArrowUpIcon : ArrowDownIcon}
        onClick={handleOpen}
      >
        {label}
      </MainButton>
      {isOpen && <DropdownMenu itemList={itemList} />}
    </div>
  );
};

const DropdownMenu: FC<DropdownMenuProps> = ({ itemList }) => {
  return (
    <ul className={styles["dropdown-menu"]}>
      {itemList.map((item, i) => (
        <DropdownMenuItem item={item} key={i} />
      ))}
    </ul>
  );
};

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({ item }) => {
  return item ? (
    <li
      className={styles["dropdown-item"]}
      onClick={() => {
        item.onClick();
      }}
    >
      {item?.label}
    </li>
  ) : (
    <li className={styles["dropdown-divider"]}>
      <div className={styles["divider-line"]} />
    </li>
  );
};

export default Dropdown;
