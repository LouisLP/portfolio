<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { HiSolidDownload } from 'oh-vue-icons/icons/hi'

addIcons(HiSolidDownload)

// TODO: download link depending on site path
</script>

<template>
  <a
    class="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
    href="@/downloads/Resume.pdf"
    download
  >
    Download Full Resume
    <!-- "Download" icon -->
    <OhVueIcon
      name="hi-solid-download"
      class="size-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
    />
  </a>
</template>
