<script setup lang="ts">
interface Education {
  school: string
  program: string
  startYear: string
  endYear: string
  icon: string
}

const education: Education[] = [
  {
    school: 'University of British-Columbia',
    program: 'Bachelor of Science, Computer Science',
    startYear: '2022',
    endYear: '2023',
    icon: 'ubc.png',
  },
  {
    school: 'Simon Fraser University',
    program: 'Computer Science',
    startYear: '2020',
    endYear: '2022',
    icon: 'sfu.png',
  },
  {
    school: 'Simon Fraser University',
    program: 'Interactive Arts & Technology',
    startYear: '2015',
    endYear: '2017',
    icon: 'sfu-iat.png',
  },
]

const getImagePath = (filename: string) => `/assets/icons/education/${filename}`
</script>

<template>
  <div>
    <h2 class="mt-10 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
        class="h-6 w-6 flex-none dark:fill-zinc-400"
      >
        <path
          d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"
        />
      </svg>
      <span class="ml-3">Education</span>
    </h2>
    <ol class="mt-6 space-y-4">
      <li v-for="edu in education" :key="edu.school" class="flex gap-4">
        <div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <img
            :src="getImagePath(edu.icon)"
            alt=""
            loading="lazy"
            class="h-7 w-7"
            style="color: transparent"
          />
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">School</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {{ edu.school }}
          </dd>
          <dt class="sr-only">Program</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ edu.program }}
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
