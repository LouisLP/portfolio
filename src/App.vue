<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useWindowScroll } from '@vueuse/core';

const router = useRouter();
const { y } = useWindowScroll();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Navigation Header -->
    <header
      :class="[
        'fixed top-0 z-50 w-full transition-all duration-300',
        y > 50 ? 'bg-white/80 shadow-lg backdrop-blur-sm dark:bg-gray-900/80' : '',
      ]"
    >
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo/Home Link -->
          <router-link to="/" class="text-xl font-bold transition-colors hover:text-blue-600">
            Your Name
          </router-link>

          <!-- Navigation Links -->
          <div class="hidden items-center space-x-8 md:flex">
            <router-link
              v-for="route in router.getRoutes().filter((r) => r.name)"
              :key="route.path"
              :to="route.path"
              class="transition-colors hover:text-blue-600"
              active-class="text-blue-600"
            >
              {{ route.name }}
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
            @click="() => {}"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow pt-16">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="text-sm text-gray-600 dark:text-gray-400">
            © {{ new Date().getFullYear() }} Your Name. All rights reserved.
          </div>
          <div class="mt-4 flex space-x-6 md:mt-0">
            <!-- Social Links -->
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
