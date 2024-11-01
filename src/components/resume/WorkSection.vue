<script setup lang="ts">
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdWorkoutlineRound } from 'oh-vue-icons/icons/md'

addIcons(MdWorkoutlineRound)

interface Job {
  company: string
  role: string
  startYear: string
  endYear: string
  icon: string
}

const jobs: Job[] = [
  {
    company: 'Jobreel',
    role: 'Full Stack Engineer',
    startYear: '2024',
    endYear: 'Present',
    icon: 'jobreel.png',
  },
  {
    company: 'Misfits Gaming Group',
    role: 'Senior Video Editor & Motion Designer',
    startYear: '2018',
    endYear: '2021',
    icon: 'misfits.png',
  },
  // Add other jobs here...
]

const getImagePath = (filename: string) => `@/assets/icons/${filename}`
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
      <li v-for="job in jobs" :key="job.company" class="flex gap-4">
        <div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <img
            :src="getImagePath(job.icon)"
            alt=""
            loading="lazy"
            class="h-7 w-7"
            style="color: transparent"
          />
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Company</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {{ job.company }}
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ job.role }}
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
