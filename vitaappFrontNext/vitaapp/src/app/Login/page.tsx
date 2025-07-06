"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Paso 3: Capturar token cuando regrese desde Google
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      router.push("/home"); // Redirige al home de Vita
    }
  }, [searchParams, router]);

  // Paso 2: Iniciar el flujo de Google
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/dev/auth/google";
  };

  return (
    <><div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-"
      style={{ backgroundImage: 'url("/fondovita.png")' }}
    >
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md text-white shadow-xl border border-white/20">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/VITALOGO.png"
              alt="Logo Vita"
              width={180}
              height={180}
              className="object-contain" />
          </div>

          <p className="text-center text-sm text-white/80 mb-8">
            Humanizando la nueva era de Internet con IA
          </p>

          {/* Formulario */}
          <h2 className="text-xl font-semibold mb-4">Iniciar Sesión</h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Correo / Email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400" />
            <input
              type="password"
              placeholder="Clave / Password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>

          <div className="text-right mt-2 mb-6">
            <a href="#" className="text-sm text-white/80 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-white font-semibold mb-1">¿Eres nuevo/a?</p>
            <p className="text-sm text-white/80">
              Regístrate y comienza una nueva aventura digital
            </p>
          </div>

          {/* Botón de Google,Apple y fb */}
          <div className="flex justify-center gap-4 mt-4">
           
            <button className="bg-[#1877F2] hover:bg-[#c33b2d] text-white text-sm px-5 py-2 rounded-full font-medium">
            Facebook
          </button>
           <button
              onClick={handleGoogleLogin}
              className="bg-[#DB4437] hover:bg-[#c33b2d] text-white text-sm px-5 py-2 rounded-full font-medium"
            >
              Google
            </button>
          <button className="bg-black hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-full font-medium">
            Apple ID
          </button>
          </div>

          <div className="text-center text-xs text-white/60 mt-6 space-x-2">
            <a href="#" className="hover:underline">Políticas de privacidad</a>
            <span>|</span>
            <a href="#" className="hover:underline">Condiciones de uso</a>
          </div>
        </div>
      </div></>
  );
};

export default Login;
