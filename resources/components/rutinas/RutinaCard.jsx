// src/components/rutinas/RutinaCard.jsx
import React from 'react';

const RutinaCard = ({ titulo, categoria, calorias, duracion, imagenUrl }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md h-44">
      {/* Imagen */}
      <img
        src={imagenUrl || '/img/default-rutina.jpg'}
        alt={titulo}
        className="w-full h-full object-cover"
      />

      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-0"></div>

      {/* Texto categoría y calorías arriba */}
      <div className="absolute top-2 left-2 z-10 text-white text-lg font-semibold">
        {categoria} 🔥{calorias}
      </div>

      {/* Duración abajo */}
      <div className="absolute bottom-2 left-2 z-10 text-white text-sm">
        {duracion} min
      </div>
    </div>
  );
};

export default RutinaCard;
