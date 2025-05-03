// src/components/rutinas/RutinaGrid.jsx
import React from 'react';
import RutinaCard from './RutinaCard';

const RutinaGrid = ({ rutinas }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {rutinas.map((rutina) => (
        <RutinaCard
          key={rutina.id}
          titulo={rutina.nombre}
          categoria={rutina.categoria}
          calorias={rutina.calorias}
          duracion={rutina.duracion}
          imagenUrl={rutina.imagenUrl}
        />
      ))}
    </div>
  );
};

export default RutinaGrid;
