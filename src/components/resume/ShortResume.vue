<script setup lang="ts">
import DownloadResumeButton from '@/components/resume/DownloadResumeButton.vue'
import EducationSection from '@/components/resume/EducationSection.vue'
import SkillsSection from '@/components/resume/SkillsSection.vue'
import WorkSection from '@/components/resume/WorkSection.vue'

const emit = defineEmits(['openResume'])

function openFullResume() {
  emit('openResume')
}
</script>

<template>
  <div class="mb-10 space-y-10 lg:pr-16 xl:pr-24">
    <div
      class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      @click="openFullResume()"
    >
      <WorkSection />
      <SkillsSection />
      <EducationSection />
      <DownloadResumeButton />
    </div>
  </div>
</template>
