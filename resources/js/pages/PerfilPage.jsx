// src/pages/PerfilPage.jsx
import React from 'react';
import Layout from '../../components/layout/Layout';
import UserAvatar from '../../components/perfil/UserAvatar';
import DatosUsuario from '../../components/perfil/DatosUsuario';
import BotonEditarPerfil from '../../components/perfil/BotonEditarPerfil';

const PerfilPage = () => {
  // Simulación de datos del usuario
  const usuario = {
    nombre: 'John Doe',
    email: 'john@example.com',
    imagenUrl: '/img/perfil.jpg',
    peso: 80,
    altura: 175,
    edad: 25,
    objetivo: 'Ganar músculo',
  };

  const handleEditarPerfil = () => {
    console.log('Ir a pantalla de edición de perfil');
    // Aquí puedes navegar o abrir un modal
  };

  return (
    <Layout>
      <UserAvatar
        nombre={usuario.nombre}
        email={usuario.email}
        imagenUrl={usuario.imagenUrl}
      />

      <DatosUsuario
        peso={usuario.peso}
        altura={usuario.altura}
        edad={usuario.edad}
        objetivo={usuario.objetivo}
      />

      <BotonEditarPerfil onClick={handleEditarPerfil} />
    </Layout>
  );
};

export default PerfilPage;
