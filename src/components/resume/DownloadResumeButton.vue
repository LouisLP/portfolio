<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { HiSolidDownload } from 'oh-vue-icons/icons/hi'

addIcons(HiSolidDownload)
</script>

<template>
  <a
    href="/downloads/Resume_Louis-Lascelles-Palys.pdf"
    download
    class="group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
  >
    <OhVueIcon
      name="hi-solid-download"
      class="size-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
    />
    {{ $t('downloadResume') }}
  </a>
</template>
