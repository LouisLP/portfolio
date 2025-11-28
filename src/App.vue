<script setup lang="ts">
import { RouterView } from 'vue-router';

import TrustyNav from '@/components/TrustyNav.vue';
</script>

<template>
  <div class="flex h-full w-full">
    <!-- Content -->
    <div class="relative flex w-full flex-col">
      <main class="flex-auto">
        <TrustyNav />
        <RouterView />
      </main>
    </div>
  </div>
</template>
