<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { IoClose, IoPrint } from 'oh-vue-icons/icons/io'
import WorkSection from '@/components/resume/WorkSection.vue'
import SkillsSection from '@/components/resume/SkillsSection.vue'
import EducationSection from '@/components/resume/EducationSection.vue'

addIcons(IoClose, IoPrint)

const emit = defineEmits(['closeFullResume'])

function closeFullResume() {
  emit('closeFullResume')
}

const handlePrint = () => {
  window.print()
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
          <h1 class="mb-6 text-3xl font-bold dark:text-zinc-100 dark:print:text-zinc-900">
            Louis Lascelles-Palys
          </h1>
          <div class="space-y-8">
            <WorkSection />
            <div class="grid grid-cols-2 gap-8">
              <EducationSection />
              <SkillsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media print {
  @page {
    margin: 0;
    size: A4;
  }
  body {
    margin: 0;
  }
}
</style>
