// resources/js/lib/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

// Inyecta el Bearer Token desde localStorage en cada petición
api.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
