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
        className="w-full p-2 border rounded text-black"
      />

      <ul className="  bg-dark dark:bg-dark border rounded max-h-64 overflow-y-auto">
  {alimentos.map((alimento) => (
    <li
      key={alimento.id}
      onClick={() => onSelect(alimento)}
      className="p-2 hover:bg-blue-400 cursor-pointer space-y-1"
    >
      <p className="font-semibold">{alimento.nombre}</p>
      <p className="text-xs text-gray-600">
        {alimento.calorias} kcal · {alimento.proteinas}g prot · {alimento.grasas}g grasa · {alimento.carbohidratos}g carb
      </p>
    </li>
  ))}
</ul>

    </div>
  );
};

export default BuscarAlimentos;
