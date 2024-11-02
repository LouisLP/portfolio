<script setup lang="ts">
import { ref } from 'vue'

interface Section {
  title: string
  content: string
}

const title = ref<string>('Directed Studies Project')
const sections = ref<Section[]>([
  {
    title: 'Introduction',
    content: 'Content here...',
  },
  // Add more sections
])
</script>

<template>
  <div class="article-content">
    <h2>{{ title }}</h2>
    <section v-for="(section, index) in sections" :key="index">
      <h3>{{ section.title }}</h3>
      <p>{{ section.content }}</p>
    </section>
  </div>
</template>
