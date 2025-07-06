import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-"
      style={{ backgroundImage: 'url("/fondovita.png")' }}
>
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md text-white shadow-xl border border-white/20">
        
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img
            src="/VITALOGO.png"
            alt="Logo Vita"
            className="w-16 h-16 object-contain"
          />
        </div>

        <p className="text-center text-sm text-white/80 mb-8">
          Humanizando la nueva era de Internet con IA
        </p>

        {/* Título */}
        <h2 className="text-xl font-semibold mb-4">Iniciar Sesión</h2>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Correo / Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="password"
            placeholder="Clave / Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Olvidaste tu contraseña */}
        <div className="text-right mt-2 mb-6">
          <a href="#" className="text-sm text-white/80 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Registro */}
        <div className="text-center mb-6">
          <p className="text-sm text-white font-semibold mb-1">¿Eres nuevo/a?</p>
          <p className="text-sm text-white/80">
            Regístrate y comienza una nueva aventura digital
          </p>
        </div>

        {/* Botones sociales */}
        <div className="flex justify-center gap-4">
          <button className="bg-[#3b5998] hover:bg-[#314d86] text-white text-sm px-5 py-2 rounded-full font-medium">
            Facebook
          </button>
          <button className="bg-[#DB4437] hover:bg-[#c33b2d] text-white text-sm px-5 py-2 rounded-full font-medium">
            Gmail
          </button>
          <button className="bg-black hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-full font-medium">
            Apple ID
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-white/60 mt-6 space-x-2">
          <a href="#" className="hover:underline">Políticas de privacidad</a>
          <span>|</span>
          <a href="#" className="hover:underline">Condiciones de uso</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

