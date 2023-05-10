import BoxSidebar from "./boxSidebar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BoxSidebar> = {
  argTypes: {},
  component: BoxSidebar,
  title: "BoxSidebar",
};

export default meta;
type Story = StoryObj<typeof BoxSidebar>;

export const Primary: Story = {
  args: {},
};
