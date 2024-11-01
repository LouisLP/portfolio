import ubcLogo from '@/assets/logos/education/ubc.png'
import sfuLogo from '@/assets/logos/education/sfu.png'
import sfuIatLogo from '@/assets/logos/education/sfu-iat.png'

interface Education {
  school: string
  program: string
  startYear: string
  endYear: string
  icon: string
}

export const education: Education[] = [
  {
    school: 'University of British-Columbia',
    program: 'Bachelor of Science, Computer Science',
    startYear: '2022',
    endYear: '2023',
    icon: ubcLogo,
  },
  {
    school: 'Simon Fraser University',
    program: 'Computer Science',
    startYear: '2020',
    endYear: '2022',
    icon: sfuLogo,
  },
  {
    school: 'Simon Fraser University',
    program: 'Interactive Arts & Technology',
    startYear: '2015',
    endYear: '2017',
    icon: sfuIatLogo,
  },
]
