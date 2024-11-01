<script setup lang="ts">
import Header from '@/components/TrustyHeader.vue'
import Photos from '@/components/TrustyPhotos.vue'
import Skills from '@/components/resume/SkillsSection.vue'
</script>

<template>
  <Header />
  <Photos />
  <div class="mt-24 sm:px-8 md:mt-28">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
