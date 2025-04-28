<!DOCTYPE html>
<html lang="es" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rutinas</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-white dark:bg-gray-900 text-black dark:text-white">

    <section class="p-4 max-w-md mx-auto pb-24">

        <!-- Título -->
        <h1 class="text-xl font-semibold text-center mb-4">Tus Rutinas</h1>

        <!-- Botones -->
        <div class="flex justify-center gap-2 mb-4">
            <button class="bg-blue-500 text-white text-sm px-4 py-2 rounded-full">PERSONALIZADAS</button>
            <button class="border border-black dark:border-white text-sm px-4 py-2 rounded-full">PREESTABLECIDAS</button>
        </div>

        <!-- Lista de Rutinas -->
        <div class="space-y-4">
            @for ($i = 0; $i < 3; $i++)
                <div class="relative rounded-2xl overflow-hidden shadow-md">
                    <img src="img/landingbox1.webp" alt="Rutina Pecho" class="w-full h-44 object-cover">

                    <!-- Overlay superior -->
                    <div class="absolute top-2 left-2 z-10 text-white text-lg font-semibold px-2 py-1 rounded-md">
                        Pecho 🔥200 <br>
                        <p class="text-white text-sm py-1 rounded-md">60 min</p>
                    </div>

                    <!-- Filtro oscuro encima de la imagen -->
                    <div class="absolute inset-0 bg-black/50 dark:bg-black/70 z-0"></div>
                </div>
            @endfor
        </div>

    </section>

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
