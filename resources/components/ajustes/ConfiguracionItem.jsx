// src/components/ajustes/ConfiguracionItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfiguracionItem = ({ label, to, onClick, textColor = 'text-black dark:text-white' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-4 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition`}
    >
      <span className={`text-sm font-medium ${textColor}`}>{label}</span>
      <span className={`${textColor}`}>›</span>
    </div>
  );
};

export default ConfiguracionItem;
