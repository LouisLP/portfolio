<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { IoClose, IoPrint } from 'oh-vue-icons/icons/io'
import { RiGlobalLine, RiMailLine } from 'oh-vue-icons/icons/ri'
import { BiGithub, BiLinkedin } from 'oh-vue-icons/icons/bi'
import SkillsSection from '@/components/resume/SkillsSection.vue'
import EducationSection from '@/components/resume/EducationSection.vue'
import FullWorkSection from '@/components/full-resume/FullWorkSection.vue'
import { resumeLinks } from '@/config/resume-links'
import ProjectsSection from '@/components/full-resume/ProjectsSection.vue'
import { useRouter } from 'vue-router'

addIcons(IoClose, IoPrint, BiGithub, BiLinkedin, RiGlobalLine, RiMailLine)

const Router = useRouter()
const emit = defineEmits(['closeFullResume'])

function closeFullResume() {
  emit('closeFullResume')
}

const handlePrint = () => {
  Router.push({ name: 'PrintResume' })
}
</script>

<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="fixed inset-0 bg-black/75 backdrop-blur-sm print:hidden" />
    <div class="relative mx-auto max-w-5xl p-4">
      <!-- A4 Container -->
      <div class="rounded-lg bg-white p-8 dark:bg-zinc-900 dark:print:bg-white">
        <!-- Controls -->
        <div class="absolute right-4 top-4 flex gap-2 p-4 print:hidden">
          <button @click="handlePrint" class="text-zinc-400 hover:text-zinc-500">
            <OhVueIcon name="io-print" class="size-6" />
          </button>
          <button @click="closeFullResume()" class="text-zinc-400 hover:text-zinc-500">
            <OhVueIcon name="io-close" class="size-6" />
          </button>
        </div>

        <!-- Resume Content -->
        <div class="mx-auto h-[297mm] w-[210mm] p-8 print:p-0">
          <!-- Name -->
          <h1 class="mb-2 text-3xl font-bold dark:text-zinc-100 dark:print:text-zinc-900">
            Louis Lascelles-Palys
          </h1>
          <!-- Links -->
          <div class="mb-8 flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <a
              v-for="link in resumeLinks"
              :key="link.name"
              :href="link.url"
              class="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100"
              target="_blank"
              rel="noopener noreferrer"
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
    </div>
  </div>
</template>
