import type { Meta, StoryObj } from "@storybook/react-vite";

import H1 from "./H1";
import { ParagraphProps } from "./Paragraph.types";

const meta = {
  title: "Karpotic/H1",
  component: H1,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "text" },
    w: { control: "object" },
    h: { control: "object" },
    p: { control: "object" },
    m: { control: "object" },
  },
  args: {
    color: "inherit",
    w: [undefined, "auto", undefined],
    h: [undefined, "auto", undefined],
    p: ["0px", "0px", "0px", "0px"],
    m: ["0px", "0px", "0px", "0px"],
  },
} satisfies Meta<ParagraphProps<"h1">>;

export default meta;
type Story = StoryObj<ParagraphProps<"h1">>;

export const Primary: Story = {
  render: (args) => {
    return (
      <>
        <H1 {...args}>This is Heading 1.</H1>
      </>
    );
  },
};
