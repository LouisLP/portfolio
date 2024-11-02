export interface ArticleMetadata {
  id: string
  title: string
  date: string
  dateISO: string
  path: string
  blurb: string
  readTime: string
  tags?: string[]
  category?: string
}

export interface Article extends ArticleMetadata {
  component: () => Promise<any>
}
