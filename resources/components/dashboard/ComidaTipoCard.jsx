import React, { useState } from 'react';
import BuscarAlimentos from './BuscarAlimentos';
import axios from '../../js/lib/axios';

const ComidaTipoCard = ({ tipo, comidas, onComidaGuardada, fecha}) => {
  const [buscando, setBuscando] = useState(false);
  const [alimentoSeleccionado, setAlimentoSeleccionado] = useState(null);
  const [cantidadGramos, setCantidadGramos] = useState('');
  const [editandoId, setEditandoId] = useState(null);
const [cantidadEditada, setCantidadEditada] = useState('');

const obtenerEmoji = (tipoAlimento) => {
  switch (tipoAlimento.toLowerCase()) {
    case 'cereal':
      return '🥣';
    case 'fruta':
      return '🍎';
    case 'frutos secos':
      return '🥜';
    case 'huevo':
      return '🥚';
    case 'lácteo':
      return '🥛';
    case 'pan':
      return '🍞';
    case 'pasta':
      return '🍝';
    case 'patata':
      return '🥔';
    case 'pescado':
      return '🐟';
    case 'plato':
      return '🍽️';
    case 'pollo':
      return '🍗';
    case 'postre':
      return '🍰';
    case 'verdura':
      return '🥦';
    default:
      return '🍴'; // genérico si no coincide
  }
};

  const guardarComida = async () => {
    try {
      await axios.post('/api/comidas', {
  alimento_id: alimentoSeleccionado.id,
  cantidad: parseInt(cantidadGramos),
  tipo: tipo,
  fecha: fecha, // ✅ Esta es la fecha seleccionada desde el calendario
});

      setBuscando(false);
      setAlimentoSeleccionado(null);
      setCantidadGramos('');
      onComidaGuardada(); // refrescar comidas del día
    } catch (err) {
      console.error('Error al guardar comida:', err);
    }
  };

  return (
    <div className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4">
      {/* Título */}
      <p className="uppercase text-sm tracking-wide border-b border-black dark:border-white pb-1">
        {tipo} | {comidas.reduce((total, c) => total + ((c.alimento.calorias / 100) * c.cantidad), 0).toFixed(0)} KCAL
      </p>

      {/* Lista de comidas de este tipo */}
     <ul className="text-sm text-black dark:text-white space-y-1">
  {comidas.map((c) => {
    const factor = c.cantidad / 100;
    const kcal = (c.alimento.calorias * factor).toFixed(0);
    const proteinas = (c.alimento.proteinas * factor).toFixed(1);
    const grasas = (c.alimento.grasas * factor).toFixed(1);
    const carbos = (c.alimento.carbohidratos * factor).toFixed(1);

    return (
     <li key={c.id} className="border-b pb-1 flex justify-between items-start gap-2">
  <div className="flex-1">
    <div className="font-semibold">
  <span className="mr-1">{obtenerEmoji(c.alimento.tipo)}</span>
  {c.alimento.nombre} –{' '}
  {editandoId === c.id ? (
    <input
      type="number"
      value={cantidadEditada}
      onChange={(e) => setCantidadEditada(e.target.value)}
      className="w-16 p-1 text-sm border rounded text-black"
    />
  ) : (
    `${c.cantidad}g`
  )}
</div>

    <div className="text-xs text-gray-600 dark:text-gray-300">
      {((c.alimento.calorias / 100) * c.cantidad).toFixed(0)} kcal ·
      {(c.alimento.proteinas * (c.cantidad / 100)).toFixed(1)}g prot ·
      {(c.alimento.grasas * (c.cantidad / 100)).toFixed(1)}g grasa ·
      {(c.alimento.carbohidratos * (c.cantidad / 100)).toFixed(1)}g carb
    </div>
  </div>

  <div className="flex gap-1 items-center">
    {editandoId === c.id ? (
      <>
        <button
          onClick={async () => {
            try {
              await axios.put(`/api/comidas/${c.id}`, {
                cantidad: parseInt(cantidadEditada),
              });
              setEditandoId(null);
              setCantidadEditada('');
              onComidaGuardada();
            } catch (err) {
              console.error('Error actualizando comida:', err.response?.data);
            }
          }}
          title="Guardar"
          className="text-green-600 hover:text-green-800"
        >
          💾
        </button>
        <button
          onClick={() => {
            setEditandoId(null);
            setCantidadEditada('');
          }}
          title="Cancelar"
          className="text-gray-400 hover:text-gray-600"
        >
          ✖️
        </button>
      </>
    ) : (
      <>
        <button
          onClick={() => {
            setEditandoId(c.id);
            setCantidadEditada(c.cantidad.toString());
          }}
          title="Editar"
          className="text-black hover:text-blue-700"
        >
          ✏️
        </button>
        <button
          onClick={async () => {
            const confirmado = confirm(`¿Eliminar "${c.alimento.nombre}"?`);
            if (!confirmado) return;
            await axios.delete(`/api/comidas/${c.id}`);
            onComidaGuardada();
          }}
          className="text-red-500 hover:text-red-700"
          title="Eliminar"
        >
          🗑
        </button>
      </>
    )}
  </div>
</li>

    );
  })}
</ul>


      {/* Botón añadir */}
      {!buscando && (
        <div className="flex justify-center">
          <button
            onClick={() => setBuscando(true)}
            className="bg-blue-500 text-white px-6 py-1 rounded-full font-bold hover:bg-blue-600 transition"
          >
            +
          </button>
        </div>
      )}

      {/* Buscador y formulario */}
      {buscando && !alimentoSeleccionado && (
        <BuscarAlimentos
          onSelect={(alimento) => setAlimentoSeleccionado(alimento)}
        />
      )}

      {buscando && alimentoSeleccionado && (
        <div className="space-y-2">
          <p className="text-sm text-black dark:text-white font-semibold">{alimentoSeleccionado.nombre}</p>
          <input
            type="number"
            value={cantidadGramos}
            onChange={(e) => setCantidadGramos(e.target.value)}
            placeholder="Cantidad en gramos"
            className="w-full p-2 border rounded text-black"
          />
          <button
            onClick={guardarComida}
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default ComidaTipoCard;
