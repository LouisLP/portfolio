<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-full w-full">
    <!-- Content -->
    <div class="relative flex w-full flex-col">
      <main class="flex-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>
