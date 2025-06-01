export enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAWAL = "withdrawal",
  TRANSFER = "transfer",
}

export class Transaction {
  private id: string;
  private type: TransactionType;
  private amount: number;
  private date: Date;
  private description: string;

  constructor(
    id: string,
    type: TransactionType,
    amount: number,
    date: Date,
    description: string
  ) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }

  public getId(): string {
    return this.id;
  }

  public getType(): TransactionType {
    return this.type;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getDate(): Date {
    return this.date;
  }

  public getDescription(): string {
    return this.description;
  }

  public updateDetails(
    type: TransactionType,
    amount: number,
    date: Date,
    description: string
  ): void {
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }

  public toJSON(): object {
    return {
      id: this.id,
      type: this.type,
      amount: this.amount,
      date: this.date.toISOString(),
      description: this.description,
    };
  }
}
