// src/components/dashboard/BarrasNutricion.jsx
import React from 'react';

const BarrasNutricion = ({ proteinas, carbohidratos, grasas }) => {
  const calcularPorcentaje = (actual, objetivo) => {
    const porcentaje = (actual / objetivo) * 100;
    return porcentaje > 100 ? 100 : Math.round(porcentaje);
  };

  return (
    <div className="w-full max-w-xs space-y-4 text-sm text-black dark:text-white">
      <div>
        <p className="mb-1">PROTEÍNAS {proteinas.valor}/{proteinas.objetivo}g</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
          <div
            className="bg-blue-500 h-1.5 rounded-full"
            style={{ width: `${calcularPorcentaje(proteinas.valor, proteinas.objetivo)}%` }}
          ></div>
        </div>
      </div>

      <div>
        <p className="mb-1">CARBOHIDRATOS {carbohidratos.valor}/{carbohidratos.objetivo}g</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
          <div
            className="bg-blue-500 h-1.5 rounded-full"
            style={{ width: `${calcularPorcentaje(carbohidratos.valor, carbohidratos.objetivo)}%` }}
          ></div>
        </div>
      </div>

      <div>
        <p className="mb-1">GRASAS {grasas.valor}/{grasas.objetivo}g</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
          <div
            className="bg-blue-500 h-1.5 rounded-full"
            style={{ width: `${calcularPorcentaje(grasas.valor, grasas.objetivo)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BarrasNutricion;
