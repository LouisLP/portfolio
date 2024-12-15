<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiGithub, BiLinkedin } from 'oh-vue-icons/icons/bi'
import { RiGlobalLine, RiMailLine } from 'oh-vue-icons/icons/ri'
import { onMounted } from 'vue'

import FullEducationSection from '@/components/full-resume/FullEducationSection.vue'
import FullSkillsSection from '@/components/full-resume/FullSkillsSection.vue'
import FullWorkSection from '@/components/full-resume/FullWorkSection.vue'
import ProjectsSection from '@/components/full-resume/ProjectsSection.vue'
import { resumeLinks } from '@/config/resume-links'

addIcons(BiGithub, BiLinkedin, RiGlobalLine, RiMailLine)

onMounted(() => {
  // Force light theme
  document.documentElement.classList.remove('dark')
})
</script>

<template>
  <div>
    <div class="mx-auto h-[297mm] w-[210mm] p-8 px-14">
      <!-- Name -->
      <h1 class="mb-2 text-3xl font-bold text-zinc-900">Louis Lascelles-Palys</h1>
      <!-- Links -->
      <div class="mb-8 flex gap-3 text-xs text-zinc-600">
        <a
          v-for="link in resumeLinks"
          :key="link.name"
          :href="link.url"
          class="flex items-center gap-1"
        >
          <OhVueIcon :name="link.icon" class="size-4" />
          {{ link.name }}
        </a>
      </div>
      <!-- Sections -->
      <div>
        <FullWorkSection />
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-8">
            <FullEducationSection />
            <ProjectsSection />
          </div>
          <FullSkillsSection />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@page {
  margin: 0;
  size: A4;
}

@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
</style>
