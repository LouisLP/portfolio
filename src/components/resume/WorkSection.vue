<script setup lang="ts">
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
    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
        class="h-6 w-6 flex-none dark:fill-zinc-400"
      >
        <path
          d="M140-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H140v480Zm240-540h200v-100H380v100ZM140-180v-480 480Z"
        />
      </svg>
      <span class="ml-3">Work</span>
    </h2>
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
