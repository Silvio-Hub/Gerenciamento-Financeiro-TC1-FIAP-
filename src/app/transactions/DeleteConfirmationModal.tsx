"use client";

import { X } from "@phosphor-icons/react";
import styles from "./DeleteConfirmationModal.module.css";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  transactionDescription: string;
}

export function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  transactionDescription,
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Confirmar Exclusão</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
        </div>
        <p className={styles.message}>
          Tem certeza de que deseja excluir a transação{" "}
          <span className={styles.messageDescription}>
            {transactionDescription}
          </span>
          ?
        </p>
        <div className={styles.buttonContainer}>
          <button
            onClick={onClose}
            className={styles.cancelButton}
            aria-label="Cancelar exclusão"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className={styles.confirmButton}
            aria-label="Confirmar exclusão"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
