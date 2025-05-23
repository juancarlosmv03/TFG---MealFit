import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../lib/axios';

const objetivosMap = {
  perder_grasa: 'Perder Grasa',
  ganar_musculo: 'Ganar Músculo',
  mantener: 'Mantener'
};

const PerfilPage = () => {
  const navigate = useNavigate();
  const inputFileRef = useRef(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({
    edad: '',
    altura: '',
    peso: '',
    objetivo: '',
    factor_actividad: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/api/user');
        const fotoFinal = data.foto_perfil?.startsWith('http')
          ? data.foto_perfil
          : data.foto_perfil
            ? `http://localhost:8000/storage/${data.foto_perfil}`
            : null;

        setUser({
          ...data,
          foto_perfil: fotoFinal,
        });

        setForm({
          edad: data.edad || '',
          altura: data.altura || '',
          peso: data.peso || '',
          objetivo: data.objetivo || 'mantener',
          factor_actividad: data.factor_actividad || '1.55',
        });
      } catch {
        navigate('/login');
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleGuardar = async () => {
    try {
      const datos = {
        ...form,
        edad: parseInt(form.edad),
        altura: parseInt(form.altura),
        peso: parseFloat(parseFloat(form.peso).toFixed(2)),
      };

      await api.post('/api/user/update-profile', datos);
      const { data } = await api.get('/api/user');
      const fotoFinal = data.foto_perfil?.startsWith('http')
        ? data.foto_perfil
        : data.foto_perfil
          ? `http://localhost:8000/storage/${data.foto_perfil}`
          : null;

      setUser({
        ...data,
        foto_perfil: fotoFinal ? `${fotoFinal}?t=${Date.now()}` : null,
      });

      setEditando(false);
    } catch (err) {
      console.error('Error al guardar perfil:', err.response?.data);
    }
  };

  const handleImagenClick = () => {
    inputFileRef.current.click();
  };

  const handleImagenSeleccionada = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('foto_perfil', file);

    try {
      const response = await api.post('/api/user/update-profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const nuevaFoto = response.data.foto_perfil;
      setUser((prev) => ({
        ...prev,
        foto_perfil: `${nuevaFoto}?t=${Date.now()}`,
      }));
    } catch (err) {
      console.error('❌ Error al subir imagen:', err.response?.data || err.message);
    }
  };

  if (loading || !user || typeof user.name !== 'string') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        Cargando perfil…
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <main className="flex-grow p-6">
        <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          <div className="flex justify-center">
            <div className="relative group cursor-pointer" onClick={handleImagenClick}>
              {user.foto_perfil ? (
                <img
                  src={user.foto_perfil}
                  alt="Foto de perfil"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-4xl">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full hidden group-hover:flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13h3l9-9a2.121 2.121 0 00-3-3l-9 9v3z" />
                </svg>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={inputFileRef}
                onChange={handleImagenSeleccionada}
                className="hidden"
              />
            </div>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>

          {editando ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Edad</label>
                <input type="number" name="edad" value={form.edad} onChange={handleChange} className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm mb-1">Altura (cm)</label>
                <input type="number" name="altura" value={form.altura} onChange={handleChange} className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm mb-1">Peso (kg)</label>
                <input type="number" name="peso" value={form.peso} onChange={handleChange} className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm mb-1">Objetivo</label>
                <select name="objetivo" value={form.objetivo} onChange={handleChange} className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white">
                  <option value="mantener">Mantener</option>
                  <option value="perder_grasa">Perder Grasa</option>
                  <option value="ganar_musculo">Ganar Músculo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Nivel de actividad</label>
                <select name="factor_actividad" value={form.factor_actividad} onChange={handleChange} className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white">
                  <option value="1.2">Sedentario</option>
                  <option value="1.375">Ligero</option>
                  <option value="1.55">Moderado</option>
                  <option value="1.725">Intenso</option>
                  <option value="1.9">Muy intenso</option>
                </select>
              </div>
              <div className="flex gap-2 justify-center">
                <button onClick={handleGuardar} className="bg-green-600 text-white px-6 py-2 rounded-full">Guardar</button>
                <button onClick={() => setEditando(false)} className="bg-gray-400 text-white px-6 py-2 rounded-full">Cancelar</button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold">Edad</p>
                <p className="mt-1">{user.edad ?? '—'} años</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold">Altura</p>
                <p className="mt-1">{user.altura ?? '—'} cm</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold">Peso</p>
                <p className="mt-1">{user.peso ?? '—'} kg</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-semibold">Objetivo</p>
                <p className="mt-1">{objetivosMap[user.objetivo]}</p>
              </div>
            </div>
          )}

          {!editando && (
            <div className="text-center">
              <button onClick={() => setEditando(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                Editar perfil
              </button>
            </div>
          )}
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 border-t dark:border-gray-700 p-2 flex justify-around items-center shadow-md z-50 bg-blue-500 dark:bg-gray-800">
        <Link to="/dashboard" className="flex items-center">
          <img src="/img/calorias.png" alt="Calorías" className="w-6 h-6" />
          <span className="lg:block hidden text-white ml-2 font-bold">Calorías</span>
        </Link>

        <Link to="/rutinas" className="flex items-center">
          <img src="/img/rutinas.png" alt="Rutinas" className="w-6 h-6" />
          <span className="lg:block hidden text-white ml-2 font-bold">Rutinas</span>
        </Link>

        <Link to="/" className="bg-blue-500 dark:bg-gray-800 rounded-full p-1 shadow -mt-6">
          <img src="/img/logo.webp" alt="Logo" className="w-12 h-12" />
        </Link>

        <Link to="/perfil" className="flex items-center">
          <img src="/img/perfil.png" alt="Perfil" className="w-6 h-6" />
          <span className="lg:block hidden text-white ml-2 font-bold">Perfil</span>
        </Link>

        <Link to="/ajustes" className="flex items-center">
          <img src="/img/ajustes.png" alt="Ajustes" className="w-6 h-6" />
          <span className="lg:block hidden text-white ml-2 font-bold">Ajustes</span>
        </Link>
      </nav>
    </div>
  );
};

export default PerfilPage;
