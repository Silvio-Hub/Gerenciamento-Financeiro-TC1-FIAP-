"use client";

import { useEffect, useRef } from "react";
import { X } from "@phosphor-icons/react";
import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ title, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div
        className={styles.modal}
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className={styles.header}>
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
