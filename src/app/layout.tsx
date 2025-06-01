import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { AccountProvider } from "@/components/context/AccountContext";

export const metadata: Metadata = {
  title: "Financial Manage",
  description: "Manage your finances with ease",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AccountProvider>{children}</AccountProvider>
      </body>
    </html>
  );
}
