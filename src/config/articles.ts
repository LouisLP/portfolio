import type { Article } from '@/types/Article'

// Article prose lives in src/content/articles/<id>.md — to add an article,
// drop a markdown file there and add its metadata entry below.
const articleContent = import.meta.glob('@/content/articles/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

export const loadArticleContent = (id: string): (() => Promise<string>) | undefined => {
  const key = Object.keys(articleContent).find((path) => path.endsWith(`/${id}.md`))
  return key ? articleContent[key] : undefined
}

const articleList: Article[] = [
  {
    id: 'agile-robots',
    title: 'Frontend at Agile Robots',
    date: 'February 24, 2026',
    dateISO: '2026-02-24',
    path: '/articles/agile-robots',
    blurb: 'Experience as a frontend-focused developer at Agile Robots.',
    readTime: '4 min read',
    tags: ['career', 'frontend', 'design'],
    category: 'Reflections',
  },
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
  },
]

// Newest first, regardless of the order entries are added above
export const articles: Article[] = [...articleList].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO)
)
