"use client";

import { Transaction, TransactionType } from "@/lib/models/Transaction";

// Função para formatar a data sem ajustes de fuso horário
const formatDateToLocal = (date: Date): string => {
  return date.toLocaleDateString("pt-BR");
};

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="rounded-lg bg-white p-6 md:p-8 shadow-md">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">
        Últimas Transações
      </h2>
      <ul className="mt-4 space-y-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.getId()}
            className="flex justify-between items-center"
          >
            <div>
              <p className="text-sm md:text-base font-medium text-gray-900">
                {transaction.getDescription()}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                {formatDateToLocal(transaction.getDate())}
              </p>
            </div>
            <p
              className={`text-sm md:text-base font-medium ${
                transaction.getType() === TransactionType.DEPOSIT
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.getType() === TransactionType.DEPOSIT ? "+" : "-"} R${" "}
              {transaction.getAmount().toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
