import React, { useState } from 'react';
import api from '../../js/lib/axios';
const CambiarPassword = ({ onClose }) => {
  const [form, setForm] = useState({
    actual: '',
    nueva: '',
    confirmar: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (form.nueva !== form.confirmar) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await api.post('/api/cambiar-contrasena', {
        actual: form.actual,
        nueva: form.nueva,
      });
      setSuccess('Contraseña actualizada correctamente');
      setForm({ actual: '', nueva: '', confirmar: '' });
      setTimeout(onClose, 1500); // cierra después de 1.5s
    } catch (err) {
      setError(err.response?.data?.message || 'Error al cambiar la contraseña');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-6 space-y-4 max-w-md mx-auto">
      <h3 className="font-bold text-lg text-black dark:text-white">Cambiar Contraseña</h3>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="password"
          name="actual"
          placeholder="Contraseña actual"
          value={form.actual}
          onChange={handleChange}
          className="w-full p-2 rounded border dark:bg-gray-800"
          required
        />
        <input
          type="password"
          name="nueva"
          placeholder="Nueva contraseña"
          value={form.nueva}
          onChange={handleChange}
          className="w-full p-2 rounded border dark:bg-gray-800"
          required
        />
        <input
          type="password"
          name="confirmar"
          placeholder="Confirmar nueva contraseña"
          value={form.confirmar}
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

export default CambiarPassword;
