// resources/js/pages/CompleteProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/axios';
import { getUserProfile } from '../services/auth';

const CompleteProfilePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Form state
  const [form, setForm] = useState({
    edad: '',
    altura: '',
    peso: '',
    objetivo: 'mantener',
    factor_actividad: '1.55',
    foto_perfil: null,
  });

  // Al montar: comprobamos si está logueado y perfil
  useEffect(() => {
    (async () => {
      try {
        const u = await getUserProfile();
        setUser(u);

        const perfilCompleto =
          u.edad && u.altura && u.peso && u.objetivo;
        if (perfilCompleto) {
          navigate('/dashboard');
          return;
        }

        // Prellenamos campos si ya vienen
        setForm({
          edad: u.edad || '',
          altura: u.altura || '',
          peso: u.peso || '',
          objetivo: u.objetivo || 'mantener',
          foto_perfil: null,
        });
      } catch {
        // No autenticado
        navigate('/login');
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'foto_perfil') {
      setForm(f => ({ ...f, foto_perfil: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const data = new FormData();
    data.append('edad', form.edad);
    data.append('altura', form.altura);
    data.append('peso', form.peso);
    data.append('objetivo', form.objetivo);
    data.append('factor_actividad', form.factor_actividad);
    if (form.foto_perfil) {
      data.append('foto_perfil', form.foto_perfil);
    }

    try {
      await api.post('/api/user/update-profile', data);
      navigate('/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.message || 'Error al guardar el perfil.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Cargando tu perfil…
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Completa tu Perfil
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Edad */}
          <div>
            <label className="block text-sm mb-1">Edad</label>
            <input
              type="number"
              name="edad"
              value={form.edad}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Altura */}
          <div>
            <label className="block text-sm mb-1">
              Altura (cm)
            </label>
            <input
              type="number"
              name="altura"
              value={form.altura}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Peso */}
          <div>
            <label className="block text-sm mb-1">Peso (kg)</label>
            <input
              type="number"
              name="peso"
              value={form.peso}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-sm mb-1">Objetivo</label>
            <select
              name="objetivo"
              value={form.objetivo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="perder_grasa">Perder grasa</option>
              <option value="mantener">Mantener</option>
              <option value="ganar_musculo">Ganar músculo</option>
            </select>
          </div>

          {/*Factor de Actividad*/}
          <label className="block text-sm mb-1">Actividad</label>
          <select
              name="factor_actividad"
              value={form.factor_actividad}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
          >
              <option value="1.2">Sedentario</option>
              <option value="1.375">Ligero</option>
              <option value="1.55">Moderado</option>
              <option value="1.725">Intenso</option>
              <option value="1.9">Muy intenso</option>
          </select>


          {/* Foto de perfil */}
          <div>
            <label className="block text-sm mb-1">
              Foto de perfil
            </label>
            <input
              type="file"
              name="foto_perfil"
              accept="image/*"
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-700 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition disabled:opacity-50"
          >
            {submitting ? 'Guardando…' : 'Guardar perfil'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfilePage;
