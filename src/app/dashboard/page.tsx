"use client";

import { BalanceCard } from "./BalanceCard";
import { TransactionList } from "./TransactionList";
import { NewTransactionForm } from "./NewTransactionForm";
import { useAccount } from "@/components/context/AccountContext";
import styles from "./DashboardPage.module.css";
import { TopBar } from "@/components/ui/TopBar";
import { Footer } from "@/components/ui/Footer";

export default function DashboardPage() {
  const { account, transactions, addTransaction } = useAccount();

  return (
    <div className={styles.container}>
      <TopBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao seu Gerenciamento Financeiro
        </h1>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <BalanceCard account={account} />
            <TransactionList transactions={transactions.slice(0, 5)} />
          </div>
          <NewTransactionForm onAddTransaction={addTransaction} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
