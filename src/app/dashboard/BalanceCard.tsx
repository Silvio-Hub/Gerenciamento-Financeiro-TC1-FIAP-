"use client";

import { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useAccount } from "@/components/context/AccountContext";
import styles from "./BalanceCard.module.css";

interface BalanceCardProps {
  account: { name: string; accountNumber: string };
}

export function BalanceCard({ account }: BalanceCardProps) {
  const { getBalance } = useAccount();
  const balance = getBalance();
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prev) => !prev);
  };

  const formattedBalance = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Saldo Atual</h2>
      <p className={styles.name}>{account.name}</p>
      <p className={styles.accountNumber}>Conta: {account.accountNumber}</p>
      <div className={styles.balanceWrapper}>
        <p
          className={
            balance >= 0 ? styles.balancePositive : styles.balanceNegative
          }
        >
          {isBalanceVisible ? `R$ ${formattedBalance}` : "****"}
        </p>
        <button
          onClick={toggleBalanceVisibility}
          className={styles.toggleButton}
          aria-label={isBalanceVisible ? "Esconder saldo" : "Mostrar saldo"}
        >
          {isBalanceVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}
