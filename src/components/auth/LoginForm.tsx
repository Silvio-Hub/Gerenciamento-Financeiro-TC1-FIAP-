"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { Envelope, Lock } from "@phosphor-icons/react";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Dados do login:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Endereço de e-mail"
        type="email"
        placeholder="Digite o seu e-mail"
        icon={<Envelope size={20} />}
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Sua senha"
        type="password"
        placeholder="Digite a sua senha"
        icon={<Lock size={20} />}
        {...register("password")}
        error={errors.password}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Entrando..." : "Fazer login"}
      </Button>
      <div className="text-end">
        <Link
          href="/forgot-password"
          className="text-[#6D28D9] hover:underline text-sm"
        >
          Esqueceu a senha?
        </Link>
      </div>
    </form>
  );
}
