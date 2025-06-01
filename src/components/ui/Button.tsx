"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    styles.button,
    styles[variant],
    disabled && styles.disabled,
    "cursor-pointer md:text-base",
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      aria-disabled={disabled ? "true" : "false"}
      {...props}
    >
      {children}
    </button>
  );
}
