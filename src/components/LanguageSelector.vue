<script setup lang="ts">
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoDe, CoFr, CoGb } from 'oh-vue-icons/icons/co'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { SupportedLanguage, switchLanguage } from '@/i18n'

addIcons(CoFr, CoGb, CoDe)

const { locale } = useI18n()
const isOpen = ref(false)
const selectorRef = ref<HTMLDivElement>()

const languages = {
  [SupportedLanguage.en]: 'English',
  [SupportedLanguage.fr]: 'Français',
  [SupportedLanguage.de]: 'Deutsch',
}

const handleClickOutside = (event: MouseEvent) => {
  if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

const handleLanguageSwitch = (code: SupportedLanguage) => {
  switchLanguage(code)
  isOpen.value = false
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div ref="selectorRef" class="relative mb-3 w-fit">
    <button
      class="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800"
      @click="isOpen = !isOpen"
    >
      <OhVueIcon :name="locale === 'en' ? 'co-gb' : `co-${locale}`" class="h-4 w-4" />
      {{ languages[locale as SupportedLanguage] }}
      <span class="text-xs transition-transform duration-200" :class="{ 'rotate-180': isOpen }">
        ▼
      </span>
    </button>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white shadow-lg dark:bg-zinc-800"
      >
        <div
          v-for="(name, code) in languages"
          :key="code"
          class="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
          @click="() => handleLanguageSwitch(code as SupportedLanguage)"
        >
          <OhVueIcon :name="code === 'en' ? 'co-gb' : `co-${code}`" class="h-4 w-4" />
          {{ name }}
        </div>
      </div>
    </Transition>
  </div>
</template>
