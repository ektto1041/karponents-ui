import type { Meta, StoryObj } from "@storybook/react-vite";

import { MainButton } from "../MainButton";
import Block from "./Block";
import { BlockProps } from "./Block.types";

const meta = {
  title: "Karpotic/Block",
  component: Block,
  tags: ["autodocs"],
  argTypes: {
    w: { control: "object" },
    h: { control: "object" },
    p: { control: "object" },
    m: { control: "object" },
  },
  args: {
    w: [undefined, "100px", undefined],
    h: [undefined, "100px", undefined],
    p: ["0px", "0px", "0px", "0px"],
    m: ["0px", "0px", "0px", "0px"],
  },
} satisfies Meta<BlockProps>;

export default meta;
type Story = StoryObj<BlockProps>;

export const Primary: Story = {
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
