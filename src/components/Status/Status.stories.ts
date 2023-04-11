import { Status } from "./Status";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Status",
  component: Status,
  tags: ["autodocs"],
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    active: false,
  },
};
