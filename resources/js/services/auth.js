// resources/js/services/auth.js
import api from '../lib/axios';

export const register = async (form) => {
  const { data } = await api.post('/api/register', form);
  // Guardar token en localStorage
  localStorage.setItem('accessToken', data.token);
  console.log('🔐 register token:', data.token);
  return data.user;
};

export const login = async (email, password) => {
  const { data } = await api.post('/api/login', { email, password });
  // Guardar token en localStorage
  localStorage.setItem('accessToken', data.token);
  console.log('🔐 login token:', data.token);
  return data.user;
};

export const getUserProfile = async () => {
  const { data } = await api.get('/api/user');
  return data;
};

export const logout = async () => {
  await api.post('/api/logout');
  // Borrar token de localStorage
  localStorage.removeItem('accessToken');
};
