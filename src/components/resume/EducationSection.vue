<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { MdSchoolRound } from 'oh-vue-icons/icons/md'

import { education } from '@/config/education'

addIcons(MdSchoolRound)
</script>

<template>
  <div>
    <h2 class="mt-10 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <OhVueIcon name="md-school-round" class="size-6 dark:text-zinc-400" />
      <span class="ml-3">{{ $t('education.title') }}</span>
    </h2>
    <ol class="mt-6 space-y-4">
      <li v-for="edu in education" :key="edu.schoolKey" class="flex items-start gap-4">
        <div
          class="relative flex h-10 w-10 flex-none items-center justify-center rounded-md shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <img
            :src="edu.icon"
            alt=""
            loading="lazy"
            class="size-7"
            :class="{ 'invert dark:invert-0': edu.needsIconInvert }"
            style="color: transparent"
          />
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">School</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {{ $t(`education.schools.${edu.schoolKey}`) }}
          </dd>
          <dt class="sr-only">Program</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ $t(`education.programs.${edu.programKey}`) }}
          </dd>
          <dt class="sr-only">Date</dt>
          <dd
            class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            :aria-label="`${edu.startYear} until ${edu.endYear}`"
          >
            <time :dateTime="edu.startYear">{{ edu.startYear }}</time>
            <span aria-hidden="true">—</span>
            <time :dateTime="edu.endYear">{{ edu.endYear }}</time>
          </dd>
        </dl>
      </li>
    </ol>
  </div>
</template>
