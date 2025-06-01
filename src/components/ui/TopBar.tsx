"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  CurrencyCircleDollar,
  House,
  List,
  SignOut,
  X,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import styles from "./TopBar.module.css";

export function TopBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsMenuOpen(false);
    router.push("/login");
  };

  const handleNotificationsKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      console.log("Notificações ativadas");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className={cn(styles.header, "py-4")}>
      <div className={cn(styles.container, "px-4 sm:px-6 lg:px-16")}>
        <div className={styles.logoContainer}>
          <Image
            src="/my-logo.png"
            alt="Financial Manage Logo"
            width={150}
            height={25}
            className={styles.logo}
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/image/minha-foto.png"
            alt="Foto do usuário"
            width={32}
            height={32}
            className={cn(styles.userPhoto, "md:w-10 md:h-10")}
            priority
          />
          <p className={styles.welcomeText}>
            <span className={styles.welcome}>Bem-vindo:</span> Silvio Celso
          </p>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <span
            className={styles.notificationIcon}
            onKeyDown={handleNotificationsKeyDown}
            onClick={() => setIsMenuOpen(false)}
            tabIndex={0}
            role="button"
            aria-label="Abrir notificações"
          >
            <Bell size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </span>
          <button
            className={styles.hamburgerButton}
            onClick={toggleMenu}
            onKeyDown={handleMenuKeyDown}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            tabIndex={0}
          >
            {isMenuOpen ? (
              <X size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
            ) : (
              <List size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
            )}
          </button>
        </div>
        <nav
          id="nav-menu"
          className={cn(
            styles.navLinks,
            isMenuOpen && styles.navLinksCollapsed,
            isMenuOpen && styles.open
          )}
        >
          <div className={styles.sidebarLogo}>
            <Image
              src="/my-logo.png"
              alt="Financial Manage Logo"
              width={150}
              height={25}
              className={styles.logo}
              priority
            />
          </div>
          <Link
            href="/dashboard"
            className={styles.navItem}
            aria-label="Ir para o Dashboard"
            onClick={() => setIsMenuOpen(false)}
          >
            <House size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
            <span>HOME</span>
          </Link>
          <Link
            href="/transactions"
            className={styles.navItem}
            aria-label="Ir para Transações"
            onClick={() => setIsMenuOpen(false)}
          >
            <CurrencyCircleDollar
              size={24}
              className="sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
            <span className={styles.transactionsText}>Transações</span>
          </Link>
          <span
            className={styles.navItem}
            onKeyDown={handleNotificationsKeyDown}
            onClick={() => setIsMenuOpen(false)}
            tabIndex={0}
            role="button"
            aria-label="Abrir notificações"
          >
            <Bell size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
            <span>Avisos</span>
          </span>
          <button
            onClick={handleLogout}
            className={styles.logoutItem}
            aria-label="Sair da aplicação"
          >
            <SignOut size={24} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
