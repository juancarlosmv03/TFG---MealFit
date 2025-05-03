// src/components/layout/Layout.jsx
import React from 'react';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col font-sans">
      
      {/* Contenido principal desplazable */}
      <main className="flex-grow overflow-y-auto pb-32 px-4 pt-4">
        {children}
      </main>

      {/* Menú inferior */}
      <BottomNav />
    </div>
  );
};

export default Layout;
