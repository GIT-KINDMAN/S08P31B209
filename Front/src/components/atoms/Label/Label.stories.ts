import Label from "./Label";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
  argTypes: {
    text: {
      control: "text",
      description: "라벨 이름",
    },
    size: {
      control: "select",
      description: "라벨 크기",
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
    },
    isBold: {
      control: "boolean",
      description: "Bold 여부",
    },
    fontStyle: {
      control: "select",
      description: "폰트 스타일",
      options: ["normal", "italic", "oblique", "initial", "inherit"],
    },
    labelColor: {
      control: "color",
      description: "폰트 색상",
    },
    bgColor: {
      control: "color",
      description: "배경 색상",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    text: "Label Test",
    size: "md",
  },
};
