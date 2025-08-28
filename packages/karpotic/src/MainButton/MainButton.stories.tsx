import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

// @ts-ignore
import { ReactComponent as Logo } from "@assets/icons/search.svg";
import MainButton from "./MainButton";
import { MainButtonProps } from "./MainButton.types";

const meta = {
  title: "Karpotic/MainButton",
  component: MainButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
      options: ["sm", "md", "lg"],
    },
    border: {
      control: "inline-radio",
      options: [true, false],
    },
    color: {
      control: "inline-radio",
      options: ["default", "dark"],
    },
    showIcon: {
      control: "inline-radio",
      options: [true, false],
    },
  },
  args: {
    size: "md",
    border: true,
    onClick: fn(),
    color: "default",
    showIcon: false,
  },
} satisfies Meta<MainButtonProps & { showIcon: boolean }>;

export default meta;
type Story = StoryObj<MainButtonProps & { showIcon: boolean }>;

export const Primary: Story = {
  render: (args) => {
    return (
      <>
        <MainButton {...args} Icon={args.showIcon ? Logo : undefined}>
          Button2
        </MainButton>
      </>
    );
  },
};
