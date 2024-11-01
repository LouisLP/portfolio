<script setup lang="ts">
import WorkSection from '@/components/resume/WorkSection.vue'
import SkillsSection from '@/components/resume/SkillsSection.vue'
import EducationSection from '@/components/resume/EducationSection.vue'
import DownloadCV from '@/components/resume/DownloadResume.vue'
</script>

<template>
  <div class="mb-10 space-y-10 lg:pl-16 xl:pl-24">
    <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <WorkSection />
      <SkillsSection />
      <EducationSection />
      <DownloadCV />
    </div>
  </div>
</template>
