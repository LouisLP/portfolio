<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { RiSunLine, RiMoonLine } from 'oh-vue-icons/icons/ri'

addIcons(RiSunLine, RiMoonLine)

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value =
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="rounded-lg bg-zinc-50 p-2 text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <OhVueIcon :name="isDark ? 'ri-sun-line' : 'ri-moon-line'" class="h-5 w-5" />
  </button>
</template>
