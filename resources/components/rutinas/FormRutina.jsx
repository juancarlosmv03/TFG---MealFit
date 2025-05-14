import React, { useState } from 'react';
import axios from '../../js/lib/axios';

const FormRutina = ({ onSuccess }) => {
  const [form, setForm] = useState({
    titulo: '',
    categoria: '',
    duracion: '',
    calorias: '',
    imagen: null,
  });
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrores({});
    setCargando(true);
    try {
      const data = new FormData();
      for (let key in form) {
        if (form[key]) data.append(key, form[key]);
      }

      await axios.post('/api/rutinas', data);
      setCargando(false);
      onSuccess();
    } catch (error) {
      setCargando(false);
      if (error.response?.data?.errors) {
        setErrores(error.response.data.errors);
      } else {
        alert('Error al crear la rutina');
      }
    }
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
  <div>
    <label className="block mb-1">Título</label>
    <input
      name="nombre"
      type="text"
      value={form.nombre}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    {errores.nombre && <p className="text-red-500 text-sm">{errores.nombre[0]}</p>}
  </div>

  <div>
    <label className="block mb-1">Categoría</label>
    <input
      name="descripcion"
      type="text"
      value={form.descripcion}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    {errores.descripcion && <p className="text-red-500 text-sm">{errores.descripcion[0]}</p>}
  </div>

  <div>
    <label className="block mb-1">Duración (minutos)</label>
    <input
      name="tiempo_estimado"
      type="number"
      value={form.tiempo_estimado}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    {errores.tiempo_estimado && <p className="text-red-500 text-sm">{errores.tiempo_estimado[0]}</p>}
  </div>

  <div>
    <label className="block mb-1">Calorías</label>
    <input
      name="calorias"
      type="number"
      value={form.calorias}
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    {errores.calorias && <p className="text-red-500 text-sm">{errores.calorias[0]}</p>}
  </div>

  <div>
    <label className="block mb-1">Imagen (opcional)</label>
    <input
      name="imagen"
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="w-full p-2 border rounded"
    />
    {errores.imagen && <p className="text-red-500 text-sm">{errores.imagen[0]}</p>}
  </div>

  <button disabled={cargando} type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
    {cargando ? 'Guardando...' : 'Guardar Rutina'}
  </button>
</form>

  );
};

export default FormRutina;
