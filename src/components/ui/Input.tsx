"use client";

import { FieldError } from "react-hook-form";
import { HTMLInputTypeAttribute, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  icon?: ReactNode;
  iconInteractive?: boolean;
  error?: FieldError | undefined;
}

export function Input({
  label,
  type,
  placeholder,
  icon,
  iconInteractive = false,
  error,
  id,
  className,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const errorId = error ? `${inputId}-error` : undefined;

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={cn(styles.inputContainer, "space-y-1")}>
      <label
        htmlFor={inputId}
        className={cn(styles.label, "block text-sm md:text-base font-medium")}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {icon && (
          <span
            className={cn(
              iconInteractive ? styles.icon : styles.iconDecorative
            )}
            {...(iconInteractive
              ? {
                  onClick: handleIconClick,
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleIconClick();
                    }
                  },
                  "aria-label": `Abrir seletor de ${label}`,
                }
              : {
                  "aria-hidden": "true",
                })}
          >
            {icon}
          </span>
        )}
        <input
          ref={inputRef}
          id={inputId}
          type={type}
          placeholder={placeholder}
          className={cn(
            styles.input,
            icon && styles.hasIcon,
            error && styles.error,
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={errorId}
          style={type === "date" ? { colorScheme: "dark" } : undefined}
          {...rest}
        />
      </div>
      {error && (
        <p id={errorId} className={styles.errorMessage}>
          {error.message}
        </p>
      )}
    </div>
  );
}
