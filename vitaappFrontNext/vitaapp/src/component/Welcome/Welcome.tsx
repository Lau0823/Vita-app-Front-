import React from "react";

const Welcome = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-8 text-white"
      style={{ backgroundImage: 'url("/fondovita.png")' }}
    >
      {/* Logo grande */}
      <img
        src="/VITALOGO.png"
        alt="Logo Vita"
        className="w-48 h-48 mb-6 object-contain"
      />

      {/* Mensaje de bienvenida */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
        ¡Bienvenido a <span className="bg-gradient-to-r from-[#74277B] via-[#27559F] to-[#06A7C7] bg-clip-text text-transparent">Vita</span>!
      </h1>
      <p className="text-lg md:text-xl text-center text-white/80 max-w-md">
        Humanizando la nueva era del Internet con Inteligencia Artificial 
      </p>

      {/* Botón de continuar */}
      <a
        href="/login"
        className="mt-8 px-8 py-3 bg-gradient-to-r from-[#74277B] via-[#27559F] to-[#06A7C7] rounded-full text-white font-semibold text-sm shadow-md hover:scale-105 transition-all"
      >
        Empezar ahora
      </a>
    </div>
  );
};

export default Welcome;
