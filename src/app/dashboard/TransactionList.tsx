"use client";

import { Transaction, TransactionType } from "@/lib/models/Transaction";
import { cn } from "@/lib/utils";
import styles from "./TransactionList.module.css";
import { formatDateToLocal } from "@/lib/utils/dateUtils";

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className={styles.container}>
      <h2 className={cn(styles.title, "md:text-xl")}>Últimas Transações</h2>
      {transactions.length === 0 ? (
        <p className={styles.emptyMessage}>Nenhuma transação disponível</p>
      ) : (
        <ul className={cn(styles.list, "space-y-4")}>
          {transactions.map((transaction) => {
            const isDeposit = transaction.getType() === TransactionType.DEPOSIT;
            const transactionLabel = `${
              isDeposit
                ? "Depósito"
                : transaction.getType() === TransactionType.WITHDRAWAL
                ? "Saque"
                : "Transferência"
            } de R$ ${transaction
              .getAmount()
              .toFixed(2)} em ${formatDateToLocal(transaction.getDate())}`;
            return (
              <li
                key={transaction.getId()}
                className={styles.listItem}
                tabIndex={0}
                aria-label={transactionLabel}
              >
                <div>
                  <p className={styles.description}>
                    {transaction.getDescription()}
                  </p>
                  <p className={styles.date}>
                    {formatDateToLocal(transaction.getDate())}
                  </p>
                </div>
                <p
                  className={
                    isDeposit ? styles.amountDeposit : styles.amountWithdrawal
                  }
                >
                  {isDeposit ? "+" : "-"} R${" "}
                  {transaction.getAmount().toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
