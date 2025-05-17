export function calcularObjetivos({ peso, altura, edad, objetivo, factorActividad }) {
  // 1. Calcular TMB (Hombres - fórmula de Harris-Benedict revisada)
  const TMB = 10 * peso + 6.25 * altura - 5 * edad + 5;

  // 2. Calcular TDEE (gasto diario)
  const TDEE = TMB * factorActividad;

  // 3. Ajustar según objetivo
  let calorias;
  switch (objetivo) {
    case 'mantener':
      calorias = TDEE;
      break;
    case 'perder_grasa':
      calorias = TDEE * 0.85;
      break;
    case 'ganar_musculo':
      calorias = TDEE * 1.10;
      break;
    default:
      calorias = TDEE;
  }

  // 4. Macros
  const proteinas = peso * 2; // g
  const grasas = peso * 1;    // g

  const caloriasProte = proteinas * 4;
  const caloriasGrasas = grasas * 9;

  const caloriasRestantes = calorias - (caloriasProte + caloriasGrasas);
  const carbohidratos = caloriasRestantes / 4; // g

  return {
    calorias: Math.round(calorias),
    proteinas: Math.round(proteinas),
    grasas: Math.round(grasas),
    carbohidratos: Math.round(carbohidratos),
  };
}
