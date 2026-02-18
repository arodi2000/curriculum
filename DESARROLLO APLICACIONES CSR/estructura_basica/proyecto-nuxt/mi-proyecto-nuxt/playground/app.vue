<template>
  <div>
    <header>
      <h1>Ing. Sergio Arodi Ramirez Padilla</h1>
      <p>Ingeniería en Comunicaciones y Tecnologías, noveno Semestre</p>
    </header>

    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <p>Soy estudiante de Ingeniería en Tecnologías de la Información, con conocimientos en programación, desarrollo web, bases de datos y redes.</p>
    </section>

    <section id="formacion-academica">
      <h2>Formación Académica</h2>
      <p><strong>INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN</strong> • 2022 - ACTUALMENTE<br>
        INSTITUTO TECNOLÓGICO DE LA GUSTAVO A. MADERO</p>
      <p><strong>TÉCNICO EN PROGRAMACIÓN</strong> • 2015-2018<br>
        CETIS 54 "GUADALUPE VICTORIA"</p>
    </section>

    <section id="idiomas">
      <h2>Idiomas</h2>
      <p>Inglés | Nivel intermedio</p>
    </section>

    <section id="habilidades">
      <h2>Habilidades Técnicas</h2>
      <ul>
        <li><strong>Web:</strong> HTML, CSS, PHP</li>
        <li><strong>Móvil:</strong> Android Studio</li>
        <li><strong>Bases:</strong> MySQL</li>
      </ul>
    </section>

    <div style="text-align: center; margin: 50px 0 30px;">
      <button type="button" @click="toggleTheme">
        {{ isDarkMode ? 'Modo claro ☀️' : 'Modo oscuro 🌙' }}
      </button>
    </div>

    <footer>
      <p>© 2025 - Ing. Sergio Ramirez</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

// Esta función cambia el modo y guarda en LocalStorage
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  
  if (isDarkMode.value) {
    document.body.classList.add('night-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.remove('night-mode')
    localStorage.setItem('theme', 'light')
  }
}

// Al cargar la página, revisamos si ya había un tema guardado
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.body.classList.add('night-mode')
  }
})
</script>

<style>
/* Asegúrate de tener tus estilos aquí o en tu main.css */
.night-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>