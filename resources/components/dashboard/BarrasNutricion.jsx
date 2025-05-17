// src/components/dashboard/BarrasNutricion.jsx
import React from 'react';

const BarrasNutricion = ({ proteinas, carbohidratos, grasas }) => {
  const calcularPorcentaje = (actual, objetivo) => {
    const porcentaje = (actual / objetivo) * 100;
    return porcentaje > 100 ? 100 : Math.round(porcentaje);
  };
  const getBarColor = (valor, objetivo) => {
  return valor > objetivo ? 'bg-red-500' : 'bg-blue-500';
};


  return (
    <div className="w-full max-w-xs space-y-4 text-sm text-black dark:text-white">
      <div>
        <p className="mb-1">PROTEÍNAS {proteinas.valor}/{proteinas.objetivo}g</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
          <div
  className={`${getBarColor(proteinas.valor, proteinas.objetivo)} h-1.5 rounded-full`}
  style={{ width: `${Math.min(calcularPorcentaje(proteinas.valor, proteinas.objetivo), 100)}%` }}
></div>

        </div>
      </div>

      <div>
        <p className="mb-1">CARBOHIDRATOS {carbohidratos.valor}/{carbohidratos.objetivo}g</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
          <div
  className={`${getBarColor(carbohidratos.valor, carbohidratos.objetivo)} h-1.5 rounded-full`}
  style={{ width: `${Math.min(calcularPorcentaje(carbohidratos.valor, carbohidratos.objetivo), 100)}%` }}
></div>

        </div>
      </div>

      <div>
        <p className="mb-1">GRASAS {grasas.valor}/{grasas.objetivo}g</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
          <div
  className={`${getBarColor(grasas.valor, grasas.objetivo)} h-1.5 rounded-full`}
  style={{ width: `${Math.min(calcularPorcentaje(grasas.valor, grasas.objetivo), 100)}%` }}
></div>

        </div>
      </div>
    </div>
  );
};

export default BarrasNutricion;
