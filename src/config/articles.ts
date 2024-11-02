import type { Article } from '@/types/Article'

export const articles: Article[] = [
  {
    id: 'directed-studies',
    title: 'Directed Studies Project',
    date: 'August 17, 2023',
    dateISO: '2023-08-17',
    path: '/articles/directed-studies',
    blurb: 'An overview of my directed studies project in computer science.',
    readTime: '5 min read',
    tags: ['academic', 'research'],
    category: 'Projects',
    component: () => import('@/components/articles/DirectedStudies.vue'),
  },
  //   {
  //     id: 'prairie-learn',
  //     title: 'PrairieLearn Ranked',
  //     date: 'July 15, 2023',
  //     dateISO: '2023-07-15',
  //     path: '/articles/prairie-learn',
  //     blurb: 'Exploring the PrairieLearn platform and its ranking system.',
  //     readTime: '8 min read',
  //     tags: ['education', 'technology'],
  //     category: 'Reviews',
  //     component: () => import('../articles/PrairieLearnRanked.vue'),
  //   },
]
