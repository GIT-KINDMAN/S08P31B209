import Icon from "./Icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  argTypes: {
    size: {
      control: "select",
      description: "아이콘 크기",
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
    icon: {
      control: "text",
      description: "아이콘 이름",
    },
    iconType: {
      control: "select",
      description: "아이콘 타입",
      options: ["rs", "rr", "bs", "br", "ss", "sr", "ts", "tr"],
    },
    iconColor: {
      control: "color",
      description: "아이콘 색상",
    },
  },
  component: Icon,
  title: "Icon",
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: "Home",
    iconType: "rs",
    iconColor: "#AAA",
    size: "md",
  },
};
