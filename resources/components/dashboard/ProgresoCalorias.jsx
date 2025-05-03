// src/components/dashboard/ProgresoCalorias.jsx
import React from 'react';

const ProgresoCalorias = ({ valor, objetivo }) => {
  const porcentaje = Math.min((valor / objetivo) * 100, 100).toFixed(0);

  return (
    <div className="w-40 h-40 rounded-full border-4 border-blue-400 flex flex-col items-center justify-center text-center text-black dark:text-white">
      <span className="text-lg font-bold">{valor} / {objetivo}</span>
      <span className="text-sm">Calorías</span>
      <span className="text-xs text-blue-600 dark:text-blue-400 mt-1">{porcentaje}%</span>
    </div>
  );
};

export default ProgresoCalorias;
