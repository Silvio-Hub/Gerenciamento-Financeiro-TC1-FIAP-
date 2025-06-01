import { NewTransactionForm } from "./NewTransactionForm";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof NewTransactionForm> = {
  title: "Dashboard/NewTransactionForm",
  component: NewTransactionForm,
  parameters: {
    layout: "centered",
  },
  args: {
    onAddTransaction: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof NewTransactionForm>;

export const Default: Story = {
  args: {},
};
