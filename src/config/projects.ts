interface Project {
  titleKey: string
  descriptionKey: string
  year: string
  url?: string
}

export const projects: Project[] = [
  {
    titleKey: 'directedStudies',
    descriptionKey: 'directedStudiesDescription',
    year: '2023',
    url: '/articles/directed-studies',
  },
  {
    titleKey: 'prairieLearnRanked',
    descriptionKey: 'prairieLearnRankedDescription',
    year: '2023',
    url: '/articles/prairielearn-ranked',
  },
]
