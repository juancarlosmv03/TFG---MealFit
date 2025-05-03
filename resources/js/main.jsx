import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import '../css/app.css'; // Asegúrate de que tienes Tailwind aquí

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
