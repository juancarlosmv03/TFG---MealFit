// src/components/perfil/DatosUsuario.jsx
import React from 'react';

const DatosUsuario = ({ peso, altura, edad, objetivo }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <p className="text-sm font-semibold">Peso</p>
        <p className="mt-1 text-lg">{peso} kg</p>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <p className="text-sm font-semibold">Altura</p>
        <p className="mt-1 text-lg">{altura} cm</p>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <p className="text-sm font-semibold">Edad</p>
        <p className="mt-1 text-lg">{edad}</p>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <p className="text-sm font-semibold">Objetivo</p>
        <p className="mt-1 text-lg">{objetivo}</p>
      </div>
    </div>
  );
};

export default DatosUsuario;
