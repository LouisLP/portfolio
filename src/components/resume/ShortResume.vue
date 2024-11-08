<script setup lang="ts">
import WorkSection from '@/components/resume/WorkSection.vue'
import SkillsSection from '@/components/resume/SkillsSection.vue'
import EducationSection from '@/components/resume/EducationSection.vue'
import DownloadResumeButton from '@/components/resume/DownloadResumeButton.vue'

const emit = defineEmits(['openResume'])

function openFullResume() {
  emit('openResume')
}
</script>

<template>
  <div class="mb-10 space-y-10 lg:pr-16 xl:pr-24">
    <div
      @click="openFullResume()"
      class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <WorkSection />
      <SkillsSection />
      <EducationSection />
      <DownloadResumeButton />
    </div>
  </div>
</template>
