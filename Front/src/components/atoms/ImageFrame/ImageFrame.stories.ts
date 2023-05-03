import ImageFrame from "./ImageFrame";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImageFrame> = {
  argTypes: {
    imageUrl: {
      control: "text",
      description: "이미지 경로",
    },
    width: {
      control: "number",
      description: "이미지 너비",
    },
    height: {
      control: "number",
      description: "이미지 높이",
    },
    unit: {
      control: "text",
      description: "css 단위(unit)",
    },
  },
  component: ImageFrame,
  title: "ImageFrame",
};

export default meta;
type Story = StoryObj<typeof ImageFrame>;

export const Primary: Story = {
  args: {
    imageUrl: "src/assets/DocDoc.png",
    width: 100,
    height: 100,
    unit: "%",
  },
};
