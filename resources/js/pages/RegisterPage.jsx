// resources/js/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneralError('');
    setErrors({});

    try {
      const user = await register(form);
      console.log('✅ Registered user:', user);
      console.log('🔑 Token in localStorage:', localStorage.getItem('accessToken'));
      navigate('/completar-perfil'); // o '/perfil' si lo prefieres
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      } else {
        setGeneralError(err.response?.data?.message || 'Error al registrarse');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Crear Cuenta</h2>

        {generalError && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {generalError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {['name','email','password','password_confirmation'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm mb-1 capitalize">
                {field.replace('_', ' ')}
              </label>
              <input
                id={field}
                name={field}
                type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                value={form[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-700 dark:border-gray-600"
                required
              />
              {errors[field] && (
                <p className="text-red-600 text-xs mt-1">{errors[field][0]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
