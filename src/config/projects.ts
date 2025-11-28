interface Project {
  titleKey: string
  descriptionKey: string
  year: string
  url?: string
}

export const projects: Project[] = [
  {
    titleKey: 'agileDataHub',
    descriptionKey: 'agileDataHubDescription',
    year: '2025',
    // url: '/articles/agile-data-hub',
  },
  {
    titleKey: 'prairieLearn',
    descriptionKey: 'prairieLearnDescription',
    year: '2023',
    url: '/articles/directed-studies',
  },

]
