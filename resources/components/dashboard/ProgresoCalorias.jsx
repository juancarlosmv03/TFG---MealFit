import React from 'react';

const ProgresoCalorias = ({ valor, objetivo }) => {
  const porcentajeReal = (valor / objetivo) * 100;
  const porcentaje = Math.min(porcentajeReal, 100); // solo para dibujar el círculo
  const radio = 80;
  const circunferencia = 2 * Math.PI * radio;
  const progreso = (porcentaje / 100) * circunferencia;

  const color = porcentajeReal > 105 ? 'stroke-red-500' : 'stroke-blue-500';

  return (
    <div className="relative w-60 h-60">
      <svg className="w-full h-full transform -rotate-90">
        {/* fondo gris claro */}
        <circle
          cx="120"
          cy="120"
          r={radio}
          fill="none"
          stroke="gray"
          strokeWidth="20"
          opacity="0.2"
        />
        {/* círculo de progreso */}
        <circle
          cx="120"
          cy="120"
          r={radio}
          fill="none"
          strokeLinecap="round"
          strokeWidth="20"
          className={`transition-all duration-300 ${color}`}
          strokeDasharray={circunferencia}
          strokeDashoffset={circunferencia - progreso}
        />
      </svg>

      {/* contenido centrado dentro del círculo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-lg font-bold leading-none">
          {Math.round(porcentajeReal)}%
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          {Math.round(valor)} / {objetivo} kcal
        </p>
      </div>
    </div>
  );
};

export default ProgresoCalorias;
