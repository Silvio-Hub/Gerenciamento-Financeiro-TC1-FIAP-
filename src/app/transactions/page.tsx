"use client";

import { useState } from "react";
import { Pencil, Trash } from "@phosphor-icons/react";
import { useAccount } from "@/components/context/AccountContext";
import { Transaction, TransactionType } from "@/lib/models/Transaction";
import { Footer } from "@/components/ui/Footer";
import {
  formatDateToLocal,
  createLocalDate,
  formatDateToInput,
} from "@/lib/utils/dateUtils";
import styles from "./TransactionPage.module.css";
import { TopBar } from "@/components/ui/ToBar";
import { TransactionModal } from "./TransactionModal";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";

interface TransactionFormInputs {
  type: TransactionType;
  amount: string;
  description: string;
  date: string;
}

export default function TransactionsPage() {
  const { transactions, addTransaction, updateTransaction, deleteTransaction } =
    useAccount();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [transactionToDelete, setTransactionToDelete] =
    useState<Transaction | null>(null);

  const handleAddTransaction = (data: Omit<TransactionFormInputs, "id">) => {
    const transaction = new Transaction(
      crypto.randomUUID(),
      data.type,
      parseFloat(data.amount),
      createLocalDate(data.date),
      data.description
    );
    addTransaction(transaction);
  };

  const handleUpdateTransaction = (
    id: string,
    data: Omit<TransactionFormInputs, "id">
  ) => {
    const updatedTransaction = new Transaction(
      id,
      data.type,
      parseFloat(data.amount),
      createLocalDate(data.date),
      data.description
    );
    updateTransaction(id, updatedTransaction);
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Transações</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className={styles.addButton}
            aria-label="Adicionar nova transação"
          >
            Adicionar Transação
          </button>
        </div>
        <div className={styles.tableContainer}>
          {transactions.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr className={styles.tableHeader}>
                  <th className={styles.tableHeaderCell}>Descrição</th>
                  <th className={styles.tableHeaderCell}>Tipo</th>
                  <th className={styles.tableHeaderCell}>Valor</th>
                  <th className={styles.tableHeaderCell}>Data</th>
                  <th className={styles.tableHeaderCell}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.getId()} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      {transaction.getDescription()}
                    </td>
                    <td className={styles.tableCell}>
                      {transaction.getType() === TransactionType.DEPOSIT
                        ? "Depósito"
                        : transaction.getType() === TransactionType.WITHDRAWAL
                        ? "Saque"
                        : "Transferência"}
                    </td>
                    <td
                      className={
                        transaction.getType() === TransactionType.DEPOSIT
                          ? styles.amountDeposit
                          : styles.amountWithdrawal
                      }
                    >
                      {transaction.getType() === TransactionType.DEPOSIT
                        ? "+"
                        : "-"}{" "}
                      R${" "}
                      {transaction.getAmount().toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className={styles.tableCell}>
                      {formatDateToLocal(transaction.getDate())}
                    </td>
                    <td
                      className={`${styles.tableCell} ${styles.actionButtons}`}
                    >
                      <button
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setIsEditModalOpen(true);
                        }}
                        className={styles.editButton}
                        aria-label={`Editar transação ${transaction.getDescription()}`}
                      >
                        <Pencil size={20} />
                      </button>
                      <button
                        onClick={() => {
                          setTransactionToDelete(transaction);
                          setIsDeleteModalOpen(true);
                        }}
                        className={styles.deleteButton}
                        aria-label={`Deletar transação ${transaction.getDescription()}`}
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.emptyMessage}>
              <p>
                Nenhuma transação encontrada. Adicione sua primeira transação!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      {isAddModalOpen && (
        <TransactionModal
          title="Adicionar Transação"
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddTransaction}
        />
      )}

      {isEditModalOpen && selectedTransaction && (
        <TransactionModal
          title="Editar Transação"
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedTransaction(null);
          }}
          onSubmit={(data) =>
            handleUpdateTransaction(selectedTransaction.getId(), data)
          }
          initialData={{
            type: selectedTransaction.getType(),
            amount: selectedTransaction.getAmount().toString(),
            description: selectedTransaction.getDescription(),
            date: formatDateToInput(selectedTransaction.getDate()),
          }}
        />
      )}

      {isDeleteModalOpen && transactionToDelete && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setTransactionToDelete(null);
          }}
          onConfirm={() => {
            deleteTransaction(transactionToDelete.getId());
            setIsDeleteModalOpen(false);
            setTransactionToDelete(null);
          }}
          transactionDescription={transactionToDelete.getDescription()}
        />
      )}
    </div>
  );
}
