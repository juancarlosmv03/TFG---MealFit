// src/components/ajustes/CerrarSesionButton.jsx
import React from 'react';

const CerrarSesionButton = ({ onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // llamada a la función que le pases como prop
    } else {
      console.warn('No se pasó una función de logout.');
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default CerrarSesionButton;
