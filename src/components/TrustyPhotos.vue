<script setup lang="ts">
import japan1 from '@/assets/pics/japan_1.jpeg'
import pacificSpirit from '@/assets/pics/pacific_spirit.jpg'
import misfits from '@/assets/pics/misfits_black_bg.jpeg'
import konigssee from '@/assets/pics/konigssee.jpg'
import berlin1 from '@/assets/pics/berlin_1.jpg'

const photos = [
  {
    src: japan1,
    rotate: 'rotate-2',
  },
  {
    src: pacificSpirit,
    rotate: '-rotate-2',
  },
  {
    src: misfits,
    rotate: 'rotate-2',
  },
  {
    src: konigssee,
    rotate: 'rotate-2',
  },
  {
    src: berlin1,
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
