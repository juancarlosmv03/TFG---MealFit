// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import RutinasPage from './pages/RutinasPage';
import PerfilPage from './pages/PerfilPage';
import AjustesPage from './pages/AjustesPage';
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/rutinas" element={<RutinasPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/ajustes" element={<AjustesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
