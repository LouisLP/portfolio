<script setup lang="ts">
const photos = [
  {
    src: '/assets/pics/photo1.jpg',
    rotate: 'rotate-2',
  },
  {
    src: '/assets/pics/photo2.jpg',
    rotate: '-rotate-2',
  },
  {
    src: '/assets/pics/photo3.jpg',
    rotate: 'rotate-2',
  },
  {
    src: '/assets/pics/photo4.jpg',
    rotate: 'rotate-2',
  },
  {
    src: '/assets/pics/photo5.jpg',
    rotate: '-rotate-2',
  },
]
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
        <img
          alt=""
          loading="lazy"
          width="1000"
          height="1500"
          decoding="async"
          class="absolute inset-0 h-full w-full object-cover"
          :src="photo.src"
        />
      </div>
    </div>
  </div>
</template>
