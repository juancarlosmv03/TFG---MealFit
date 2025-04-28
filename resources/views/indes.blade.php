<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard Fitness</title>
    @vite('resources/css/app.css')
  </head>

  <body class="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col font-sans">

    <!-- Contenido desplazable -->
    <main class="flex-grow overflow-y-auto pb-28 px-4 pt-6">

      <!-- Fecha centrada -->
      <div class="flex justify-center items-center gap-2 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3M16 7V3M3 11h18M5 19h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z" />
        </svg>
        <span class="text-lg font-medium">29 Mayo</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </div>

      <!-- Parte superior: Calorías y barras -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
        <!-- Círculo de calorías -->
        <div class="w-40 h-40 rounded-full border-4 border-blue-400 flex flex-col items-center justify-center text-center">
          <span class="text-lg font-bold">1200 / 2000</span>
          <span class="text-sm">Calorías</span>
        </div>

        <!-- Barras -->
        <div class="w-full max-w-xs space-y-4 text-sm">
          <div>
            <p class="mb-1">PROTEÍNAS 88/120</p>
            <div class="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
              <div class="bg-blue-500 h-1.5 rounded-full" style="width: 73%"></div>
            </div>
          </div>
          <div>
            <p class="mb-1">CARBOHIDRATOS 96/198</p>
            <div class="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
              <div class="bg-blue-500 h-1.5 rounded-full" style="width: 48%"></div>
            </div>
          </div>
          <div>
            <p class="mb-1">GRASAS 32/66</p>
            <div class="bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full">
              <div class="bg-blue-500 h-1.5 rounded-full" style="width: 48%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lista de comidas -->
      <div class="flex justify-center items-center">
        <div class="w-[70%] space-y-6">

          <!-- Comidas listadas -->
          <div class="space-y-6">
            @foreach (['DESAYUNO', 'ALMUERZO', 'COMIDA', 'MERIENDA', 'CENA'] as $comida)
              <div>
                <p class="uppercase text-sm border-b border-black dark:border-white pb-1">{{ $comida }} | 0 KCAL</p>
                <div class="flex justify-center">
                  <button class="bg-blue-500 text-white text-lg px-6 py-1 rounded-full font-bold mt-2">+</button>
                </div>
              </div>
            @endforeach
          </div>

        </div>
      </div>

    </main>

    <!-- Menú inferior -->
    <nav class="fixed bottom-0 left-0 right-0 border-t dark:border-gray-700 p-2 flex justify-around items-center shadow-md z-50 bg-blue-500 dark:bg-gray-800">
      <a class="flex items-center" href="{{ route('dashboard') }}">
        <img src="img/calorias.png" alt="Inicio" class="w-6 h-6">
        <p class="lg:block hidden text-white ml-2 font-bold">Calorías</p>
      </a>

      <a class="flex items-center" href="{{ route('rutinas') }}">
        <img src="img/rutinas.png" alt="Rutinas" class="w-6 h-6">
        <p class="lg:block hidden text-white ml-2 font-bold">Rutinas</p>
      </a>

      <a class="bg-blue-500 dark:bg-gray-800 rounded-full p-1 shadow -mt-6" href="{{ route('landing') }}">
        <img src="img/logo.webp" alt="Logo" class="w-15 h-12">
      </a>

      <a class="flex items-center">
        <img src="img/perfil.png" alt="Perfil" class="w-6 h-6">
        <p class="lg:block hidden text-white ml-2 font-bold">Perfil</p>
      </a>

      <button class="flex items-center">
        <img src="img/ajustes.png" alt="Ajustes" class="w-6 h-6">
        <p class="lg:block hidden text-white ml-2 font-bold">Ajustes</p>
      </button>
    </nav>

  </body>
</html>
