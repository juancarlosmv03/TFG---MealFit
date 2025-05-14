import React, { useEffect, useState } from 'react';
import axios from '../../js/lib/axios';

const BuscarAlimentos = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    const fetchAlimentos = async () => {
      try {
        const res = await axios.get('/api/alimentos', {
          params: { q: query }
        });
        setAlimentos(res.data);
      } catch (err) {
        console.error('Error al buscar alimentos:', err);
      }
    };

    // Llama cuando se escribe o al principio
    fetchAlimentos();
  }, [query]);

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Buscar alimento..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <ul className="bg-white dark:bg-dark border rounded max-h-64 overflow-y-auto">
        {alimentos.map((alimento) => (
          <li
            key={alimento.id}
            onClick={() => onSelect(alimento)}
            className="p-2 hover:bg-blue-100 cursor-pointer"
          >
            {alimento.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscarAlimentos;
