/* eslint-disable react-refresh/only-export-components */
import Image from "./Image";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Image> = {
  title: "atoms/Image",
  component: Image,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Primary: Story = {
  args: {
    imageUrl: "src/assets/DocDoc.png",
  },
};
