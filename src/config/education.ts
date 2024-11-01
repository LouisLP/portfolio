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
    icon: 'ubc.png',
  },
  {
    school: 'Simon Fraser University',
    program: 'Computer Science',
    startYear: '2020',
    endYear: '2022',
    icon: 'sfu.png',
  },
  {
    school: 'Simon Fraser University',
    program: 'Interactive Arts & Technology',
    startYear: '2015',
    endYear: '2017',
    icon: 'sfu-iat.png',
  },
]
