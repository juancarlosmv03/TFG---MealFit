// resources/js/pages/RutinasPage.jsx
import React from 'react';
import { useState } from 'react';
import BottomNav from '../../components/layout/BottomNav';
import RutinaGrid from '../../components/rutinas/RutinaGrid';
import FormRutina from '../../components/rutinas/FormRutina';
import TipoSelector from '../../components/rutinas/TipoSelector';



const RutinasPage = () => {
  const [tipoRutina, setTipoRutina] = useState('personalizadas');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="pb-20 px-4">
      {/* Título y botón añadir */}
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl font-bold text-black dark:text-white text-center">Rutinas</h1>
        {tipoRutina === 'personalizadas' && (
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {mostrarFormulario ? 'Cancelar' : 'Añadir Rutina'}
          </button>
        )}
      </div>

      {/* 👉 Aquí va el selector */}
      
      <TipoSelector onChange={setTipoRutina} /><br />
      <div className='flex justify-center mb-2'>
        {tipoRutina === 'personalizadas' && (
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-blue-500 text-white flex justify-content -center px-4 py-2 rounded-full"
          >
            {mostrarFormulario ? 'Cancelar' : 'Añadir Rutina'}
          </button>
        )}
      </div>
      {/* Formulario solo si estamos en "personalizadas" */}
      {tipoRutina === 'personalizadas' && mostrarFormulario && (
        <FormRutina onSuccess={() => setMostrarFormulario(false)} />
      )}

      {/* Grid de rutinas según tipo */}
      <RutinaGrid tipo={tipoRutina} />

      <BottomNav />
    </div>
  );
};

export default RutinasPage;
