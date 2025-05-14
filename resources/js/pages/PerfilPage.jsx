// resources/js/pages/PerfilPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../lib/axios';

const PerfilPage = () => {
  const navigate = useNavigate();
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/api/user');
        setUser(data);
      } catch {
        navigate('/login');
        return;
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  if (loading || !user || typeof user.name !== 'string') {
    return (
      <div className="min-h-screen flex items-center justify-center
                      bg-white dark:bg-black text-black dark:text-white">
        Cargando perfil…
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Contenido principal */}
      <main className="flex-grow p-6">
        <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 space-y-6">
          {/* Foto de perfil */}
          <div className="flex justify-center">
            {user.foto_perfil ? (
              <img
                src={`http://localhost:8000/storage/${user.foto_perfil}`}
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 
                              flex items-center justify-center text-4xl">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Nombre y email */}
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>

          {/* Datos físicos */}
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
              <p className="mt-1">
                {user.objetivo === 'perder_grasa'  && 'Perder grasa'}
                {user.objetivo === 'mantener'      && 'Mantener'}
                {user.objetivo === 'ganar_musculo' && 'Ganar músculo'}
              </p>
            </div>
          </div>

          {/* Botón editar */}
          <div className="text-center">
            <button
              onClick={() => navigate('/completar-perfil')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
            >
              Editar perfil
            </button>
          </div>
        </div>
      </main>

      {/* Barra inferior */}
      <nav className="fixed bottom-0 left-0 right-0 border-t dark:border-gray-700 p-2 
                      flex justify-around items-center shadow-md z-50 
                      bg-blue-500 dark:bg-gray-800">
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
