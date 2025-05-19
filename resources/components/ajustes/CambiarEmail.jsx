import React, { useState } from 'react';
import api from '../../js/lib/axios';
const CambiarEmail = ({ onClose }) => {
  const [form, setForm] = useState({ email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ email: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await api.post('/api/cambiar-email', form);
      setSuccess('Correo actualizado correctamente');
      setTimeout(onClose, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al cambiar el correo');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-6 space-y-4 max-w-md mx-auto">
      <h3 className="font-bold text-lg text-black dark:text-white">Cambiar Email</h3>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          name="email"
          placeholder="Nuevo correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded border dark:bg-gray-800"
          required
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
          <button type="button" onClick={onClose} className="text-gray-500">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CambiarEmail;
