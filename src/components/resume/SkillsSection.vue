<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { PxHumanHeight } from 'oh-vue-icons/icons/px'
import { skills } from '@/config/skills'

addIcons(PxHumanHeight)
</script>

<template>
  <div>
    <!-- "Skills" header -->
    <h2 class="mt-10 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <OhVueIcon name="px-human-height" class="size-6 dark:text-zinc-400" />
      <span class="ml-3">Skills</span>
    </h2>
    <ul class="ml-6 mt-6 list-disc space-y-3">
      <li
        v-for="skill in skills.general"
        :key="skill"
        class="font-small w-full flex-none text-sm text-zinc-900 dark:text-zinc-100"
      >
        {{ skill }}
      </li>
      <li class="font-small w-full flex-none text-sm text-zinc-900 dark:text-zinc-100">
        {{ skills.programming.title }}
        <ul class="list-disc space-y-2 pl-5">
          <li
            v-for="subskill in skills.programming.subskills"
            :key="subskill.title"
            class="font-small mt-2 w-full flex-none text-xs text-zinc-800 dark:text-zinc-200"
          >
            <b>{{ subskill.title }}</b
            >: {{ subskill.items }}
          </li>
        </ul>
      </li>
      <li
        v-for="skill in skills.other"
        :key="skill"
        class="font-small w-full flex-none text-sm text-zinc-900 dark:text-zinc-100"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>
