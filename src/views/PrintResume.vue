<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiGithub, BiLinkedin } from 'oh-vue-icons/icons/bi'
import { RiGlobalLine, RiMailLine } from 'oh-vue-icons/icons/ri'
import { onMounted, onUnmounted } from 'vue'

import FullEducationSection from '@/components/full-resume/FullEducationSection.vue'
import FullSkillsSection from '@/components/full-resume/FullSkillsSection.vue'
import FullWorkSection from '@/components/full-resume/FullWorkSection.vue'
import ProjectsSection from '@/components/full-resume/ProjectsSection.vue'
import { resumeLinks } from '@/config/resume-links'

addIcons(BiGithub, BiLinkedin, RiGlobalLine, RiMailLine)

const metaTags: HTMLMetaElement[] = []

function injectMeta(name: string, content: string) {
  const meta = document.createElement('meta')
  meta.name = name
  meta.content = content
  document.head.appendChild(meta)
  metaTags.push(meta)
}

onMounted(() => {
  // Force light theme
  document.documentElement.classList.remove('dark')
  // PDF/ATS metadata
  document.title = 'Louis Lascelles-Palys — Resume'
  injectMeta('author', 'Louis Lascelles-Palys')
  injectMeta(
    'description',
    'Resume of Louis Lascelles-Palys, Software Engineer with experience in Vue, TypeScript, Node.js, Python, and full-stack development.',
  )
  injectMeta(
    'keywords',
    'Software Engineer, Vue, TypeScript, JavaScript, Node.js, Python, SQL, React, Docker, GraphQL, Full Stack Developer',
  )
})

onUnmounted(() => {
  metaTags.forEach((tag) => tag.remove())
})
</script>

<template>
  <div>
    <div class="mx-auto h-[297mm] w-[210mm] p-8 px-14">
      <!-- Name -->
      <h1 class="mb-2 text-3xl font-bold text-zinc-900">Louis Lascelles-Palys</h1>
      <!-- Links -->
      <div class="mb-4 flex gap-3 text-xs text-zinc-600">
        <a
          v-for="link in resumeLinks"
          :key="link.name"
          :href="link.url"
          class="flex items-center gap-1"
        >
          <OhVueIcon :name="link.icon" class="size-4" aria-hidden="true" />
          {{ link.name }}
        </a>
      </div>
      <!-- TODO: Summary -->
      <p class="mb-8 text-xs text-zinc-700">
      </p>
      <!-- Sections -->
      <main>
        <FullWorkSection />
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-8">
            <FullEducationSection />
            <ProjectsSection />
          </div>
          <FullSkillsSection />
        </div>
      </main>
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
