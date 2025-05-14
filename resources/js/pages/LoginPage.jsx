// resources/js/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUserProfile } from '../services/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setGeneralError('');
    setErrors({});

    try {
      // 1) Hacer login y guardar token en localStorage
      const user = await login(form.email, form.password);
      console.log('✅ Logged in user:', user);
      console.log('🔑 Token in localStorage:', localStorage.getItem('accessToken'));

      // 2) Obtener perfil y decidir ruta
      const perfil = await getUserProfile();
      console.log('📡 Profile data:', perfil);

      const faltan = !perfil.edad || !perfil.altura || !perfil.peso || !perfil.objetivo;
      navigate(faltan ? '/completar-perfil' : '/dashboard');
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      } else {
        setGeneralError(err.response?.data?.message || 'Error al iniciar sesión');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        {generalError && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {generalError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email[0]}</p>}
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm mb-1">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password[0]}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Cargando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
