// src/pages/AjustesPage.jsx
import React from 'react';
import Layout from '../../components/layout/Layout';
import ConfiguracionItem from '../../components/ajustes/ConfiguracionItem';
import CerrarSesionButton from '../../components/ajustes/CerrarSesionButton';

const AjustesPage = () => {
  const handleCerrarSesion = () => {
    console.log('Cerrar sesión...');
    // Aquí iría la lógica real de logout (token, redirección, etc.)
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Ajustes</h1>

      {/* Grupo: Cuenta */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Cuenta</h2>
        <ConfiguracionItem label="Cambiar contraseña" to="/cambiar-contraseña" />
        <ConfiguracionItem label="Cambiar email" to="/cambiar-email" />
        <ConfiguracionItem label="Cambiar nombre de usuario" to="/cambiar-nombre" />
        <ConfiguracionItem
          label="Eliminar cuenta"
          onClick={() => alert('Eliminar cuenta')}
          textColor="text-red-500"
        />
      </section>

      {/* Grupo: Preferencias */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Preferencias</h2>
        <ConfiguracionItem label="Unidades de medida" to="/unidades" />
        <ConfiguracionItem label="Idioma" to="/idioma" />
      </section>

      {/* Grupo: Soporte */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Soporte</h2>
        <ConfiguracionItem label="Política de privacidad" to="/privacidad" />
        <ConfiguracionItem label="Términos y condiciones" to="/terminos" />
        <ConfiguracionItem label="Contactar soporte" to="/soporte" />
      </section>

      {/* Botón de cerrar sesión */}
      <CerrarSesionButton onLogout={handleCerrarSesion} />
    </Layout>
  );
};

export default AjustesPage;
