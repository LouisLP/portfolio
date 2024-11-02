<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

interface Section {
  title?: string
  content: string
}

const sections = ref<Section[]>([
  {
    title: 'Introduction',
    content: `This is a paragraph with **bold** text and a [link](https://example.com).
    
\`\`\`typescript
const example = "code block"
\`\`\``,
  },
  // ... other sections
])
</script>

<template>
  <div class="prose dark:prose-invert max-w-none">
    <section v-for="(section, index) in sections" :key="index" class="mb-12">
      <h2 class="mb-6 text-2xl font-bold">{{ section.title }}</h2>
      <div class="text-zinc-600 dark:text-zinc-400" v-html="marked(section.content)" />
    </section>
  </div>
</template>
