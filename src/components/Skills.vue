<script setup>
import { skills } from '../data.js'
import PixelIcon from './PixelIcon.vue'

const tagColor = {
  learning: 'text-gold border-gold/40 bg-gold/5',
  comfortable: 'text-plum border-plum/40 bg-plum/5',
  solid: 'text-plum border-plum/60 bg-plum/10',
}
</script>

<template>
  <section id="skills" class="py-12">
    <!-- section heading: simple, lowercase, no /01/ prefix gimmicks -->
    <h2 class="text-muted text-xs uppercase tracking-[0.2em] mb-6">
      <span class="text-plum">#</span> stack
    </h2>

    <!-- skills as a definition-list-style stack, not a card grid -->
    <ul class="space-y-3">
      <li
        v-for="s in skills"
        :key="s.name"
        class="group flex items-baseline gap-3 py-2 border-b border-line/60 last:border-b-0 hover:border-plum/40 transition-colors"
      >
        <!-- icon: small, leading -->
        <span class="text-plum w-4 shrink-0 self-center">
          <PixelIcon :name="s.icon" :size="16" />
        </span>

        <!-- name -->
        <span class="font-pixel text-text text-base shrink-0 w-20">{{ s.name }}</span>

        <!-- note (the heart of it - just text) -->
        <span class="text-dim text-[13px] flex-1">{{ s.note }}</span>

        <!-- status, inline tag -->
        <span
          class="text-[10px] uppercase tracking-wider px-2 py-0.5 border shrink-0"
          :class="tagColor[s.status]"
        >
          {{ s.status }}
        </span>
      </li>
    </ul>
  </section>
</template>
