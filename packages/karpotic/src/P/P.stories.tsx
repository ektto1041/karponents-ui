import type { Meta, StoryObj } from "@storybook/react-vite";

import P from "./P";
import { PProps } from "./P.types";

const meta = {
  title: "Karpotic/P",
  component: P,
  tags: ["autodocs"],
  argTypes: {
    typography: { control: "text" },
    w: { control: "object" },
    h: { control: "object" },
    p: { control: "object" },
    m: { control: "object" },
  },
  args: {
    typography: "r md",
    w: [undefined, "auto", undefined],
    h: [undefined, "auto", undefined],
    p: ["0px", "0px", "0px", "0px"],
    m: ["0px", "0px", "0px", "0px"],
  },
} satisfies Meta<PProps>;

export default meta;
type Story = StoryObj<PProps>;

export const Primary: Story = {
  render: (args) => {
    return (
      <>
        <P {...args}>This is paragraph.</P>
      </>
    );
  },
};
