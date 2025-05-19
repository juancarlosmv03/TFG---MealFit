// src/pages/AjustesPage.jsx
import {React,useState} from 'react';
import Layout from '../../components/layout/Layout';
import ConfiguracionItem from '../../components/ajustes/ConfiguracionItem';
import CerrarSesionButton from '../../components/ajustes/CerrarSesionButton';
import CambiarPassword from '../../components/ajustes/CambiarPassword';
import CambiarEmail from '../../components/ajustes/CambiarEmail';
import CambiarNombre from '../../components/ajustes/CambiarNombre';
import api from '../lib/axios';

//import CambiarIdioma from '../../components/ajustes/CambiarIdioma';




const AjustesPage = () => {
  const [seccionActiva, setSeccionActiva] = useState(null);
  const handleCerrarSesion = () => {
    console.log('Cerrar sesión...');
    // Aquí iría la lógica real de logout (token, redirección, etc.)
  };

  const handleEliminarCuenta = async () => {
  const confirmado = window.confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.');

  if (!confirmado) return;

  try {
    await api.delete('/api/eliminar-cuenta');
    localStorage.removeItem('accessToken');
    navigate('/register');
  } catch (err) {
    console.error('Error al eliminar cuenta', err.response?.data || err.message);
    alert('Error al eliminar la cuenta.');
  }
};

  



  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Ajustes</h1>

      {/* Grupo: Cuenta */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Cuenta</h2>
      <ConfiguracionItem label="Cambiar contraseña" onClick={() => setSeccionActiva('password')} />
      {seccionActiva === 'password' && <CambiarPassword onClose={() => setSeccionActiva(null)} />}

      <ConfiguracionItem label="Cambiar email" onClick={() => setSeccionActiva('email')} />
      {seccionActiva === 'email' && <CambiarEmail onClose={() => setSeccionActiva(null)} />}

      <ConfiguracionItem label="Cambiar nombre de usuario" onClick={() => setSeccionActiva('nombre')} />
      {seccionActiva === 'nombre' && <CambiarNombre onClose={() => setSeccionActiva(null)} />}

        <ConfiguracionItem
          label="Eliminar cuenta"
          onClick={handleEliminarCuenta}
          textColor="text-red-500"
        />

      </section>

      {/* Grupo: Preferencias */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Preferencias</h2>
<ConfiguracionItem label="Idioma" onClick={() => setSeccionActiva('idioma')} />
      </section>

      {/* Grupo: Soporte */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Soporte</h2>
        <ConfiguracionItem label="Política de privacidad" to="/privacidad" />
        <ConfiguracionItem label="Términos y condiciones" to="/terminos" />
      </section>
      

      {/* Botón de cerrar sesión */}
      <CerrarSesionButton onLogout={handleCerrarSesion} />

{seccionActiva === 'unidades' && <CambiarUnidades onClose={() => setSeccionActiva(null)} />}
{seccionActiva === 'idioma' && <CambiarIdioma onClose={() => setSeccionActiva(null)} />}
    </Layout>
  );
};

export default AjustesPage;
