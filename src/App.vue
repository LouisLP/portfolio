<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-full w-full">
    <!-- Layout Background -->
    <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div
          class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
        ></div>
      </div>
    </div>
    <!-- Content -->
    <div class="relative flex w-full flex-col">
      <main class="flex-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>
