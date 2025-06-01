import { BalanceCard } from "./BalanceCard";
import { fn } from "storybook/test";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Dashboard/BalanceCard",
  component: BalanceCard,
};

const mockAccount = {
  name: "John Doe",
  accountNumber: "1234-5678",
};

export const PositiveBalance = {
  render: () => <BalanceCard account={mockAccount} />,
  args: {
    onToggleBalanceVisibility: fn(),
  },
};

export const NegativeBalance = {
  render: () => <BalanceCard account={mockAccount} />,
  args: {
    onToggleBalanceVisibility: fn(),
  },
};
