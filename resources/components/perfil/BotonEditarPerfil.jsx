// src/components/perfil/BotonEditarPerfil.jsx
import React from 'react';

const BotonEditarPerfil = ({ onClick }) => {
  return (
    <div className="text-center mt-4">
      <button
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition"
      >
        Editar perfil
      </button>
    </div>
  );
};

export default BotonEditarPerfil;
