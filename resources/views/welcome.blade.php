<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MealFit - Contador de Calorias</title>
    <link rel="shortcut icon" href="img/logo.webp" type="image/x-icon">
    @vite('resources/css/app.css')
  </head>
  <body class="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <!-- Navbar -->
    <header class="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow">
      <img src="\img\logo.webp" alt="Logo" class="h-10" />
      <button class="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
        <a href="{{ route('dashboard') }}">Entrar o Registrarse</a>
      </button>
    </header>

    <!-- Hero Section -->
    <section class="relative w-full h-[400px] bg-cover bg-center " style="background-image: url('/img/hero.webp');">
      <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">  
        <h1 class="text-white text-3xl md:text-5xl font-bold text-center px-4">Transforma tu Cuerpo Sin Matemáticas</h1>
        <p class="text-white mb-3 mt-3">La primera web en contar calorías y crear rutinas en un solo sitio</p>
        <button class="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            EMPIEZA GRATIS YA >
          </button>
          
      </div>
    </section>

    <!-- Funcionalidades -->
    <section class="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
        <img src="/img/landingbox2.png" alt="Contador de Calorías" class="w-full h-48 object-cover rounded-lg" />
        <h3 class="text-xl font-semibold mb-2">Contador de Calorías</h3>
        <p class="text-sm mb-4 text-gray-700 dark:text-gray-300">Calcula tus calorías fácilmente.</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ver más</button>
      </div>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
        <img src="\img\landingbox1.webp" alt="Rutinas Personalizadas" class="w-full h-48 object-cover rounded-lg" />
        <h3 class="text-xl font-semibold mb-2">Rutinas Personalizadas</h3>
        <p class="text-sm mb-4 text-gray-700 dark:text-gray-300">Ejercicios para tu nivel y objetivos.</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ver más</button>
      </div>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
        <img src="\img\landingbox3.png" alt="Tips de Dietas" class="w-full h-48 object-cover rounded-lg" />
        <h3 class="text-xl font-semibold mb-2">Guías y Consejos</h3>
        <p class="text-sm mb-4 text-gray-700 dark:text-gray-300">Ideas prácticas para comer bien.</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ver más</button>
      </div>
    </section>

    <!-- Cómo funciona -->
    <section class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 class="text-2xl font-bold mb-4">¿Cómo Funciona?</h2>
        <ul class="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Regístrate gratis y configura tu perfil.</li>
          <li>Indica tu objetivo: perder grasa, ganar músculo o mantenerte.</li>
          <li>Recibe tu plan de alimentación y rutinas.</li>
          <li>Accede a consejos, recetas y mucho más.</li>
        </ul>
        <button class="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Empezar</button>
      </div>
      <img src="\img\hero.webp" alt="Comida saludable" class="rounded-lg shadow-lg" />
    </section>

    <!-- Opiniones y rating -->
    <section class="bg-gray-100 dark:bg-gray-800 py-12 px-6 justify-center">
      <div class="text-center mb-8">
        <p class="text-2xl font-bold">500+ Reviews</p>
        <div class="flex justify-center mt-2">
          <span class="text-yellow-400 text-2xl">★★★★★</span>
        </div>
      </div>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="lg:max-w-sm w-full  border dark:bg-gray-700 border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
            <div class="flex items-center space-x-4">
                <div class="h-12 w-12 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-full">
                    <img src="img/testimonial1.webp" alt="" class="h-12 w-12 rounded-full object-cover">
                </div>
                <div>
                    <div class="text-gray-900 font-medium dark:text-white">Donald Jackman</div>
                    <div class="text-gray-300 text-sm">Content Creator</div>
                </div>
            </div>
            <div class="flex text-yellow-500 text-xl">★★★★★</div>
            <p class="text-gray-700 dark:text-white">
                I've been using Imagify for nearly two years, primarily for Instagram, and
                it has been incredibly user-friendly, making my work much easier.
            </p>
        </div>
        <div class="lg:max-w-sm border dark:bg-gray-700 border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
            <div class="flex items-center space-x-4">
                <div class="h-12 w-12 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-full">
                    <img src="img/testimonial1.webp" alt="" class="h-12 w-12 rounded-full object-cover">
                </div>
                <div>
                    <div class="text-gray-900 font-medium dark:text-white">Donald Jackman</div>
                    <div class="text-gray-300 text-sm">Content Creator</div>
                </div>
            </div>
            <div class="flex text-yellow-500 text-xl">★★★★★</div>
            <p class="text-gray-700 dark:text-white">
                I've been using Imagify for nearly two years, primarily for Instagram, and
                it has been incredibly user-friendly, making my work much easier.
            </p>
        </div>
        <div class="lg:max-w-sm border dark:bg-gray-700 border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
            <div class="flex items-center space-x-4">
                <div class="h-12 w-12 flex items-center justify-center bg-black-500 text-white text-lg font-semibold rounded-full">
                    <img src="img/testimonial1.webp" alt="" class="h-12 w-12 rounded-full object-cover">
                </div>
                <div>
                    <div class="text-gray-900 font-medium dark:text-white">Donald Jackman</div>
                    <div class="text-gray-300 text-sm">Content Creator</div>
                </div>
            </div>
            <div class="flex text-yellow-500 text-xl">★★★★★</div>
            <p class="text-gray-700 dark:text-white">
                I've been using Imagify for nearly two years, primarily for Instagram, and
                it has been incredibly user-friendly, making my work much easier.
            </p>
        </div>
    </div>
    </section class="">
    <section class="relative w-full min-h-[200px] bg-cover bg-center" style="background-image: url('/img/hero.webp');">
        <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
          <h1 class="text-white text-xl md:text-5xl font-bold text-center px-4">Absolutamente Gratis</h1>
          <p class="text-white m-3  text-xs text-center">En nuestra web app, nos comprometemos a ofrecerte una experiencia sin interrupciones ni distracciones. Disfruta de todas nuestras funcionalidades de manera totalmente gratuita. Además, nos enorgullece brindarte una plataforma 
            sin anuncios.</p>
          <button class="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              EMPIEZA GRATIS YA >
            </button>
            
        </div>
      </section>
    
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-10 px-6 text-center p-8">
      <div class="flex justify-center gap-4 mb-4">
        <a href="#" class="hover:opacity-80"><img src="/img/facebook.png" alt="Facebook" class="h-10"></a>
        <a href="#" class="hover:opacity-80"><img src="/img/instagram.png" alt="Instagram" class="h-10"></a>
        <a href="#" class="hover:opacity-80"><img src="/img/twitter.png" alt="Twitter" class="h-10"></a>
      </div>
      <img src="/img/logo.webp" alt="Logo" class="mx-auto h-20 mb-2" />
      <p class="text-xs">© Copyright MealFit 2025</p>
    </footer>
  </body>
</html>
