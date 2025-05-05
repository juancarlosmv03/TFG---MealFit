import api from '../lib/axios';

export const login = async (email, password) => {
  await api.get('/sanctum/csrf-cookie'); // Paso obligatorio
  const response = await api.post('/api/login', { email, password });
  return response.data;
};

export const getUser = async () => {
  const response = await api.get('/api/user');
  return response.data;
};

export const logout = async () => {
  await api.post('/api/logout');
};

export const register = async ({ name, email, password, password_confirmation }) => {
    await api.get('/sanctum/csrf-cookie');
  
    const response = await api.post('/api/register', {
      name,
      email,
      password,
      password_confirmation,
    });
  
    return response.data;
  };