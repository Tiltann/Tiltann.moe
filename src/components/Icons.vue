<script setup>
import { computed } from 'vue'
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import Box from 'vue-material-design-icons/Box.vue'
import Coffee from 'vue-material-design-icons/Coffee.vue'
import CodeBrackets from 'vue-material-design-icons/CodeBrackets.vue'
import DiscordIcon from './DiscordIcon.vue'
import Email from 'vue-material-design-icons/Email.vue'
import Github from 'vue-material-design-icons/Github.vue'
import Folder from 'vue-material-design-icons/Folder.vue'
import LanguageCsharp from 'vue-material-design-icons/LanguageCsharp.vue'
import LanguageLua from 'vue-material-design-icons/LanguageLua.vue'
import Linux from 'vue-material-design-icons/Linux.vue'
import SourceRepository from 'vue-material-design-icons/SourceRepository.vue'
import Vuejs from 'vue-material-design-icons/Vuejs.vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 16 },
})

const iconMap = {
  csharp: LanguageCsharp,
  java: Coffee,
  lua: LanguageLua,
  linux: Linux,
  vue: Vuejs,
  discord: DiscordIcon,
  github: Github,
  repo: SourceRepository,
  mail: Email,
  code: CodeBrackets,
  box: Box,
  folder: Folder,
  arrow: ArrowRight,
}

const currentIcon = computed(() => iconMap[props.name])
</script>

<template>
  <component
    v-if="currentIcon"
    :is="currentIcon"
    :size="size"
    class="inline-block"
  />
</template>
