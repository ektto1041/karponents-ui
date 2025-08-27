import type { Meta, StoryObj } from "@storybook/react-vite";

import { ReactComponent as Logo } from "@assets/icons/search.svg";
import MainInput from "./MainInput";
import { MainInputProps } from "./MainInput.types";

const meta = {
  title: "Karpotic/MainInput",
  component: MainInput,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: {
        type: "inline-radio",
      },
      options: ["full", "300px"],
    },
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
    showIcon: {
      control: "inline-radio",
      options: [true, false],
    },
  },
  args: {
    width: "300px",
    sizes: "md",
    color: "default",
    showIcon: false,
  },
} satisfies Meta<MainInputProps & { showIcon: boolean }>;

export default meta;
type Story = StoryObj<MainInputProps & { showIcon: boolean }>;

export const Primary: Story = {
  render: (args) => {
    return (
      <>
        <MainInput
          {...args}
          placeholder="텍스트를 입력해주세요."
          Icon={args.showIcon ? Logo : undefined}
        />
      </>
    );
  },
};
