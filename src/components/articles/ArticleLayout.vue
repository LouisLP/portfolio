<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoReturnUpBack } from 'oh-vue-icons/icons/io'
import { articles } from '@/config/articles'
import type { Article } from '@/types/Article'

addIcons(IoReturnUpBack)

const route = useRoute()

const article = computed<Article | undefined>(() =>
  articles.find((article: Article) => article.path === `/articles/${route.params.id}`)
)

const currentArticleComponent = computed(() =>
  article.value?.component ? article.value.component() : null
)
</script>

<template>
  <div class="flex h-full w-full">
    <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
      </div>
    </div>

    <div class="relative flex w-full flex-col">
      <main class="flex-auto">
        <div class="mt-16 sm:px-8 md:mt-32">
          <div class="mx-auto w-full max-w-7xl lg:px-8">
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="xl:relative">
                  <div class="mx-auto max-w-2xl">
                    <RouterLink
                      to="/"
                      id="back-button-to-home"
                      class="group inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50"
                    >
                      <span class="dark:text-zinc-400">
                        <OhVueIcon
                          name="io-return-up-back"
                          class="mr-1 size-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                        />
                        Back
                      </span>
                    </RouterLink>

                    <article v-if="article">
                      <header class="flex flex-col">
                        <h1
                          class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
                        >
                          {{ article.title }}
                        </h1>
                        <div class="flex items-center gap-4">
                          <time
                            :datetime="article.dateISO"
                            class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                          >
                            <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                            <span class="ml-3">{{ article.date }}</span>
                          </time>
                          <span
                            v-if="article.category"
                            class="text-base text-zinc-400 dark:text-zinc-500"
                          >
                            {{ article.category }}
                          </span>
                        </div>
                      </header>

                      <div class="prose dark:prose-invert mb-28 mt-8">
                        <Suspense>
                          <component :is="currentArticleComponent" />
                          <template #fallback>
                            <div class="flex items-center justify-center py-10">
                              <span class="text-zinc-500">Loading article...</span>
                            </div>
                          </template>
                        </Suspense>
                      </div>
                    </article>

                    <div v-else class="py-10 text-center">
                      <h2 class="text-xl text-zinc-800 dark:text-zinc-100">Article not found</h2>
                      <RouterLink to="/" class="mt-4 text-teal-500 hover:text-teal-600">
                        Return to home
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
