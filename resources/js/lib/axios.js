import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // URL del backend Laravel
    withCredentials: true,            // Importante para Sanctum (maneja cookies)
  });
  
  export default api;