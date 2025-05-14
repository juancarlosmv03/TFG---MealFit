import React from 'react';

const RutinaCard = ({ titulo, categoria, calorias, duracion, imagenUrl }) => {
  return (
    <div className="w-full max-w-sm mx-auto px-2">
      <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
        {/* Imagen de fondo */}
        <img
          src={imagenUrl || '/storage/rutinas/default.jpg'}
          alt={titulo}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido encima */}
        <div className="relative z-10 h-full w-full p-4 text-white flex flex-col justify-between">
          <h3 className="text-lg font-bold truncate">{titulo || categoria}</h3>
          <div className="flex justify-between text-sm mt-auto">
            <span>{categoria}</span>
            <span>🔥 {calorias}</span>
            <span>{duracion} min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RutinaCard;
