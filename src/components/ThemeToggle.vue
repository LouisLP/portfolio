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
  // Check localStorage first
  const savedTheme = localStorage.getItem('theme')
  // Set initial dark mode state
  isDark.value =
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  // Apply the theme immediately
  document.documentElement.classList.toggle('dark', isDark.value)
  // Save the initial theme if not already saved
  if (!savedTheme) {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="rounded-lg bg-zinc-50 p-[0.4rem] text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <OhVueIcon :name="isDark ? 'ri-sun-line' : 'ri-moon-line'" class="size-5" />
  </button>
</template>
