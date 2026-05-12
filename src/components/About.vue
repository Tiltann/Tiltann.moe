<script setup>
import { about } from '../data.js'
</script>

<template>
  <section id="about" class="py-12">
    <h2 class="text-muted text-xs uppercase tracking-[0.2em] mb-6">
      <span class="text-plum">#</span> about
    </h2>

    <!-- just paragraphs. that's it. -->
    <div class="space-y-4 max-w-2xl text-[14.5px] text-text/85 leading-[1.75]">
      <p v-for="(line, i) in about" :key="i">{{ line }}</p>
    </div>
  </section>
</template>
