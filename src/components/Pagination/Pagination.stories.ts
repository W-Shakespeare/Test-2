import { Pagination } from "./Pagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FivePages: Story = {
  args: {
    pageCount: 5,
  },
};
