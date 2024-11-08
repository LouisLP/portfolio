<script setup lang="ts">
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdTerminalRound } from 'oh-vue-icons/icons/md'

import { projects } from '@/config/projects'

addIcons(MdTerminalRound)
</script>

<template>
  <div>
    <h2 class="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <OhVueIcon name="md-terminal-round" class="dark:text-zinc-400" />
      <span class="ml-3">{{ $t('projects.title') }}</span>
    </h2>
    <ol class="mt-4 space-y-2">
      <li v-for="project in projects" :key="project.titleKey">
        <div class="group flex flex-col">
          <div class="flex items-center">
            <span class="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {{ $t(`projects.titles.${project.titleKey}`) }}
            </span>
            <span class="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
              {{ project.year }}
            </span>
          </div>
          <p class="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            {{ $t(`projects.descriptions.${project.descriptionKey}`) }}
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>
