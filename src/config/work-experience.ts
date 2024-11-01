import jobreelLogo from '@/assets/logos/work/jobreel.png'
import misfitsLogo from '@/assets/logos/work/misfits.png'

interface Job {
  company: string
  role: string
  startYear: string
  endYear: string
  icon: string
}

export const jobs: Job[] = [
  {
    company: 'Jobreel',
    role: 'Full Stack Engineer',
    startYear: '2024',
    endYear: 'Present',
    icon: jobreelLogo,
  },
  {
    company: 'Misfits Gaming Group',
    role: 'Senior Video Editor & Motion Designer',
    startYear: '2018',
    endYear: '2021',
    icon: misfitsLogo,
  },
  // Add other jobs here...
]
