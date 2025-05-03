// src/pages/DashboardPage.jsx
import React from 'react';
import Layout from '../../components/layout/Layout';
import ProgresoCalorias from '../../components/dashboard/ProgresoCalorias';
import BarrasNutricion from '../../components/dashboard/BarrasNutricion';
import ComidaCard from '../../components/dashboard/ComidaCard';

const DashboardPage = () => {
  const caloriasTotales = 1200;
  const objetivoCalorias = 2000;

  const macros = {
    proteinas: { valor: 88, objetivo: 120 },
    carbohidratos: { valor: 96, objetivo: 198 },
    grasas: { valor: 32, objetivo: 66 },
  };

  const comidas = [
    { tipo: 'Desayuno', calorias: 320 },
    { tipo: 'Almuerzo', calorias: 0 },
    { tipo: 'Comida', calorias: 500 },
    { tipo: 'Merienda', calorias: 180 },
    { tipo: 'Cena', calorias: 200 },
  ];

  const handleAgregarComida = (tipo) => {
    console.log(`Agregar alimento a ${tipo}`);
    // Aquí puedes abrir un modal o redirigir
  };

  return (
    <Layout>
      {/* Fecha */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <span className="text-lg font-medium">29 Mayo</span>
      </div>

      {/* Calorías y barras */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
        <ProgresoCalorias valor={caloriasTotales} objetivo={objetivoCalorias} />
        <BarrasNutricion
          proteinas={macros.proteinas}
          carbohidratos={macros.carbohidratos}
          grasas={macros.grasas}
        />
      </div>

      {/* Lista de comidas */}
      <div className="w-full max-w-md mx-auto space-y-6">
        {comidas.map((comida) => (
          <ComidaCard
            key={comida.tipo}
            tipo={comida.tipo}
            calorias={comida.calorias}
            onAdd={() => handleAgregarComida(comida.tipo)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default DashboardPage;
