<script setup>
import { projects, site } from '../data.js'
import PixelIcon from './PixelIcon.vue'
</script>

<template>
  <section id="projects" class="py-12">
    <h2 class="text-muted text-xs uppercase tracking-[0.2em] mb-6">
      <span class="text-plum">#</span> projects
    </h2>

    <!-- empty state: just an icon -->
    <div v-if="!projects.length" class="py-12 flex flex-col items-center justify-center gap-4">
      <div class="text-plum/40">
        <PixelIcon name="folder" :size="32" />
      </div>
      <p class="text-dim text-sm text-center">nothing here yet</p>
      <p class="text-muted text-xs text-center">
        // <span class="text-plum">TODO</span>: ship something cool
        <span class="animate-blink">_</span>
      </p>
    </div>

    <!-- project list: rows, not cards -->
    <ul v-else class="space-y-1">
      <li v-for="p in projects" :key="p.name">
        <a
          :href="p.link || '#'"
          target="_blank"
          rel="noopener"
          class="group flex items-baseline gap-3 py-2.5 border-b border-line/60 hover:border-plum/40 transition-colors"
        >
          <span class="text-plum shrink-0 self-center">
            <PixelIcon :name="p.icon || 'box'" :size="14" />
          </span>
          <span class="font-pixel text-text text-base group-hover:text-plum transition-colors">
            {{ p.name }}
          </span>
          <span class="text-muted text-xs">·</span>
          <span class="text-dim text-[13px] flex-1">{{ p.note }}</span>
          <span v-if="p.year" class="text-muted text-xs shrink-0">{{ p.year }}</span>
          <span class="text-muted shrink-0 transition-transform group-hover:translate-x-1">
            <PixelIcon name="arrow" :size="12" />
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>
