/* eslint-disable react-refresh/only-export-components */
import Icon from "./Icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    iconType: {
      control: "select",
      description: "Icon Type",
      options: ["rs", "rr", "bs", "br", "ss", "sr", "ts", "tr"],
    },
    iconColor: {
      control: "color",
      description: "Color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: "home",
    iconType: "rs",
    iconColor: "#AAA",
    size: "xl",
  },
};
