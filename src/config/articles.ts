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
  {
    id: 'past-life-esports',
    title: 'Past Life in Esports',
    date: 'July 15, 2023',
    dateISO: '2023-07-15',
    path: '/articles/past-life-esports',
    blurb: 'My history working for the competitive gaming industry.',
    readTime: '7 min read',
    tags: ['career', 'gaming'],
    category: 'Reflections',
    component: () => import('@/components/articles/PastLifeEsports.vue'),
  },
]
