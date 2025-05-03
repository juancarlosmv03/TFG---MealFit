// src/pages/RutinasPage.jsx
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import TipoSelector from '../../components/rutinas/TipoSelector';
import RutinaGrid from '../../components/rutinas/RutinaGrid';

const RutinasPage = () => {
  const [tipoActivo, setTipoActivo] = useState('personalizadas');

  const rutinasPersonalizadas = [
    {
      id: 1,
      nombre: 'Fuerza Pecho',
      categoria: 'Pecho',
      calorias: 200,
      duracion: 30,
      imagenUrl: '/img/pecho.webp',
    },
    {
      id: 2,
      nombre: 'Espalda y Core',
      categoria: 'Espalda',
      calorias: 180,
      duracion: 25,
      imagenUrl: '/img/espalda.webp',
    },
  ];

  const rutinasPreestablecidas = [
    {
      id: 3,
      nombre: 'Full Body Express',
      categoria: 'Cuerpo completo',
      calorias: 300,
      duracion: 35,
      imagenUrl: '/img/fullbody.webp',
    },
    {
      id: 4,
      nombre: 'Piernas Intensas',
      categoria: 'Piernas',
      calorias: 250,
      duracion: 40,
      imagenUrl: '/img/piernas.webp',
    },
  ];

  const rutinas = tipoActivo === 'personalizadas' ? rutinasPersonalizadas : rutinasPreestablecidas;

  return (
    <Layout>
      <h1 className="text-xl font-bold text-center mb-4">Tus Rutinas</h1>
      <TipoSelector activo={tipoActivo} onSelect={setTipoActivo} />
      <RutinaGrid rutinas={rutinas} />
    </Layout>
  );
};

export default RutinasPage;
