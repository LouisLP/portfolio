<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoFr, CoGb, CoDe } from 'oh-vue-icons/icons/co'

import { SupportedLanguage } from '@/i18n'
import { switchLanguage } from '@/i18n'

addIcons(CoFr, CoGb, CoDe)

const { locale } = useI18n()
const isOpen = ref(false)

const languages = {
  [SupportedLanguage.en]: 'English',
  [SupportedLanguage.fr]: 'Français',
  [SupportedLanguage.de]: 'Deutsch',
}
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800"
    >
      <OhVueIcon :name="locale === 'en' ? 'co-gb' : `co-${locale}`" class="h-4 w-4" />
      {{ languages[locale as SupportedLanguage] }}
      <span class="text-xs">▼</span>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg dark:bg-zinc-800"
    >
      <div
        v-for="(name, code) in languages"
        :key="code"
        @click="
          () => {
            switchLanguage(code as SupportedLanguage)
            isOpen = false
          }
        "
        class="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
      >
        <OhVueIcon :name="code === 'en' ? 'co-gb' : `co-${code}`" class="h-4 w-4" />
        {{ name }}
      </div>
    </div>
  </div>
</template>
