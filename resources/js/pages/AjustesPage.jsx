// src/pages/AjustesPage.jsx
import {React,useState} from 'react';
import Layout from '../../components/layout/Layout';
import ConfiguracionItem from '../../components/ajustes/ConfiguracionItem';
import CerrarSesionButton from '../../components/ajustes/CerrarSesionButton';



const AjustesPage = () => {
  const [seccionActiva, setSeccionActiva] = useState(null);
  const handleCerrarSesion = () => {
    console.log('Cerrar sesión...');
    // Aquí iría la lógica real de logout (token, redirección, etc.)
  };
  const [form, setForm] = useState({
  actual: '',
  nueva: '',
  confirmar: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((f) => ({ ...f, [name]: value }));
};

const handleCambiarPassword = async (e) => {
  e.preventDefault();
  if (form.nueva !== form.confirmar) {
    alert('Las contraseñas no coinciden');
    return;
  }

  try {
    await api.post('/api/cambiar-contrasena', {
      actual: form.actual,
      nueva: form.nueva,
    });
    alert('Contraseña actualizada');
    setSeccionActiva(null);
  } catch (err) {
    alert(err.response?.data?.message || 'Error al cambiar contraseña');
  }
};

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Ajustes</h1>

      {/* Grupo: Cuenta */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Cuenta</h2>
        <ConfiguracionItem label="Cambiar contraseña" onClick={() => setSeccionActiva('password')} />
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
        <ConfiguracionItem label="Idioma" to="/idioma" />
      </section>

      {/* Grupo: Soporte */}
      <section className="space-y-3 mb-6">
        <h2 className="text-lg font-semibold">Soporte</h2>
        <ConfiguracionItem label="Política de privacidad" to="/privacidad" />
        <ConfiguracionItem label="Términos y condiciones" to="/terminos" />
      </section>
      

      {/* Botón de cerrar sesión */}
      <CerrarSesionButton onLogout={handleCerrarSesion} />
    </Layout>
  );
};

export default AjustesPage;
