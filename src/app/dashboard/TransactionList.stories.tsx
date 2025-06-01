import { TransactionList } from "./TransactionList";
import { Transaction, TransactionType } from "../../lib/models/Transaction";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Dashboard/TransactionList",
  component: TransactionList,
};

const mockTransactions = [
  new Transaction(
    "1",
    TransactionType.DEPOSIT,
    1234.56,
    new Date("2025-06-01"),
    "Depósito Teste"
  ),
  new Transaction(
    "2",
    TransactionType.WITHDRAWAL,
    500.0,
    new Date("2025-06-01"),
    "Saque Teste"
  ),
];

export const WithTransactions = {
  render: () => <TransactionList transactions={mockTransactions} />,
};

export const NoTransactions = {
  render: () => <TransactionList transactions={[]} />,
};
