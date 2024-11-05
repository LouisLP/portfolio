import ubcLogo from '/assets/logos/education/ubc.png'
import ubcLogoDark from '/assets/logos/education/ubc-dark.png'
import sfuLogo from '/assets/logos/education/sfu.png'
import sfuIatLogo from '/assets/logos/education/sfu-iat.png'
import { computed } from 'vue'

const assetBaseUrl = computed(() => {
  if (import.meta.env.DEV) {
    // Use local path for development
    return ''
  } else {
    // Use GitHub Pages base URL for production
    return `${import.meta.env.BASE_URL}`
  }
})

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
    icon: `${assetBaseUrl.value}${ubcLogo}`,
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
