import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";
import styles from "./Login.module.css";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1c1c1f] md:flex-row">
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center opacity-70 rounded-r-3xl"
        style={{ backgroundImage: "url('/image/login-bg.jpg')" }}
      ></div>
      <div className="flex w-full items-center justify-center p-6 md:w-1/2 min-h-screen">
        <div className="w-full max-w-md rounded-lg bg-[#1c1c1f] p-8 mx-auto">
          <div className={styles.logoContainer}>
            <Image
              src="/logo-pc.png"
              alt="Financial Manage Logo"
              width={150}
              height={150}
            />
          </div>
          <h1 className="mb-2 text-2xl font-semibold text-white">
            Boas vindas
          </h1>
          <p className={styles.subtitle}>Faça login para acessar a sua conta</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
