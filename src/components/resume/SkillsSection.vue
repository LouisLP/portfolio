<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { PxHumanHeight } from 'oh-vue-icons/icons/px'
import { skills } from '@/config/skills'

addIcons(PxHumanHeight)
</script>

<template>
  <div>
    <h2 class="mt-10 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <OhVueIcon name="px-human-height" class="size-6 dark:text-zinc-400" />
      <span class="ml-3">Skills</span>
    </h2>

    <div class="mt-6 space-y-6">
      <div v-for="category in skills" :key="category.title">
        <!-- Skill category's title -->
        <h3 class="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {{ category.title }}
        </h3>
        <!-- Each skill in each category -->
        <ul class="mt-2 flex flex-wrap gap-2">
          <li
            v-for="skill in category.skills"
            :id="`skill-${skill.name}`"
            :key="skill.name"
            class="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
