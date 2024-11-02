<script setup lang="ts">
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdWorkoutlineRound } from 'oh-vue-icons/icons/md'
import { jobs } from '@/config/work-experience'

addIcons(MdWorkoutlineRound)
</script>

<template>
  <div>
    <!-- "Work" header -->
    <h2 class="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <OhVueIcon name="md-workoutline-round" class="dark:text-zinc-400" />
      <span class="ml-3">Work</span>
    </h2>
    <!-- Jobs -->
    <ol class="mt-6 space-y-4">
      <li v-for="job in jobs" :key="job.companyKey" class="flex gap-4">
        <div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <img
            :src="job.icon"
            alt=""
            loading="lazy"
            class="size-7"
            :class="{ 'invert dark:invert-0': job.needsIconInvert }"
            style="color: transparent"
          />
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Company</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {{ $t(`work.companies.${job.companyKey}`) }}
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ $t(`work.roles.${job.roleKey}`) }}
          </dd>
          <dt class="sr-only">Date</dt>
          <dd
            class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            :aria-label="`${job.startYear} until ${job.endYear}`"
          >
            <time :dateTime="job.startYear">{{ job.startYear }}</time>
            <span aria-hidden="true">—</span>
            <time :dateTime="job.endYear">{{ job.endYear }}</time>
          </dd>
        </dl>
      </li>
    </ol>
  </div>
</template>
