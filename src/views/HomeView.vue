<script setup lang="ts">
import { ref } from 'vue'

import ArticlePreview from '@/components/articles/ArticlePreview.vue'
import FullResume from '@/components/full-resume/FullResume.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import ShortResume from '@/components/resume/ShortResume.vue'
import Header from '@/components/TrustyHeader.vue'
import Photos from '@/components/TrustyPhotos.vue'
import { articles } from '@/config/articles'

const showFullResume = ref(false)
const isDevelopment = import.meta.env.MODE === 'development'

function openFullResume() {
  if (isDevelopment) {
    showFullResume.value = true
  }
}

function closeFullResume() {
  showFullResume.value = false
}
</script>

<template>
  <div class="flex h-full w-full">
    <!-- Layout -->
    <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
      </div>
    </div>
    <!-- Content -->
    <div class="relative flex w-full flex-col">
      <main class="flex-auto">
        <!-- Full Resume (on dev) -->
        <FullResume v-if="showFullResume" @close-full-resume="closeFullResume()" />
        <!-- Header -->
        <Header />
        <!-- Photos -->
        <Photos />
        <div class="mt-24 sm:px-8 md:mt-28">
          <div class="mx-auto w-full max-w-7xl lg:px-8">
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div
                  class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
                >
                  <!-- Resume -->
                  <div>
                    <LanguageSelector v-if="isDevelopment" />
                    <ShortResume @open-resume="openFullResume()" />
                  </div>
                  <!-- Articles -->
                  <section id="article-preview-section" class="space-y-14">
                    <h2 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                      Projects & Reflections
                    </h2>
                    <ArticlePreview
                      v-for="article in articles"
                      :key="article.id"
                      :article="article"
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
