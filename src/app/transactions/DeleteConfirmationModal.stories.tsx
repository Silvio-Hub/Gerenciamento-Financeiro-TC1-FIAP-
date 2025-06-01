import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { fn } from "storybook/test";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Transactions/DeleteConfirmationModal",
  component: DeleteConfirmationModal,
};

export const Default = {
  render: () => (
    <DeleteConfirmationModal
      isOpen={true}
      onClose={fn()}
      onConfirm={fn()}
      transactionDescription="Depósito Teste"
    />
  ),
};
