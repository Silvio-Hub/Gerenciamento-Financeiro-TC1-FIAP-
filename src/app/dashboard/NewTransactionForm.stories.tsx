import { NewTransactionForm } from "./NewTransactionForm";
import { fn } from "storybook/test";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Dashboard/NewTransactionForm",
  component: NewTransactionForm,
};

export const Default = {
  render: () => <NewTransactionForm onAddTransaction={fn()} />,
};
