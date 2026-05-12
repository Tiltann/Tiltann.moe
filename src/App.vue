<script setup>
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- one column. that's the whole layout. -->
  <div class="max-w-2xl mx-auto px-6">
    <Hero />
    <Skills />
    <Projects />
    <About />
    <Footer />
  </div>
</template>
