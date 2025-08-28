import type { Meta, StoryObj } from "@storybook/react-vite";

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
    color: {
      control: "inline-radio",
      options: ["default", "dark"],
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
    color: "default",
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
        label: "Item1",
        onClick: fn(),
      },
      {
        label: "Item2",
        onClick: fn(),
      },
      {
        label: "Item3",
        onClick: fn(),
      },
      null,
      {
        label: "Item4",
        onClick: fn(),
      },
      {
        label: "Item5",
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
