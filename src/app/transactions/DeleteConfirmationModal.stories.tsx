import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof DeleteConfirmationModal> = {
  title: "Transactions/DeleteConfirmationModal",
  component: DeleteConfirmationModal,
  argTypes: {
    onClose: { action: "closed" },
    onConfirm: { action: "confirmed" },
    transactionDescription: { control: "text" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof DeleteConfirmationModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    onConfirm: fn(),
    transactionDescription: "Salário",
  },
};
