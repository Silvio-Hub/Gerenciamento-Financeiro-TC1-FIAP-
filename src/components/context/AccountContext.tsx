"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Transaction, TransactionType } from "@/lib/models/Transaction";

interface Account {
  name: string;
  accountNumber: string;
}

interface AccountContextType {
  account: Account;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  updateTransaction: (id: string, updatedTransaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
  getBalance: () => number;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [account] = useState<Account>({
    name: "Silvio Celso",
    accountNumber: "12345-6",
  });

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const updateTransaction = (id: string, updatedTransaction: Transaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.getId() === id ? updatedTransaction : t))
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.getId() !== id));
  };

  const getBalance = (): number => {
    return transactions.reduce((balance, transaction) => {
      const amount = transaction.getAmount();
      switch (transaction.getType()) {
        case TransactionType.DEPOSIT:
          return balance + amount;
        case TransactionType.WITHDRAWAL:
        case TransactionType.TRANSFER:
          return balance - amount;
        default:
          return balance;
      }
    }, 0);
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        getBalance,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount(): AccountContextType {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }
  return context;
}
