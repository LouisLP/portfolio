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
    icon: 'jobreel.png',
  },
  {
    company: 'Misfits Gaming Group',
    role: 'Senior Video Editor & Motion Designer',
    startYear: '2018',
    endYear: '2021',
    icon: 'misfits.png',
  },
  // Add other jobs here...
]
