/* eslint-disable react-refresh/only-export-components */
import TextInput from "./TextInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "atoms/Input/TextInput",
  component: TextInput,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    fontSize: "md",
    variant: "primary",
  },
};

export const Error: Story = {
  args: {
    fontSize: "md",
    variant: "error",
  },
};
