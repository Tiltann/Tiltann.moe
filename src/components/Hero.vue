<script setup>
import { site } from '../data.js'
import Icons from './Icons.vue'
</script>

<template>
  <header class="pt-24 pb-16 sm:pt-32 sm:pb-24">
    <!-- prompt line -->
    <div class="text-muted text-xs mb-6 flex items-center gap-2">
      <span class="text-plum">$</span>
      <span>whoami</span>
      <span class="w-2 h-3 bg-text inline-block animate-blink ml-1"></span>
    </div>

    <!-- name + poro sticker -->
    <div class="flex items-start gap-4 mb-8">
      <h1 class="font-pixel text-5xl sm:text-7xl text-text leading-none">
        {{ site.name }}
      </h1>
      <img
        src="/poro.png"
        alt=""
        class="w-12 h-12 sm:w-16 sm:h-16 -mt-1 animate-wiggle origin-bottom"
      />
    </div>

    <!-- bio - written, not marketed -->
    <p class="text-text/90 max-w-xl mb-3 text-[15px]">
      hobbyist developer. learning by breaking things.
    </p>
    <p class="text-muted text-sm max-w-xl mb-8">
      i write code in <span class="text-plum">C#</span>, <span class="text-plum">Java</span>, <span class="text-plum">Lua</span>. mostly working on FiveM scripts and small backend tools.
    </p>

    <!-- contact line -->
    <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
      <a :href="site.discord" target="_blank" rel="noopener" class="link inline-flex items-center gap-1.5">
        <Icons name="discord" :size="12" />
        discord
      </a>
      <a :href="site.github" target="_blank" rel="noopener" class="link inline-flex items-center gap-1.5">
        <Icons name="github" :size="12" />
        github
      </a>
      <a :href="`mailto:${site.email}`" class="link inline-flex items-center gap-1.5">
        <Icons name="mail" :size="12" />
        {{ site.email }}
      </a>
    </div>
  </header>
</template>
