import Sample from "./Sample";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sample> = {
  argTypes: {
    label: {
      control: "text",
      description: "label",
    },
    variable: {
      control: "select",
      description: "variable",
      options: ["type1", "type2", "type3"],
    },
  },
  component: Sample,
  title: "Sample",
};

export default meta;
type Story = StoryObj<typeof Sample>;

export const Primary: Story = {
  args: {
    label: "Sample Label",
    variable: "type1",
  },
};
