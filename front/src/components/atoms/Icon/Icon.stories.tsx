/* eslint-disable react-refresh/only-export-components */
import Icon from "./Icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    icon: "home",
    size: "xl",
  },
};
