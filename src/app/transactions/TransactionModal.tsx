"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CurrencyCircleDollar, X, Calendar } from "@phosphor-icons/react";
import { TransactionType } from "@/lib/models/Transaction";
import { Input } from "@/components/ui/Input";
import { formatDateToInput } from "@/lib/utils/dateUtils";
import styles from "./TransactionModal.module.css";

interface TransactionModalProps {
  title: string;
  onClose: () => void;
  onSubmit: (data: Omit<TransactionFormInputs, "id">) => void;
  initialData?: Omit<TransactionFormInputs, "id">;
}

interface TransactionFormInputs {
  type: TransactionType;
  amount: string;
  description: string;
  date: string;
}

export function TransactionModal({
  title,
  onClose,
  onSubmit,
  initialData,
}: TransactionModalProps) {
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
    defaultValues: initialData
      ? {
          type: initialData.type,
          amount: formatToBrazilian(initialData.amount),
          description: initialData.description,
          date: initialData.date,
        }
      : {
          type: TransactionType.DEPOSIT,
          amount: "",
          description: "",
          date: formatDateToInput(new Date()),
        },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        type: initialData.type,
        amount: formatToBrazilian(initialData.amount),
        description: initialData.description,
        date: initialData.date,
      });
    }
  }, [initialData, reset]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = formatToBrazilian(rawValue);
    setValue("amount", formattedValue, { shouldValidate: true });
  };

  const handleFormSubmit: SubmitHandler<TransactionFormInputs> = (data) => {
    const formattedData = {
      ...data,
      amount: parseBrazilianToNumber(data.amount),
    };
    onSubmit(formattedData);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
          <div className={styles.selectWrapper}>
            <label htmlFor="type" className={styles.selectLabel}>
              Tipo de Transação
            </label>
            <select
              id="type"
              className={styles.select}
              {...register("type", {
                required: "Selecione o tipo de transação",
              })}
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
            placeholder="Digite o valor (ex.: 1.234,56)"
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

          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
            <button type="submit" className={styles.submitButton}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
