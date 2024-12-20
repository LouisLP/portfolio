import type { Article } from '@/types/Article'

export const articles: Article[] = [
  {
    id: 'full-stack-jobreel',
    title: 'Full Stack at Jobreel',
    date: 'November 1, 2024',
    dateISO: '2024-11-01',
    path: '/articles/full-stack-jobreel',
    blurb: 'Experience as a full stack developer at Jobreel.',
    readTime: '4 min read',
    tags: ['career', 'full stack'],
    category: 'Reflections',
    component: () => import('@/components/articles/JobreelFullStack.vue'),
  },
  {
    id: 'directed-studies',
    title: 'Directed Studies & Publication',
    date: 'December 20, 2023',
    dateISO: '2023-12-20',
    path: '/articles/directed-studies',
    blurb: 'An overview of my directed studies project in computer science.',
    readTime: '2 min read',
    tags: ['academic', 'publication', 'research'],
    category: 'Research',
    component: () => import('@/components/articles/DirectedStudies.vue'),
  },
  {
    id: 'prairielearn-ranked',
    title: 'Capstone: PrairieLearn Ranked',
    date: 'August 17, 2023',
    dateISO: '2023-08-17',
    path: '/articles/prairielearn-ranked',
    blurb: 'Capstone project — gamifying an online quizzing platform.',
    readTime: '3 min read',
    tags: ['academic', 'gamification'],
    category: 'Projects',
    component: () => import('@/components/articles/PrairieLearnRanked.vue'),
  },
  {
    id: 'past-life-esports',
    title: 'Past Life in Esports',
    date: 'January 8, 2023',
    dateISO: '2023-01-08',
    path: '/articles/past-life-esports',
    blurb: 'My history working for the competitive gaming industry.',
    readTime: '5 min read',
    tags: ['career', 'gaming'],
    category: 'Reflections',
    component: () => import('@/components/articles/PastLifeEsports.vue'),
  },
]
