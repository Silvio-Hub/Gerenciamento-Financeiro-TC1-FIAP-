"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { CurrencyCircleDollar, Calendar } from "@phosphor-icons/react";
import { Transaction, TransactionType } from "@/lib/models/Transaction";
import { Input } from "@/components/ui/Input";
import { createLocalDate, formatDateToInput } from "@/lib/utils/dateUtils";
import styles from "./NewTransactionForm.module.css";

interface TransactionFormInputs {
  type: TransactionType;
  amount: string;
  description: string;
  date: string;
}

interface NewTransactionFormProps {
  onAddTransaction: (transaction: Transaction) => void;
}

export function NewTransactionForm({
  onAddTransaction,
}: NewTransactionFormProps) {
  const formatToBrazilian = (value: string | number): string => {
    const cleanValue = String(value).replace(/[^\d]/g, "");

    if (!cleanValue) return "";

    const num = parseInt(cleanValue, 10) / 100;

    return num.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const parseBrazilianToNumber = (value: string): string => {
    return value.replace(/\./g, "").replace(",", ".");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TransactionFormInputs>({
    defaultValues: {
      type: TransactionType.DEPOSIT,
      amount: "",
      description: "",
      date: formatDateToInput(new Date()),
    },
  });

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = formatToBrazilian(rawValue);
    setValue("amount", formattedValue, { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<TransactionFormInputs> = (data) => {
    const transaction = new Transaction(
      uuidv4(),
      data.type,
      parseFloat(parseBrazilianToNumber(data.amount)),
      createLocalDate(data.date),
      data.description
    );
    onAddTransaction(transaction);
    reset();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Nova Transação</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.selectWrapper}>
          <label htmlFor="type" className={styles.selectLabel}>
            Tipo de Transação
          </label>
          <select
            id="type"
            className={styles.select}
            {...register("type", { required: "Selecione o tipo de transação" })}
          >
            <option value={TransactionType.DEPOSIT}>Depósito</option>
            <option value={TransactionType.WITHDRAWAL}>Saque</option>
            <option value={TransactionType.TRANSFER}>Transferência</option>
          </select>
          {errors.type && (
            <span className={styles.errorMessage}>{errors.type.message}</span>
          )}
        </div>

        <Input
          label="Valor"
          type="text"
          inputMode="decimal"
          placeholder="Digite o valor"
          icon={<CurrencyCircleDollar size={20} />}
          {...register("amount", {
            required: "O valor é obrigatório",
            min: { value: 0.01, message: "O valor deve ser maior que 0" },
            validate: (value) => {
              const num = parseFloat(parseBrazilianToNumber(value));
              return !isNaN(num) || "O valor deve ser um número válido";
            },
          })}
          onChange={handleAmountChange}
          error={errors.amount}
        />

        <Input
          label="Descrição"
          type="text"
          placeholder="Digite a descrição"
          {...register("description", {
            required: "A descrição é obrigatória",
            minLength: {
              value: 3,
              message: "A descrição deve ter pelo menos 3 caracteres",
            },
          })}
          error={errors.description}
        />

        <Input
          label="Data"
          type="date"
          placeholder="Selecione a data"
          icon={<Calendar size={20} />}
          iconInteractive={true}
          {...register("date", {
            required: "A data é obrigatória",
          })}
          error={errors.date}
        />

        <button type="submit" className={styles.submitButton}>
          Adicionar Transação
        </button>
      </form>
    </div>
  );
}
