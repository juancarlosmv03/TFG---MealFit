// resources/js/components/CerrarSesionButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../js/services/auth";

const CerrarSesionButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition"
    >
      Cerrar sesión
    </button>
  );
};

export default CerrarSesionButton;


