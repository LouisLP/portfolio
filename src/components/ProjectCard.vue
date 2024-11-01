<script setup lang="ts">
import type { Project } from "@/types";

interface Props {
  project: Project;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "view-details", project: Project): void;
}>();
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:shadow-xl"
    @click="emit('view-details', project)"
  >
    <img
      v-if="project.imageUrl"
      :src="project.imageUrl"
      :alt="project.title"
      class="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ project.description }}
    </p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
