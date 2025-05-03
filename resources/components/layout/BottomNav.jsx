// src/components/layout/BottomNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t dark:border-gray-700 p-2 flex justify-around items-center shadow-md z-50 bg-blue-500 dark:bg-gray-800">
      
      <NavLink to="/dashboard" className="flex items-center flex-col text-white">
        <img src="/img/calorias.png" alt="Calorías" className="w-6 h-6" />
        <p className="text-xs font-bold hidden lg:block">Calorías</p>
      </NavLink>

      <NavLink to="/rutinas" className="flex items-center flex-col text-white">
        <img src="/img/rutinas.png" alt="Rutinas" className="w-6 h-6" />
        <p className="text-xs font-bold hidden lg:block">Rutinas</p>
      </NavLink>

      <NavLink to="/" className="bg-blue-500 dark:bg-gray-800 rounded-full p-1 shadow -mt-6">
        <img src="/img/logo.webp" alt="Logo" className="w-15 h-12" />
      </NavLink>

      <NavLink to="/perfil" className="flex items-center flex-col text-white">
        <img src="/img/perfil.png" alt="Perfil" className="w-6 h-6" />
        <p className="text-xs font-bold hidden lg:block">Perfil</p>
      </NavLink>

      <NavLink to="/ajustes" className="flex items-center flex-col text-white">
        <img src="/img/ajustes.png" alt="Ajustes" className="w-6 h-6" />
        <p className="text-xs font-bold hidden lg:block">Ajustes</p>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
