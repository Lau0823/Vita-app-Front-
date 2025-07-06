"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      router.push("/home"); // Cambia a tu ruta principal si es otra
    }
  }, [token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <p>Procesando autenticación...</p>
    </div>
  );
}
