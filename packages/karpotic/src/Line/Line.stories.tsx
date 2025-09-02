import type { Meta, StoryObj } from "@storybook/react-vite";

import { MainButton } from "../MainButton";
import Line from "./Line";
import { LineProps } from "./Line.types";

const meta = {
  title: "Karpotic/Line",
  component: Line,
  tags: ["autodocs"],
  argTypes: {
    bgc: {
      control: "select",
      options: [
        "inherit",
        "white-1",
        "white-2",
        "white-3",
        "white-4",
        "grey-1",
        "grey-2",
        "grey-3",
        "grey-4",
        "grey-5",
        "black-1",
        "black-2",
        "black-3",
        "black-4",
        "black-5",
        "primary",
        "primary-light",
        "primary-dark",
      ],
    },
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    gap: {
      control: "select",
      options: ["0", "4px", "8px", "12px", "16px", "24px", "32px"],
    },
    jc: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    ai: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    },
    ac: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    multiline: { control: "boolean" },
    w: { control: "text" },
    h: { control: "text" },
    p: { control: "text" },
    m: { control: "text" },
  },
  args: {
    direction: "row",
    gap: "8px",
    jc: "flex-start",
    ai: "center",
    multiline: false,
  },
} satisfies Meta<LineProps>;

export default meta;
type Story = StoryObj<LineProps>;

export const Default: Story = {
  render: (args) => (
    <Line {...args}>
      <MainButton border="rounded">Button1</MainButton>
      <MainButton border="rounded">Button2</MainButton>
      <MainButton border="rounded">Button3</MainButton>
    </Line>
  ),
};

export const Vertical: Story = {
  args: {
    direction: "column",
    gap: "12px",
    ai: "flex-start",
  },
  render: (args) => (
    <Line {...args}>
      <MainButton border="rounded">First Button</MainButton>
      <MainButton border="rounded">Second Button</MainButton>
      <MainButton border="rounded">Third Button</MainButton>
    </Line>
  ),
};

export const SpaceBetween: Story = {
  args: {
    jc: "space-between",
    w: "400px",
    bgc: "white-2",
    p: "16px",
  },
  render: (args) => (
    <Line {...args}>
      <MainButton border="rounded">Left</MainButton>
      <MainButton border="rounded">Center</MainButton>
      <MainButton border="rounded">Right</MainButton>
    </Line>
  ),
};

export const Multiline: Story = {
  args: {
    multiline: true,
    gap: "8px",
    w: "300px",
    p: "16px",
    bgc: "white-2",
  },
  render: (args) => (
    <Line {...args}>
      <MainButton border="rounded">Button One</MainButton>
      <MainButton border="rounded">Button Two</MainButton>
      <MainButton border="rounded">Button Three</MainButton>
      <MainButton border="rounded">Button Four</MainButton>
      <MainButton border="rounded">Button Five</MainButton>
      <MainButton border="rounded">Button Six</MainButton>
    </Line>
  ),
};

export const WithDifferentSizes: Story = {
  args: {
    ai: "flex-end",
    gap: "16px",
    p: "20px",
    bgc: "white-2",
  },
  render: (args) => (
    <Line {...args}>
      <MainButton border="rounded" sizes="sm">
        Small
      </MainButton>
      <MainButton border="rounded" sizes="md">
        Medium
      </MainButton>
      <MainButton border="rounded" sizes="lg">
        Large
      </MainButton>
    </Line>
  ),
};
