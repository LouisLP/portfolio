import japan1 from '@/assets/pics/japan_1.jpeg'
import pacificSpirit from '@/assets/pics/pacific_spirit.jpg'
import misfits from '@/assets/pics/misfits_black_bg.jpeg'
import konigssee from '@/assets/pics/konigssee.jpg'
import berlin1 from '@/assets/pics/berlin_1.jpg'

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
