<script setup lang="ts">
import { computed } from 'vue'

const cvPath = computed(() => '@/downloads/Resume.pdf')
</script>

<template>
  <a
    class="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
    :href="cvPath"
    download
  >
    Download CV
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
    >
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>
