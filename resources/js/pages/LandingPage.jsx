import React from 'react';
import { Route } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow">
        <img src="/img/logo.webp" alt="Logo" className="h-10" />
        <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
          Entrar o Registrarse
        </button>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/img/hero.webp')" }}>
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Transforma tu Cuerpo Sin Matemáticas</h1>
          <p className="text-white mb-3 mt-3">La primera web en contar calorías y crear rutinas en un solo sitio</p>
          <a href='/login' className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            EMPIEZA GRATIS YA &gt;
          </a>
        </div>
      </section>

      {/* Funcionalidades */}
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

      {/* Cómo funciona */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">¿Cómo Funciona?</h2>
          <ul className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Regístrate gratis y configura tu perfil.</li>
            <li>Indica tu objetivo: perder grasa, ganar músculo o mantenerte.</li>
            <li>Recibe tu plan de alimentación y rutinas.</li>
            <li>Accede a consejos, recetas y mucho más.</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Empezar</button>
        </div>
        <img src="/img/hero.webp" alt="Comida saludable" className="rounded-lg shadow-lg" />
      </section>

      {/* Opiniones */}
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
                    <img src="img/testimonial1.webp" alt="" class="h-12 w-12 rounded-full object-cover"/>
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
                    <img src="img/testimonial1.webp" alt="" class="h-12 w-12 rounded-full object-cover"/>
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
                    <img src="img/testimonial1.webp" alt="" class="h-12 w-12 rounded-full object-cover"/>
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
    </section>

      {/* Cierre */}
      <section
        className="relative w-full min-h-[200px] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-xl md:text-5xl font-bold">Absolutamente Gratis</h1>
          <p className="text-white mt-3 mb-4 text-xs max-w-xl">
            En nuestra web app, nos comprometemos a ofrecerte una experiencia sin interrupciones ni distracciones. Disfruta
            de todas nuestras funcionalidades de manera totalmente gratuita. Además, nos enorgullece brindarte una
            plataforma sin anuncios.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            EMPIEZA GRATIS YA &gt;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">

    {/* Logo + redes */}
    <div className="space-y-4">
      <div className="flex justify-center md:justify-start gap-4">
        <a href="#"><img src="/img/facebook.png" alt="Facebook" className="h-10 hover:opacity-80" /></a>
        <a href="#"><img src="/img/instagram.png" alt="Instagram" className="h-10 hover:opacity-80" /></a>
        <a href="#"><img src="/img/twitter.png" alt="Twitter" className="h-10 hover:opacity-80" /></a>
      </div>
    </div>

    {/* Enlaces útiles */}
    <div className="space-y-2 text-sm ">
    <img src="/img/logo.webp" alt="Logo MealFit" className="h-20 mx-auto md:mx-0" />
    </div>

    {/* Legales */}
    <div className="space-y-2 text-sm">
      <h3 className="font-semibold mb-2">Legal</h3>
      <ul className="space-y-1">
        <li><a href="/privacidad" className="hover:underline">Política de privacidad</a></li>
        <li><a href="/terminos" className="hover:underline">Términos y condiciones</a></li>
        <li><a href="/soporte" className="hover:underline">Contacto</a></li>
      </ul>
    </div>
  </div>

  <div className="mt-10 text-center text-xs text-gray-400">
    © 2025 MealFit — Todos los derechos reservados.
  </div>
</footer>

    </div>
  );
};

export default LandingPage;
