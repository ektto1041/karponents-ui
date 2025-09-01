import type { Meta, StoryObj } from "@storybook/react-vite";

// @ts-ignore
import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";
import { useState } from "react";
import { fn } from "storybook/test";
import Dropdown from "./Dropdown";
import { DropdownItemData, DropdownProps } from "./Dropdown.types";

const meta = {
  title: "Karpotic/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    sizes: {
      control: {
        type: "inline-radio",
      },
      options: ["sm", "md", "lg"],
    },
    colorSet: {
      control: "inline-radio",
      options: ["default", "dark"],
    },
    width: {
      control: "inline-radio",
      options: ["auto", "full", "300px"],
    },
    label: {
      control: "text",
    },
    isOpen: {
      control: false,
    },
    setOpen: {
      control: false,
    },
  },
  args: {
    sizes: "md",
    colorSet: "default",
    width: "auto",
    anchor: "L",
    label: "Dropdown",
  },
} satisfies Meta<DropdownProps>;

export default meta;
type Story = StoryObj<DropdownProps>;

export const Primary: Story = {
  render: (args) => {
    const [isOpen, setOpen] = useState(false);
    const itemList: DropdownItemData[] = [
      {
        label: "Item 1: Javascript + Java",
        onClick: fn(),
      },
      {
        label: "Item 2: Typescript",
        onClick: fn(),
      },
      {
        label: "Item 3: React.js",
        onClick: fn(),
      },
      null,
      {
        label: "Item 4: Next.js",
        onClick: fn(),
      },
      {
        label: "Item 5: Nest.js",
        onClick: fn(),
      },
    ];

    return (
      <>
        <Dropdown
          {...args}
          setOpen={setOpen}
          isOpen={isOpen}
          itemList={itemList}
        />
      </>
    );
  },
};

export const CustomButton: Story = {
  render: (args) => {
    const [isOpen, setOpen] = useState(false);
    const itemList: DropdownItemData[] = [
      {
        label: "Item 1: Javascript + Java",
        onClick: fn(),
      },
      {
        label: "Item 2: Typescript",
        onClick: fn(),
      },
      {
        label: "Item 3: React.js",
        onClick: fn(),
      },
      null,
      {
        label: "Item 4: Next.js",
        onClick: fn(),
      },
      {
        label: "Item 5: Nest.js",
        onClick: fn(),
      },
    ];

    return (
      <>
        <Dropdown
          {...args}
          setOpen={setOpen}
          isOpen={isOpen}
          itemList={itemList}
          buttonProps={{
            border: false,
            Icon: SearchIcon,
          }}
        />
      </>
    );
  },
};
