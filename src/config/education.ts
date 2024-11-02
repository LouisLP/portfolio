import ubcLogo from '@/assets/logos/education/ubc.png'
import sfuLogo from '@/assets/logos/education/sfu.png'
import sfuIatLogo from '@/assets/logos/education/sfu-iat.png'

interface Education {
  schoolKey: string
  programKey: string
  startYear: string
  endYear: string
  icon: string
}

export const education: Education[] = [
  {
    schoolKey: 'ubc',
    programKey: 'bachelorOfScienceComputerScience',
    startYear: '2022',
    endYear: '2023',
    icon: ubcLogo,
  },
  {
    schoolKey: 'sfu',
    programKey: 'computerScience',
    startYear: '2020',
    endYear: '2022',
    icon: sfuLogo,
  },
  {
    schoolKey: 'sfu',
    programKey: 'iat',
    startYear: '2015',
    endYear: '2017',
    icon: sfuIatLogo,
  },
]
