import Layout from '../../components/layout/Layout';
import ProgresoCalorias from '../../components/dashboard/ProgresoCalorias';
import BarrasNutricion from '../../components/dashboard/BarrasNutricion';
import ComidaCard from '../../components/dashboard/ComidaCard';
import axios from '../lib/axios';
import ComidaTipoCard from '../../components/dashboard/ComidaTipoCard'; 
import { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { es } from 'date-fns/locale'; // si lo quieres en español
import { calcularObjetivos } from '../utils/nutricion'; // ajusta ruta si hace falta
import React, { forwardRef } from 'react';



const DashboardPage = () => {
  const [buscandoTipo, setBuscandoTipo] = useState(null); // ejemplo: "desayuno"
  const [alimentoSeleccionado, setAlimentoSeleccionado] = useState(null);
const [cantidadGramos, setCantidadGramos] = useState('');
const [fechaSeleccionada, setFechaSeleccionada] = useState(
  new Date().toISOString().split('T')[0]
);


const FechaConFlecha = forwardRef(({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    className="flex items-center gap-1 text-lg font-medium text-white bg-transparent outline-none cursor-pointer"
  >
    <span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar4" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg></span>
    <span>{value}</span>
    
  </button>
));


const [usuario, setUsuario] = useState(null);


const [comidas, setComidas] = useState([]);
const [totales, setTotales] = useState({
  calorias: 0,
  proteinas: 0,
  grasas: 0,
  carbohidratos: 0,
});

  

const cargarComidasDelDia = async () => {
  try {
    const res = await axios.get('/api/comidas', {
      params: { fecha: fechaSeleccionada }
    });

    const comidasRecibidas = res.data;
    setComidas(comidasRecibidas);

    const suma = {
      calorias: 0,
      proteinas: 0,
      grasas: 0,
      carbohidratos: 0,
    };

    comidasRecibidas.forEach(({ cantidad, alimento }) => {
      const factor = cantidad / 100;
      suma.calorias += alimento.calorias * factor;
      suma.proteinas += alimento.proteinas * factor;
      suma.grasas += alimento.grasas * factor;
      suma.carbohidratos += alimento.carbohidratos * factor;
    });

    setTotales(suma);
  } catch (err) {
    console.error('Error cargando comidas del día:', err);
  }
};

const cargarUsuario = async () => {
  try {
    const res = await axios.get('/api/user');
    console.log('Usuario cargado:', res.data); // Puedes quitar luego
    setUsuario(res.data);
  } catch (err) {
    console.error('Error al cargar usuario:', err);
  }
};

const datosUsuario = usuario && {
  peso: usuario.peso,
  altura: usuario.altura,
  edad: usuario.edad,
  objetivo: usuario.objetivo,
  factorActividad: usuario.factor_actividad, // asegúrate del nombre exacto
};

const objetivos = usuario
  ? calcularObjetivos({
      peso: usuario.peso,
      altura: usuario.altura,
      edad: usuario.edad,
      objetivo: usuario.objetivo,
      factorActividad: usuario.factor_actividad,
    })
  : null;


 const objetivoCalorias = objetivos?.calorias || 0;
const macros = {
  proteinas: { valor: Number(totales.proteinas.toFixed(1)), objetivo: objetivos?.proteinas || 0 },
  carbohidratos: { valor: Number(totales.carbohidratos.toFixed(1)), objetivo: objetivos?.carbohidratos || 0 },
  grasas: { valor: Number(totales.grasas.toFixed(1)), objetivo: objetivos?.grasas || 0 },
};


  



      useEffect(() => {
      cargarComidasDelDia();
    }, [fechaSeleccionada]);
    useEffect(() => {
  cargarUsuario();
}, []);


  return (
    <Layout>
      {/* Fecha */}
      <div className="flex justify-center items-center gap-2 mb-6">
 <div className="flex items-center gap-1 relative text-white">
  <DatePicker
    customInput={<FechaConFlecha />}

    selected={new Date(fechaSeleccionada)}
    onChange={(date) =>
      setFechaSeleccionada(date.toISOString().split('T')[0])
    }
    dateFormat="dd MMMM"
    locale={es}
    minDate={new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)}
    className="bg-transparent text-lg font-medium text-center outline-none cursor-pointer"
  />
  
</div>

</div>


      {/* Calorías y barras */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
        <ProgresoCalorias valor={Number(totales.calorias.toFixed(1))} objetivo={objetivoCalorias} />
        <BarrasNutricion
          proteinas={macros.proteinas}
          carbohidratos={macros.carbohidratos}
          grasas={macros.grasas}
        />
      </div>

      {/* Lista de comidas */}
      {['desayuno', 'comida','almuerzo','merienda', 'cena'].map((tipo) => (
  <ComidaTipoCard
    key={tipo}
    tipo={tipo}
    fecha={fechaSeleccionada}
    comidas={comidas.filter((c) => c.tipo === tipo)}
    onComidaGuardada={cargarComidasDelDia}
  />
))}


    </Layout>
  );
};

export default DashboardPage;
