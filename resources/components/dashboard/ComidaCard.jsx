// src/components/dashboard/ComidaCard.jsx
import React from 'react';

const ComidaCard = ({ tipo, calorias, onAdd }) => {
  return (
    <div className="space-y-2">
      <p className="uppercase text-sm tracking-wide border-b border-black dark:border-white pb-1 mt-2">
        {tipo} | {calorias} KCAL
      </p>

      <div className="flex justify-center">
        <button
          onClick={onAdd}
          className="bg-blue-500 text-white text-lg px-6 py-1 rounded-full font-bold mt-2 hover:bg-blue-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ComidaCard;
