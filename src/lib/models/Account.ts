import { TransactionType, Transaction } from "./Transaction";

export class Account {
  private id: string;
  private balance: number;
  private transactions: Transaction[];

  constructor(id: string, initialBalance: number = 0) {
    this.id = id;
    this.balance = initialBalance;
    this.transactions = [];
  }

  public getId(): string {
    return this.id;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getTransactions(): Transaction[] {
    return [...this.transactions];
  }

  public addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
    if (transaction.getType() === TransactionType.DEPOSIT) {
      this.balance += transaction.getAmount();
    } else if (
      transaction.getType() === TransactionType.WITHDRAWAL ||
      transaction.getType() === TransactionType.TRANSFER
    ) {
      this.balance -= transaction.getAmount();
    }
  }

  public toJSON(): object {
    return {
      id: this.id,
      balance: this.balance,
      transactions: this.transactions.map((t) => t.toJSON()),
    };
  }
}
