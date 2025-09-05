import type { Meta, StoryObj } from "@storybook/react-vite";

import { MainButton } from "../MainButton";
import Block from "./Block";
import { BlockProps } from "./Block.types";

const meta = {
  title: "Karpotic/Block",
  component: Block,
  tags: ["autodocs"],
  argTypes: {
    bgc: { control: "text" },
    w: { control: "text" },
    h: { control: "text" },
    p: { control: "text" },
    m: { control: "text" },
  },
  args: {},
} satisfies Meta<BlockProps>;

export default meta;
type Story = StoryObj<BlockProps>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <Block {...args}>
          <MainButton>Button1</MainButton>
          <MainButton>Button2</MainButton>
          <MainButton>Button3</MainButton>
        </Block>
      </>
    );
  },
};
