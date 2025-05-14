// resources/js/components/TipoSelector.jsx
import React, { useState } from 'react';

const TipoSelector = ({ onChange }) => {
  const [tipo, setTipo] = useState('personalizadas');

  const handleClick = (nuevo) => {
    setTipo(nuevo);
    if (onChange) onChange(nuevo);
  };

  return (
    <div className="flex justify-center gap-2 mb-4">
      <button
        onClick={() => handleClick('personalizadas')}
        className={`px-4 py-2 rounded-full text-sm font-semibold 
          ${tipo === 'personalizadas'
            ? 'bg-blue-500 text-white'
            : 'border border-black text-black dark:border-white dark:text-white'}`}
      >
        PERSONALIZADAS
      </button>
      <button
        onClick={() => handleClick('preestablecidas')}
        className={`px-4 py-2 rounded-full text-sm font-semibold 
          ${tipo === 'preestablecidas'
            ? 'bg-blue-500 text-white'
            : 'border border-black text-black dark:border-white dark:text-white'}`}
      >
        PREESTABLECIDAS
      </button>
    </div>
  );
};

export default TipoSelector;
