// src/components/perfil/UserAvatar.jsx
import React from 'react';

const UserAvatar = ({ nombre, email, imagenUrl }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-28 h-28 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden flex items-center justify-center text-white text-3xl">
        {imagenUrl ? (
          <img src={imagenUrl} alt="Perfil" className="w-full h-full object-cover" />
        ) : (
          nombre?.charAt(0)
        )}
      </div>
      <h2 className="text-xl font-bold">{nombre}</h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{email}</p>
    </div>
  );
};

export default UserAvatar;
