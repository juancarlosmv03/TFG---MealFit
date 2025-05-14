import React from 'react';
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



const DashboardPage = () => {
  const [buscandoTipo, setBuscandoTipo] = useState(null); // ejemplo: "desayuno"
  const [alimentoSeleccionado, setAlimentoSeleccionado] = useState(null);
const [cantidadGramos, setCantidadGramos] = useState('');
const [fechaSeleccionada, setFechaSeleccionada] = useState(
  new Date().toISOString().split('T')[0]
);

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



 const objetivoCalorias = 2000;
const macros = {
  proteinas: { valor: totales.proteinas, objetivo: 120 },
  carbohidratos: { valor: totales.carbohidratos, objetivo: 198 },
  grasas: { valor: totales.grasas, objetivo: 66 },
};

  

  const handleAgregarComida = (tipo) => {
    console.log(`Agregar alimento a ${tipo}`);
    // Aquí puedes abrir un modal o redirigir
  };
      useEffect(() => {
      cargarComidasDelDia();
    }, [fechaSeleccionada]);

  return (
    <Layout>
      {/* Fecha */}
      <div className="flex justify-center items-center gap-2 mb-6">
  <DatePicker
    selected={new Date(fechaSeleccionada)}
    onChange={(date) =>
      setFechaSeleccionada(date.toISOString().split('T')[0])
    }
    dateFormat="dd MMMM"
    locale={es}
    className="bg-transparent text-lg font-medium text-center outline-none cursor-pointer"
    wrapperClassName="custom-datepicker"
  />
</div>


      {/* Calorías y barras */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
        <ProgresoCalorias valor={totales.calorias} objetivo={objetivoCalorias} />
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
