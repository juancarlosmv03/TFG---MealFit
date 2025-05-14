import React, { useEffect, useState } from 'react';
import axios from '../../js/lib/axios';
import RutinaCard from './RutinaCard';

const RutinaGrid = ({ tipo }) => {
  const [rutinas, setRutinas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const endpoint =
          tipo === 'personalizadas' ? '/api/rutinas' : '/api/rutinas/preestablecidas';
        const res = await axios.get(endpoint);
        setRutinas(res.data);
      } catch (error) {
        console.error('Error al cargar rutinas', error);
      } finally {
        setCargando(false);
      }
    };

    fetchRutinas();
  }, [tipo]); // recarga cada vez que cambia el tipo

  if (cargando) {
    return <p className="text-white text-center">Cargando rutinas...</p>;
  }

  if (rutinas.length === 0) {
    return <p className="text-white text-center">No hay rutinas de este tipo.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {rutinas.map((rutina) => (
        <RutinaCard
          key={rutina.id}
          titulo={rutina.nombre}
          categoria={rutina.descripcion}
          duracion={rutina.tiempo_estimado}
          calorias={rutina.calorias}
          imagenUrl={rutina.imagen ? `/storage/${rutina.imagen}` : null}

        />
      ))}
    </div>
  );
};

export default RutinaGrid;
