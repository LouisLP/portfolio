<script setup lang="ts">
import { photos } from '@/config/photos'
</script>

<template>
  <div class="mt-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
        :class="photo.rotate"
      >
        <!-- Blur placeholder -->
        <img
          v-if="photo.blur"
          :src="photo.blur"
          class="absolute inset-0 h-full w-full object-cover blur-lg"
          aria-hidden="true"
        />

        <picture>
          <source v-if="photo.webp" :srcset="photo.webp" type="image/webp" />
          <img
            :alt="photo.alt || ''"
            loading="lazy"
            decoding="async"
            :srcset="photo.srcset"
            :src="photo.src"
            sizes="(min-width: 640px) 18rem, 11rem"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      </div>
    </div>
  </div>
</template>
