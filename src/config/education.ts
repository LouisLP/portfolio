const ubcLogo = new URL('@/assets/logos/education/ubc.png', import.meta.url).href
const ubcLogoDark = new URL('@/assets/logos/education/ubc-dark.png', import.meta.url).href
const sfuLogo = new URL('@/assets/logos/education/sfu.png', import.meta.url).href
const sfuIatLogo = new URL('@/assets/logos/education/sfu-iat.png', import.meta.url).href

interface Education {
  schoolKey: string
  programKey: string
  startYear: string
  endYear: string
  icon: string
  needsIconInvert?: boolean
}

export const education: Education[] = [
  {
    schoolKey: 'ubc',
    programKey: 'bachelorOfScienceComputerScience',
    startYear: '2022',
    endYear: '2023',
    icon: ubcLogo,
    needsIconInvert: true,
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

export const educationForPrint: Education[] = [
  {
    schoolKey: 'ubc',
    programKey: 'bachelorOfScienceComputerScience',
    startYear: '2022',
    endYear: '2023',
    icon: ubcLogoDark,
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
