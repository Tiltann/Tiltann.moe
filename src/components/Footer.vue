<script setup>
import { site } from '../data.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-12 mt-12 border-t border-line/60">
    <p class="text-muted text-xs">
      <span class="text-plum">$</span> echo "© {{ year }} {{ site.name }}"
      <span class="ml-3 text-dim">made in germany.</span>
    </p>
  </footer>
</template>
