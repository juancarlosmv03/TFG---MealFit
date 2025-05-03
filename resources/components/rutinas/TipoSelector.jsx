// src/components/rutinas/TipoSelector.jsx
import React from 'react';

const TipoSelector = ({ activo, onSelect }) => {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <button
        onClick={() => onSelect('personalizadas')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
          activo === 'personalizadas'
            ? 'bg-blue-500 text-white'
            : 'border border-black dark:border-white text-black dark:text-white'
        }`}
      >
        PERSONALIZADAS
      </button>

      <button
        onClick={() => onSelect('preestablecidas')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
          activo === 'preestablecidas'
            ? 'bg-blue-500 text-white'
            : 'border border-black dark:border-white text-black dark:text-white'
        }`}
      >
        PREESTABLECIDAS
      </button>
    </div>
  );
};

export default TipoSelector;
