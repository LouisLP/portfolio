<script setup lang="ts">
import { onMounted } from 'vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { RiGlobalLine, RiMailLine } from 'oh-vue-icons/icons/ri'
import { BiGithub, BiLinkedin } from 'oh-vue-icons/icons/bi'
import SkillsSection from '@/components/resume/SkillsSection.vue'
import EducationSection from '@/components/resume/EducationSection.vue'
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
  <div class="bg-white">
    <div class="mx-auto h-[297mm] w-[210mm] border border-solid border-black p-8 px-16">
      <!-- Name -->
      <h1 class="mb-2 text-3xl font-bold text-zinc-900">Louis Lascelles-Palys</h1>
      <!-- Links -->
      <div class="mb-8 flex gap-4 text-sm text-zinc-600">
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
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-8">
            <EducationSection />
            <ProjectsSection />
          </div>
          <SkillsSection />
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
</style>
