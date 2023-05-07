/* eslint-disable react-refresh/only-export-components */
import { Icon, Label } from "@atomic/atoms";

import Button from "./Button";

import type { Meta, StoryObj } from "@storybook/react";
import tw from "twin.macro";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    buttonColor: {
      control: "color",
      description: "font Color",
    },
    bgColor: {
      control: "color",
      description: " background Color",
    },
    focusColor: {
      control: "color",
      description: "focus Color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

const chlid: React.ReactNode = (
  <div className="flex">
    <Icon icon="info" iconType="sr" size="xl" custom={tw`mx-1`} />
    <Label text="IconButton" size="xl" custom={tw`mx-1`} />
  </div>
);

export const IconButton: Story = {
  args: { variant: "primary", children: chlid },
};
