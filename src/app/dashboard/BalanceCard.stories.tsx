import { BalanceCard } from "./BalanceCard";
import type { Meta, StoryObj } from "@storybook/react";
import { Account } from "@/lib/models/Account";

const meta: Meta<typeof BalanceCard> = {
  title: "Dashboard/BalanceCard",
  component: BalanceCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BalanceCard>;

export const Default: Story = {
  args: {
    account: new Account("user-1", 1000),
  },
};
