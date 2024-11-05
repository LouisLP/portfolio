const japan1 = new URL('@/assets/pics/japan_1.jpeg', import.meta.url).href
const pacificSpirit = new URL('@/assets/pics/pacific_spirit.jpg', import.meta.url).href
const misfits = new URL('@/assets/pics/misfits_black_bg.jpeg', import.meta.url).href
const konigssee = new URL('@/assets/pics/konigssee.jpg', import.meta.url).href
const berlin1 = new URL('@/assets/pics/berlin_1.jpg', import.meta.url).href

interface Photo {
  src: string
  rotate: string
}

export const photos: Photo[] = [
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
